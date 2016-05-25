////创建显示右键菜单
function showContextmenu(e,data){
	var contextmenuElement = document.getElementById("contextmenu");
	contextmenuElement.style.display = 'block';
	contextmenuElement.style.left = e.clientX + 'px';
	contextmenuElement.style.top = e.clientY + 'px';
	///创建菜单数据
	contextmenuElement.innerHTML = '';
	data.forEach(function(v,k){
//		contextmenuElement.innerHTML = '';
		var li = document.createElement('li');
		
		li.innerHTML = v.name;
		///给每一个菜单项添加点击事件
		li.onclick = function(){
			v.exe();
		}
		contextmenuElement.appendChild(li);
		
	})
}
function hideContextmenu(){
	var contextmenuElement = document.getElementById("contextmenu");
	contextmenuElement.style.display = 'none';
}
