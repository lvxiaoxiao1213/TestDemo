function ajax(url,fnSucc,fnFaild)
{		//1.创建Ajax对象
		  //非IE6
		  if(window.XMLHttpRequest)
		  {
			var oAjax=new XMLHttpRequest();
		  }else
		  {
			//IE6
			var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
		  }
		  //2.连接到服务器
		  //open(方法，文件名，异步传输)
		  oAjax.open('GET',url, true );

		  //3.发送请求
		  oAjax.send();

		  //4.接收返回值
		  oAjax.onreadystatechange=function()
		  {
			  if (oAjax.readyState==4)//读取完成
			  {
				  if(oAjax.status==200)//读取成功
				  {
					  fnSucc(oAjax.responseText);
				  }else
				  {
					  if(fnFaild)
					  {
						fnFaild(oAjax.status);
					  }
				  }
			  }		  
		  };}