import { cssClulster } from "./cssCluster";

export class CssSyntex {
    name: string;
    contents: cssClulster[];
    object: [HTMLInputElement | null];

    constructor(name: string, contents: cssClulster[]) {
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
                value="${e.value}" 
                style="width: ${Math.min(250, e.value.length * 12)}px;"
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
            result += ` ${e.value}`;
        });
        result += `;`;
        return result;
    }
    public rewrite(attributeNo: number) {
        if (this.object == null) return;
        let obj = this.object[attributeNo];
        if (obj != null) {
            this.contents[attributeNo].value = obj.value;
            obj.style.width = `${Math.min(250, obj.value.length * 12)}px`;
        }
    }
    public setObject(object: HTMLInputElement, attributeNo: number) {
        this.object[attributeNo] = object;
    }
}