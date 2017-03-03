//ALL VARIABLES

//variables for opening and closing search bar
const header = document.getElementsByTagName('HEADER')[0]; //header
const primary_header_wrapper = document.getElementsByClassName('primary-header-wrapper')[0];
const secondary_header_section = document.getElementsByClassName('secondary-header-section')[0];
const top_navigation = document.getElementsByClassName('top-navigation')[0];
var navigation_menu = document.getElementById('navigation_menu');
var open_search = document.getElementsByClassName('search-bar')[0];//search icon
var search_bar_section = document.getElementById('search_bar_section');
var search_bar_wrapper = document.getElementById('search_bar_wrapper');
var close_search = document.getElementById('close_search');

//variables for opening and closing navigation bar in mobile
var menu_bar_icon = document.getElementById('menu_bar_icon');
var close_nav = document.getElementById('close_nav');
var body_tag =  document.getElementsByTagName('BODY')[0];
var html_tag =  document.getElementsByTagName('HTML')[0];
var container_tag =  document.getElementsByClassName('container')[0];
const hello_text_container =  document.getElementsByClassName('hello-user-text')[0];
const user_dropdown_wrapper = document.getElementsByClassName('user-dropdown-wrapper')[0];
var cart_text_container =  document.getElementsByClassName('user-cart-img')[0];
var user_cart_wrapper = document.getElementsByClassName('user-cart-wrapper')[0];
if(open_search != null){
//	function to open and close search
	open_search.addEventListener('click', openSearch);
}
if(close_search != null){
	close_search.addEventListener('click', closeSearch);
}

//function to open and close navigation in mobile
menu_bar_icon.addEventListener('click', openNavigation);
close_nav.addEventListener('click', closeNavigation);

//function to open dropdown
if(hello_text_container != null){
hello_text_container.addEventListener('click', openDropDown);
}

//open search
function openSearch() {
	header.classList.add('header-open-search'); //adding class to header element
	top_navigation.classList.add('top-navigation-open-search');
	navigation_menu.classList.add('navigation-menu-open-search');
	primary_header_wrapper.classList.add('primary-header-wrapper-open-search');
	secondary_header_section.classList.add('secondary-header-section-open-search');
	search_bar_section.classList.add('search-bar-section-open');
	search_bar_wrapper.classList.add('search-bar-wrapper-open');

}

if(cart_text_container != null){
	cart_text_container.addEventListener('click', openCartDropDown);
	}

//close search
function closeSearch() {
	header.classList.remove('header-open-search'); //removing class from header element
	primary_header_wrapper.classList.remove('primary-header-wrapper-open-search');
	secondary_header_section.classList.remove('secondary-header-section-open-search');
	top_navigation.classList.remove('top-navigation-open-search');
	search_bar_wrapper.classList.remove('search-bar-wrapper-open');
	search_bar_section.classList.remove('search-bar-section-open');
	navigation_menu.classList.remove('navigation-menu-open-search');

}

//open navigation
function openNavigation() {
	navigation_menu.classList.add('navigation-menu-open');
	body_tag.classList.add('nonscrollable-body');
	html_tag.classList.add('nonscrollable-body');
	container_tag.classList.add('nonscrollable-body');
}

//close navigation
function closeNavigation() {
	navigation_menu.classList.remove('navigation-menu-open');
	body_tag.classList.remove('nonscrollable-body');
	html_tag.classList.remove('nonscrollable-body');
	container_tag.classList.remove('nonscrollable-body');
}

//open dropdown when logged in
function openDropDown(event){
	event.stopPropagation();
	user_dropdown_wrapper.classList.add('display-user-dropdown');
	user_dropdown_wrapper.addEventListener('click', function(e){
		e.stopPropagation();
	});
}

//open cart list dropdown when logged in
function openCartDropDown(event){
	event.stopPropagation();
	user_cart_wrapper.classList.add('display-cart-dropdown');
	user_cart_wrapper.addEventListener('click', function(e){
		e.stopPropagation();
	});
}

//close dropdown when clicked outside
window.addEventListener('click', function(){
	if(user_dropdown_wrapper != null){
	user_dropdown_wrapper.classList.remove('display-user-dropdown');
	}
	if(user_cart_wrapper != null){
		user_cart_wrapper.classList.remove('display-cart-dropdown');
		}
});


