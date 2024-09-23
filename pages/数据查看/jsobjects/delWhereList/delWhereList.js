export default {

	delList (id) {
		if(id != 1){
			let array =appsmith.store.where_list_data;
			array = array.filter(item => item.id !== id);
			storeValue("where_list_data",array)
			getWhereList.getList();
		}



	}
}