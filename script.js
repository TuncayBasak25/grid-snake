const { Folder } = require("explorer");

const root = new Folder(__dirname);

const distFolder = root.folders.dist;

const jsFileList = distFolder.findAllFile({ where: { extension: ".js" } }, true).map(file => "." + file.path.split("grid-snake")[1]);

let scriptText = jsFileList.reverse().map(a => `<script type="module" src=${a}></script>`).join("\n");

const html = root.files["page.html"];

let content = html.content;

html.content = content.replace(content.substring(content.indexOf("<body>"), content.lastIndexOf("</body>") + 7), "<body>\n" + scriptText + "\n</body>");