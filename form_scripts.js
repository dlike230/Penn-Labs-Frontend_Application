//generates a message based on the data in the form
function compose_message(){
	values = [$("#name")[0].value,$("#topic")[0].value,$("#email")[0].value,$("#phone")[0].value,$("#ballpark")[0].value];
	
	//check for empty values in the form
	var any_empty = false;
	for (var i = 0; i < values.length; i ++){
		if(values[i] == ""){
			return "Woah! You didn't finish filling out the form.";
		}
	}
	
	return ("Congrats! Your message has been sent to us. This is what we got from you: \n"+
	"Dear Lenn Pabs,\n"+
	"My Name is "+values[0]+", and I'd like to speak to you about "+
	values[1]+
	". You can reach me at "+
	values[2]+
	" or at "+
	values[3]+". My proposal's worth $"+
	values[4]+", so it'd be in your best interest to accept!");
}

function generate_modal(){
	var main_modal = $("#form_data_modal");
	main_modal[0].getElementsByClassName("modal-body")[0].childNodes[0].textContent = compose_message();
	main_modal.modal();
}