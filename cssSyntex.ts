export class CssSyntex {
    name: string;
    contents: string[];
    object: [HTMLInputElement | null];

    constructor(name: string, contents: string[]) {
        this.name = name;
        this.contents = contents;
        this.object = Array(contents.length).fill(null) as [null];
    }
    public buildHTML(root: string): string {
        var result = "";

        result += `<span class="hljs-attribute">\u00A0\u00A0${this.name}</span>:`;

        let i = 0;
        this.contents.forEach(e => {
            result += `<input 
                class="hljs-number"
                value="${e}" 
                style="width: ${Math.min(250, e.length * 12)}px;"
                id="${root}/${this.name}/${i}"
                onchange="rewrite(this);">`;
            i++;
        });

        result += ";\n";
        return result;
    }
    public buildCSS(): string {
        var result = `${this.name}:`;
        this.contents.forEach(e => {
            result += ` ${e}`;
        });
        result += `;`;
        return result;
    }
    public rewrite(attributeNo: number) {
        if (this.object == null) return;
        let obj = this.object[attributeNo];
        if (obj != null) {
            this.contents[attributeNo] = obj.value;
            obj.style.width = `${Math.min(250, obj.value.length * 12)}px`;
        }
    }
    public setObject(object: HTMLInputElement, attributeNo: number) {
        this.object[attributeNo] = object;
    }
}