var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Theme } from "./ThemeChanger.js";
import { CssBuilder } from "./CssBuilder/cssBuilder.js";
var textarea = document.getElementById("textarea");
var info = CssBuilder.build(`h1 {
    color: #000000;
    background: #e2e2e2;
    font-size: 36px;
    border: 1px solid #000000;
}
p {
    color: #000000;
    background: #e2e2e2;
    font-size: 12px;
    border: 1px solid #000000;
}
article {
    background: #ffffff;
    border: 1px solid #000000;
    width: 500px;
    height: 500px;
}`);
function bulidCssInfo() {
    textarea.innerHTML = info.buildHTML();
    setObjectEachSyntex(textarea);
    ApplyCss();
}
function setObjectEachSyntex(root) {
    root.querySelectorAll('input').forEach(element => {
        let split = element.id.split('/');
        if (split.length != 3)
            return;
        info.setObject(element, split[0], split[1], Number.parseInt(split[2]));
    });
}
function CallRewriteCss(element) {
    RewriteCss(element.id);
    ApplyCss();
}
var style = document.getElementById("modify");
function ApplyCss() {
    style.innerText = info.buildCSS();
}
function RewriteCss(code) {
    let split = code.split('/');
    if (split.length != 3)
        return;
    info.rewrite(split[0], split[1], Number.parseInt(split[2]));
}
window.rewrite = CallRewriteCss;
var highlight = document.getElementById("highlightjs");
var theme = document.getElementById("theme");
function HighlightChanged() {
    return __awaiter(this, void 0, void 0, function* () {
        let themeCss = yield Theme.getThemeCss(theme.selectedOptions[0].value);
        highlight.innerHTML = themeCss;
    });
}
window.changeTheme = HighlightChanged;
function setRandomize() {
    info.randomize();
    ApplyCss();
}
window.setRandomize = setRandomize;
HighlightChanged();
bulidCssInfo();
