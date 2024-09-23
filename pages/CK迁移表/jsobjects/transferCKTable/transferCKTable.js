export default {
	trabsfer () {
		
		let sqlWhere 
		if(SwitchIn.isSwitchedOn){
			if(SwitchCusSQL.isSwitchedOn){
				sqlWhere=Input1.text
			}else{
				sqlWhere=SelectCKCOl.selectedOptionValue+SelectOPCK.selectedOptionValue+"'"+DatePicker1.formattedDate+"'";
			}
		}else{
			sqlWhere = ""
		}
		
		const url = 'http://localhost:11005/api/v1/ckTransfer/transferCKTable/'
		+'?sourceCKDsId='+SelectSorCKDS.selectedOptionValue
	  +'&sinkCKDsId='+SelectSinkCKDS.selectedOptionValue
		+'&database='+appsmith.store.tranCkTable.database
		+'&table='+appsmith.store.tranCkTable.name
		+'&sqlWhere='+sqlWhere
		+'&isTuncateTable='+SwitchTruncate.isSwitchedOn
		; 
		return fetch(url)
			.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok ' + response.statusText);
			}
			//关闭弹窗
			closeModal('Modal1');
			//刷新表格
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