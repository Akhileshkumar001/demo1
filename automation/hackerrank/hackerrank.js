const puppeteer=require("puppeteer");
let email="";
let password="";
let cTab;
let browseOpenPromisses=puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximised"],
});
browseOpenPromisses  //full fill
    .then(function(browser){
     // console.log(browser);
     //An array of all open pages inside the Browser.
     console.log("browser is open");
     let allTabsPromisses=browser.pages()
     return allTabsPromisses;
    })
    .then(function(allTabsArr){
      cTab=allTabsArr[0];
      console.log("oepn Newtab");
      let vestingLogingPagePromisses=cTab.goto("https://www.hackerrank.com/auth/login");
    //console.log("oepn Newtab");
    return vestingLogingPagePromisses;
    })
    .then(function(){
        console.log("hakerrank login page has open");
        let loginEmailwillBeTypedPromisses=cTab.type("input[name='username']",email);
        return loginEmailwillBeTypedPromisses;
     })
     .then(function(){
        console.log("email is typed");
        let passwordwillBeTypedPromisses=cTab.type("input[name='password']",password);
        return passwordwillBeTypedPromisses;
     })
     .then(function(){
        console.log("passwoered typed");
        let loginTohackerRankpomisses=cTab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
        return loginTohackerRankpomisses;
     })
     .then(function(){
        console.log("loging in to hackerrank sucessesfull");
        let AlgortihamTabWillBeOpenedPromise=WaitandClick("div[data-automation='algorithms']");
        return AlgortihamTabWillBeOpenedPromise;
     })
     .catch(function(err){
        console.log("error");
     })
      function WaitandClick(selector){
        let myPromise=new Promise(function(resolve,err){
            let WaitforSelectorPomises=cTab.waitForSelector(selector);
        WaitforSelectorPomises   
        .then(function(){
            console.log("algo btn is found");
            let ClickedPromises=cTab.click(selector);
            return ClickedPromises;
        })
        .then(function(){
            console.log("algo btn is clicked");

        })
        .catch(function(err){
            console.log("err");
        })
    });
    return myPromise;        
}