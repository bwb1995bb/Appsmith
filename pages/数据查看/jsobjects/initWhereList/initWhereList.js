export default {

	addList () {
			let resArr = [{id: 1,SelectColumn:'',SelectOP:'=',InputWhere:''}]
			storeValue("where_list_data",resArr)
			getWhereList.getList();
	}
}