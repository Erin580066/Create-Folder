window.onload = function(){
	//全局右键菜单
	
	document.oncontextmenu = function(e){
		showContextmenu(e,datas.contextmenu.commen);////点击的时候去tool.js里调用这个showContextmenu()方法就行
		return false;////用来阻止默认事件的
	}
//	document.onclick = function(){
//		hideContextmenu();
//	}
	document.onclick = hideContextmenu;
}
