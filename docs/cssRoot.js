export class CssRoot {
    constructor(data) {
        this.data = data;
    }
    buildHTML() {
        var result = "";
        this.data.forEach(e => {
            result += e.buildHTML();
        });
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
