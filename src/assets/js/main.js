$(function () {
	var first = $("#hid").val();
	console.log("заданное значение = " + first);

	var select = $("#sel option");
	var li = $("#list li");
	for (i = 0; i < select.length; i++) {
		if (select[i].value === first) {
			select[i].selected = true;
			$('li[data-option="' + first + '"]').addClass("activeLi");
		}
	}

	$("#sel").on("change", function () {
		var t = $("#sel :selected").text(); // The text content of the selected option
		var v = $("#sel :selected").val(); // The value of the selected option
		console.log(t + " " + v);
		$("#hid").val(v);
		$("li").removeClass("activeLi");
		$('li[data-option="' + v + '"]').addClass("activeLi");
	});

	li.on("click", function () {
		var lidata = $(this).attr("data-option");
		$("#hid").val(lidata);
		$("li").removeClass("activeLi");
		$(this).addClass("activeLi");
		for (i = 0; i < select.length; i++) {
			if (select[i].value === lidata) {
				select[i].selected = true;
			}
		}
	});
});
