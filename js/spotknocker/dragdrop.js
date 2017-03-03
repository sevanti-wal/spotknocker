$(document).ready(function()
		{


	$('.upload-files-box-file').change(function(e) { 
		window.location = "uploadedFile.html";
	});


	var dropbox;
	dropbox = $('.upload-files-box-input');

	dropbox.on('dragenter', function (e) 
			{
		e.stopPropagation();
		e.preventDefault();
		$(this).css('border', '2px solid #2296F3');
			});
	dropbox.on('dragover', function (e) 
			{
		e.stopPropagation();
		e.preventDefault();
		$(this).css('border', '2px solid #2296F3')
			});

	dropbox.on('drop', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$(this).css('border', 'none')
		window.location = "uploadedFile.html";

	});
		});