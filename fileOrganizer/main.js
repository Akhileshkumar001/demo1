let fs=require("./commands/help");
let orgfun=require("./commands/organize");
//console.log(fs.hathi());
let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path=inputArr[1];
switch(command){
    case"tree":
        //fs.hathi();
        console.log("tree command secsussfull excuted"+path);
        break;
    case"organize":
        orgfun.organize(path);
       // console.log("organize command sucessfull excuted"+path);
        break;
    case"help":
        fs.help();
        console.log("help command excutd"); 
        break;
    default:
       console.log("it is not persent");    
}