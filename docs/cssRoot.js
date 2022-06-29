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
    rewrite(element, syntex, attributeNo, value) {
        this.data.forEach(e => {
            if (e.name == element) {
                e.rewrite(syntex, attributeNo, value);
            }
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
