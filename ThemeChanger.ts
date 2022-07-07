export class Theme {
    public static async getThemeCss(theme: string): Promise<string> {
        let url = `https://raw.githubusercontent.com/highlightjs/cdn-release/main/build/styles/${theme}.min.css`;
        let xhr = new XMLHttpRequest();
        
    
        return new Promise(resolve => {
            xhr.open("GET", url);

            xhr.onload = () => resolve(xhr.responseText);
            xhr.onerror = () => resolve("");
            xhr.send();
        });
    }
}