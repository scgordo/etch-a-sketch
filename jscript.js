$(document).ready(function() {
	$("#container > div").mouseenter(function() {
		$(this).addClass("sketched");
	});
	$("button").click(function() {
		$("#container > div").removeClass("sketched");
		$("#container > div").addClass("reset");
		prompt("How many squares per side would you like to make the new grid?");
	});
});

