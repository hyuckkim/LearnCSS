export class Random {
    static Int(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    static Arbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}
