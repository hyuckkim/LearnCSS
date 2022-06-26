export class CssSyntex {
    name: string;
    contents: string[];

    constructor(name: string, contents: string[]) {
        this.name = name;
        this.contents = contents;
    }
    public buildHTML(root: string): string {
        var result = `<div class="code syn">`;

        result += `<span class="code fun">\u00A0\u00A0${this.name}:</span>`;

        let i = 0;
        this.contents.forEach(e => {
            result += `<input 
                class="code num"
                value="${e}" 
                style="width: ${Math.min(250, e.length * 12)}px;" onchange="rewrite('${root}/${this.name}/${i}', this.value);">
            </input>`;
            i++;
        });

        result += `;</div>`;
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
    public rewrite(attributeNo: number, value: string) {
        this.contents[attributeNo] = value;
    }
}