import { CssInfo } from "./cssInfo.js";
import { CssSyntex } from "./cssSyntex.js";
import { CssRoot } from "./cssRoot.js";
import { Theme } from "./ThemeChanger.js";

var textarea = document.getElementById("textarea") as HTMLElement;
var info = new CssRoot(
    [
        new CssInfo("h1",
        [
            new CssSyntex("color", ["#000000"]),
            new CssSyntex("background", ["#e2e2e2"]),
            new CssSyntex("font-size", ["36px"]),
            new CssSyntex("border", ["1px", "solid", "#000000"]),
        ]),
        new CssInfo("p",
        [
            new CssSyntex("color", ["#000000"]),
            new CssSyntex("background", ["#e2e2e2"]),
            new CssSyntex("font-size", ["12px"]),
            new CssSyntex("border", ["1px", "solid", "#000000"]),
        ]),
        new CssInfo("article",
        [
            new CssSyntex("background", ["#ffffff"]),
            new CssSyntex("border", ["1px", "solid", "#000000"]),
            new CssSyntex("width", ["500px"]),
            new CssSyntex("height", ["500px"]),
        ]),
    ]
);
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
HighlightChanged();

bulidCssInfo();