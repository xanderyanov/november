$(function () {});

var a = [
	{
		id: 1,
		cityName: "amsterdam",
	},
	{
		id: 2,
		cityName: "athens",
	},
	{
		id: 3,
		cityName: "baghdad",
	},
	{
		id: 4,
		cityName: "Bangkok",
	},
	{
		id: 5,
		cityName: "Barcelona",
	},
	{
		id: 6,
		cityName: "Beijing",
	},
	{
		id: 7,
		cityName: "Belgrade",
	},
	{
		id: 8,
		cityName: "Berlin",
	},
	{
		id: 9,
		cityName: "Bogota",
	},
	{
		id: 10,
		cityName: "Bratislava",
	},
	{
		id: 11,
		cityName: "Brussels",
	},
	{
		id: 12,
		cityName: "Bucharest",
	},
	{
		id: 13,
		cityName: "Budapest",
	},
	{
		id: 14,
		cityName: "Buenos Aires",
	},
	{
		id: 15,
		cityName: "Cairo",
	},
	{
		id: 16,
		cityName: "CapeTown",
	},
	{
		id: 17,
		cityName: "Caracas",
	},
	{
		id: 18,
		cityName: "Chicago",
	},
	{
		id: 19,
		cityName: "Copenhagen",
	},
	{
		id: 20,
		cityName: "Dhaka",
	},
	{
		id: 21,
		cityName: "Dubai",
	},
	{
		id: 22,
		cityName: "Dublin",
	},
	{
		id: 23,
		cityName: "Frankfurt",
	},
	{
		id: 24,
		cityName: "Geneva",
	},
	{
		id: 25,
		cityName: "Hanoi",
	},
	{
		id: 26,
		cityName: "Helsinki",
	},
	{
		id: 27,
		cityName: "Hong Kong",
	},
	{
		id: 28,
		cityName: "Istanbul",
	},
	{
		id: 29,
		cityName: "Jakarta",
	},
	{
		id: 30,
		cityName: "Jerusalem",
	},
	{
		id: 31,
		cityName: "Johannesburg",
	},
	{
		id: 32,
		cityName: "Kabul",
	},
	{
		id: 33,
		cityName: "Karachi",
	},
	{
		id: 34,
		cityName: "Kiev",
	},
	{
		id: 35,
		cityName: "Kuala Lumpur",
	},
	{
		id: 36,
		cityName: "Lagos",
	},
	{
		id: 37,
		cityName: "Lahore",
	},
	{
		id: 38,
		cityName: "Lima",
	},
	{
		id: 39,
		cityName: "Lisbon",
	},
	{
		id: 40,
		cityName: "Ljubljana",
	},
	{
		id: 41,
		cityName: "London",
	},
	{
		id: 42,
		cityName: "Los Angeles",
	},
	{
		id: 43,
		cityName: "Luxembourg",
	},
	{
		id: 44,
		cityName: "Madrid",
	},
	{
		id: 45,
		cityName: "Manila",
	},
	{
		id: 46,
		cityName: "Marrakesh",
	},
	{
		id: 47,
		cityName: "Melbourne",
	},
	{
		id: 48,
		cityName: "Mexico City",
	},
	{
		id: 49,
		cityName: "Montreal",
	},
	{
		id: 50,
		cityName: "Moscow",
	},
	{
		id: 51,
		cityName: "Mumbai",
	},
	{
		id: 52,
		cityName: "Nairobi",
	},
	{
		id: 53,
		cityName: "New Delhi",
	},
	{
		id: 54,
		cityName: "NewYork",
	},
	{
		id: 55,
		cityName: "Nicosia",
	},
	{
		id: 56,
		cityName: "Oslo",
	},
	{
		id: 57,
		cityName: "Ottawa",
	},
	{
		id: 58,
		cityName: "Paris",
	},
	{
		id: 59,
		cityName: "Prague",
	},
	{
		id: 60,
		cityName: "Reykjavik",
	},
	{
		id: 61,
		cityName: "Riga",
	},
	{
		id: 62,
		cityName: "Rio de Janeiro",
	},
	{
		id: 63,
		cityName: "Rome",
	},
	{
		id: 64,
		cityName: "Saint Petersburg",
	},
	{
		id: 65,
		cityName: "San Francisco",
	},
	{
		id: 66,
		cityName: "Santiago de Chile",
	},
	{
		id: 67,
		cityName: "São Paulo",
	},
	{
		id: 68,
		cityName: "Seoul",
	},
	{
		id: 69,
		cityName: "Shanghai",
	},
	{
		id: 70,
		cityName: "Singapore",
	},
	{
		id: 71,
		cityName: "Sofia",
	},
	{
		id: 72,
		cityName: "Stockholm",
	},
	{
		id: 73,
		cityName: "Sydney",
	},
	{
		id: 74,
		cityName: "Tallinn",
	},
	{
		id: 75,
		cityName: "Tehran",
	},
	{
		id: 76,
		cityName: "The Hague",
	},
	{
		id: 77,
		cityName: "Tokyo",
	},
	{
		id: 78,
		cityName: "Toronto",
	},
	{
		id: 79,
		cityName: "Venice",
	},
	{
		id: 80,
		cityName: "Vienna",
	},
	{
		id: 81,
		cityName: "Vilnius",
	},
	{
		id: 82,
		cityName: "Warsaw",
	},
	{
		id: 83,
		cityName: "Washington D.C.",
	},
	{
		id: 84,
		cityName: "Wellington",
	},
	{
		id: 85,
		cityName: "Zagreb",
	},
];

$("#myButton").on("click", function () {
	$("#block").addClass("active");
	focusIn();
});
// $("#myButton").on("focus", function () {
// 	$("#block").addClass("active");
// 	focusIn();
// });

function focusOut() {
	$("#block").removeClass("active");
	$("#myButton").show();
	$("#myInput").hide();
}

function focusIn() {
	$("#myButton").hide();
	$("#myInput").show().focus().select();
}

function textInButton() {
	var t = $("#myInput").val();
	$("#myButton").text(t);
	if (t == "") $("#myButton").text("Введите значние");
}

var b = [];
// var c = [];
// var i = 0; // i для turn

$("#list").hide(); // скрываем список

function list() {
	$.each(a, function (i) {
		// формируем список в div
		var lwrList = a[i].cityName.toLowerCase(); // массив в нижний регистр - для поиска
		var uppList = lwrList.charAt(0).toUpperCase() + lwrList.substr(1); //Названия делаем с большой буквы
		b[i] = '<div class="list" tabindex="' + [i] + '" data-id="' + lwrList + '">' + uppList + "</div>";
		/* data-id делает уникальным каждый блок при клике и будет использоваться в поиске совпадений */
	});
	$("#list").html(b); // помещаем весь массив в родительский div
}
list();

$("#myInput").on("focus", function () {
	$("#myInput").trigger("select");
	// reset();
	checking();
	turnDown();
}); // очищаем input для новых значений при каждом клике

function checking() {
	$(".list")
		.on("click", function () {
			$("#myInput").val($(this).html());
			turnUp();
			textInButton();
			focusOut();
		})
		.on("keyup", function (eventObject) {
			if (eventObject.key == "Enter") {
				console.log("ArrowDown");
				$("#list").children(":first").focus().select();
			}
		});
}
checking();

function reset() {
	$("#myInput").val("");
	$("#list").html(b);
}

// сворачивание
function turnUp() {
	$("#list").slideUp(200);
}
function turnDown() {
	$("#list").slideDown(200);
}

// поиск совпадений
function search() {
	turnDown();
	setTimeout(function () {
		list();
		var lwrSrch = $("#myInput").val().toLowerCase();
		let match = $("#list").children();
		if (match.length) {
			match.each(function (i, d) {
				d = $(d);
				if (d.is('[data-id*="' + lwrSrch + '"]')) d.show();
				else d.hide();
			});
			checking();
		}
	}, 50); // ожидание во избежание ошибок
	// listSelect();
}

let oldValue = null;

$("#myInput")
	.on("input", turnDown)
	.on("keyup", function (eventObject) {
		if (eventObject.key == "ArrowDown") {
			console.log("ArrowDown");
		}
	});

$("#myInput").on("keypress", function (e) {
	if (e.key == 40) {
		console.log("keypress");
		// e.preventDefault();
		var $next = $("[tabIndex=" + (+this.tabIndex + 1) + "]");
		console.log($next.length);
		if (!$next.length) {
			$next = $("[tabIndex=1]");
		}
		$next.focus();
	}
});
