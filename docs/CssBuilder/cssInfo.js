import { CssSyntex } from "./cssSyntex.js";
export class CssInfo {
    constructor(name, syntexes) {
        this.name = name;
        this.syntexes = syntexes;
    }
    buildHTML() {
        var result = `<div class="hljs-keyword"><span class="name">${this.name}</span> {</div>`;
        this.syntexes.forEach(e => {
            result += e.buildHTML(this.name);
        });
        result += `<div><span>}</span></div>`;
        return result;
    }
    buildCSS() {
        var result = `${this.name} {`;
        this.syntexes.forEach(e => {
            result += e.buildCSS();
        });
        result += `}`;
        return result;
    }
    rewrite(syntex, attributeNo) {
        let child = this.getChildByName(syntex);
        if (child instanceof CssSyntex) {
            child.rewrite(attributeNo);
        }
    }
    setObject(object, syntex, attributeNo) {
        let child = this.getChildByName(syntex);
        if (child instanceof CssSyntex) {
            child.setObject(object, attributeNo);
        }
    }
    getChildByName(name) {
        let result = null;
        this.syntexes.forEach(e => {
            if (e.name == name) {
                result = e;
            }
        });
        return result;
    }
}
