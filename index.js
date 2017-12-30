//var gm = require('gm');
//gm("/images/nodejs.png").adjoin();

/** 
var gm = require('gm')
  , dir = __dirname + '/images/'

gm(dir + "nodejs.png")
  .crop(140,100)
  .background("#FF0000")
  .extent(340,300)
  .write(dir + '/background.png', function (err) {
    if (err) return console.dir(arguments)
    console.log(this.outname + " created  ::  " + arguments[3])
});
*/

var gm = require('gm')
gm("/images/nodejs.png")
    .background("#FF0000")
    .write("/images/background.png", function (error) {
        if (error)
            return console.log("Error: ", error);
        console.log("Everything ok!");
    });