export default {
	create () {
		
		const url = 'http://172.16.92.180:11005/api/v1/ckTransfer/createCkTable'
		+'?sourceCKDsId='+SelectSorCKDS.selectedOptionValue
	  +'&sinkCKDsId='+SelectSinkCKDS.selectedOptionValue
		+'&database='+appsmith.store.tranCkTable.database
		+'&table='+appsmith.store.tranCkTable.name
		; 
		return fetch(url)
			.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok ' + response.statusText);
			}
			getCKTables.getData();
			return response.json(); // 把响应数据转换为JSON
		})
			.then(data => {
			return data;
		})
			.catch(error => {
			console.error('There has been a problem with your fetch operation:', error); // 处理错误
		});

	}
	
}
