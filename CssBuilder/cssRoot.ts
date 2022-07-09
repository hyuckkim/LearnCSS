import { CssInfo } from "./cssInfo.js";

export class CssRoot {
    data: CssInfo[];
    constructor(data: CssInfo[]) {
        this.data = data;
    }
    
    public buildHTML(): string {
        var result = `<code class="hljs language-css"
        style="height: calc(100% - 24px);
        border-radius: 0px 0px 24px 0px;">`;

        this.data.forEach(e => {
            result += e.buildHTML();
        });
        result += `</code>`;
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
        attributeNo: number) {
            let child = this.getChildByName(element);
            if (child instanceof CssInfo) {
                child.rewrite(syntex, attributeNo);
            }
    }
    public setObject(
        object: HTMLInputElement,
        element: string, 
        syntex: string, 
        attributeNo: number) {
            let child = this.getChildByName(element);
            if (child instanceof CssInfo) {
                child.setObject(object, syntex, attributeNo);
            }
    }
    getChildByName(name: string): CssInfo | null{
        let result: CssInfo | null = null;
        this.data.forEach(e => {
            if (e.name == name) {
                result = e;
            }
        });
        return result;
    }
}
/* Todo
{"utf8": "✓",
"paragraphs": "3",
"length": "long",
"text_source_ids[]": "1",
"commit": "생성하기"
}
*/