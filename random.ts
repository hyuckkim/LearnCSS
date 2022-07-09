export class Random {
    public static Int(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    public static Arbitrary(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }
}