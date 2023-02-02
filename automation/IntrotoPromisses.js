const fs=require("fs");
console.log("before");
//cb function work
//fs.readFile("f1.txt",cb);
//function cb(err,data){
  ////  if(data){
      //  console.log(data+"");
    //}else console.log(err);
//}
//let data=fs.readFileSync("f1.txt");
//console.log(data+"");

let promiseToFileWillBeRead=fs.promises.readFile("f1.txt");
promiseToFileWillBeRead.then(function printData(data){
    console.log("fll fill promisses");
    console.log(data+"");
})
promiseToFileWillBeRead.catch(printError);

//function printData(data){
   // console.log("fll fill promisses");
   // console.log(data+"");
//}
function printError(err){
    console.log(err);
}
//console.log(promiseToFileWillBeRead);
console.log("after");