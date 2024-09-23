export default {
	getData () {
		var dsId = SelectDatasource.selectedOptionValue
		var dbNa = SelectDatabase.selectedOptionValue
		var taNa = SelectTable.selectedOptionValue

		let sqlWhere 
		if(RadioGroupWhere.selectedOptionValue == 'Y'){
			let whereListData =appsmith.store.where_list_data
			let mutableString = [];
			for (var i = 0; i < whereListData.length; i++) {
				var obj = whereListData[i];
				if(obj.SelectColumn != '' && obj.SelectOP != '' && obj.InputWhere != '' ){

					if(obj.SelectOP == 'like'){
						var sql1 = obj.SelectColumn +" "+ obj.SelectOP+" '%25"+obj.InputWhere+"%25' "
						mutableString.push(sql1)					
					}else{
						var sql2 = obj.SelectColumn +" "+ obj.SelectOP+" \'"+obj.InputWhere+"\' "
						mutableString.push(sql2)					
					}
					if(i != whereListData.length-1){
						mutableString.push(" and ")
					}
				}
			}
			sqlWhere = mutableString.join('')
		}else{
				sqlWhere = InputWhereCust.text
		}

		if( dsId != '' && dbNa != '' && taNa != ''){
			const url = 'http://172.16.92.180:11003/api/v1/datasource/queryTableCount?datasourceId='+dsId+'&database='+dbNa+'&table='+taNa
			+'&pageNo='+TableSelect.pageNo+'&pageSize='+TableSelect.pageSize
			+'&sqlWhere='+sqlWhere
			; 

			return	fetch(url)
				.then(response => {
				if (!response.ok) {
					throw new Error('Network response was not ok ' + response.statusText);
				}
				return response.json(); // 把响应数据转换为JSON
			})
				.then(data => {

				return data
			})
				.catch(error => {
				console.error('There has been a problem with your fetch operation:', error); // 处理错误
			});
		}else{
			return 0
		}

	}
}