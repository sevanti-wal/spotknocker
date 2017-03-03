//all variables
var how_it_works_video_overlay = document.getElementsByClassName('how-it-works-video-overlay');//video overlay div
var how_it_works_video = document.getElementsByClassName('how-it-works-video');//html5 video
var open_popup_link =  document.getElementsByClassName('open-popup-link');
var popup_overlay = document.getElementsByClassName('popup-overlay');
var links = document.getElementsByTagName('A');
var popup_body = document.querySelectorAll('.popup');
var choose_file_index;
var upload_file_generated_text;
var popup_close = document.getElementsByClassName('popup-close');
const html5box_html5_lightbox =  document.getElementById('html5box-html5-lightbox');
const lightbox_image =  document.getElementById('html5-image');
var body_tag =  document.getElementsByTagName('BODY')[0];
var html_tag =  document.getElementsByTagName('HTML')[0];
var container_tag =  document.getElementsByClassName('container')[0];
var close_popup_window = document.getElementsByClassName('close-window-button');
//function to add scrollable body when video popup closes
function hideBody(e) {
	body_tag.classList.remove('nonscrollable-body');
	html_tag.classList.remove('nonscrollable-body');
	container_tag.classList.remove('nonscrollable-body');
	lightbox_image.addEventListener('click', function(){
		e.stopPropagation();
	});
}


function playVideo() {
	//playing video and hiding overlay div
	this.parentNode.querySelector('.how-it-works-video').play();
	this.classList.add('hide-play-button');

	//checking if video ended to show overlay div
	this.parentNode.querySelector('.how-it-works-video').onended = function() {
		this.parentNode.querySelector('.how-it-works-video-overlay').classList.remove('hide-play-button');
	};
}

function pauseVideo() {
	this.pause();
	this.parentNode.querySelector('.how-it-works-video-overlay').classList.remove('hide-play-button');
}

//function to pause video
Array.from(how_it_works_video_overlay).forEach(function(element) {
	element.addEventListener('click', playVideo);
});

//function to pause video
Array.from(how_it_works_video).forEach(function(element) {
	element.addEventListener('click', pauseVideo);
});

//preventing popup to close when it's clicked
Array.from(popup_body).forEach(function(element) {
	element.addEventListener('click', function(event){
		event.stopPropagation();
	});
});

//opening popup when link is clicked
Array.from(open_popup_link).forEach(function(element) {
	element.addEventListener('click', function(event){
		Array.from(popup_overlay).forEach(function(popup_element) {
			popup_element.classList.remove('open-popup-overlay');
			if(element.classList.contains(popup_element.id)){
				popup_element.classList.add('open-popup-overlay');
				body_tag.classList.add('nonscrollable-body');
				html_tag.classList.add('nonscrollable-body');
				container_tag.classList.add('nonscrollable-body');
			}
		});
	});
});

//close popup when close button is clicked
Array.from(popup_close).forEach(function(element) {
	element.addEventListener('click', function(event){
		Array.from(popup_overlay).forEach(function(popup_element) {
			if(popup_element.classList.contains('open-popup-overlay')){
				popup_element.classList.remove('open-popup-overlay');
				body_tag.classList.remove('nonscrollable-body');
				html_tag.classList.remove('nonscrollable-body');
				container_tag.classList.remove('nonscrollable-body');
			}
		});
		return false;

	});
});

//close popup when close button is clicked
Array.from(close_popup_window).forEach(function(element) {
	element.addEventListener('click', function(event){
		Array.from(popup_overlay).forEach(function(popup_element) {
			if(popup_element.classList.contains('open-popup-overlay')){
				popup_element.classList.remove('open-popup-overlay');
				body_tag.classList.remove('nonscrollable-body');
				html_tag.classList.remove('nonscrollable-body');
				container_tag.classList.remove('nonscrollable-body');
			}
		});
		return false;

	});
});

//close popup when content outside popup is clicked
Array.from(popup_overlay).forEach(function(element) {
	element.addEventListener('click', function(){
		if(element.classList.contains('open-popup-overlay')){
			element.classList.remove('open-popup-overlay');
			body_tag.classList.remove('nonscrollable-body');
			html_tag.classList.remove('nonscrollable-body');
			container_tag.classList.remove('nonscrollable-body');
		}

	});

});



if (typeof jQuery !== 'undefined') {
	$(document).ready(function() {

		//Function to delete Admin User 
		$(document).on('click', '.admin-user-item-delete',function() {
			$(this).parent('.admin-user-list-item').remove();

		});

		//Function to select Tab option in Admin page 
		$(document).on('click', '.admin-panel-options>.admin-group-item',function(e) {
			e.preventDefault();
			$(this).siblings('a.active').removeClass("active");
			$(this).addClass("active");
			var index = $(this).index();
			$(".admin-panel-content>.admin-tab-content").removeClass("active");
			$(".admin-panel-content>.admin-tab-content").eq(index).addClass("active");
		});

		//Function to change colour of Subscription Price's text box when there's value and no value 
		$(document).on('keyup', '.subscription-plan-price-input', function(){ 
			var chars = $(this).val().length; 
			if(chars > 0){
				$('.subscription-plan-price-input, .subscription-plan-price-currency').css('color','#3B3B3B');
			}
			else{
				$('.subscription-plan-price-input, .subscription-plan-price-currency').css('color','#878787');
			}
		});

		//Function to open/close the dropdown under Subscription price in Admin page 
		$(document).on('click', '.admin-subscription-price-dropdown-icon-wrapper',function(e) {
			$(this).next('.user-dropdown-wrapper.display-user-dropdown.admin-subscription-price-dropdown').toggle();
		});

		//Function to close the dropdown under Subscription price in Admin page 
		$(document).on('click', function(event){
			if( !event ) event = window.event;
			if (!$(event.target).closest('.user-dropdown-wrapper.display-user-dropdown.admin-subscription-price-dropdown').length && !$(event.target).closest('.admin-subscription-price-dropdown-icon-wrapper').length) {
				$('.user-dropdown-wrapper.display-user-dropdown.admin-subscription-price-dropdown').hide();

			}

			if (!$(event.target).closest('.percent-month-list').length && !$(event.target).closest('.month-discount-text-wrapper').length) {
				$('.percent-month-list').hide();

			}
		});

		//Function to enable/disable input text when subscription list option is selected 
		$(document).on('click', '.admin-subscription-price-dropdown-option',function(e) {
			var subscripton_price_option = $(this).attr('value');
			$(this).siblings('li.active').removeClass("active");
			$(this).addClass('active');
			if(subscripton_price_option.toLowerCase() == 'free'){

				$(this).parents('.admin-subscription-plan-price-wrapper').find('.subscription-plan-price-input').attr('disabled','disabled');
			}
			else{
				$(this).parents('.admin-subscription-plan-price-wrapper').find('.subscription-plan-price-input').removeAttr('disabled');
			}
			$(this).parents('.user-dropdown-wrapper.display-user-dropdown.admin-subscription-price-dropdown').hide();
		});

		//Function to expand/collapse screens in Admin page 
		$(document).on('click', '.admin-user-list-item',function(e) {
			if($(this).next().css('display')=="block"){
				$(this).find('.admin-screen-mgmt-expand').removeClass('admin-screen-mgmt-collapse-item');
				$(this).next().slideUp();
			}
			else{
				$('.admin-screen-mgmt-expand').removeClass('admin-screen-mgmt-collapse-item');
				$(this).find('.admin-screen-mgmt-expand').addClass('admin-screen-mgmt-collapse-item');	
				$(".admin-screen-mgmt-spot-wrapper").slideUp();
				$(this).next().slideDown();
			}
		});

		//Function to delete Admin Screen 
		$(document).on('click', '.admin-screen-mgmt-delete-item',function() {
			$(this).parents('.admin-screen-mgmt-spot-list-item').remove();

		});

		//Function to move to manage user screen tab options 
		$(document).on('click', '.admin-user-manage-screen-item',function() {
			$('.admin-user-list-container').addClass('show-manage-user-screen-tab');
			$('.admin-user-screen-mgmt-options').removeClass('show-manage-user-screen-tab');
		});

		//Function to move to manage user screen tab options 
		$(document).on('click', '.go-back-to-manage-user-screen',function() {
			$('.admin-user-list-container').removeClass('show-manage-user-screen-tab');
			$('.admin-user-screen-mgmt-options').addClass('show-manage-user-screen-tab');
		});

		//Function to select Tab option in Admin Manage User Screen page 
		$(document).on('click', '.manage-user-screen-tab-link-wrapper>li',function(e) {
			$(this).siblings('li.active').removeClass("active");
			$(this).addClass("active");
			var index = $(this).index();
			$(".manage-user-screen-tab-wrapper>.manage-user-screen-tab").removeClass("active");
			$(".manage-user-screen-tab-wrapper>.manage-user-screen-tab").eq(index).addClass("active");
		});


		//Function to move to manage user screen tab options 
		$(document).on('click', '.admin-manage-payment-list-item',function() {
			$('.admin-user-screen-mgmt-options').addClass('show-manage-user-screen-tab');
			$('.admin-user-give-discount-screen').removeClass('show-manage-user-screen-tab');
		});

		//Function to move to manage user screen tab options 
		$(document).on('click', '.go-back-to-manage-user-screen-tab',function() {
			$('.admin-user-screen-mgmt-options').removeClass('show-manage-user-screen-tab');
			$('.admin-user-give-discount-screen,.admin-user-list-container').addClass('show-manage-user-screen-tab');
		});

		//Getting dropdown selected item's text to appear when page loads
		$('.month-discount-text').text($('.percent-month-list li.active').text());

		$(document).on('click', '.month-discount-text-wrapper',function() {
			$('.percent-month-list').toggle();
			$(document).on('click', '.percent-month-list li',function() {
				$(this).siblings('li.active').removeClass('active');
				$(this).addClass('active');
				$('.month-discount-text').text($(this).text());
				$('.percent-month-list').hide();
			});

		});

		//making the select icon open file browser in admin page
		$(document).on('click', '.edit-spot-document',function() {
			$(this).next('input').click();
		});

		//making favourite icon toggle between favourtie and unfavourite
		$(document).on('click', '.search-fav-icon',function() {
			$(this).parent('.video-info-options').find('.search-fav-icon').toggle();
		});

		//get ID when upload button is clicked in upload files page
		$('.upload_files_section').each(function () {
			$(this).click(function(){
				choose_file_index = $(this).parent('.file-input-wrapper').attr('id');
			});
		});

		//remove image when delete icon is clicked in upload files page
		$('.image-delete').click(function(){
			if (confirm("Delete The Uploaded File?") == true) {
				$(this).parents('.image-file-container').removeClass('show-image-file-container');
				$(this).parents('.image-file-container').siblings('.generated-file-container').removeClass('show-generated-file-container');
			}
			else{

			}
		});

		//binding functions in cloned element in upload files page
		function bindClickToLink() {	
			$('.upload_files_section').click(function(){
				choose_file_index = $(this).parent('.file-input-wrapper').attr('id');
				var class_list_item = $(this).attr('class');
				$('.popup-overlay').each(function(){
					if(~class_list_item.indexOf($(this).attr('id'))){
						$('.popup-overlay').removeClass('open-popup-overlay');
						$(this).addClass('open-popup-overlay');
						body_tag.classList.add('nonscrollable-body');
						html_tag.classList.add('nonscrollable-body');
						container_tag.classList.add('nonscrollable-body');
					}

				});

			});
			$('.image-delete').click(function(){
				if (confirm("Delete The Uploaded File?") == true) {
					$(this).parents('.image-file-container').removeClass('show-image-file-container');
					$(this).parents('.image-file-container').siblings('.generated-file-container').removeClass('show-generated-file-container');
				}
				else{

				}
			});

		}

		//clone element in upload files page
		var file_counter=1;
		$('.add-file-button').click(function () {
			var clone = $('#file_input_wrapper_0').clone();
			clone.attr('id', 'file_input_wrapper_'+file_counter);
			clone.find('.file-upload-label').text('Choose File...');
			clone.find('span.upload_files_section').removeClass('hide-choose-file');
			clone.find('.image-file-container').removeClass('show-image-file-container');
			clone.find('.generated-file-container').removeClass('show-generated-file-container');
			clone.find('.generated-added-text').html('');
			file_counter++;
			clone.appendTo('.file-input-block').each(function () {
				bindClickToLink();
			});
		});

		//get text added and place it in the page of upload files page
		$('#add_text_submit').click(function(){
			upload_file_generated_text = $('#file_add_text_block').html();
			$('#file_add_text_block').html('');
			$('#add_text_section').removeClass('open-popup-overlay');
			body_tag.classList.remove('nonscrollable-body');
			html_tag.classList.remove('nonscrollable-body');
			container_tag.classList.remove('nonscrollable-body');
			$('.file-input-wrapper').each(function () {
				if($(this).attr('id') == choose_file_index){
					$(this).find('.image-file-container').addClass('show-image-file-container');
					$(this).find('.upload_files_section').addClass('hide-choose-file');
					$(this).find('.generated-file-container').addClass('show-generated-file-container');
					$(this).find('.generated-added-text').html(upload_file_generated_text);
				}

			});

		});

		$(document).on('click', '.delete-file',function() {
			if (confirm("Delete The File?") == true) {
				$(this).parents('.thumbnail').remove();
			} else {
//				do nothing
			}
		});

		//open cart dropdown on clicking Proceed to checkout
		if (window.location.hash == "#user_cart") {
			$(".user-cart-wrapper").addClass('display-cart-dropdown');
		}
		
		//delete file from upload screen
		$(document).on('click', '.delete-uploaded-file',function() {
			if (confirm("Delete The File?") == true) {
				$(this).parents('.uploaded-file-overlay').remove();
			} else {
//				do nothing
			}

		});
		
		
		$('#choose_from_my_files').find('.thumbnail').click(function() {
			$(this).find('.file-overlay').toggleClass('selected-file-to-upload');
		});
	});
}


