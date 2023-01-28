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
    //1. to check if srcPath is present
    if(srcPath==undefined){
        //The process.cwd() method returns the current working directory of the Node.js process.
    srcPath=process.cwd();
    console.log("source path is",srcPath);
    }
// 2. to create a directory->organize_file
    let organizedFile=path.join(srcPath,"organize_files"); //join(...paths: string[]): string
   // console.log("organized file is ",organizedFile);
      if(fs.existsSync(organizedFile)==false){//organizedFile ka folder exist nhi krta hai ek folser  bna do wrna rhne do
        fs.mkdirSync(organizedFile)
    }else{
        console.log("folder already exist");
    }
    // 3. all file entire srcPath(downloads folder in the case)
    let allFile=fs.readdirSync(srcPath);//Reads the contents of the directory->basically reads the name of files present in the directory
    console.log(allFile);
    for(let i=0;i<allFile.length;i++){
        let ext=allFile[i].split(".")[1];
        // or
        //let ext=path.extname(allFiles[i])
        console.log(ext);
    }
}
let srcPath="/Users/91834/Desktop/gitDemo/fileOrganizer/downloads"
organize(srcPath);