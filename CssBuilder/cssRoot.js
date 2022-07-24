import { CssInfo } from "./cssInfo.js";
export class CssRoot {
    constructor(data) {
        this.data = data;
    }
    buildHTML() {
        var result = `<code class="hljs language-css"
        style="height: calc(100% - 24px);
        border-radius: 0px 0px 24px 0px;">`;
        this.data.forEach(e => {
            result += e.buildHTML();
        });
        result += `</code>`;
        return result;
    }
    ;
    buildCSS() {
        var result = "";
        this.data.forEach(e => {
            result += e.buildCSS();
        });
        return result;
    }
    rewrite(element, syntex, attributeNo) {
        let child = this.getChildByName(element);
        if (child instanceof CssInfo) {
            child.rewrite(syntex, attributeNo);
        }
    }
    setObject(object, element, syntex, attributeNo) {
        let child = this.getChildByName(element);
        if (child instanceof CssInfo) {
            child.setObject(object, syntex, attributeNo);
        }
    }
    getChildByName(name) {
        let result = null;
        this.data.forEach(e => {
            if (e.name == name) {
                result = e;
            }
        });
        return result;
    }
    randomize() {
        this.data.forEach(e => {
            e.randomize();
        });
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
