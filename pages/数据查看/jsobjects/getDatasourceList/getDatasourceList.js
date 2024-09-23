export default {
	getData () {
		const url = 'http://172.16.92.180:11003/api/v1/datasource/list/allDsName'; 
		return fetch(url)
			.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok ' + response.statusText);
			}
			return response.json(); // 把响应数据转换为JSON
		})
			.then(data => {
			let resArr = []
				for (var i = 0; i < data.length; i++) {
					var obj = data[i];
					var colLabel = obj.datasourceName +'('+obj.hostname+')'
					var resObj = {label: colLabel,value: obj.id};
					resArr[i] = resObj
				}
				return resArr
		})
			.catch(error => {
			console.error('There has been a problem with your fetch operation:', error); // 处理错误
		});
	}
}