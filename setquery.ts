import { CssInfo } from "./cssInfo.js";
import { CssSyntex } from "./cssSyntex.js";
import { CssRoot } from "./cssRoot.js";

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
    ApplyCss();
}
function CallRewriteCss(code: string, data: string) {
    RewriteCss(code, data);
    ApplyCss();
}

var style = document.getElementById("modify") as HTMLStyleElement;
function ApplyCss() {
    style.innerText = info.buildCSS();
}
function RewriteCss(code: string, data: string) {
    let split = code.split('/');
    if (split.length != 3) return;

    info.rewrite(split[0], split[1], Number.parseInt(split[2]), data);
}
(window as any).rewrite = CallRewriteCss;

var highlight = document.getElementById("highlightjs") as HTMLStyleElement;
var theme = document.getElementById("theme") as HTMLSelectElement;
function HighlightChanged() {
    let url = `https://raw.githubusercontent.com/highlightjs/cdn-release/main/build/styles/${theme.selectedOptions[0].value}.min.css`;
    let ajax = new XMLHttpRequest();
    
    ajax.open("GET", url);
    ajax.send();

    ajax.onload = () => {
        highlight.innerHTML = ajax.response;
    };
}
(window as any).changeTheme = HighlightChanged;
HighlightChanged();

bulidCssInfo();