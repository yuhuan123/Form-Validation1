function form_onsubmit(){
		document.getElementById('tdTxtName').innerHTML = "";
		document.getElementById('tdTxtPwd').innerHTML = "";
		document.getElementById('tdTxtRePwd').innerHTML = "";
		document.getElementById('tdRdnSex').innerHTML = "";
		document.getElementById('tdTxtAge').innerHTML = "";
		document.getElementById('tdTxtEmail').innerHTML = "";
		var checkFlag = true;
		//验证用户名
		var name = document.getElementById('txtName').value;
		if (name == '') {
			document.getElementById('tdTxtName').innerHTML = "用户名不能为空！";
			checkFlag = false;
		}
		//验证密码
		var pwd = document.getElementById('txtPwd').value;
		var rePwd = document.getElementById('txtRePwd').value;
		if (pwd == '' || rePwd == '') {
			document.getElementById('tdTxtPwd').innerHTML = "密码不能为空！";
			checkFlag = false;
		} else if(rePwd!= pwd){
			document.getElementById('tdTxtRePwd').innerHTML = "两次密码不一致！";
			checkFlag = false;
		}
		//验证性别
		var sex = document.getElementByName('rdnSex').value;
		if (sex[0].checked == false && sex[1].checked == false) {
			document.getElementById('tdRdnSex').innerHTML = "没有选择性别！";
			checkFlag = false;
		}
		//验证年龄
		var age = document.getElementById('txtAge').value;
		if (age == '') {
			document.getElementById('tdTxtAge').innerHTML = "年龄不能为空！";
			checkFlag = false;
		}else if(isNaN(age)) {
			document.getElementById('tdTxtAge').innerHTML = "年龄应该为数字！";
			checkFlag = false;
		}
		//验证邮件地址
		var email = document.getElementById('txtEmail').value;
		if (email = '') {
			document.getElementById('txtEmail').innerHTML = "邮件地址不能为空！";
			checkFlag = false;
		}
		var at = email.indexOf('@');
		var dot = email.indexOf('.');
		if (at == -1 || dot == -1 || dot-at < 2) {
			document.getElementById('txtEmail').innerHTML = "邮件格式错误！";
			checkFlag = false;
		}
	}
