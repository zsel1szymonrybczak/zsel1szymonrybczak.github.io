function ctTreeInfo(nodeProperties,prefix,hideType,expandLevel){
    this.nodeProperties=nodeProperties;
    this.currentItem=null;
    this.prefix=prefix;
    this.hideType=hideType;
    this.expandLevel=expandLevel;
    this.beginIndex=0;
    this.endIndex=0;
    }
    var _ctNodeProperties=
    {
    folderLeft:[['','']],
    folderRight:[['','']],
    itemLeft:[''],
    itemRight:[''],
    folderConnect:[[['',''],['','']]],
    itemConnect:[['',''],['','']],
    spacer:[['&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;','&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;']],
    themeLevel:1,
    matching:0
    };
    var _ctIDSubMenuCount=0;
    var _ctIDSubMenu='ctSubTreeID';
    var _ctCurrentItem=null;
    var _ctItemList=new Array();
    var _ctTreeList=new Array();
    var _ctMenuInitStr='';
    var _ctItemAction=' onmouseover="ctItemMouseOver(this.parentNode)" onmouseout="ctItemMouseOut(this.parentNode)" onmousedown="ctItemMouseDown(this.parentNode)" onmouseup="ctItemMouseUp(this.parentNode)"';
    function ctNewSubMenuID(){return _ctIDSubMenu+(++_ctIDSubMenuCount);}
    function ctGetPropertyLevel(level,property){return(level>=property.length)?(property.length-1):level;}
    function ctExpandTree(id,expandLevel){
    var obj=ctGetObject(id);
    if(obj&&expandLevel>0){
    var thisMenu=obj.firstChild;
    if(thisMenu)
    ctExpandTreeSub(thisMenu,expandLevel)
    }
    }
    function ctExpandTreeSub(subMenu,expandLevel){
    if(subMenu.ctLevel>=expandLevel)return;
    var i,item;
    for(i=0;i<subMenu.ctItems.length;++i){
    item=subMenu.ctItems[i];
    if(item.ctIdSub){
    ctOpenFolder(item);
    ctExpandTreeSub(ctGetObject(item.ctIdSub),expandLevel);
    }
    }
    }
    function ctDraw(id,tree,nodeProperties,prefix,hideType,expandLevel){
    var obj=ctGetObject(id);
    if(!nodeProperties)nodeProperties=_ctNodeProperties;
    if(!prefix)prefix='';
    if(!hideType)hideType=0;
    if(!expandLevel)expandLevel=0;
    _ctTreeList[_ctTreeList.length]=new ctTreeInfo(nodeProperties,prefix,hideType,expandLevel);
    var treeIndex=_ctTreeList.length-1;
    var beginIndex=_ctItemList.length;
    _ctMenuInitStr='';
    var str=ctDrawSub(tree,true,null,treeIndex,0,nodeProperties,prefix,'');
    obj.innerHTML=str;
    eval(_ctMenuInitStr);
    _ctMenuInitStr='';
    var endIndex=_ctItemList.length;
    _ctTreeList[treeIndex].beginIndex=beginIndex;
    _ctTreeList[treeIndex].endIndex=endIndex;
    if(expandLevel)ctExpandTree(id,expandLevel);
    return treeIndex;
    }
    function ctDrawSub(subMenu,isMain,id,treeIndex,level,nodeProperties,prefix,indent){
    var strSub='';
    var link='';
    var item,itemID,idSub,hasChild,hasNext;
    var classStr,index;
    var themeLevel=nodeProperties.themeLevel;
    var lvl=(level<themeLevel)?level:themeLevel;
    var i=(isMain)?0:5;
    var className=' class="'+prefix+'Row"';
    var str='<div class="'+prefix+'TreeLevel'+lvl+'"';
    if(!isMain)str+=' id="'+id+'"';
    str+='>';
    for(;i<subMenu.length;++i){
    item=subMenu[i];
    if(!item)continue;
    _ctItemList[_ctItemList.length]=item;
    index=_ctItemList.length-1;
    hasChild=(item.length>5);
    idSub=hasChild?ctNewSubMenuID():null;
    str+='<table cellspacing="0" class="'+prefix+'Table">';
    str+='<tr'+className;
    if(hasChild)str+=' id="JSCookTreeFolderClosed">';
    else	str+=' id="JSCookTreeItem">';
    classStr=prefix+(hasChild?'Folder':'Item');
    itemID='ctItemID'+index;
    _ctMenuInitStr+='ctSetupItem(ctGetObject("'+itemID+'").parentNode,'
    +index+','+treeIndex+','+level+','
    +(idSub?('"'+idSub+'"'):'null')+');';
    str+='<td class="'+classStr+'Spacer" id="'+itemID+'">'+indent+'</td>';
    link="<a href='javascript:void(0);' onfocus='this.blur();'";
    if(item[2]){
    link+=' onclick="';
    if(item[3])link+='p.p.'+item[3]+'.location.';
    link+="href='"+item[2]+"';\"";
    }
    link+=' title="'+(item[4]?item[4]:item[1])+'">'
    hasNext=ctHasNextItem(i,subMenu)?0:1;
    str+='<td class="'+classStr+'Left"'+_ctItemAction+'>';
    if(item[0]){str+=item[0];}
    else if(hasChild){
    lvl=ctGetPropertyLevel(level,nodeProperties.folderConnect);
    str+='<span class="JSCookTreeFolderClosed">'+nodeProperties.folderConnect[lvl][hasNext][0]+'</span>'+
    '<span class="JSCookTreeFolderOpen">'+nodeProperties.folderConnect[lvl][hasNext][1]+'</span>';
    lvl=ctGetPropertyLevel(level,nodeProperties.folderLeft);
    str+='<span class="JSCookTreeFolderClosed">'+nodeProperties.folderLeft[lvl][0]+'</span>'+
    '<span class="JSCookTreeFolderOpen">'+nodeProperties.folderLeft[lvl][1]+'</span>';
    }
    else{
    lvl=ctGetPropertyLevel(level,nodeProperties.itemConnect);
    str+=link+nodeProperties.itemConnect[lvl][hasNext]+'</a>';
    lvl=ctGetPropertyLevel(level,nodeProperties.itemLeft);
    str+=link+nodeProperties.itemLeft[lvl]+'</a>';
    }
    str+='</td>';
    str+='<td class="'+classStr+'Text"'+_ctItemAction+">"+link+item[1]+'</a>';;
    str+='<td class="'+classStr+'Right"'+_ctItemAction+'>';
    if(hasChild){
    lvl=ctGetPropertyLevel(level,nodeProperties.folderRight);
    str+='<span class="JSCookTreeFolderClosed">'+nodeProperties.folderRight[lvl][0]+'</span>'+
    '<span class="JSCookTreeFolderOpen">'+nodeProperties.folderRight[lvl][1]+'</span>';
    }
    else{
    lvl=ctGetPropertyLevel(level,nodeProperties.itemRight);
    str+=nodeProperties.itemRight[lvl];
    }
    str+='</td></tr></table>'
    if(hasChild){
    lvl=ctGetPropertyLevel(level,nodeProperties.spacer);
    var childIndent=indent+nodeProperties.spacer[lvl][hasNext];
    str+=ctDrawSub(item,false,idSub,treeIndex,level+1,nodeProperties,prefix,childIndent);
    }
    }
    str+='</div>';
    return str;
    }
    function ctItemMouseOver(item){
    if(item.className==ctGetDefaultClassName(item))
    item.className+='Hover';
    }
    function ctItemMouseOut(item){
    var className=ctGetDefaultClassName(item);
    if(item.className==className+'Hover'||item.className==className+'Active'){
    var tree=_ctTreeList[item.ctTreeIndex];
    var currentItem=(tree.hideType<=1)?tree.currentItem:_ctCurrentItem;
    item.className=className;
    if(item==currentItem)
    item.className+='Selected';
    }
    }
    var g_objMouseDown;
    function ctItemMouseDown(item){
    var className=ctGetDefaultClassName(item);
    if(item.className==className+'Hover')
    item.className=className+'Active';
    g_objMouseDown=item.innerText;
    }
    function ctItemMouseUp(item){
    if(item.innerText==g_objMouseDown){
    if(item.ctIdSub){
    if(ctGetObject(item.ctIdSub).style.display=='block'){
    var tree=_ctTreeList[item.ctTreeIndex];
    var currentItem=(tree.hideType<=1)?tree.currentItem:_ctCurrentItem;
    if(!ctIsInFolder(currentItem,item))
    ctCloseFolder(item);
    }
    else ctOpenFolder(item);
    var className=ctGetDefaultClassName(item);
    if(item.className==className+'Active')
    item.className=className+'Hover';
    }
    else ctSetSelectedItem(item);
    }
    }
    function ctItemClick(item){
    ctItemMouseDown(item);
    ctItemMouseUp(item);
    }
    function ctSetSelectedItem(item){
    var tree=_ctTreeList[item.ctTreeIndex];
    var hideType=tree.hideType;
    var otherItem;
    if(hideType<=1)otherItem=tree.currentItem;
    else	otherItem=_ctCurrentItem;
    if(otherItem!=item){
    ctLabelMenu(item);
    if(otherItem){
    var className=ctGetDefaultClassName(otherItem);
    if(otherItem.className==(className+'Selected'))
    otherItem.className=className;
    if(hideType>0&&otherItem)ctHideMenu(otherItem,item);
    }
    if(hideType<=1)tree.currentItem=item;
    else	_ctCurrentItem=item;
    item.className=ctGetDefaultClassName(item)+'Selected';
    }
    }
    function ctIsFolderOpen(item){
    return item.id=='JSCookTreeFolderOpen';
    }
    function ctOpenFolder(item){
    if(!ctIsFolderOpen(item)&&item.ctIdSub){
    ctGetObject(item.ctIdSub).style.display='block';
    item.id='JSCookTreeFolderOpen';
    }
    }
    function ctIsInFolder(item,folder){
    if(folder.ctIdSub){
    var subMenu=ctGetObject(folder.ctIdSub);
    for(var i=0;i<subMenu.ctItems.length;++i)
    if(ctIsInFolder(item,subMenu.ctItems[i]))return true;
    }
    else if(item==folder)
    return true;
    return false;
    }
    function ctCloseFolder(item){
    if(ctIsFolderOpen(item)&&item.ctIdSub){
    var subMenu=ctGetObject(item.ctIdSub);
    for(i=0;i<subMenu.ctSubMenu.length;++i)
    ctCloseFolder(subMenu.ctSubMenu[i].ctParent);
    var expandLevel=_ctTreeList[item.ctTreeIndex].expandLevel;
    if(item.ctLevel>=expandLevel){
    subMenu.style.display='none';
    item.id='JSCookTreeFolderClosed';
    }
    }
    }
    function ctSetupItem(item,index,treeIndex,level,idSub){
    if(!item.ctIndex){
    item.ctIndex=index;
    item.ctTreeIndex=treeIndex;
    item.ctLevel=level;
    item.ctIdSub=idSub;
    }
    var thisMenu=ctGetThisMenu(item);
    ctSetupMenu(thisMenu,item,null,null);
    if(idSub)
    ctSetupMenu(ctGetObject(idSub),null,thisMenu,item);
    }
    function ctSetupMenu(thisMenu,thisItem,parentMenu,parentItem){
    if(!thisMenu.ctSubMenu)
    thisMenu.ctSubMenu=new Array();
    if(parentItem){
    if(!thisMenu.ctParent){
    thisMenu.ctParent=parentItem;
    thisMenu.ctLevel=parentItem.ctLevel+1;
    parentMenu.ctSubMenu[parentMenu.ctSubMenu.length]=thisMenu;
    }
    }
    if(thisItem){
    if(!thisItem.ctMenu){
    thisItem.ctMenu=thisMenu;
    thisMenu.ctLevel=thisItem.ctLevel;
    if(!thisMenu.ctItems)thisMenu.ctItems=new Array();
    thisMenu.ctItems[thisMenu.ctItems.length]=thisItem;
    }
    }
    }
    function ctLabelMenu(item){
    var thisMenu=ctGetThisMenu(item);
    while(thisMenu&&thisMenu.ctLevel!=0){
    thisMenu.ctCurrentItem=item;
    thisMenu=ctGetThisMenu(thisMenu.ctParent);
    }
    }
    function ctHideMenu(item,activeItem){
    var subMenu=ctGetObject(item.ctIdSub).ctLevel;
    while(item){
    if(item.ctIdSub&&subMenu&&subMenu.ctCurrentItem!=activeItem)
    ctCloseFolder(item);
    item=ctGetThisMenu(item).ctParent;
    }
    }
    function ctGetThisMenu(item){
    var str=_ctTreeList[item.ctTreeIndex].prefix;
    if(item.ctLevel==0)str+='TreeLevel0';
    else{
    var themeLevel=_ctTreeList[item.ctTreeIndex].nodeProperties.themeLevel;
    str+='TreeLevel'+((item.ctLevel<themeLevel)?item.ctLevel:themeLevel);
    }
    while(item){
    if(item.className==str)return item;
    item=item.parentNode;
    }
    return null;
    }
    function ctHasNextItem(index,tree){
    return(index<tree.length-2||(index==tree.length-2&&tree[index+1]));
    }
    function ctGetDefaultClassName(item){
    return _ctTreeList[item.ctTreeIndex].prefix+'Row';
    }
    function ctGetObject(id){
    if(document.all)return document.all[id];
    return document.getElementById(id);
    }
    