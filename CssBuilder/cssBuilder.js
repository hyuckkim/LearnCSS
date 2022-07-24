import { cssCluster } from "./cssCluster.js";
import { CssInfo } from "./cssInfo.js";
import { CssRoot } from "./cssRoot.js";
import { CssSyntex } from "./cssSyntex.js";
export class CssBuilder {
    static build(str) {
        let tokens = this.tokenize(str);
        let braces = this.findNamedBrace(tokens);
        let result = new CssRoot(braces.map(b => {
            let syntex = this.findNamedSyntex(b.value);
            return new CssInfo(b.name, syntex.map(s => {
                return new CssSyntex(s.name, s.value.map(v => {
                    return cssCluster.generate(v);
                }));
            }));
        }));
        return result;
    }
    static tokenize(str) {
        let uniqueSymbols = ['{', '}', ':', ';'];
        let result = new Array();
        let current = "";
        for (let i = 0; i < str.length; i++) {
            if (uniqueSymbols.includes(str[i]) || str[i] == " " || str[i] == "\n") {
                if (current != "") {
                    result.push(current);
                    current = "";
                }
                if (uniqueSymbols.includes(str[i])) {
                    result.push(str[i]);
                }
            }
            else {
                current += str[i];
            }
        }
        return result;
    }
    static findNamedBrace(tokens) {
        return this.splitTokens(tokens, "{", "}");
    }
    static findNamedSyntex(tokens) {
        return this.splitTokens(tokens, ":", ";");
    }
    static splitTokens(tokens, endName, endValue) {
        let result = new Array();
        var i = 0;
        while (tokens.length > i) {
            let current = { name: "", value: [] };
            while (tokens[i] != endName) {
                current.name += tokens[i];
                current.name += " ";
                ++i;
            }
            current.name = current.name.trim();
            ++i;
            while (tokens[i] != endValue) {
                current.value.push(tokens[i]);
                ++i;
            }
            ++i;
            result.push(current);
        }
        return result;
    }
}
