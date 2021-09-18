var fs = require('fs');
var path = require('path');
let newTemplate = null;
let temPlateScript = null;
function templateCreate() {
    newTemplate = fs.readFileSync(path.join(__dirname, '../src/App.Hero')).toString();
    
    //newTemplate = `<!DOCTYPE html><html lang="en"><body><div id="app">${data}</div></body><script src="./hero.js"></script></html>`.trim();
    temPlateScript = newTemplate.match(/(?<=<HeroScript>)[\d\D]*(?=<\/HeroScript)/m);
}
templateCreate();
module.exports = {newTemplate,temPlateScript};

