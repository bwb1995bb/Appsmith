export default {

	editList (type,typeValue,id) {
		let resArr =appsmith.store.where_list_data

		const index = resArr.findIndex(element => element.id === id);
		var obj = resArr[index]
		obj[type] = typeValue;

		storeValue("where_list_data",resArr)
		getWhereList.getList();
	}
}