function InitCookie(){
    var exp=new Date();
    exp.setTime(exp.getTime()+(1000*6));
    d.cookie="Gambit=login;path=/;expires="+exp.toGMTString();
    }
    function getStyle(str){return d.getElementById(str).style;}
    function genHdLogin(titleName){
    InitCookie();
    showDiv('tabLogTit','tabLogTit');
    docW("<table><tr><div class=imgBigTitle><td valign=top noWrap>"+g_Sp3);
    docW("<font class=tdTitle>"+titleName+"</font>");
    showimg("","lightblue.jpg","imgLogTit");
    showimg("","login_key.jpg","imgLogTitKey");
    docW("</td></div></tr></table></div>");
    }
    function resizeLogin(){
    wsw=getWindowAvailWidth();
    wsh=getWindowAvailHeight();
    if(wsw==0||wsh==0){
    window.setTimeout("resizeLogin();","100");
    return;
    }
    if(g_bIsIE)
    getStyle('tabLogTit').width=336;
    getStyle('tabLogTit').left=(wsw-334)/2;
    getStyle('tabLogTit').top=(wsh-270)/2;
    getStyle('tabLogCont').left=(wsw-334)/2+35;
    getStyle('tabLogCont').top=(wsh-270)/2+100;
    }
    function showMsg(msg,noBt)
    {
    genHdLogin(Login0104);
    showTable('tabLogCont','tabLogCont');
    showNulLn();
    showNulLn();
    showTRTD(g_icAlert,28);
    docW("<td valign=middle>"+msg);
    if(!NotEmpty(noBt)&&!noBt)
    {
    showTD(strButton('apply',BT0109,'btnText','top.location.href="/";'),'','right');
    getObj("apply").focus();
    }
    resizeLogin();
    docW('</table>');
    }
    docW("<style><!--");
    docW(".tabLogTit{position:absolute;width:334;height:270;background:rgb(228,234,235);border:solid;border-width:1;border-color:rgb(19,99,147);}");
    docW(".imgLogTit{position:absolute;top:-1;left:0;z-index:0;width:334;height:30;border:none;}");
    docW(".imgLogTitKey{position:absolute;top:29;left:0;z-index:0;width:334;height:50;border:none;}");
    docW(".tabLogCont{position:absolute;width:280;border:none;}");
    docW(".tdTitle{position:absolute;z-index:1;font-size:18px;height:30;color:black;}");
    docW("--></style>");
    