var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CssInfo } from "./cssInfo.js";
import { CssSyntex } from "./cssSyntex.js";
import { CssRoot } from "./cssRoot.js";
import { Theme } from "./ThemeChanger.js";
var textarea = document.getElementById("textarea");
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
var style = document.getElementById("modify");
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
var highlight = document.getElementById("highlightjs");
var theme = document.getElementById("theme");
function HighlightChanged() {
    return __awaiter(this, void 0, void 0, function* () {
        let themeCss = yield Theme.getThemeCss(theme.selectedOptions[0].value);
        highlight.innerHTML = themeCss;
    });
}
window.changeTheme = HighlightChanged;
HighlightChanged();
bulidCssInfo();
