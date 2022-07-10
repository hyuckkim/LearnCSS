import { Theme } from "./ThemeChanger.js";
import { CssBuilder } from "./CssBuilder/cssBuilder.js";

var textarea = document.getElementById("textarea") as HTMLElement;
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
function setObjectEachSyntex(root: HTMLElement) {
    root.querySelectorAll('input').forEach(element => {
        let split = element.id.split('/');
        if (split.length != 3) return;
    
        info.setObject(element, split[0], split[1], Number.parseInt(split[2]));
    });
}
function CallRewriteCss(element: HTMLInputElement) {
    RewriteCss(element.id);
    ApplyCss();
}

var style = document.getElementById("modify") as HTMLStyleElement;
function ApplyCss() {
    style.innerText = info.buildCSS();
}
function RewriteCss(code: string) {
    let split = code.split('/');
    if (split.length != 3) return;

    info.rewrite(split[0], split[1], Number.parseInt(split[2]));
}
(window as any).rewrite = CallRewriteCss;

var highlight = document.getElementById("highlightjs") as HTMLStyleElement;
var theme = document.getElementById("theme") as HTMLSelectElement;
async function HighlightChanged() {
    let themeCss = await Theme.getThemeCss(theme.selectedOptions[0].value);
    highlight.innerHTML = themeCss;
}
(window as any).changeTheme = HighlightChanged;
function setRandomize() {
    info.randomize();
    ApplyCss();
}
(window as any).setRandomize = setRandomize;
HighlightChanged();

bulidCssInfo();