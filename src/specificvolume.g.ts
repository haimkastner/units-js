export enum SpecificVolumeUnits {
    CubicMetersPerKilogram,
    CubicFeetPerPound
}

export class SpecificVolume {
    private value: number;
    private cubicmetersperkilogramLazy: number | null = null;
    private cubicfeetperpoundLazy: number | null = null;

    public constructor(value: number, fromUnit: SpecificVolumeUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get CubicMetersPerKilogram(): number {
        if(this.cubicmetersperkilogramLazy !== null){
            return this.cubicmetersperkilogramLazy;
        }
        return this.cubicmetersperkilogramLazy = this.convertFromBase(SpecificVolumeUnits.CubicMetersPerKilogram);
    }

    public get CubicFeetPerPound(): number {
        if(this.cubicfeetperpoundLazy !== null){
            return this.cubicfeetperpoundLazy;
        }
        return this.cubicfeetperpoundLazy = this.convertFromBase(SpecificVolumeUnits.CubicFeetPerPound);
    }

    public static FromCubicMetersPerKilogram(value: number): SpecificVolume {
        return new SpecificVolume(value, SpecificVolumeUnits.CubicMetersPerKilogram);
    }

    public static FromCubicFeetPerPound(value: number): SpecificVolume {
        return new SpecificVolume(value, SpecificVolumeUnits.CubicFeetPerPound);
    }

    private convertFromBase(toUnit: SpecificVolumeUnits): number {
        switch (toUnit) {
                
            case SpecificVolumeUnits.CubicMetersPerKilogram:
                return this.value;
            case SpecificVolumeUnits.CubicFeetPerPound:
                return this.value*16.01846353;
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
                return value/16.01846353;
            default:
                break;
        }
        return NaN;
    }
}
