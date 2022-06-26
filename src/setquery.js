import { CssInfo } from "./cssInfo.js";
import { CssSyntex } from "./cssSyntex.js";
import { CssRoot } from "./cssRoot.js";
var textarea = document.getElementById("textarea");
var style = document.getElementById("modify");
var info = new CssRoot([
    new CssInfo("h1", [
        new CssSyntex("color", ["#000000"]),
        new CssSyntex("background", ["#e2e2e2"]),
        new CssSyntex("font-size", ["36px"]),
        new CssSyntex("border", ["1px", "solid", "#000000"]),
    ]),
    new CssInfo("p", [
        new CssSyntex("color", ["#000000"]),
        new CssSyntex("background", ["#e2e2e2"]),
        new CssSyntex("font-size", ["12px"]),
        new CssSyntex("border", ["1px", "solid", "#000000"]),
    ]),
    new CssInfo("article", [
        new CssSyntex("color", ["inherit"]),
        new CssSyntex("background", ["#ffffff"]),
        new CssSyntex("border", ["1px", "solid", "#000000"]),
        new CssSyntex("width", ["500px"]),
        new CssSyntex("height", ["500px"]),
    ]),
]);
function bulidCssInfo() {
    textarea.innerHTML = info.buildHTML();
    ApplyCss();
}
function CallRewriteCss(code, data) {
    RewriteCss(code, data);
    ApplyCss();
}
function ApplyCss() {
    style.innerText = info.buildCSS();
}
function RewriteCss(code, data) {
    let split = code.split('/');
    if (split.length != 3)
        return;
    info.rewrite(split[0], split[1], Number.parseInt(split[2]), data);
}
window.rewrite = CallRewriteCss;
bulidCssInfo();
