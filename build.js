var fs = require("fs");
var path = require("path");
fs.rmSync("./.git",{ recursive: true, force: true });
console.log("copying vm files to HTML compiler...");
var outputDir = "./scratch-gui/static/HTMLCompiler/VM";
var inputDir = "./scratch-vm/dist/web/";


var files = fs.readdirSync(inputDir);

for (var index in files) {
	console.log(`Copying: ${path.join(inputDir,files[index])} To: ${path.join(outputDir,files[index])}`);
	try{
		var contents = fs.readFileSync(path.join(inputDir,files[index]));
		fs.writeFileSync(path.join(outputDir,files[index]),contents);
	}catch(e){console.error(`Error When Trying To Copy: ${path.join(inputDir,files[index])} To: ${path.join(outputDir,files[index])} Error Code: ${e}`)}
	console.log(`Done!`);
}