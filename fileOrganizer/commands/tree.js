const fs=require("fs");
const path=require("path");
 function treeFn(srcPath){
    if(srcPath==undefined){
        console.log("their are no srcPath");
        return;
    }
    let doesExist=fs.existsSync(srcPath)
    if(doesExist==true){
        treeHelper(srcPath," ");
        
    }
}
function treeHelper(dircPath,indent){
    let isFile=fs.lstatSync(dircPath).isFile();
    if(isFile==true){
        let FileName=path.basename(dircPath);
        console.log(indent+"|-"+FileName);
        return;
    }
    let dirFolName=path.basename(dircPath);
    console.log(indent+"|-"+dirFolName);
    let children=fs.readdirSync(dircPath);
    for(let i=0;i<children.length;i++){
        let childrenPath=path.join(dircPath,children[i]);
        treeHelper(childrenPath,indent+"\t");
    }
}
module.export={
    tree:treeFn
}
//let srcPath="/Users/91834/Desktop/gitDemo/fileOrganizer/"
//treeFn(srcPath);