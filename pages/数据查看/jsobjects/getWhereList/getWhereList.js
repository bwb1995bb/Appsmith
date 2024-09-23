export default {

	getList () {
		if(appsmith.store.where_list_data.length > 0 ){
			let resArr =appsmith.store.where_list_data
			return resArr
		}else{
			let resArr = [{id: 1}]
			storeValue("where_list_data",resArr)
			return resArr;
		}

	
	}
}