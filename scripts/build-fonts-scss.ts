// @ts-ignore
var sass = require('sass');
var fs = require("fs");

console.log("🖨️ Generating fonts css");

var result = sass.renderSync({
  file: `${__dirname}/../styles/scss/fonts-cdn.scss`,
  outputStyle: "expanded",
});
var resultLocal = sass.renderSync({
  file: `${__dirname}/../styles/scss/fonts-local.scss`,
  outputStyle: "expanded",
});

const dirnameFonts = `${__dirname}/../public/assets/css`;
if (!fs.existsSync(dirnameFonts)) {
    fs.mkdirSync(dirnameFonts, {recursive: true});
}
fs.writeFileSync(`${__dirname}/../public/assets/css/fonts.css`, result.css);
fs.writeFileSync(`${__dirname}/../public/assets/css/fonts-local.css`, resultLocal.css);


console.log("🖨️ Generating fonts css complete ✅");