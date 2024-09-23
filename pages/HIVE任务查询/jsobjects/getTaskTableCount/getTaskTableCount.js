export default {
	getData (sinkTable,sourceTables) {
		if(sinkTable != null && sinkTable != '' && sourceTables != null && sourceTables != ''){
			const url = 'http://172.16.92.180:11005/api/v1//hive/getTaskTableCount'
		+'?sinkTable='+sinkTable
		+'&sourceTables='+sourceTables
		; 
		return fetch(url)
			.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok ' + response.statusText);
			}
			return response.json(); // 把响应数据转换为JSON
		})
			.then(data => {
			if(data.length >0){
				showModal('Modal1')
			}
			return data;
		})
			.catch(error => {
			console.error('There has been a problem with your fetch operation:', error); // 处理错误
		});
		}
		
	}
}