var g_bIsNetscape=(navigator.appName.indexOf("Netscape")!=-1)&&(navigator.userAgent.indexOf("Netscape")!=-1);
var g_bIsFireFox=(navigator.appName.indexOf("Netscape")!=-1)&&(navigator.userAgent.indexOf("Firefox")!=-1);
var g_bIsOpera=(navigator.appName.indexOf("Opera")!=-1)&&(navigator.userAgent.indexOf("Opera")!=-1);
var g_bIsIE=(navigator.appName.indexOf("Internet Explorer")!=-1);
function getDataJS(sJSFile,fCallBack){
var _doc=d.getElementsByTagName('head')[0];
var js=d.createElement('script');
js.setAttribute('type','text/javascript');
js.setAttribute('src',DSD+sJSFile);
if(!g_bIsIE){
js.onload=function(){
if(fCallBack)fCallBack();
}
}
else{
js.onreadystatechange=function(){
if(js.readyState=='loaded'||js.readyState=='complete')if(fCallBack)fCallBack();
}
}
_doc.appendChild(js);
}
function getObj(sOID){
var obj,sTP=typeof(sOID);
if(sTP=='object')return sOID;
if(sTP=='string')obj=d.getElementById(sOID);
return(obj!=null&&typeof(obj)=='object')?obj:null;
}
function setObjProperty(sOID,sProperty,val){
var obj=getObj(sOID);
if(obj&&Defined(eval('obj.'+sProperty)))
{
var Old=eval('obj.'+sProperty);
if(Old!=val&&Old!=val+'px')
eval('obj.'+sProperty+"=val");
}
}
function getObjProperty(sOID,sProperty){
var obj=getObj(sOID);
if(obj&&Defined(eval('obj.'+sProperty)))
return eval('obj.'+sProperty);
return'';
}
function setTop(sOID,val){setObjProperty(sOID,'style.top',val);}
function setLeft(sOID,val){setObjProperty(sOID,'style.left',val);}
function setHeight(sOID,val){setObjProperty(sOID,'style.height',val<0?0:val);}
function setWidth(sOID,val){setObjProperty(sOID,'style.width',val<0?0:val);}
function DispObj(sOID,val){setObjProperty(sOID,'style.display','');}
function NDspObj(sOID,val){setObjProperty(sOID,'style.display','none');}
function showObj(sOID){setObjProperty(sOID,'style.visibility','visible');}
function hideObj(sOID){setObjProperty(sOID,'style.visibility','hidden');}
function EnableObj(sOID){setObjProperty(sOID,'disabled',0);}
function DisableObj(sOID){setObjProperty(sOID,'disabled',1);}
function getHeight(sOID){var val=getObjProperty(sOID,'style.height');return val==''?0:parseInt(val);}
function moveObj(sOID,top,left,height,width)
{
if(NotEmpty(top))setTop(sOID,top);
if(NotEmpty(left))setLeft(sOID,left);
if(NotEmpty(width))setWidth(sOID,width);
if(NotEmpty(height))setHeight(sOID,height);
}
function checkedTxt1(OneOrZero){return(OneOrZero=='1'||OneOrZero==1)?'checked':'';}
function selectedTxt(portNumber,mapPort){return(portNumber==mapPort)?'selected':'';}
function getPair(sPair){
var arrTmp=new Array();
if(typeof(sPair)=='string')arrTmp=sPair.split(',');
else	arrTmp[0]=sPair;
return	arrTmp;
}
function NotEmpty(str){return(Defined(str)&&(typeof(str)!='string'||str!=''));}
function addID(sID){return(NotEmpty(sID))?(" id="+sID):'';}
function addName(sName){return(NotEmpty(sName))?(" name="+sName):'';}
function addClass(sClass){return(NotEmpty(sClass))?(" class='"+sClass+"'"):'';}
function addValue(sValue){return(NotEmpty(sValue))?(" value='"+sValue+"'"):'';}
function addStyle(sStyle){return(NotEmpty(sStyle))?(" style='"+sStyle+"'"):'';}
function addWidth(sWidth){return(NotEmpty(sWidth))?(" width='"+sWidth+"'"):'';}
function addHeight(sHeight){return(NotEmpty(sHeight))?(" height='"+sHeight+"'"):'';}
function addOnClk(sOnClk){return(NotEmpty(sOnClk))?(" onClick='"+sOnClk+"'"):'';}
function addOther(sOther){return(NotEmpty(sOther))?(" "+sOther+'>'):'>';}
function addOtherEnd(sOther){return(NotEmpty(sOther))?(" "+sOther+' />'):' />';}
function addSelect(bSel){return(NotEmpty(bSel)&&bSel!=0)?" selected":'';}
function showimg(sID,sSrc,sClass,sStyle,sMOver,sOther){
var str="<img src='"+ICD+((NotEmpty(sSrc))?sSrc:"spacer.gif")+"'";
str+=" style='position:absolute;"+((NotEmpty(sStyle))?sStyle:'')+"'";
if(NotEmpty(sMOver))str+=" onmouseover='"+sMOver+"'";
str+=addID(sID)+addName(sID)+addClass(sClass)+addOtherEnd(sOther);
docW(str);
}
function showNulLn(sHeight){
var str="<tr><td colspan=9"+addHeight(sHeight)+">";
if(!NotEmpty(sHeight))str+=g_Sp1;
str+="</td></tr>";
docW(str);
}
function showLine(sHr,sText){
var str="<tr><td colspan=9>";
if(NotEmpty(sText))
str+=sText+"</td></tr>";
else if(NotEmpty(sHr))
str+="<hr"+addID(sHr)+addName(sHr)+"></td></tr>";
docW(str);
}
function strTD(sLable,sWidth,sAlign,sClass,sColspan,sOther){
var str="<td"+addWidth(sWidth)+addClass(sClass);
if(NotEmpty(sAlign))str+=" align='"+sAlign+"'";
if(NotEmpty(sColspan))str+=" colspan='"+sColspan+"'";
str+=addOther(sOther);
if(NotEmpty(sLable))str+=sLable+"</td>";
return str;
}
function showTD(sLable,sWidth,sAlign,sClass,sColspan,sOther){
docW(strTD(sLable,sWidth,sAlign,sClass,sColspan,sOther));
}
function showTDcgd(sLbl,sWidth){
showTD(sLbl,sWidth,'center','gd');
}
function strTR(sClass,sHeight,sOther){
return"<tr"+addClass(sClass)+addHeight(sHeight)+addOther(sOther);
}
function showTR(sClass,sHeight,sOther){
docW(strTR(sClass,sHeight,sOther));
}
function showTRTD(sLable,sWidth,sAlign,sClass,sColspan,sOther){
docW("<tr>"+strTD(sLable,sWidth,sAlign,sClass,sColspan,sOther));
}
function showDiv(sID,sClass,sStyle,sOther){
docW("<div"+addID(sID)+addName(sID)+addClass(sClass)+addStyle(sStyle)+addOther(sOther));
}
function strTable(sID,sClass,sTopLeft,sSpacing,sPadding,sWidthHigh,sStyle,sOther){
var str="<table"+addID(sID)+addName(sID)+addClass(sClass);
if(NotEmpty(sSpacing))str+=" cellspacing='"+sSpacing+"'";
if(NotEmpty(sPadding))str+=" cellpadding='"+sPadding+"'";
if(!NotEmpty(sStyle))sStyle='';
if(NotEmpty(sTopLeft)){
arrTmp=getPair(sTopLeft);
if(NotEmpty(arrTmp[0]))sStyle+='top:'+arrTmp[0]+';';
if(NotEmpty(arrTmp[1]))sStyle+='left:'+arrTmp[1]+';';
}
if(NotEmpty(sWidthHigh)){
arrTmp=getPair(sWidthHigh);
if(NotEmpty(arrTmp[0]))sStyle+='width:'+arrTmp[0]+';';
if(NotEmpty(arrTmp[1]))sStyle+='height:'+arrTmp[1]+';';
}
str+=addStyle(sStyle)+addOther(sOther);
return str;
}
function showTable(sID,sClass,sTopLeft,sSpacing,sPadding,sWidthHigh,sStyle,sOther){
docW(strTable(sID,sClass,sTopLeft,sSpacing,sPadding,sWidthHigh,sStyle,sOther));
}
function strSelect(sID,sClass,sOnChange,sOther){
var str="<select"+addID(sID)+addName(sID)+addClass(sClass);
if(NotEmpty(sOnChange))str+=" onchange='"+sOnChange+"'";
str+=addOther(sOther);
return str;
}
function showSelect(sID,sClass,sOnChange,sOther){
docW(strSelect(sID,sClass,sOnChange,sOther));
}
function showFieldset(sID,sLabel,sTop,sHeight,sStyle){
var str="<fieldset"+addID(sID)+addName(sID);
if(!NotEmpty(sStyle))sStyle='';
if(NotEmpty(sTop))
sStyle+='top:'+sTop+';';
if(NotEmpty(sHeight))
sStyle+='height:'+sHeight+';';
if(NotEmpty(sStyle))
str+=addStyle(sStyle);
str+="><legend>"+sLabel+"</legend>";
docW(str);
docW("</fieldset>");
}
function strOption(sValue,sLable,bSel,sOther){
var str="<option"+addSelect(bSel)+addValue(sValue)+addOther(sOther);
if(NotEmpty(sLable))str+=sLable;
else str+=sValue;
str+="</option>";
return str;
}
function showOption(sValue,sLable,bSel,sOther){
docW(strOption(sValue,sLable,bSel,sOther));
}
function strRadio(sID,sValue,sChecked,sOnClick,sLable,sOther){
var str="<input type=radio "+checkedTxt1(sChecked);
str+=addID(sID)+addName(sID)+addValue(sValue)+addOnClk(sOnClick)+addOtherEnd(sOther);
if(NotEmpty(sLable))str+=sLable;
return str;
}
function strChkBox(sID,sValue,sChecked,sOnClick,sLable,sOther){
var str="<input type=checkbox "+checkedTxt1(sChecked);
str+=addID(sID)+addName(sID)+addValue(sValue)+addOnClk(sOnClick)+addOtherEnd(sOther);
if(NotEmpty(sLable))str+=sLable;
return str;
}
function showChkBox(sID,sValue,sChecked,sOnClick,sLable,sOther){
docW(strChkBox(sID,sValue,sChecked,sOnClick,sLable,sOther));
}
function strText(sID,sClass,iMaxLen,sValue,sWidth,sStyle,sOther){
var str="<input type=text"+((NotEmpty(iMaxLen))?(" maxlength="+iMaxLen):'');
if(!Defined(sStyle))sStyle='';
if(!NotEmpty(sWidth)&&NotEmpty(iMaxLen))
sWidth=iMaxLen*8+10;
if(NotEmpty(sWidth))
sStyle+='width:'+sWidth+';';
str+=addID(sID)+addName(sID)+addClass(sClass)+
addValue(sValue)+addStyle(sStyle)+addOtherEnd(sOther);
return str;
}
function strPassword(sID,sClass,iMaxLen,sValue,sOther){
var str="<input type=password"+((NotEmpty(iMaxLen))?(" maxlength="+iMaxLen):'');
str+=addID(sID)+addName(sID)+addClass(sClass)+addValue(sValue)+addOtherEnd(sOther);
return str;
}
function showPassword(sID,sClass,iMaxLen,sValue,sOther){
docW(strPassword(sID,sClass,iMaxLen,sValue,sOther));
}
function strButton(sID,sValue,sClass,sOnClick,sOther){
return("<input type=button"+addID(sID)+addName(sID)+addValue(sValue)+addClass(sClass)+addOnClk(sOnClick)+addOtherEnd(sOther));
}
function showButton(sID,sValue,sClass,sOnClick,sOther){
docW(strButton(sID,sValue,sClass,sOnClick,sOther));
}
function strHideInput(sID,sValue,sOther){
return("<input type=hidden"+addID(sID)+addName(sID)+addValue(sValue)+addOtherEnd(sOther));
}
function hideInput(sID,sValue,sOther){
docW(strHideInput(sID,sValue,sOther));
}
function strRadioEnable(sID,bEn,sOnClick,sEnab,sDisab)
{
if(!NotEmpty(sEnab))sEnab=Pub0103+g_Sp6;
if(!NotEmpty(sDisab))sDisab=Pub0104;
return	strRadio(sID,'1',bEn,sOnClick,sEnab)+
strRadio(sID,'0',!NotEmpty(bEn)||bEn==0,sOnClick,sDisab)
}
function strSelectNum(sID,iMaxNum,idxSel,sOnChange,sOther)
{
var i,str=strSelect(sID,'BCSelect',sOnChange);
if(!NotEmpty(idxSel))idxSel=1;
for(i=1;i<=iMaxNum;i++){
str+=strOption(i,g_Sp3+'0'+i,i==idxSel);
}
str+="</select>";
return str;
}
function strSelectPort(sID,sOnChange,ptSel,bHasAll,sOther)
{
var i,str=strSelect(sID,'portSel',sOnChange,sOther);
if(NotEmpty(bHasAll)&&bHasAll!=0)
str+=strOption(0,Pub0112,0==ptSel);
if(!NotEmpty(ptSel))ptSel=1;
for(i=1;i<=g_PortNum;i++){
str+=strOption(i,FormPt(i),i==ptSel);
}
str+="</select>";
return str;
}
function strSelectOption(sID,aOption,idxSel,bReverse,sOnChange,sOther)
{
var i,idx,str='',
iMaxL=0,
sClass='BCSelect';
if(!NotEmpty(idxSel))
idxSel=0;
for(i in aOption)
{
if(NotEmpty(bReverse)&&bReverse==1)
idx=aOption.length-i-1;
else
idx=i;
var	item=aOption[idx],
itSw=item.replace(/&nbsp;/g,' ');
if(iMaxL<itSw.length)
iMaxL=itSw.length;
str+=strOption(idx,item,idxSel==idx);
}
str+='</select>';
if(iMaxL>10)sClass='';
else if(iMaxL>=7)sClass='BCSelect';
str=strSelect(sID,sClass,sOnChange,sOther)+str;
return str;
}
function strSelectVLAN(sID,sVIDSel,sOnChange,sOther)
{
var i,aRc,str=strSelect(sID,'BCSelect',sOnChange,sOther);
for(i in ds_QVLANList)
{
aRc=ds_QVLANList[i][0];
str+=strOption(aRc,g_Sp2+aRc,sVIDSel==aRc);
}
str+='</select>';
return str;
}
function strShowIP(sForm,sID,sIP)
{
var str='',sOth,sPa;
for(var i=0;i<4;i++)
{
sPa='this,\''+sForm+'.'+sID+'\','+(i+1);
sOth='onFocus="this.select();" onKeyDown="keyIP('+sPa+');" onKeyUp="tuneIP('+sPa+');"';
str+=strText(sID,'flat',3,splitIP(sIP,i),'','',sOth);
if(i!=3)
str+='. '
}
return str;
}
var g_nRetry=30;
var g_arrWkspMain=[680,null];
var g_arrWkspFunc=[0,0,0,0,0,0];
var g_arrWkspList=['',0,0,0,0,0,0,''];
var g_arrWkspMesg=['',0,0,''];
var g_arrWkspSecT=[['',0,1,0],['',0,1,0],['',0,1,0],['',0,1,0],['',0,1,0],['',0,1,0]];
var g_arrWkspUser=[['',0],['',0],['',0],['',0],['',0],['',0],['',0],['',0],['',0],['',0],['',0],['',0],['',0],['',0],['',0],['',0]];
function showLogoutTag(){
showObj('tabLogout');
setTop('tabLogout',0);
setLeft('tabLogout',getWindowAvailWidth()-240+d.body.scrollLeft);
}
function getSPWidth(iLeft,bIsSF){
var iWidth=1024-260;
var iWAW=getWindowAvailWidth();
if(!g_bIsIE){
iWAW-=2;
if(NotEmpty(bIsSF)&&bIsSF)iWAW-=4;
}
if(iWidth<iWAW)
iWidth=iWAW;
return iWidth-iLeft*2;
}
function getWindowAvailHeight(){
var iPageHeight=0;
var dB=d.body;
var dD=d.documentElement;
if(dD&&dD.clientHeight){
iPageHeight=dD.clientHeight;
}
else if(dB&&dB.clientHeight){
iPageHeight=dB.clientHeight;
}
return iPageHeight;
}
function getWindowAvailWidth(){
var iPageWidth=0;
var dB=d.body;
var dD=d.documentElement;
if(dD&&(dD.clientWidth)){
iPageWidth=dD.clientWidth;
}
else if(dB&&(dB.clientWidth)){
iPageWidth=dB.clientWidth;
}
return iPageWidth;
}
function setWkspHeight(iMinHeight){
g_arrWkspMain[0]=iMinHeight;
}
function genHdWksp(titleName,iMinHeight){
g_arrWkspMain[0]=iMinHeight;
g_arrWkspMain[1]=null;
g_arrWkspFunc=[0,0,0,0,0,0];
g_arrWkspList=['',0,0,0,0,0,0,''];
g_arrWkspMesg=['',0,0,''];
docW("<table id=tabLogout class=tabLogout onMouseOver=\"this.style.visibility='visible';\" "+
"onMouseOut=\"this.style.visibility='hidden';\" cellspacing=0>");
docW("<tr Height=35><td>"+g_Sp3+Logout0102+"<br>"+g_Sp3+Logout0103);
docW("</table>");
strTmp="<tr><td onmouseover=\"this.style.backgroundColor='#136393';this.style.color='#FFFFFF';p.leftMenu.showMenu3();\""+
" onmouseout=\"this.style.backgroundColor=this.style.color;this.style.color='#000000';\""+
" onMouseUp=\"p.leftMenu.hiddenAllMenu();window.open('";
showTable('menuHelp','themenubar','0,0',0,'',195,'',
"onMouseOver='p.leftMenu.showMenu3();'onmouseout='p.leftMenu.hiddenAllMenu();'")
docW(strTmp+URL_SUPPORT+"');\">&nbsp;"+Menu01031);
docW(strTmp+URL_USGUARD+"');\">&nbsp;"+Menu01032);
docW("</table>");
showDiv('tabBigTitle','tabTitle','',"onMouseOver='p.leftMenu.hiddenAllMenu();'");
docW("<table><tr><div class=imgBigTitle><td valign=top noWrap>"+g_Sp3+"<font class=tdBigTitle>"+titleName+"</font>");
showimg("imgBigTitle","graybar.bmp","imgBigTitle");
docW("</td></div></tr></table></div>");
if(window.onresize!=resizeWS){
g_arrWkspMain[1]=window.onresize;
window.onresize=resizeWS;
}
}
function genMsgTable(titleName,strTableID,iWidth,iHeight,strContentID){
g_arrWkspMesg[0]=strTableID;
g_arrWkspMesg[1]=iWidth;
g_arrWkspMesg[2]=iHeight;
g_arrWkspMesg[3]=strContentID;
showDiv('tab'+strTableID,'tabTitle',"width:"+iWidth+";height:"+iHeight+";");
docW("<table><tr><div class=imgSecTitle><td valign=top noWrap>"+g_Sp3+"<font class=tdSecTitle>"+titleName+"</font>");
showimg('img'+strTableID,"blackbar.gif","imgSecTitle","width:"+(g_bIsIE?iWidth:iWidth+1)+";");
docW("</td></div></tr></table></div>");
}
function genListhead(strID,arrHead){
var i,str,
sClsR='',
sClsD='',
eType=g_arrWkspList[6],
sWidth=g_arrWkspList[7];
if(eType==0){
sClsD='bh';
if(!isNaN(sWidth))sWidth='100%'
}
if(eType==1){sClsR='gh';sClsD='gd';}
str=strTable('','tabRelative','',0,0,sWidth);
str+=strTR(sClsR,20);
for(i in arrHead)
str+=strTD(arrHead[i][0],arrHead[i][1],'center',sClsD);
str+='</table>';
return str;
}
function genListCont(sID,arrContent,sDefStyle,arrStyle,iMaxEntry,noWrap){
var i,j,str,sFont,
sClsR='',sClsD='',
arrHead=g_arrWkspList[1],
eType=g_arrWkspList[6],
sDefFont=(NotEmpty(sDefStyle))?'<font style="'+sDefStyle+'">':'',
wrap=(NotEmpty(noWrap)&&noWrap==1)?'noWrap':'';
if(eType==0)sClsD='bh';
if(eType==1){sClsR='gh';sClsD='gd';}
str=strTable('tab'+sID,'tabRelative','',0,0,g_arrWkspList[7]);
str+=strTR(sClsR,19);
for(i in arrHead)
str+=strTD(arrHead[i][0],arrHead[i][1],'center',sClsD,'',wrap);
if(eType==0)sClsD='bw';
for(j in arrContent){
if(NotEmpty(iMaxEntry)&&j>=iMaxEntry)break;
if(eType==1)sClsR=j%2?'gw':'gx';
str+=strTR(sClsR);
for(i in arrHead){
if(NotEmpty(arrStyle)&&NotEmpty(arrStyle[j])&&NotEmpty(arrStyle[j][i]))
sFont='<font style="'+arrStyle[j][i]+'">';
else
sFont=sDefFont;
str+=strTD(sFont+arrContent[j][i],arrHead[i][1],'center',sClsD,'',wrap);
}
}
str+='</table>';
setObjProperty("list"+sID,'innerHTML',str);
}
function ShowList(sID,bIsShow){
if(!NotEmpty(bIsShow)||bIsShow==1){
showObj("tHD"+sID);
showObj("list"+sID);
}
else{
hideObj("tHD"+sID);
hideObj("list"+sID);
}
}
function setListTop(sID,iTop){
g_arrWkspList[2]=iTop;
}
function genList(sID,arrHead,iTop,iLeft,bAutoSize,iBMargin,eType,iWidth,bNoHead){
var str;
if(!NotEmpty(eType))eType=0;
g_arrWkspList[0]=sID;
g_arrWkspList[1]=arrHead;
g_arrWkspList[2]=iTop;
g_arrWkspList[3]=iLeft;
g_arrWkspList[4]=g_bIsNetscape?0:bAutoSize;
g_arrWkspList[5]=iBMargin;
g_arrWkspList[6]=eType;
g_arrWkspList[7]=NotEmpty(iWidth)?iWidth:'100%';
str="<div id=list"+sID+" style='position:absolute;top:"+iTop+";left:"+iLeft+";width:400;height:20;overflow-y:auto;";
if(eType==0)
str+="border:solid;border-width:2;border-color:gray white white gray;'>";
if(eType==1)
str+="border:none;'>";
docW(str+"</div>");
if(eType==0){
iTop+=1;
iLeft+=1;
}
if(!NotEmpty(bNoHead)||!bNoHead){
str="<div id=tHD"+sID+" style='position:absolute;z-index:2;top:"+iTop+";left:"+iLeft+";overflow:visible;'>";
str+=genListhead(sID,arrHead);
docW(str+"</div>");
}
}
function recRSItem(strTableID,iLeft,bIsSF){
var idx=g_arrWkspFunc[5];
var iWidth=getSPWidth(iLeft,bIsSF);
g_arrWkspUser[idx][0]=strTableID;
g_arrWkspUser[idx][1]=iLeft;
g_arrWkspUser[idx][2]=NotEmpty(bIsSF)?bIsSF:0;
setLeft(strTableID,iLeft);
setWidth(strTableID,iWidth);
g_arrWkspFunc[5]++;
}
var g_cntErrWS=0,g_cntOKWS=0;
var g_resizeTime=new Date();
var g_isSetTime=0;
function retryResizeWS(){
g_isSetTime=0;
resizeWS();
}
function resizeWS(){
if(g_isSetTime)
return;
var now=new Date();
if(now-g_resizeTime<50)
{
g_isSetTime=1;
window.setTimeout("retryResizeWS();","60");
return;
}
var wkspHeight=g_arrWkspMain[0],
iWAW=getWindowAvailWidth(),
iWAH=getWindowAvailHeight();
if(iWAH==0||iWAW==0||g_cntOKWS==0){
g_cntErrWS++;
g_cntOKWS++;
if(iWAH==0||iWAW==0)g_cntOKWS=0;
else	g_cntErrWS=0;
if(g_cntErrWS<g_nRetry)
window.setTimeout("resizeWS();","60");
if(g_cntErrWS)
return;
}
else
g_cntErrWS=g_cntOKWS=0;
g_resizeTime=now;
if(g_bIsFireFox)
iWAH-=10;
if(wkspHeight<iWAH-4)
wkspHeight=iWAH-4;
var lst=getObj('list'+g_arrWkspList[0]),
lsttab=getObj('tab'+g_arrWkspList[0]);
if(g_arrWkspList[0]!=''&&!g_arrWkspList[4]){
var iMinH=lsttab.offsetHeight+(g_bIsIE?4:0)+g_arrWkspList[2]+g_arrWkspList[5]-20;
if(wkspHeight<iMinH)
wkspHeight=iMinH;
}
var iWidth=getSPWidth(2),iheigh;
setLeft('tabBigTitle',2);
setWidth('tabBigTitle',iWidth);
setWidth('imgBigTitle',g_bIsIE?iWidth:iWidth+1);
setHeight('tabBigTitle',wkspHeight);
if(g_arrWkspMesg[0]!=''){
var iLeft=(iWAW-g_arrWkspMesg[1])/2;
var iTop=(iWAH-g_arrWkspMesg[2])/2;
if(iLeft<60)iLeft=60;
if(iTop<80)iTop=80;
setLeft('tab'+g_arrWkspMesg[0],iLeft);
setTop('tab'+g_arrWkspMesg[0],iTop);
if(NotEmpty(g_arrWkspMesg[3])){
setLeft(g_arrWkspMesg[3],iLeft+20);
setTop(g_arrWkspMesg[3],iTop+20);
}
}
if(g_arrWkspList[0]!=''){
var iTop=g_arrWkspList[2],
eType=g_arrWkspList[6],
sWidth=g_arrWkspList[7];
iWidth=getSPWidth(g_arrWkspList[3]);
setLeft(lst,g_arrWkspList[3]);
setWidth(lst,iWidth);
setTop(lst,iTop);
if(g_arrWkspList[4])
iheigh=getmax(lsttab.offsetHeight,lst.scrollHeight);
else
iheigh=lsttab.offsetHeight;
iheigh+=(g_bIsIE?4:0);
if(g_arrWkspList[4]){
var iMaxH=wkspHeight-iTop-g_arrWkspList[5]+20;
if(iheigh>iMaxH)
iheigh=iMaxH;
}
setHeight(lst,iheigh);
var iwScr=(lst==null)?0:lst.offsetWidth-lst.clientWidth;
iWidth-=iwScr;
if(isNaN(sWidth))
iWidth*=parseInt(sWidth)/100;
else
iWidth=parseInt(sWidth);
if(eType==0){
iWidth+=(g_bIsIE||!isNaN(sWidth)?0:4)+1;
iTop+=1;
}
setTop('tHD'+g_arrWkspList[0],iTop);
setWidth('tHD'+g_arrWkspList[0],iWidth);
}
for(i=0;i<g_arrWkspFunc[5];i++){
iWidth=getSPWidth(g_arrWkspUser[i][1],g_arrWkspUser[i][2]);
setLeft(g_arrWkspUser[i][0],g_arrWkspUser[i][1]);
setWidth(g_arrWkspUser[i][0],iWidth);
}
if(g_arrWkspMain[1]!=null)
g_arrWkspMain[1]();
if(getObj('tabLogout').style.visibility=='visible')
showLogoutTag();
iWidth=getSPWidth(2);
setLeft('tabBigTitle',2);
setWidth('tabBigTitle',iWidth);
setWidth('imgBigTitle',g_bIsIE?iWidth:iWidth+1);
}
function Compute_BitMap_AND(Str_src,Str_des){
if(isNaN(Str_src)||isNaN(Str_des))return'WORNG_STRING';
if(Str_src.length!=Str_des.length)return'WORNG_LENGTH';
var outputStr='';
for(var k=0;k<Str_src.length;k++)
outputStr+=(Str_src.charAt(k)&Str_des.charAt(k));
return outputStr;
}
function IsNoIntersectionOrContainStr(mainStr,subStr){
var strAnd=Compute_BitMap_AND(mainStr,subStr);
return(strAnd.indexOf('1')==-1||strAnd==subStr);
}
function IsIntersection(mainStr,subStr){
var strAnd=Compute_BitMap_AND(mainStr,subStr);
return(strAnd.indexOf('1')!=-1);
}
function GetValueInURL(URLstr,ObjName){
URLstr=unescape(URLstr);
ObjName=ObjName+"=";
var newURLstr=URLstr.substring(URLstr.indexOf('?')+1,URLstr.length);
var URLArray=newURLstr.split('&');
for(var i in URLArray)
if(URLArray[i].indexOf(ObjName)!=-1)
return URLArray[i].substring(ObjName.length,URLArray[i].length);
return null;
}
function submitForm(sForm,sCGI){
with(sForm){
method=CGI_Method;
action=CGI_Dir+sCGI;
submit();
}
}
function getmax(a,b,c,d,e,f){
if(NotEmpty(b)&&b>a)a=b;
if(NotEmpty(c)&&c>a)a=c;
if(NotEmpty(d)&&d>a)a=d;
if(NotEmpty(e)&&e>a)a=e;
if(NotEmpty(f)&&f>a)a=f;
return a;
}
function Eq2WdInt(val){
return(val<10?'0'+val:val);
}
function timeFormat(second){
tmin=parseInt(second/60);
tSec=second%60;
return Eq2WdInt(tmin)+':'+Eq2WdInt(tSec);
}
function errProcess(nType,objIN,errMsg,vRt){
if(NotEmpty(errMsg))alert(errMsg);
if(NotEmpty(objIN)&&typeof(objIN)=='object'){
if(nType==1)objIN.select();
objIN.focus();
}
if(NotEmpty(vRt))return vRt;
}
function errSelect(objIN,errMsg,vRt){
return errProcess(0,objIN,errMsg,vRt)
}
function errInput(objIN,errMsg,vRt){
return errProcess(1,objIN,errMsg,vRt)
}
function checkStringInput(obj,errMsg,strSpecial){
var sBan='~`!@#$%^&*{}[]|\\:;\"\'<>,.?/',
sChk=obj.value;
if(NotEmpty(strSpecial))
sBan=strSpecial;
for(var i=0;i<sChk.length;i++)
if(sBan.indexOf(sChk.charAt(i))!=-1)return errInput(obj,errMsg,false);
return true;
}
function checkIntegerInput(obj,min_val,max_val){
var value=obj.value;
if(value==''||isNaN(value)||value.indexOf(" ")!=-1||value.indexOf(".")!=-1)
return errInput(obj,Tip0102,false);
if(value<min_val||value>max_val)
return errInput(obj,Tip0103+min_val+" - "+max_val,false);
return true;
}
function checkNumberInput(obj,min_val,max_val){
var value=obj.value;
min_val=parseFloat(min_val);
max_val=parseFloat(max_val);
if(value==''||isNaN(value)||value.indexOf(" ")!=-1)
return errInput(obj,Tip0104,false);
if(value<min_val||value>max_val)
return errInput(obj,Tip0103+min_val+" - "+max_val,false);
return true;
}
function Int2PortList(iPtLst,iPtNum){
var ptLst='';
for(var i=0;i<iPtNum;i++)
ptLst+=(iPtLst&(1<<i))?'1':'0';
return ptLst;
}
function FormGr(val){
if(val>g_TrunkFstID){
return('Group 0'+(val-g_TrunkFstID));
}
return(val);
}
function FormCh(val){
var i,ch=0;
if(ds_TrunkStat)for(i in ds_TrunkList){
ch++;
if(ds_TrunkList[i].charAt(val-1)!='0')return('channel'+ch);
}
return('eth'+val);
}
function FormPt(val){
return('eth'+val);
}
function chgToPortIndex(fromPortObj,toPortObj){
toPortObj.selectedIndex=fromPortObj.selectedIndex;
}
function chkFromPortRight(fromPortObj,toPortObj){
if(toPortObj.selectedIndex<fromPortObj.selectedIndex){
alert(Tip0101);
toPortObj.selectedIndex=fromPortObj.selectedIndex;
}
}
function getPtList(ptMem,tChar,nPerLn){
var sPts='',i,
iCnt=0;
for(i=0;i<ptMem.length&&i<g_PortNum;i++){
if(ptMem.charAt(i)==tChar){
if(iCnt>0){
sPts+=',';
if(NotEmpty(nPerLn)&&iCnt%nPerLn==0)sPts+='<br>';
else if(g_PortNum>5&&iCnt%4==0)sPts+=' ';
}
sPts+=FormPt(i+1);
iCnt++;
}
}
return sPts;
}
function getPtChList(ptMem,tChar,nPerLn){
var sPts='',i,j,ch=0,
iCnt=0,bIsCh;
var bCh=new Array();
bCh[0]=0;
bCh[1]=0;
for(i=0;i<ptMem.length&&i<g_PortNum;i++){
if(ptMem.charAt(i)==tChar){
bIsCh=0;
if(ds_TrunkStat)for(j in ds_TrunkList){
if(ds_TrunkList[j].charAt(i)!='0'){
bCh[j]=1;bIsCh=1;
}
}
if(bIsCh==0){
if(iCnt>0){
sPts+=',';
if(NotEmpty(nPerLn)&&iCnt%nPerLn==0)sPts+='<br>';
else if(g_PortNum>5&&iCnt%4==0)sPts+=' ';
}
sPts+=FormPt(i+1);
iCnt++;
}
}
}
if(ds_TrunkStat)for(j in ds_TrunkList){
ch++;
if(bCh[j]==1){
if(iCnt>0){
sPts+=',';
if(NotEmpty(nPerLn)&&iCnt%nPerLn==0)sPts+='<br>';
else if(g_PortNum>5&&iCnt%4==0)sPts+=' ';
}
sPts+='channel'+ch;
iCnt++;
}
}
return sPts;
}
function Int2IPString(intIP){
var ip='';
ip+=((intIP>>24)&0xFF)+'.';
ip+=((intIP>>16)&0xFF)+'.';
ip+=((intIP>>08)&0xFF)+'.';
ip+=((intIP>>00)&0xFF);
return ip;
}
function splitIP(fullIP,iSeq){
return fullIP.split(".")[iSeq];
}
function CheckIPValid(ipObj){
for(i=0;i<4;i++){
if((ipObj[i]=='')||isNaN(ipObj[i])||ipObj[i]<0||ipObj[i]>255||(ipObj[i].indexOf('.')>-1))return 1;
}
if((ipObj[0]==0||ipObj[0]==127||ipObj[0]==255)||
(ipObj[0]<=254&&ipObj[0]>=224)||
(ipObj[0]<=223&&ipObj[0]>=192&&ipObj[3]==255)||
(ipObj[0]<=191&&ipObj[0]>=128&&ipObj[2]==255&&ipObj[3]==255)||
(ipObj[0]<127&&ipObj[1]==255&&ipObj[2]==255&&ipObj[3]==255))
return 1;
return 0;
}
var g_strKeyIN=['',''];
function keyIP(obj,sFmID,idx)
{
g_strKeyIN[0]=obj;
g_strKeyIN[1]=obj.value;
}
function tuneIP(obj,sFmID,idx)
{
var tgt=eval(sFmID)[idx],
sVl=obj.value,
len=sVl.length;
var nn=isNaN(sVl);
if(nn||sVl.slice(-1)=='.'||sVl!=Math.round(sVl))
{
for(var i=0;i<len;)
{
var ch=sVl.slice(i,i+1);
if(isNaN(ch)||ch=='.')
{
obj.value=sVl.slice(0,i)+sVl.slice(i+1);
sVl=obj.value;
len=sVl.length;
if(ch=='.')
{
if(obj.value=='')
obj.value=0;
}
continue;
}
i++;
}
if(nn)
tgt=obj;
}
else if(sVl>255)
{
obj.value=sVl.slice(0,len-1);
return;
}
else if(len<3||g_strKeyIN[0]!=obj||g_strKeyIN[1]==sVl)
return;
if(Defined(tgt))
{
tgt.focus();
tgt.select();
}
}
function isTrunkingPort(chkPort){
if(ds_TrunkStat)for(var i in ds_TrunkList)
if(ds_TrunkList[i].charAt(chkPort-1)!='0')return true;
return false;
}
function isCoverTrunkingPort(sPortBitmap){
if(ds_TrunkStat)for(var i in ds_TrunkList)
if(!IsNoIntersectionOrContainStr(sPortBitmap,ds_TrunkList[i]))return false;
return true;
}
function formMACString(strMac){
if(strMac.length==12){
strRt=strMac.substr(0,2)+"-"+strMac.substr(2,2)+"-"+strMac.substr(4,2)+"-"+
strMac.substr(6,2)+"-"+strMac.substr(8,2)+"-"+strMac.substr(10,2);
strMac=strRt;
}
return strMac.toUpperCase();
}
function CheckMACformat(MacStr,allowDeviceMAC,allowMutliCatMAC,allowBroadcastMAC,NoUnicastMAC)
{
var Broadcast_MAC='FF-FF-FF-FF-FF-FF';
var notAllowMac=['00-00-00-00-00-00'];
var MacPattern=new RegExp("^([0-9A-F][0-9A-F]-){5}[0-9A-F][0-9A-F]$","i");
if(!MacPattern.test(MacStr)){
alert(MStatic102);
return'Invalid Format';
}
for(var i in notAllowMac){
if(MacStr==notAllowMac[i]){
alert(notAllowMac[i]+MStatic103);
return'Not Allowed MAC';
}
}
if(!NotEmpty(allowDeviceMAC)||!allowDeviceMAC){
if(parseInt(MacStr.split('-').join(''),16)==parseInt(g_DeviceInfo[2].split('-').join(''),16)){
alert(MStatic104);
return'Equal to DeviceMac';
}
}
if(!NotEmpty(allowBroadcastMAC)||!allowBroadcastMAC){
if(MacStr.toUpperCase()==Broadcast_MAC){
alert(MStatic105);
return'Broadcast MAC';
}
}
if(!NotEmpty(allowMutliCatMAC)||!allowMutliCatMAC){
if(parseInt(MacStr.split('-')[0],16)&1){
alert(MStatic106);
return'Mutlitcast MAC';
}
}
if(NotEmpty(NoUnicastMAC)&&NoUnicastMAC){
if((parseInt(MacStr.split('-')[0],16)&1)!=1){
alert(MStatic118);
return'Unicast MAC';
}
}
return'OK';
}
