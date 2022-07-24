export class CssSyntex {
    constructor(name, contents) {
        this.name = name;
        this.contents = contents.map(c => { return { name: c, object: null }; });
    }
    buildHTML(root) {
        var result = "";
        result += `<span class="hljs-attribute">\u00A0\u00A0${this.name}</span>:`;
        let i = 0;
        this.contents.forEach(e => {
            result += `<input 
                class="hljs-number"
                value="${e.name.value}" 
                style="width: ${Math.min(250, e.name.value.length * 12)}px;"
                id="${root}/${this.name}/${i}"
                onchange="rewrite(this);">`;
            i++;
        });
        result += ";\n";
        return result;
    }
    buildCSS() {
        var result = `${this.name}:`;
        this.contents.forEach(e => {
            result += ` ${e.name.value}`;
        });
        result += `;`;
        return result;
    }
    rewrite(attributeNo) {
        let obj = this.contents[attributeNo].object;
        if (obj != null) {
            this.contents[attributeNo].name.value = obj.value;
            obj.style.width = `${Math.min(250, obj.value.length * 12)}px`;
        }
    }
    setObject(object, attributeNo) {
        this.contents[attributeNo].object = object;
    }
    randomize() {
        this.contents.forEach(e => {
            e.name.randomize();
            if (e.object instanceof HTMLInputElement)
                e.object.value = e.name.value;
        });
    }
}
