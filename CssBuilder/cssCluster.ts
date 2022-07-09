import { Random } from "../random.js";

export abstract class cssCluster {
    public value: string;
    constructor(value: string) {
        this.value = value;
    }
    public static generate(name: string): cssCluster {
        if (name.startsWith('#')) return new colorCluster(name);
        if (name.endsWith('px')) {
            let size = Number.parseInt(name.split('px')[0]);
            if (size > 50) return new bgCluster(name);
            if (size > 10) return new pixelCluster(name);
            else return new borderCluster(name);
        }
        return new noneCluster(name);
    }
    public abstract randomize(): void;
}
export class colorCluster extends cssCluster {
    public randomize(): void {
        let v = Random.Int(0, 256 ** 3);
        this.value = `#${v.toString(16)}`;
    }
}
export class pixelCluster extends cssCluster {
    public randomize(): void {
        let v = Random.Int(8, 50);
        this.value = `${v}px`;
    }
}
export class bgCluster extends cssCluster {
    public randomize(): void {
        let v = Random.Int(200, 1001);
        this.value = `${v}px`;
    }
}
export class borderCluster extends cssCluster {
    public randomize(): void {
        let v = Random.Int(1, 10);
        this.value = `${v}px`;
    }
}
export class noneCluster extends cssCluster {
    public randomize(): void {
        
    }
}