var fs = require('fs');
var path = require('path');
const { Script } = require('vm');
let newTemplate = null;
let temPlateScript = null;
let params = null;
(function templateCreate() {
    newTemplate = fs.readFileSync(path.join(__dirname, '../src/App.Hero')).toString();
    params = newTemplate.match(/(?<=vst\s)[\d\D]*(?=\s)/g)[0].toString().replace(/\s*/g,"").replace(/;/g,",").replace("vst","");
    params = params.slice(0,params.length-1);
    newTemplate = newTemplate.replace(/(vst\s)[\d\D]*;/g,"")
    
    temPlateScript =`<script> let vm=new hero({${ params}})${newTemplate.match(/(?<=<HeroScript>)[\d\D]*(?=<\/HeroScript)/m)}</script>\n</body>`;
    newTemplate =`<div>${ newTemplate.match(/(?<=<Fragment>)[\d\D]*(?=<\/Fragment>)/m)}</div>`;
})();
fs.readFile(path.join(__dirname,'../src/index.html'),(err,data)=>{
    fs.writeFileSync(path.join(__dirname,'../src/index.html'),data.toString().replace(/<Hero>[\d\D]*<\/Hero>/m,newTemplate))
    fs.readFile(path.join(__dirname,'../src/index.html'),(err,ret)=>{
        fs.writeFileSync(path.join(__dirname,'../src/index.html'),ret.toString().replace(/(<HeroScript>)[\d\D]*(<\/HeroScript>)/m,temPlateScript))
    })
})



