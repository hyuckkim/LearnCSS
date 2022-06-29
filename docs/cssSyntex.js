export class CssSyntex {
    constructor(name, contents) {
        this.name = name;
        this.contents = contents;
    }
    buildHTML(root) {
        var result = "";
        result += `<span class="hljs-attribute">\u00A0\u00A0${this.name}</span>:`;
        let i = 0;
        this.contents.forEach(e => {
            result += `<input 
                class="hljs-number"
                value="${e}" 
                style="width: ${Math.min(250, e.length * 12)}px;" onchange="rewrite('${root}/${this.name}/${i}', this);">`;
            i++;
        });
        result += ";\n";
        return result;
    }
    buildCSS() {
        var result = `${this.name}:`;
        this.contents.forEach(e => {
            result += ` ${e}`;
        });
        result += `;`;
        return result;
    }
    rewrite(attributeNo, value) {
        this.contents[attributeNo] = value.value;
        value.style.width = `${Math.min(250, value.value.length * 12)}px`;
    }
}
