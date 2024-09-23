export default {
	getData () {
		var dsId = SelectDatasource.selectedOptionValue
		var dbNa = SelectDatabase.selectedOptionValue
		var taNa = SelectTable.selectedOptionValue

		if(dsId != null && dsId != '' && dbNa != '' && taNa != ''){
			const url = 'http://172.16.92.180:11003/api/v1/datasource/getAllColumn?id='+dsId+'&database='+dbNa+'&table='+taNa; 

			return	fetch(url)
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
					if(obj.columnDesc){
						
					}
					var colLabel = (obj.columnDesc == null || obj.columnDesc == '') ? obj.name :obj.name +'('+obj.columnDesc+')'
					
					var resObj = {label: colLabel,value: obj.name};
					resArr[i] = resObj
				}
				storeValue("select_column_data",resArr)
				return resArr
			})
				.catch(error => {
				console.error('There has been a problem with your fetch operation:', error); // 处理错误
			});
		}else{
			storeValue("select_column_data",[])
			return []
		}

	}
}