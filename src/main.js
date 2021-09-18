let temPlate = require('../Hero/complie.js');
let Saber = require('../Hero/Hero.js')
let saber = new Saber();
eval(temPlate.temPlateScript[0])
console.log(saber.templateParser(temPlate.newTemplate))
