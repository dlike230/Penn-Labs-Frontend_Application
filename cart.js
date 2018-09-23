//cart is initially not displayed
var cart_displayed = false;

//node referring to cart size display
var cart_mini = $("#cart_mini")[0];

function display_cart(){
	cart_mini.style.visibility = "visible";
}

function add_to_cart(){
	if(!cart_displayed){
		display_cart();
		cart_displayed = true;
	}
}