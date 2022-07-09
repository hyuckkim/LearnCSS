import { CssSyntex } from "./cssSyntex.js";

export class CssInfo {
    name: string;
    syntexes: CssSyntex[];

    constructor(name: string, syntexes: CssSyntex[]) {
        this.name = name;
        this.syntexes = syntexes;
    }

    public buildHTML(): string {
        var result = `<div class="hljs-keyword"><span class="name">${this.name}</span> {</div>`;
        this.syntexes.forEach(e => {
            result += e.buildHTML(this.name);
        });
        result += `<div><span>}</span></div>`;
        return result;
    }
    public buildCSS(): string {
        var result = `${this.name} {`;
        this.syntexes.forEach(e => {
            result += e.buildCSS();
        });
        result += `}`;
        return result;
    }
    public rewrite(syntex: string, attributeNo: number) {
        let child = this.getChildByName(syntex);
        if (child instanceof CssSyntex) {
            child.rewrite(attributeNo);
        }
    }
    public setObject(object: HTMLInputElement, syntex: string, attributeNo: number) {
        let child = this.getChildByName(syntex);
        if (child instanceof CssSyntex) {
            child.setObject(object, attributeNo);
        }
    }
    getChildByName(name: string): CssSyntex | null {
        let result: CssSyntex | null = null;
        this.syntexes.forEach(e => {
            if (e.name == name) {
                result = e;
            }
        });
        return result;
    }
}