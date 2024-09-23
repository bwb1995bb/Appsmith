export default {

	addList () {
			let resArr =appsmith.store.where_list_data
			var lastId = resArr[resArr.length-1].id +1 ;
			resArr[resArr.length] ={id:lastId,SelectColumn:'',SelectOP:'=',InputWhere:''};
			storeValue("where_list_data",resArr)
			getWhereList.getList();
	}
}