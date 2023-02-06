const request=require("request");
const cheerio=require("cheerio");
const { get } = require("request");
function getAllMatches(url){
    console.log(getAllMatches);
    request(url,cb);
}
function cb(err,res,body){
    if(err){
        console.error("error",err)
    }else{
        extractAllMatchLink(body);
    }
}
function extractAllMatchLink(html){
    let selecTool=cheerio.load(html);
    let ScoreCarElemArr=selecTool('a[data-hover="Scorecard"]');
    console.log(ScoreCarElemArr.length);
}
module.exports={
    getAllMatches:getAllMatches,
};    