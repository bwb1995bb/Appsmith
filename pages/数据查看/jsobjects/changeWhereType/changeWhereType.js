export default {
	changeType () {
		if(RadioGroupWhere.selectedOptionValue == 'Y'){
			ListWhere.setVisibility(true)
			IconButtonWhere.setVisibility(true)

			InputWhereCust.setVisibility(false)
		}else{
			ListWhere.setVisibility(false)
			IconButtonWhere.setVisibility(false)

			InputWhereCust.setVisibility(true)

		}

	}
}