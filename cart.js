//cart is initially not displayed
var cart_displayed = false;

//node referring to cart size display
var cart_mini = $("#cart_mini")[0];

//node referring to cart size number
var cart_mini_number = $("#cart_mini_number")[0];

//node referring to container for cart size number
var cart_mini_number_container = $("#cart_mini_number_container")[0];

//node referring to cart container
var cart_container = $("#cart_container")[0];

//node referring to cart item list
var cart_list = $("#cart_update_location")[0];

//represents whether just the full cart, or just the mini cart indicator, is displayed
var full_cart_displayed = false;

var cart_size = 0;

function update_cart_size_number(){
	//sets cart transition so that the old number can move up, out of the red circle
	cart_mini_number.style.transition = "300ms ease bottom";
	cart_mini_number.style.bottom = "4.5rem";	
	setTimeout(function(){
		//after transition is complete, removes transition
		cart_mini_number.style.transition = "";
		//moves number to bottom, without transition
		cart_mini_number.style.bottom = "-5.5rem";
		//sets new cart size number
		cart_mini_number.textContent = (""+cart_size);
		//adds back transition after 100ms to avoid glitch where number never goes below circle
		setTimeout(
			function(){
				cart_mini_number.style.transition = "300ms ease bottom";	
				//moves number back up, with transition
				cart_mini_number.style.bottom = "-0.5rem";
			},100
		);	
	},300);
}

function display_cart(){
	cart_mini.style.opacity = "1";
	cart_mini.style.visibility = "visible";
	cart_mini_number_container.style.visibility = "visible";
	cart_mini_number_container.style.opacity = 1;
}

//returns a node for an item within the cart
function generate_cart_item_node(){
	var node = document.createElement("LI");
	node.setAttribute("class","list-group-item");
	var title = document.createElement("H4");
	title.textContent = "Lenn 100";
	var price = document.createElement("H5");
	price.textContent = "$300";
	node.appendChild(title);
	node.appendChild(price);
	return node;
}

function add_to_cart(){
	if(!cart_displayed){
		display_cart();
		cart_displayed = true;
	}
	cart_size ++;
	update_cart_size_number();
	cart_list.appendChild(generate_cart_item_node());
}

function display_full_cart(){
	full_cart_displayed = true;
	cart_mini_number_container.style.visibility = "hidden";
	cart_container.setAttribute("class","triggered");
}

function collapse_cart(){
	full_cart_displayed = false;
	cart_container.setAttribute("class","");	
	//waits until the closing animation is finished to re-display the quantity indicator and hide the cart
	setTimeout(function(){
		cart_mini_number_container.style.visibility = "visible";
		cart_container.setAttribute("class","gone");		
	},400);
}

//toggles between a full and mini cart
function toggle_cart_size(){
	if(full_cart_displayed){
		collapse_cart();
	}else{
		display_full_cart();
	}
}


//collapses cart if clicked outside of
$(window).click(function() {
	if(full_cart_displayed){
		collapse_cart();
	}
});

$('#cart_container').click(function(event){
    event.stopPropagation();
});