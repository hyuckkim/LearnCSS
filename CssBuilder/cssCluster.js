import { Random } from "../random.js";
export class cssCluster {
    constructor(value) {
        this.value = value;
    }
    static generate(name) {
        if (name.startsWith('#'))
            return new colorCluster(name);
        if (name.endsWith('px')) {
            let size = Number.parseInt(name.split('px')[0]);
            if (size > 50)
                return new bgCluster(name);
            if (size > 10)
                return new pixelCluster(name);
            else
                return new borderCluster(name);
        }
        return new noneCluster(name);
    }
}
export class colorCluster extends cssCluster {
    randomize() {
        let v = Random.Int(0, 256 ** 3);
        this.value = `#${v.toString(16)}`;
    }
}
export class pixelCluster extends cssCluster {
    randomize() {
        let v = Random.Int(8, 50);
        this.value = `${v}px`;
    }
}
export class bgCluster extends cssCluster {
    randomize() {
        let v = Random.Int(200, 1001);
        this.value = `${v}px`;
    }
}
export class borderCluster extends cssCluster {
    randomize() {
        let v = Random.Int(1, 10);
        this.value = `${v}px`;
    }
}
export class noneCluster extends cssCluster {
    randomize() {
    }
}
