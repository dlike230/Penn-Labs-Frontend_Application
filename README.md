# Daniel Like - Penn Labs Front-End Coding Challenge

## Getting Started

The website can be run by opening index.html.

### Prerequisites

A modern web browser such as Google Chrome or Mozilla Firefox is required to run this project. I did not have enough time to fully optimize for browsers other than Chrome, so some animations or visual aspects of the page may not look as good in other browsers, i.e., due to prefixing of CSS3.

## Using the Site

The navbar at the top of the page links to different parts of the page.
"About" leads to the top section of the page,  "Projects" leads to the purchasing area of the page,
and "Contact" leads to the message-sending area of the page. The "Categories" dropdown contains buttons that are repetetive of these navbar links.


The section of the page with a form produces a dialog box summarizing the submitted information when submitted.
It will produce a message notifying the user that incomplete information has been provided if not all fields are filled in.

The last section of the page, "Buy our Stuff," allows the user to add items to the cart by clicking on the "Buy" button.
This button causes the cart to show up in the bottom right of the screen when first pressed, and increments the number on the cart after every subsequent press.
The cart expands when clicked, showing all orders made. When the bottom right of the cart is pressed again, it shrinks back to its initial size.
It also shrinks back to its initial size if the user clicks outside of the cart.

## Animations

I created most animations from scratch, using a combination of CSS and modification of the HTML DOM in JavaScript.
Some example animations include:

* The wobbling of buttons on hover
* Button color fading
* The appearance of a white border under navbar items on hover
* The on-hover rotation of the image on the first part of the page

## Graphics

Several external graphics in the form of SVG (Scalable Vector Graphics) were used throughtout the page.
Examples include the logo at the top left of the page and the cart open/close icons.
One image was also taken from the Penn Labs website.

## Responsive Design

On narrow screens, the navbar at the top of the screen collapses such that all contingent buttons are displayed in a single column.
Part of this adjustment is performed by Bootstrap, and some is manual adjustment that was necessary for the centering and spacing of the vertical menu.
Besides the navbar, other parts of the page shrink to fit smaller screens, although the layout does not change significantly.

## Search engine optimization

The site includes several meta tags to make it easy for search engines to pick up information about the site.
For example, it includes a description of the page and keywords.
I also added small bits of microdata in a few places (e.g. itemscope, itemprop, etc.).

## Project structure

Javascript:

* animations.js uses JQuery to ensure smooth scrolling when a link to a specific part of the page is clicked.
* form_scripts.js extracts data from the form and displays it in a Bootstrap modal.
* cart.js keeps track of the items in the cart and manages cart animations.

CSS:

* forms.css styles the form in the center of the page, as well as any associated buttons.
* styles.css handles general styling.
* cart.css handles the appearance of the cart, as well as some of the components of cart animation that are not controlled through Javascript.
* navbar.css positions and styles the navbar at the top of the page, as well as any associated buttons.
* animations.css styles the page's animations that are reused throughout several areas.
* enhancements.css adds styling to scrollbars and text highlighting.

HTML:

* index.html contains the entire project's HTML resources and links to all scripts and stylesheets.
* Some HTML is generated dynamically through JavaScript, such as items in the cart.

There are 

## Built With

* [Bootstrap](https://getbootstrap.com) - Used to simplify UI development
* [JQuery](https://jquery.com/) - Used by Bootstrap, and required for some other code in the project

## Authors

* **Daniel Like**

## Acknowledgments

*Looked at code from https://codyhouse.co/gem/add-to-cart-interaction/ to get a basic idea of how to implement the cart. Also adapted some of the SVG graphics from this source.
