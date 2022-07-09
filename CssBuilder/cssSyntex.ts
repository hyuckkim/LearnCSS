import { cssCluster } from "./cssCluster";

export class CssSyntex {
    name: string;
    contents: Array<{name: cssCluster, object: HTMLInputElement | null}>;

    constructor(name: string, contents: cssCluster[]) {
        this.name = name;
        this.contents = contents.map(c => {return {name: c, object: null};});
    }
    public buildHTML(root: string): string {
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
    public buildCSS(): string {
        var result = `${this.name}:`;
        this.contents.forEach(e => {
            result += ` ${e.name.value}`;
        });
        result += `;`;
        return result;
    }
    public rewrite(attributeNo: number) {
        let obj = this.contents[attributeNo].object;
        if (obj != null) {
            this.contents[attributeNo].name.value = obj.value;
            obj.style.width = `${Math.min(250, obj.value.length * 12)}px`;
        }
    }
    public setObject(object: HTMLInputElement, attributeNo: number) {
        this.contents[attributeNo].object = object;
    }
}