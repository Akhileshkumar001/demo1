let fs=require("./commands/help");
//console.log(fs.hathi());
let inputArr=process.argv.slice(2);
let command=inputArr[0];
switch(command){
    case"tree":
        //fs.hathi();
        console.log("tree command secsussfull excuted");
        break;
    case"organizer":
        console.log("organize command sucessfull excuted");
        break;
    case"help":
        fs.help();
        //console.log("help command excutd"); 
        break;
    default:
        console.log("it is not persent");    
}