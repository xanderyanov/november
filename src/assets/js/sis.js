var a = [
	"плоские",
	"Маленькие",
	"срЕДние",
	"большие",
	"подтянутые",
	"обвисшие",
	"с маленькими сосками",
	"с болЬшими сосками",
	"гладкие",
	"с пупырышками",
	"чувствительные",
	"нечувствительные",
];
var b = [];
var c = [];
var i = 0; // i для turn
$("#list").hide(); // скрываем список

$.each(a, function (i) {
	// формируем список в div
	var lwrList = a[i].toLowerCase(); // массив в нижний регистр
	b[i] = '<div class="list" id="' + lwrList + '">' + lwrList + "</div>";
	/* id делает уникальным каждый блок при клике
  и будет использоваться в поиске совпадений */
});
$("#list").html(b); // помещаем весь массив в родительский div

$("input").focus(function () {
	reset();
	checking();
}); // очищаем input для новых значений при каждом клике

function checking() {
	$(".list").click(function () {
		$("input").val($(this).html());
		turnUp();
	});
}
checking();

function reset() {
	$("input").val("");
	$("#list").html(b);
}

// сворачивание
function turnUp() {
	$(".array").html("&#9660;");
	$("#list").slideUp(200);
	i = 0;
}
function turnDown() {
	$(".array").html("&#9650;");
	$("#list").slideDown(200);
	i = 1;
}

$(".array").click(function () {
	if (i == 0) {
		turnDown();
	} else {
		turnUp();
	}
});

// поиск совпадений
function search() {
	turnDown();
	setTimeout(function () {
		// для регистра
		var lwrSrch = $("input").val().toLowerCase();
		if ($('[id*="' + lwrSrch + '"]')[0] != null) {
			$('[id*="' + lwrSrch + '"]').each(function (i) {
				c[i] = '<div class="list" id="' + $(this).attr("id") + '">' + $(this).attr("id") + "</div>";
				i++;
			});
			$("#list").html(c);
			c = [];
			checking();
		} else {
			if ($("input").val() != "") {
				$("#list").html("");
				checking();
			} else {
				reset();
				checking();
			}
		}
	}, 50); // ожидание во избежание ошибок
}

$("input").keyup(function (eventObject) {
	if (eventObject.key == "Shift" || eventObject.key == "Control") {
		return false;
	} else {
		search();
	}
	// keypress не определяется смартфонами, потому keyup
});
