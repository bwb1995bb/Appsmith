export default {
	getData () {
		
		const url = 'http://172.16.92.180:11005/api/v1/ckTransfer/getCkCount/'
		+'?sourceCKDsId='+SelectSorCKDS.selectedOptionValue
		+'&database='+SelectDB.selectedOptionValue
		+'&searchText='+TableCK.searchText
		; 
		return fetch(url)
			.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok ' + response.statusText);
			}
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