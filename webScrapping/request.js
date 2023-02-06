/*
function yolo(){
    let a=10;
    function cb(){
        console.log("first");
    }
    //console.log("second");
    setTimeout(cb,5000); // web Api..asynchronous
    console.log(a);
}
yolo();
var b=100;
console.log(b);
*/

const request=require("request");
let url="https://www.espncricinfo.com/";
function yolo(){
    var a=10;
    function cb(err,res,body){
        if(err){
            console.log("error");
        }else{
            console.log("hellow how are you?");
            console.log("response",res.statusCode);
        }   
    }
    request(url,cb);
    console.log(a);

}
yolo();
var b=100;
console.log(b);
