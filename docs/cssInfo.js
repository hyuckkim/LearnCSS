export class CssInfo {
    constructor(name, syntexes) {
        this.name = name;
        this.syntexes = syntexes;
    }
    buildHTML() {
        var result = `<div class="hljs-keyword"><span class="name">${this.name} {</span></div>`;
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
    rewrite(syntex, attributeNo, value) {
        this.syntexes.forEach(e => {
            if (e.name == syntex) {
                e.rewrite(attributeNo, value);
            }
        });
    }
}
