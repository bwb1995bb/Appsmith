export default {

	signin () {
		const password = inp_password.text;
		const username = inp_username.text;

		const url = 'http://localhost:11005/api/v1/login/signin?userName='+username+'&passWord='+password; 
		fetch(url)
			.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok ' + response.statusText);
			}
			return response.json(); 
		})
			.then(data => {
			if(data){
				showAlert('欢迎'+username+'登录!','登录成功');
				navigateTo('CK迁移表')				

			}else{
				showAlert('账号密码错误');

			}
		})
			.catch(error => {
			showAlert('服务异常');

			console.error('There has been a problem with your fetch operation:', error); // 处理错误
		});
	}



}