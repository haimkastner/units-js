import { UnitTypeDefinition, UnitDefinition, Prefix } from "./models/units-definition";
import { generateUnitClass } from './unit-generator';
import { Project } from "ts-morph";
import { UnitProperties } from "./models/units-properties";
import { pascalToCamelCase } from './utils';
/**
 * The factor between unit and his prefix.
 */
const prefixesFactor: { [key in Prefix]: number } = {
    Exa: 1e18,
    Peta: 1e15,
    Tera: 1e12,
    Giga: 1e9,
    Mega: 1e6,
    Kilo: 1e3,
    Hecto: 1e2,
    Deca: 1e1,
    Deci: 1e-1,
    Centi: 1e-2,
    Milli: 1e-3,
    Micro: 1e-6,
    Nano: 1e-9,
    Pico: 1e-12,
    Femto: 1e-15,
};

const prefixesAbbreviation: { [key in Prefix]: string } = {
    Exa: 'E',
    Peta: 'P',
    Tera: 'T',
    Giga: 'G',
    Mega: 'M',
    Kilo: 'k',
    Hecto: 'h',
    Deca: 'da',
    Deci: 'd',
    Centi: 'c',
    Milli: 'm',
    Micro: 'μ',
    Nano: 'n',
    Pico: 'p',
    Femto: 'f'
};

/**
 * Generate units from the unit prefixes.
 * For example for if the unit 'Degree' has 'Mili' and 'Micro' prefixes, generate 'Milidegrees' and 'Microdegrees' units. 
 * @param unit The unit to generate from his prefixes
 */
function getUnitPrefixes(unit: UnitDefinition): UnitDefinition[] {
    const unitPrefixes: UnitDefinition[] = [];

    // If there is no prefixes abort.
    if (!unit.Prefixes) {
        return unitPrefixes;
    }

    for (const prefix of unit.Prefixes) {

        // If there is no factor for the current prefix ignore it.
        if (!prefixesFactor[prefix]) {
            console.warn(`There is no factor for the '${prefix}' ${unit.PluralName} prefix in the 'prefixesFactor' map`);
            continue;
        }

        // Build the prefix formula based on the original unit formula.
        let fromUnitPrefixToBaseFormula = `(${unit.FromUnitToBaseFunc}) * ${prefixesFactor[prefix]}`;
        let fromBaseToUnitPrefixFormula = `(${unit.FromBaseToUnitFunc}) / ${prefixesFactor[prefix]}`;

        // Create the new unit and push it to the units collection.
        unitPrefixes.push({
            Deprecated: unit.Deprecated,
            FromUnitToBaseFunc: fromUnitPrefixToBaseFormula,
            FromBaseToUnitFunc: fromBaseToUnitPrefixFormula,
            SingularName: `${prefix}${pascalToCamelCase(unit.SingularName)}`,
            PluralName: `${prefix}${pascalToCamelCase(unit.PluralName)}`,
            Localization: [{
                Culture: 'en-US',
                Abbreviations: unit.Localization?.find((l => l.Culture === 'en-US'))?.Abbreviations?.map(a => `${prefixesAbbreviation[prefix]}${a}`) || [''],
            }],
        })
    }

    return unitPrefixes;
}

/**
 * Generate units from the unit unis-prefixes.
 * For example for the unit 'Angle' the units 'Degrees' and 'Radians' has 'Mili' prefix so generate 'Milidegrees' and 'Miliradians' units. 
 * @param units The units collection
 * @returns The generated units.
 */
function extantPrefixesUnits(units: UnitDefinition[]): UnitDefinition[] {
    const prefixesUnits: UnitDefinition[] = [];

    for (const unit of units) {
        prefixesUnits.push(...getUnitPrefixes(unit));
    }
    return prefixesUnits;
}

/**
 * Generate a TS class for each unit in given units.
 * @param project The generating project (of ts-morph lib) object.
 * @param unitsDestinationDirectory The generate file directory destination.
 * @param rawUnitsDefinitions The units definition from the definition JSON files
 */
export function generateUnitsFromUnitsDefinitions(project: Project, unitsDestinationDirectory: string, rawUnitsDefinitions: UnitTypeDefinition[]) {

    for (const unitDefinition of rawUnitsDefinitions) {

        // Filter out deprecated definitions.
        unitDefinition.Units = unitDefinition.Units.filter(unit => !unit.Deprecated);

        // Add the units prefixes (like MiliXXX or KiloXXX) as unit in the unit units collection.
        unitDefinition.Units.push(...extantPrefixesUnits(unitDefinition.Units));

        // Generate the TS file to the unit
        generateUnitClass(project, unitsDestinationDirectory, {
            unitName: unitDefinition.Name,
            baseUnitSingularName: unitDefinition.BaseUnit,
            JSDoc: unitDefinition.XmlDoc || unitDefinition.XmlDocSummary || '',
            units: unitDefinition.Units.map((unit: UnitDefinition): UnitProperties => ({
                pluralName: unit.PluralName,
                singularName: unit.SingularName,
                unitToBaseFormula: unit.FromBaseToUnitFunc,
                baseToUnitFormula: unit.FromUnitToBaseFunc,
                JSDoc: unit.XmlDocSummary,
                Abbreviation: unit.Localization.find(Abbre => Abbre.Culture === 'en-US')?.Abbreviations[0] as string,
            }))
        });
    }
}