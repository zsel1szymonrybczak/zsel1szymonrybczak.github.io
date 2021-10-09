var d=document,p=parent,RD;
function docW(str){d.write(str);}
function Defined(str){return(typeof(str)!='undefined');}
if(typeof(RT)!="undefined")
RD=RT;
else if(typeof(p.RT)!="undefined")
RD=p.RT;
else if(typeof(p.p.RT)!="undefined")
RD=p.p.RT;
else{
RD=top.location.href;
RD=RD.substring(0,RD.lastIndexOf('/')+1);
var len=RD.length;
if(RD.slice(-5)=="/iss/")
RD=RD.slice(0,len-4);
}
var	DSD=RD+'DS/',
ICD=RD+'Icon/',
TRD=RD+'tree/',
ISD=RD+'iss/',
CGI_Dir='/cgi/',
CGI_Method='post';
function ImgIcon(n,w,h,ox,oy)
{
if(typeof(oy)=="undefined")oy=0;
docW("."+n+"{");
docW("width:"+w+"px;height:"+h+"px;");
docW("background-image:url("+ICD+"icon.gif);");
docW("background-position:-"+ox+"px -"+oy+"px;}");
}
docW("<style type='text/css'>");
ImgIcon("user",24,24,0);
ImgIcon("alert",20,20,25);
ImgIcon("save",16,16,46);
ImgIcon("tool",16,16,63);
ImgIcon("logout",16,16,80);
ImgIcon("help",16,16,97);
ImgIcon("divide",2,16,114);
ImgIcon("triangle",7,4,25,20);
docW("</style>");
str="<img src='"+ICD+"spacer.gif' class=";
g_icAlert=str+"alert></img>";
g_icTriangle=str+"triangle></img>";
function csInclude(fg,name){
str="<link rel=stylesheet type='text/css' href='";
if(fg==0)str+=RD;
if(fg==1)str+=DSD;
if(fg==2)str+=TRD;
str+=name+"'/>";
docW(str);
}
function jsInclude(fg,name){
str="<script type='text/javascript' src='";
if(fg==0)str+=RD;
if(fg==1)str+=DSD;
if(fg==2)str+=TRD;
str+=name+"'></script>";
docW(str);
}
function isTree(){
return(location.href.indexOf(TRD)!=-1);
}
jsInclude(0,'en.js');
jsInclude(1,'const.js');
jsInclude(0,'form.js');
if(isTree())
csInclude(2,"theme.css");
else{
csInclude(0,'main.css');
jsInclude(0,'login.js');
}
