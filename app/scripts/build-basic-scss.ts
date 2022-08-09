// @ts-ignore
var sass = require('sass');
var fs = require("fs");

console.log("🖨️ Generating basic css");

var result = sass.renderSync({
  file: `${__dirname}/../styles/scss/basic.scss`,
  outputStyle: "expanded",
});
var resultLocal = sass.renderSync({
  file: `${__dirname}/../styles/scss/basic-local.scss`,
  outputStyle: "expanded",
});

const dirnameCss = `${__dirname}/../public/assets/css`;
if (!fs.existsSync(dirnameCss)) {
    fs.mkdirSync(dirnameCss, {recursive: true});
}
fs.writeFileSync(`${__dirname}/../public/assets/css/basic.css`, result.css);
fs.writeFileSync(`${__dirname}/../public/assets/css/basic-local.css`, resultLocal.css);


console.log("🖨️ Generating basic css complete ✅");
