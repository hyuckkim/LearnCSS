import { CssInfo } from "./cssInfo.js";

export class CssRoot {
    data: CssInfo[];
    constructor(data: CssInfo[]) {
        this.data = data;
    }
    
    public buildHTML(): string {
        var result = "";

        this.data.forEach(e => {
            result += e.buildHTML();
        });
        return result;
    };
    public buildCSS(): string {
        var result = "";

        this.data.forEach(e => {
            result += e.buildCSS();
        });
        return result;
    }

    public rewrite(
        element: string, 
        syntex: string, 
        attributeNo: number, 
        value: string) {
        this.data.forEach(e => {
            if (e.name == element) {
                e.rewrite(syntex, attributeNo, value);
            }
        });
    }
}