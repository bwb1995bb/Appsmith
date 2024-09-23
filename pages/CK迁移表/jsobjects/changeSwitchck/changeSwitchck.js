export default {
	changeType () {
		if(SwitchCusSQL.isSwitchedOn){
			SelectCKCOl.setVisibility(false)
		  SelectOPCK.setVisibility(false)
			DatePicker1.setVisibility(false)
			Input1.setVisibility(true)
		}else{
			SelectCKCOl.setVisibility(true)
		  SelectOPCK.setVisibility(true)
			DatePicker1.setVisibility(true)
			Input1.setVisibility(false)
		}

	}
}