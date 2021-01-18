// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://www.lazada.vn/*
// @match        https://pages.lazada.vn/wow/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    var currentdate = new Date();
    var datetime = currentdate.toLocaleTimeString('en-GB');
    var timeInter = new Date('1-18-2021 09:00:15') - currentdate;
    var urlCheck = window.location.href;
    if(urlCheck.includes('www.lazada.vn'))
    {
         setInterval(function(){
            window.location = 'https://pages.lazada.vn/wow/gcp/route/lazada/vn/upr_1000345_lazada/channel/vn/upr-router/vn?wx_navbar_transparent=true&hybrid=1&data_prefetch=true&wh_pid=/lazada/megascenario/vn/tet-2021/tet-21-chot-don';
         }, timeInter);
    }
    if(urlCheck.includes('pages.lazada.vn'))
    {
       window.onload = function(){
           var temp = 0;
           var x = document.getElementsByClassName('text');
                for(var i = 1; i< x.length; i++)
                {
                    if( (x[i].innerText == "90.000" && x[i].style.color == "rgb(245, 28, 67)" ) || (x[i].innerText == "150.000" && x[i].style.color == "rgb(245, 28, 67)" ) ||
					(x[i].innerText == "300.000" && x[i].style.color == "rgb(245, 28, 67)" )|| (x[i].innerText == "880.000" && x[i].style.color == "rgb(245, 28, 67)" ) )
                    {
                        x[i].click();
                        temp+=1;
                    }
                }
           if(temp == 0)
              {
                  setTimeout(function(){
                      window.location = 'https://pages.lazada.vn/wow/gcp/route/lazada/vn/upr_1000345_lazada/channel/vn/upr-router/vn?wx_navbar_transparent=true&hybrid=1&data_prefetch=true&wh_pid=/lazada/megascenario/vn/tet-2021/tet-21-chot-don';
                      ; }, 3000);
              }
       };
    }
})();
