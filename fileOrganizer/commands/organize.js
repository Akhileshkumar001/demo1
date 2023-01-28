const fs=require("fs");
const path=require("path");

let folder={
    media:['mp3','mp4','mkv'],
    archive:['zip','rar','tar','gz','iso','xz'],
    documents:['docx','pdf','xlsx','odl','ods','odp','odg','odf','txt','ps','tex'],
    apps:['exe','pkg','deb'],
    images:['png','jpeg']
}
function organize(srcPath){
    if(srcPath==undefined){
    srcPath=process.cwd();
    console.log("source path is",srcPath);
    }
    let organizedFile=path.join(srcPath,"organize_files"); //join(...paths: string[]): string
   // console.log("organized file is ",organizedFile);
      if(fs.existsSync(organizedFile)==false){//organizedFile ka folder exist nhi krta hai ek folser  bna do wrna rhne do
        fs.mkdirSync(organizedFile)
    }else{
        console.log("folder already exist");
    }
}
let srcPath="/Users/91834/Desktop/gitDemo/fileOrganizer/downloads"
organize(srcPath);