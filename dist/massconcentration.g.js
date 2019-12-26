"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MassConcentrationUnits;
(function (MassConcentrationUnits) {
    MassConcentrationUnits[MassConcentrationUnits["GramsPerCubicMillimeter"] = 0] = "GramsPerCubicMillimeter";
    MassConcentrationUnits[MassConcentrationUnits["GramsPerCubicCentimeter"] = 1] = "GramsPerCubicCentimeter";
    MassConcentrationUnits[MassConcentrationUnits["GramsPerCubicMeter"] = 2] = "GramsPerCubicMeter";
    MassConcentrationUnits[MassConcentrationUnits["GramsPerMilliliter"] = 3] = "GramsPerMilliliter";
    MassConcentrationUnits[MassConcentrationUnits["GramsPerDeciliter"] = 4] = "GramsPerDeciliter";
    MassConcentrationUnits[MassConcentrationUnits["GramsPerLiter"] = 5] = "GramsPerLiter";
    MassConcentrationUnits[MassConcentrationUnits["TonnesPerCubicMillimeter"] = 6] = "TonnesPerCubicMillimeter";
    MassConcentrationUnits[MassConcentrationUnits["TonnesPerCubicCentimeter"] = 7] = "TonnesPerCubicCentimeter";
    MassConcentrationUnits[MassConcentrationUnits["TonnesPerCubicMeter"] = 8] = "TonnesPerCubicMeter";
    MassConcentrationUnits[MassConcentrationUnits["PoundsPerCubicInch"] = 9] = "PoundsPerCubicInch";
    MassConcentrationUnits[MassConcentrationUnits["PoundsPerCubicFoot"] = 10] = "PoundsPerCubicFoot";
    MassConcentrationUnits[MassConcentrationUnits["SlugsPerCubicFoot"] = 11] = "SlugsPerCubicFoot";
    MassConcentrationUnits[MassConcentrationUnits["PoundsPerUSGallon"] = 12] = "PoundsPerUSGallon";
    MassConcentrationUnits[MassConcentrationUnits["PoundsPerImperialGallon"] = 13] = "PoundsPerImperialGallon";
    MassConcentrationUnits[MassConcentrationUnits["Kilogramspercubicmillimeter"] = 14] = "Kilogramspercubicmillimeter";
    MassConcentrationUnits[MassConcentrationUnits["Kilogramspercubiccentimeter"] = 15] = "Kilogramspercubiccentimeter";
    MassConcentrationUnits[MassConcentrationUnits["Kilogramspercubicmeter"] = 16] = "Kilogramspercubicmeter";
    MassConcentrationUnits[MassConcentrationUnits["Microgramspercubicmeter"] = 17] = "Microgramspercubicmeter";
    MassConcentrationUnits[MassConcentrationUnits["Picogramspermilliliter"] = 18] = "Picogramspermilliliter";
    MassConcentrationUnits[MassConcentrationUnits["Nanogramspermilliliter"] = 19] = "Nanogramspermilliliter";
    MassConcentrationUnits[MassConcentrationUnits["Microgramspermilliliter"] = 20] = "Microgramspermilliliter";
    MassConcentrationUnits[MassConcentrationUnits["Centigramspermilliliter"] = 21] = "Centigramspermilliliter";
    MassConcentrationUnits[MassConcentrationUnits["Decigramspermilliliter"] = 22] = "Decigramspermilliliter";
    MassConcentrationUnits[MassConcentrationUnits["Picogramsperdeciliter"] = 23] = "Picogramsperdeciliter";
    MassConcentrationUnits[MassConcentrationUnits["Nanogramsperdeciliter"] = 24] = "Nanogramsperdeciliter";
    MassConcentrationUnits[MassConcentrationUnits["Microgramsperdeciliter"] = 25] = "Microgramsperdeciliter";
    MassConcentrationUnits[MassConcentrationUnits["Centigramsperdeciliter"] = 26] = "Centigramsperdeciliter";
    MassConcentrationUnits[MassConcentrationUnits["Decigramsperdeciliter"] = 27] = "Decigramsperdeciliter";
    MassConcentrationUnits[MassConcentrationUnits["Picogramsperliter"] = 28] = "Picogramsperliter";
    MassConcentrationUnits[MassConcentrationUnits["Nanogramsperliter"] = 29] = "Nanogramsperliter";
    MassConcentrationUnits[MassConcentrationUnits["Microgramsperliter"] = 30] = "Microgramsperliter";
    MassConcentrationUnits[MassConcentrationUnits["Centigramsperliter"] = 31] = "Centigramsperliter";
    MassConcentrationUnits[MassConcentrationUnits["Decigramsperliter"] = 32] = "Decigramsperliter";
    MassConcentrationUnits[MassConcentrationUnits["Kilogramsperliter"] = 33] = "Kilogramsperliter";
    MassConcentrationUnits[MassConcentrationUnits["Kilopoundspercubicinch"] = 34] = "Kilopoundspercubicinch";
    MassConcentrationUnits[MassConcentrationUnits["Kilopoundspercubicfoot"] = 35] = "Kilopoundspercubicfoot";
})(MassConcentrationUnits = exports.MassConcentrationUnits || (exports.MassConcentrationUnits = {}));
class MassConcentration {
    constructor(value, fromUnit) {
        this.gramspercubicmillimeterLazy = null;
        this.gramspercubiccentimeterLazy = null;
        this.gramspercubicmeterLazy = null;
        this.gramspermilliliterLazy = null;
        this.gramsperdeciliterLazy = null;
        this.gramsperliterLazy = null;
        this.tonnespercubicmillimeterLazy = null;
        this.tonnespercubiccentimeterLazy = null;
        this.tonnespercubicmeterLazy = null;
        this.poundspercubicinchLazy = null;
        this.poundspercubicfootLazy = null;
        this.slugspercubicfootLazy = null;
        this.poundsperusgallonLazy = null;
        this.poundsperimperialgallonLazy = null;
        this.kilogramspercubicmillimeterLazy = null;
        this.kilogramspercubiccentimeterLazy = null;
        this.kilogramspercubicmeterLazy = null;
        this.microgramspercubicmeterLazy = null;
        this.picogramspermilliliterLazy = null;
        this.nanogramspermilliliterLazy = null;
        this.microgramspermilliliterLazy = null;
        this.centigramspermilliliterLazy = null;
        this.decigramspermilliliterLazy = null;
        this.picogramsperdeciliterLazy = null;
        this.nanogramsperdeciliterLazy = null;
        this.microgramsperdeciliterLazy = null;
        this.centigramsperdeciliterLazy = null;
        this.decigramsperdeciliterLazy = null;
        this.picogramsperliterLazy = null;
        this.nanogramsperliterLazy = null;
        this.microgramsperliterLazy = null;
        this.centigramsperliterLazy = null;
        this.decigramsperliterLazy = null;
        this.kilogramsperliterLazy = null;
        this.kilopoundspercubicinchLazy = null;
        this.kilopoundspercubicfootLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get GramsPerCubicMillimeter() {
        if (this.gramspercubicmillimeterLazy !== null) {
            return this.gramspercubicmillimeterLazy;
        }
        return this.gramspercubicmillimeterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerCubicMillimeter);
    }
    get GramsPerCubicCentimeter() {
        if (this.gramspercubiccentimeterLazy !== null) {
            return this.gramspercubiccentimeterLazy;
        }
        return this.gramspercubiccentimeterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerCubicCentimeter);
    }
    get GramsPerCubicMeter() {
        if (this.gramspercubicmeterLazy !== null) {
            return this.gramspercubicmeterLazy;
        }
        return this.gramspercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerCubicMeter);
    }
    get GramsPerMilliliter() {
        if (this.gramspermilliliterLazy !== null) {
            return this.gramspermilliliterLazy;
        }
        return this.gramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerMilliliter);
    }
    get GramsPerDeciliter() {
        if (this.gramsperdeciliterLazy !== null) {
            return this.gramsperdeciliterLazy;
        }
        return this.gramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerDeciliter);
    }
    get GramsPerLiter() {
        if (this.gramsperliterLazy !== null) {
            return this.gramsperliterLazy;
        }
        return this.gramsperliterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerLiter);
    }
    get TonnesPerCubicMillimeter() {
        if (this.tonnespercubicmillimeterLazy !== null) {
            return this.tonnespercubicmillimeterLazy;
        }
        return this.tonnespercubicmillimeterLazy = this.convertFromBase(MassConcentrationUnits.TonnesPerCubicMillimeter);
    }
    get TonnesPerCubicCentimeter() {
        if (this.tonnespercubiccentimeterLazy !== null) {
            return this.tonnespercubiccentimeterLazy;
        }
        return this.tonnespercubiccentimeterLazy = this.convertFromBase(MassConcentrationUnits.TonnesPerCubicCentimeter);
    }
    get TonnesPerCubicMeter() {
        if (this.tonnespercubicmeterLazy !== null) {
            return this.tonnespercubicmeterLazy;
        }
        return this.tonnespercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.TonnesPerCubicMeter);
    }
    get PoundsPerCubicInch() {
        if (this.poundspercubicinchLazy !== null) {
            return this.poundspercubicinchLazy;
        }
        return this.poundspercubicinchLazy = this.convertFromBase(MassConcentrationUnits.PoundsPerCubicInch);
    }
    get PoundsPerCubicFoot() {
        if (this.poundspercubicfootLazy !== null) {
            return this.poundspercubicfootLazy;
        }
        return this.poundspercubicfootLazy = this.convertFromBase(MassConcentrationUnits.PoundsPerCubicFoot);
    }
    get SlugsPerCubicFoot() {
        if (this.slugspercubicfootLazy !== null) {
            return this.slugspercubicfootLazy;
        }
        return this.slugspercubicfootLazy = this.convertFromBase(MassConcentrationUnits.SlugsPerCubicFoot);
    }
    get PoundsPerUSGallon() {
        if (this.poundsperusgallonLazy !== null) {
            return this.poundsperusgallonLazy;
        }
        return this.poundsperusgallonLazy = this.convertFromBase(MassConcentrationUnits.PoundsPerUSGallon);
    }
    get PoundsPerImperialGallon() {
        if (this.poundsperimperialgallonLazy !== null) {
            return this.poundsperimperialgallonLazy;
        }
        return this.poundsperimperialgallonLazy = this.convertFromBase(MassConcentrationUnits.PoundsPerImperialGallon);
    }
    get Kilogramspercubicmillimeter() {
        if (this.kilogramspercubicmillimeterLazy !== null) {
            return this.kilogramspercubicmillimeterLazy;
        }
        return this.kilogramspercubicmillimeterLazy = this.convertFromBase(MassConcentrationUnits.Kilogramspercubicmillimeter);
    }
    get Kilogramspercubiccentimeter() {
        if (this.kilogramspercubiccentimeterLazy !== null) {
            return this.kilogramspercubiccentimeterLazy;
        }
        return this.kilogramspercubiccentimeterLazy = this.convertFromBase(MassConcentrationUnits.Kilogramspercubiccentimeter);
    }
    get Kilogramspercubicmeter() {
        if (this.kilogramspercubicmeterLazy !== null) {
            return this.kilogramspercubicmeterLazy;
        }
        return this.kilogramspercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.Kilogramspercubicmeter);
    }
    get Microgramspercubicmeter() {
        if (this.microgramspercubicmeterLazy !== null) {
            return this.microgramspercubicmeterLazy;
        }
        return this.microgramspercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.Microgramspercubicmeter);
    }
    get Picogramspermilliliter() {
        if (this.picogramspermilliliterLazy !== null) {
            return this.picogramspermilliliterLazy;
        }
        return this.picogramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.Picogramspermilliliter);
    }
    get Nanogramspermilliliter() {
        if (this.nanogramspermilliliterLazy !== null) {
            return this.nanogramspermilliliterLazy;
        }
        return this.nanogramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.Nanogramspermilliliter);
    }
    get Microgramspermilliliter() {
        if (this.microgramspermilliliterLazy !== null) {
            return this.microgramspermilliliterLazy;
        }
        return this.microgramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.Microgramspermilliliter);
    }
    get Centigramspermilliliter() {
        if (this.centigramspermilliliterLazy !== null) {
            return this.centigramspermilliliterLazy;
        }
        return this.centigramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.Centigramspermilliliter);
    }
    get Decigramspermilliliter() {
        if (this.decigramspermilliliterLazy !== null) {
            return this.decigramspermilliliterLazy;
        }
        return this.decigramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.Decigramspermilliliter);
    }
    get Picogramsperdeciliter() {
        if (this.picogramsperdeciliterLazy !== null) {
            return this.picogramsperdeciliterLazy;
        }
        return this.picogramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.Picogramsperdeciliter);
    }
    get Nanogramsperdeciliter() {
        if (this.nanogramsperdeciliterLazy !== null) {
            return this.nanogramsperdeciliterLazy;
        }
        return this.nanogramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.Nanogramsperdeciliter);
    }
    get Microgramsperdeciliter() {
        if (this.microgramsperdeciliterLazy !== null) {
            return this.microgramsperdeciliterLazy;
        }
        return this.microgramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.Microgramsperdeciliter);
    }
    get Centigramsperdeciliter() {
        if (this.centigramsperdeciliterLazy !== null) {
            return this.centigramsperdeciliterLazy;
        }
        return this.centigramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.Centigramsperdeciliter);
    }
    get Decigramsperdeciliter() {
        if (this.decigramsperdeciliterLazy !== null) {
            return this.decigramsperdeciliterLazy;
        }
        return this.decigramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.Decigramsperdeciliter);
    }
    get Picogramsperliter() {
        if (this.picogramsperliterLazy !== null) {
            return this.picogramsperliterLazy;
        }
        return this.picogramsperliterLazy = this.convertFromBase(MassConcentrationUnits.Picogramsperliter);
    }
    get Nanogramsperliter() {
        if (this.nanogramsperliterLazy !== null) {
            return this.nanogramsperliterLazy;
        }
        return this.nanogramsperliterLazy = this.convertFromBase(MassConcentrationUnits.Nanogramsperliter);
    }
    get Microgramsperliter() {
        if (this.microgramsperliterLazy !== null) {
            return this.microgramsperliterLazy;
        }
        return this.microgramsperliterLazy = this.convertFromBase(MassConcentrationUnits.Microgramsperliter);
    }
    get Centigramsperliter() {
        if (this.centigramsperliterLazy !== null) {
            return this.centigramsperliterLazy;
        }
        return this.centigramsperliterLazy = this.convertFromBase(MassConcentrationUnits.Centigramsperliter);
    }
    get Decigramsperliter() {
        if (this.decigramsperliterLazy !== null) {
            return this.decigramsperliterLazy;
        }
        return this.decigramsperliterLazy = this.convertFromBase(MassConcentrationUnits.Decigramsperliter);
    }
    get Kilogramsperliter() {
        if (this.kilogramsperliterLazy !== null) {
            return this.kilogramsperliterLazy;
        }
        return this.kilogramsperliterLazy = this.convertFromBase(MassConcentrationUnits.Kilogramsperliter);
    }
    get Kilopoundspercubicinch() {
        if (this.kilopoundspercubicinchLazy !== null) {
            return this.kilopoundspercubicinchLazy;
        }
        return this.kilopoundspercubicinchLazy = this.convertFromBase(MassConcentrationUnits.Kilopoundspercubicinch);
    }
    get Kilopoundspercubicfoot() {
        if (this.kilopoundspercubicfootLazy !== null) {
            return this.kilopoundspercubicfootLazy;
        }
        return this.kilopoundspercubicfootLazy = this.convertFromBase(MassConcentrationUnits.Kilopoundspercubicfoot);
    }
    static FromGramsPerCubicMillimeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerCubicMillimeter);
    }
    static FromGramsPerCubicCentimeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerCubicCentimeter);
    }
    static FromGramsPerCubicMeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerCubicMeter);
    }
    static FromGramsPerMilliliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerMilliliter);
    }
    static FromGramsPerDeciliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerDeciliter);
    }
    static FromGramsPerLiter(value) {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerLiter);
    }
    static FromTonnesPerCubicMillimeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.TonnesPerCubicMillimeter);
    }
    static FromTonnesPerCubicCentimeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.TonnesPerCubicCentimeter);
    }
    static FromTonnesPerCubicMeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.TonnesPerCubicMeter);
    }
    static FromPoundsPerCubicInch(value) {
        return new MassConcentration(value, MassConcentrationUnits.PoundsPerCubicInch);
    }
    static FromPoundsPerCubicFoot(value) {
        return new MassConcentration(value, MassConcentrationUnits.PoundsPerCubicFoot);
    }
    static FromSlugsPerCubicFoot(value) {
        return new MassConcentration(value, MassConcentrationUnits.SlugsPerCubicFoot);
    }
    static FromPoundsPerUSGallon(value) {
        return new MassConcentration(value, MassConcentrationUnits.PoundsPerUSGallon);
    }
    static FromPoundsPerImperialGallon(value) {
        return new MassConcentration(value, MassConcentrationUnits.PoundsPerImperialGallon);
    }
    static FromKilogramspercubicmillimeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.Kilogramspercubicmillimeter);
    }
    static FromKilogramspercubiccentimeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.Kilogramspercubiccentimeter);
    }
    static FromKilogramspercubicmeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.Kilogramspercubicmeter);
    }
    static FromMicrogramspercubicmeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.Microgramspercubicmeter);
    }
    static FromPicogramspermilliliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.Picogramspermilliliter);
    }
    static FromNanogramspermilliliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.Nanogramspermilliliter);
    }
    static FromMicrogramspermilliliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.Microgramspermilliliter);
    }
    static FromCentigramspermilliliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.Centigramspermilliliter);
    }
    static FromDecigramspermilliliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.Decigramspermilliliter);
    }
    static FromPicogramsperdeciliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.Picogramsperdeciliter);
    }
    static FromNanogramsperdeciliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.Nanogramsperdeciliter);
    }
    static FromMicrogramsperdeciliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.Microgramsperdeciliter);
    }
    static FromCentigramsperdeciliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.Centigramsperdeciliter);
    }
    static FromDecigramsperdeciliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.Decigramsperdeciliter);
    }
    static FromPicogramsperliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.Picogramsperliter);
    }
    static FromNanogramsperliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.Nanogramsperliter);
    }
    static FromMicrogramsperliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.Microgramsperliter);
    }
    static FromCentigramsperliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.Centigramsperliter);
    }
    static FromDecigramsperliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.Decigramsperliter);
    }
    static FromKilogramsperliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.Kilogramsperliter);
    }
    static FromKilopoundspercubicinch(value) {
        return new MassConcentration(value, MassConcentrationUnits.Kilopoundspercubicinch);
    }
    static FromKilopoundspercubicfoot(value) {
        return new MassConcentration(value, MassConcentrationUnits.Kilopoundspercubicfoot);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MassConcentrationUnits.GramsPerCubicMillimeter:
                return this.value * 1e-6;
            case MassConcentrationUnits.GramsPerCubicCentimeter:
                return this.value * 1e-3;
            case MassConcentrationUnits.GramsPerCubicMeter:
                return this.value * 1e3;
            case MassConcentrationUnits.GramsPerMilliliter:
                return this.value * 1e-3;
            case MassConcentrationUnits.GramsPerDeciliter:
                return this.value * 1e-1;
            case MassConcentrationUnits.GramsPerLiter:
                return this.value;
            case MassConcentrationUnits.TonnesPerCubicMillimeter:
                return this.value * 1e-12;
            case MassConcentrationUnits.TonnesPerCubicCentimeter:
                return this.value * 1e-9;
            case MassConcentrationUnits.TonnesPerCubicMeter:
                return this.value * 0.001;
            case MassConcentrationUnits.PoundsPerCubicInch:
                return this.value * 3.6127298147753e-5;
            case MassConcentrationUnits.PoundsPerCubicFoot:
                return this.value * 0.062427961;
            case MassConcentrationUnits.SlugsPerCubicFoot:
                return this.value * 0.00194032033;
            case MassConcentrationUnits.PoundsPerUSGallon:
                return this.value / 1.19826427e2;
            case MassConcentrationUnits.PoundsPerImperialGallon:
                return this.value / 9.9776398e1;
            case MassConcentrationUnits.Kilogramspercubicmillimeter:
                return (this.value * 1e-6) / 1000;
            case MassConcentrationUnits.Kilogramspercubiccentimeter:
                return (this.value * 1e-3) / 1000;
            case MassConcentrationUnits.Kilogramspercubicmeter:
                return (this.value * 1e3) / 1000;
            case MassConcentrationUnits.Microgramspercubicmeter:
                return (this.value * 1e3) / 0.000001;
            case MassConcentrationUnits.Picogramspermilliliter:
                return (this.value * 1e-3) / 1e-12;
            case MassConcentrationUnits.Nanogramspermilliliter:
                return (this.value * 1e-3) / 1e-9;
            case MassConcentrationUnits.Microgramspermilliliter:
                return (this.value * 1e-3) / 0.000001;
            case MassConcentrationUnits.Centigramspermilliliter:
                return (this.value * 1e-3) / 0.01;
            case MassConcentrationUnits.Decigramspermilliliter:
                return (this.value * 1e-3) / 0.1;
            case MassConcentrationUnits.Picogramsperdeciliter:
                return (this.value * 1e-1) / 1e-12;
            case MassConcentrationUnits.Nanogramsperdeciliter:
                return (this.value * 1e-1) / 1e-9;
            case MassConcentrationUnits.Microgramsperdeciliter:
                return (this.value * 1e-1) / 0.000001;
            case MassConcentrationUnits.Centigramsperdeciliter:
                return (this.value * 1e-1) / 0.01;
            case MassConcentrationUnits.Decigramsperdeciliter:
                return (this.value * 1e-1) / 0.1;
            case MassConcentrationUnits.Picogramsperliter:
                return (this.value) / 1e-12;
            case MassConcentrationUnits.Nanogramsperliter:
                return (this.value) / 1e-9;
            case MassConcentrationUnits.Microgramsperliter:
                return (this.value) / 0.000001;
            case MassConcentrationUnits.Centigramsperliter:
                return (this.value) / 0.01;
            case MassConcentrationUnits.Decigramsperliter:
                return (this.value) / 0.1;
            case MassConcentrationUnits.Kilogramsperliter:
                return (this.value) / 1000;
            case MassConcentrationUnits.Kilopoundspercubicinch:
                return (this.value * 3.6127298147753e-5) / 1000;
            case MassConcentrationUnits.Kilopoundspercubicfoot:
                return (this.value * 0.062427961) / 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case MassConcentrationUnits.GramsPerCubicMillimeter:
                return value / 1e-6;
            case MassConcentrationUnits.GramsPerCubicCentimeter:
                return value / 1e-3;
            case MassConcentrationUnits.GramsPerCubicMeter:
                return value / 1e3;
            case MassConcentrationUnits.GramsPerMilliliter:
                return value / 1e-3;
            case MassConcentrationUnits.GramsPerDeciliter:
                return value / 1e-1;
            case MassConcentrationUnits.GramsPerLiter:
                return value;
            case MassConcentrationUnits.TonnesPerCubicMillimeter:
                return value / 1e-12;
            case MassConcentrationUnits.TonnesPerCubicCentimeter:
                return value / 1e-9;
            case MassConcentrationUnits.TonnesPerCubicMeter:
                return value / 0.001;
            case MassConcentrationUnits.PoundsPerCubicInch:
                return value / 3.6127298147753e-5;
            case MassConcentrationUnits.PoundsPerCubicFoot:
                return value / 0.062427961;
            case MassConcentrationUnits.SlugsPerCubicFoot:
                return value * 515.378818;
            case MassConcentrationUnits.PoundsPerUSGallon:
                return value * 1.19826427e2;
            case MassConcentrationUnits.PoundsPerImperialGallon:
                return value * 9.9776398e1;
            case MassConcentrationUnits.Kilogramspercubicmillimeter:
                return (value / 1e-6) * 1000;
            case MassConcentrationUnits.Kilogramspercubiccentimeter:
                return (value / 1e-3) * 1000;
            case MassConcentrationUnits.Kilogramspercubicmeter:
                return (value / 1e3) * 1000;
            case MassConcentrationUnits.Microgramspercubicmeter:
                return (value / 1e3) * 0.000001;
            case MassConcentrationUnits.Picogramspermilliliter:
                return (value / 1e-3) * 1e-12;
            case MassConcentrationUnits.Nanogramspermilliliter:
                return (value / 1e-3) * 1e-9;
            case MassConcentrationUnits.Microgramspermilliliter:
                return (value / 1e-3) * 0.000001;
            case MassConcentrationUnits.Centigramspermilliliter:
                return (value / 1e-3) * 0.01;
            case MassConcentrationUnits.Decigramspermilliliter:
                return (value / 1e-3) * 0.1;
            case MassConcentrationUnits.Picogramsperdeciliter:
                return (value / 1e-1) * 1e-12;
            case MassConcentrationUnits.Nanogramsperdeciliter:
                return (value / 1e-1) * 1e-9;
            case MassConcentrationUnits.Microgramsperdeciliter:
                return (value / 1e-1) * 0.000001;
            case MassConcentrationUnits.Centigramsperdeciliter:
                return (value / 1e-1) * 0.01;
            case MassConcentrationUnits.Decigramsperdeciliter:
                return (value / 1e-1) * 0.1;
            case MassConcentrationUnits.Picogramsperliter:
                return (value) * 1e-12;
            case MassConcentrationUnits.Nanogramsperliter:
                return (value) * 1e-9;
            case MassConcentrationUnits.Microgramsperliter:
                return (value) * 0.000001;
            case MassConcentrationUnits.Centigramsperliter:
                return (value) * 0.01;
            case MassConcentrationUnits.Decigramsperliter:
                return (value) * 0.1;
            case MassConcentrationUnits.Kilogramsperliter:
                return (value) * 1000;
            case MassConcentrationUnits.Kilopoundspercubicinch:
                return (value / 3.6127298147753e-5) * 1000;
            case MassConcentrationUnits.Kilopoundspercubicfoot:
                return (value / 0.062427961) * 1000;
            default:
                break;
        }
        return NaN;
    }
}
exports.MassConcentration = MassConcentration;
//# sourceMappingURL=massconcentration.g.js.map