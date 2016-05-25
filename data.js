var datas = {
	//右键菜单数据
	contextmenu:{
		////commen通用菜单组
		commen:[
			{
				name:"创建",
				exe:function(){
					
				}
			},
			{
				name:"刷新",
				exe:function(){
					alert('刷新')
				}
				
			},
			{
				name:"粘贴",
				exe:function(){
					alert('粘贴')
				}
			},
			{
				name:"创建随机菜单",
				exe:function(){
					datas.contextmenu.commen.push({
						name:Math.random(),
						exe:function(){
							alert(Math.random())
						}
					}
						
					)
				}
			}
			
			
		],
		////文件夹菜单组
		folder:[
			{
				name:"打开"
			},
			{
				name:"复制"
			},
			{
				name:"剪切"
			}
		]
	}
	
	
	
	
}
