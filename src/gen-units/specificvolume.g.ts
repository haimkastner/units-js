import { BaseUnit } from "../base-unit";

/** API DTO represents a SpecificVolume */
export interface SpecificVolumeDto {
    /** The value of the SpecificVolume */
    value: number;
    /**  The specific unit that the SpecificVolume value is representing */
    unit: SpecificVolumeUnits;
}

/** SpecificVolumeUnits enumeration */
export enum SpecificVolumeUnits {
    /** */
    CubicMetersPerKilogram = "CubicMeterPerKilogram",
    /** */
    CubicFeetPerPound = "CubicFootPerPound",
    /** */
    MillicubicMetersPerKilogram = "MillicubicMeterPerKilogram"
}

/** In thermodynamics, the specific volume of a substance is the ratio of the substance's volume to its mass. It is the reciprocal of density and an intrinsic property of matter as well. */
export class SpecificVolume extends BaseUnit {
    private value: number;
    private cubicmetersperkilogramLazy: number | null = null;
    private cubicfeetperpoundLazy: number | null = null;
    private millicubicmetersperkilogramLazy: number | null = null;

    /**
     * Create a new SpecificVolume.
     * @param value The value.
     * @param fromUnit The ‘SpecificVolume’ unit to create from.
     * The default unit is CubicMetersPerKilogram
     */
    public constructor(value: number, fromUnit: SpecificVolumeUnits = SpecificVolumeUnits.CubicMetersPerKilogram) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of SpecificVolume is CubicMetersPerKilogram.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get CubicMetersPerKilogram(): number {
        if(this.cubicmetersperkilogramLazy !== null){
            return this.cubicmetersperkilogramLazy;
        }
        return this.cubicmetersperkilogramLazy = this.convertFromBase(SpecificVolumeUnits.CubicMetersPerKilogram);
    }

    /** */
    public get CubicFeetPerPound(): number {
        if(this.cubicfeetperpoundLazy !== null){
            return this.cubicfeetperpoundLazy;
        }
        return this.cubicfeetperpoundLazy = this.convertFromBase(SpecificVolumeUnits.CubicFeetPerPound);
    }

    /** */
    public get MillicubicMetersPerKilogram(): number {
        if(this.millicubicmetersperkilogramLazy !== null){
            return this.millicubicmetersperkilogramLazy;
        }
        return this.millicubicmetersperkilogramLazy = this.convertFromBase(SpecificVolumeUnits.MillicubicMetersPerKilogram);
    }

    /**
     * Create a new SpecificVolume instance from a CubicMetersPerKilogram
     *
     * @param value The unit as CubicMetersPerKilogram to create a new SpecificVolume from.
     * @returns The new SpecificVolume instance.
     */
    public static FromCubicMetersPerKilogram(value: number): SpecificVolume {
        return new SpecificVolume(value, SpecificVolumeUnits.CubicMetersPerKilogram);
    }

    /**
     * Create a new SpecificVolume instance from a CubicFeetPerPound
     *
     * @param value The unit as CubicFeetPerPound to create a new SpecificVolume from.
     * @returns The new SpecificVolume instance.
     */
    public static FromCubicFeetPerPound(value: number): SpecificVolume {
        return new SpecificVolume(value, SpecificVolumeUnits.CubicFeetPerPound);
    }

    /**
     * Create a new SpecificVolume instance from a MillicubicMetersPerKilogram
     *
     * @param value The unit as MillicubicMetersPerKilogram to create a new SpecificVolume from.
     * @returns The new SpecificVolume instance.
     */
    public static FromMillicubicMetersPerKilogram(value: number): SpecificVolume {
        return new SpecificVolume(value, SpecificVolumeUnits.MillicubicMetersPerKilogram);
    }

    /**
     * Create API DTO represent a SpecificVolume unit.
     * @param holdInUnit The specific SpecificVolume unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: SpecificVolumeUnits = SpecificVolumeUnits.CubicMetersPerKilogram): SpecificVolumeDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a SpecificVolume unit from an API DTO representation.
     * @param dtoSpecificVolume The SpecificVolume API DTO representation
     */
    public static FromDto(dtoSpecificVolume: SpecificVolumeDto): SpecificVolume {
        return new SpecificVolume(dtoSpecificVolume.value, dtoSpecificVolume.unit);
    }

    /**
     * Convert SpecificVolume to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: SpecificVolumeUnits): number {
        switch (toUnit) {
            case SpecificVolumeUnits.CubicMetersPerKilogram: return this.CubicMetersPerKilogram;
            case SpecificVolumeUnits.CubicFeetPerPound: return this.CubicFeetPerPound;
            case SpecificVolumeUnits.MillicubicMetersPerKilogram: return this.MillicubicMetersPerKilogram;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: SpecificVolumeUnits): number {
        switch (toUnit) {
                
            case SpecificVolumeUnits.CubicMetersPerKilogram:
                return this.value;
            case SpecificVolumeUnits.CubicFeetPerPound:
                return this.value * 16.01846353;
            case SpecificVolumeUnits.MillicubicMetersPerKilogram:
                return (this.value) / 0.001;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: SpecificVolumeUnits): number {
        switch (fromUnit) {
                
            case SpecificVolumeUnits.CubicMetersPerKilogram:
                return value;
            case SpecificVolumeUnits.CubicFeetPerPound:
                return value / 16.01846353;
            case SpecificVolumeUnits.MillicubicMetersPerKilogram:
                return (value) * 0.001;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the SpecificVolume to string.
     * Note! the default format for SpecificVolume is CubicMetersPerKilogram.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the SpecificVolume.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the SpecificVolume.
     */
    public toString(unit: SpecificVolumeUnits = SpecificVolumeUnits.CubicMetersPerKilogram, fractionalDigits?: number): string {

        switch (unit) {
            
            case SpecificVolumeUnits.CubicMetersPerKilogram:
                return super.truncateFractionDigits(this.CubicMetersPerKilogram, fractionalDigits) + ` m³/kg`;
            case SpecificVolumeUnits.CubicFeetPerPound:
                return super.truncateFractionDigits(this.CubicFeetPerPound, fractionalDigits) + ` ft³/lb`;
            case SpecificVolumeUnits.MillicubicMetersPerKilogram:
                return super.truncateFractionDigits(this.MillicubicMetersPerKilogram, fractionalDigits) + ` mm³/kg`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get SpecificVolume unit abbreviation.
     * Note! the default abbreviation for SpecificVolume is CubicMetersPerKilogram.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the SpecificVolume.
     * @returns The abbreviation string of SpecificVolume.
     */
    public getUnitAbbreviation(unitAbbreviation: SpecificVolumeUnits = SpecificVolumeUnits.CubicMetersPerKilogram): string {

        switch (unitAbbreviation) {
            
            case SpecificVolumeUnits.CubicMetersPerKilogram:
                return `m³/kg`;
            case SpecificVolumeUnits.CubicFeetPerPound:
                return `ft³/lb`;
            case SpecificVolumeUnits.MillicubicMetersPerKilogram:
                return `mm³/kg`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given SpecificVolume are equals to the current SpecificVolume.
     * @param specificVolume The other SpecificVolume.
     * @returns True if the given SpecificVolume are equal to the current SpecificVolume.
     */
    public equals(specificVolume: SpecificVolume): boolean {
        return super.internalEquals(this.value, specificVolume.BaseValue);
    }

    /**
     * Compare the given SpecificVolume against the current SpecificVolume.
     * @param specificVolume The other SpecificVolume.
     * @returns 0 if they are equal, -1 if the current SpecificVolume is less then other, 1 if the current SpecificVolume is greater then other.
     */
    public compareTo(specificVolume: SpecificVolume): number {
        return super.internalCompareTo(this.value, specificVolume.BaseValue);
    }

    /**
     * Add the given SpecificVolume with the current SpecificVolume.
     * @param specificVolume The other SpecificVolume.
     * @returns A new SpecificVolume instance with the results.
     */
    public add(specificVolume: SpecificVolume): SpecificVolume {
        return new SpecificVolume(super.internalAdd(this.value, specificVolume.BaseValue))
    }

    /**
     * Subtract the given SpecificVolume with the current SpecificVolume.
     * @param specificVolume The other SpecificVolume.
     * @returns A new SpecificVolume instance with the results.
     */
    public subtract(specificVolume: SpecificVolume): SpecificVolume {
        return new SpecificVolume(super.internalSubtract(this.value, specificVolume.BaseValue))
    }

    /**
     * Multiply the given SpecificVolume with the current SpecificVolume.
     * @param specificVolume The other SpecificVolume.
     * @returns A new SpecificVolume instance with the results.
     */
    public multiply(specificVolume: SpecificVolume): SpecificVolume {
        return new SpecificVolume(super.internalMultiply(this.value, specificVolume.BaseValue))
    }

    /**
     * Divide the given SpecificVolume with the current SpecificVolume.
     * @param specificVolume The other SpecificVolume.
     * @returns A new SpecificVolume instance with the results.
     */
    public divide(specificVolume: SpecificVolume): SpecificVolume {
        return new SpecificVolume(super.internalDivide(this.value, specificVolume.BaseValue))
    }

    /**
     * Modulo the given SpecificVolume with the current SpecificVolume.
     * @param specificVolume The other SpecificVolume.
     * @returns A new SpecificVolume instance with the results.
     */
    public modulo(specificVolume: SpecificVolume): SpecificVolume {
        return new SpecificVolume(super.internalModulo(this.value, specificVolume.BaseValue))
    }

    /**
     * Pow the given SpecificVolume with the current SpecificVolume.
     * @param specificVolume The other SpecificVolume.
     * @returns A new SpecificVolume instance with the results.
     */
    public pow(specificVolume: SpecificVolume): SpecificVolume {
        return new SpecificVolume(super.internalPow(this.value, specificVolume.BaseValue))
    }
}
