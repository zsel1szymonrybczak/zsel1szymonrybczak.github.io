function ImgTree(n,w,h,ox)
{
docW("."+n+"{");
docW("width:"+w+"px;height:"+h+"px;");
docW("background-image:url("+TRD+"tree.gif);");
docW("background-position:-"+ox+"px 0px;}");
}
docW("<style type='text/css'>");
ImgTree("root",20,20,0);
ImgTree("folder",16,16,21);
ImgTree("open",16,16,38);
ImgTree("file",16,16,55);
ImgTree("join",19,16,69);
ImgTree("joinbtm",19,16,89);
ImgTree("minus",19,16,109);
ImgTree("minusbtm",19,16,129);
ImgTree("plus",19,16,149);
ImgTree("plusbtm",19,16,169);
ImgTree("line",19,16,189);
ImgTree("empty",19,16,199);
docW("</style>");
var ctThemeXPBase='';
str="<img src='"+ICD+"spacer.gif' border=0 class=";
str1=str+"root />";
str2=str+"folder />";
str3=str+"open />";
str4=str+"plus />";
str5=str+"minus />";
str6=str+"plusbtm />";
str7=str+"minusbtm />";
str8=str+"file />";
str9=str+"join />";
str10=str+"joinbtm />";
str11=str+"line />";
str12=str+"empty />";
var ctThemeXP1={
Root:[str1],
folderLeft:[[str2,str3]],
folderRight:[['','']],
folderConnect:[[[str4,str5],[str6,str7]]],
itemLeft:[str8],
itemRight:[''],
itemConnect:[[str9,str10]],
spacer:[[str11,str12]],
themeLevel:1
};
