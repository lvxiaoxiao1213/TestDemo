function ajax(url,fnSucc,fnFaild)
{		//1.����Ajax����
		  //��IE6
		  if(window.XMLHttpRequest)
		  {
			var oAjax=new XMLHttpRequest();
		  }else
		  {
			//IE6
			var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
		  }
		  //2.���ӵ�������
		  //open(�������ļ������첽����)
		  oAjax.open('GET',url, true );

		  //3.��������
		  oAjax.send();

		  //4.���շ���ֵ
		  oAjax.onreadystatechange=function()
		  {
			  if (oAjax.readyState==4)//��ȡ���
			  {
				  if(oAjax.status==200)//��ȡ�ɹ�
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