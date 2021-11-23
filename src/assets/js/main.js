$(function () {
	$("#myInput").on("keyup", function () {
		// console.log("Клавиша отпущена");
		textInButton();
	});
	$("#block").on("focus", function () {
		var $this = $(this);
		$this.addClass("active");
		$("#myButton").hide();
		$("#myInput").show().focus().select();
	});
	$("#myInput").blur(function () {
		// $(this).css("background-color", "green");
		close();
	});
	$("#myInput").keyup(function (event) {
		if (event.keyCode === 13) {
			close();
		}
	});
});

function textInButton() {
	var t = $("#myInput").val();
	$("#myButton").text(t);
	if (t == "") $("#myButton").text("Введите значние");
}

function close() {
	$("#block").removeClass("active");
	$("#myButton").show();
	$("#myInput").hide();
}
