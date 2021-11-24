$(function () {
	// $("#myInput").on("keyup", function () {
	// 	textInButton();
	// 	search();
	// });
	// $("#block").on("focus", function () {
	// 	var $this = $(this);
	// 	$this.addClass("active");
	// 	focusIn();
	// });
	// $("#myButton").on("click", function () {
	// 	$("#block").addClass("active");
	// 	focusIn();
	// });
	// $("#myInput").on("blur", function () {
	// 	focusOut();
	// });
	// $("#myInput").on("keyup", function (event) {
	// 	if (event.which === 13) {
	// 		focusOut();
	// 	}
	// });
});

// function textInButton() {
// 	var t = $("#myInput").val();
// 	$("#myButton").text(t);
// 	if (t == "") $("#myButton").text("Введите значние");
// }

// function focusOut() {
// 	$("#block").removeClass("active");
// 	$("#myButton").show();
// 	$("#myInput").hide();
// }

// function focusIn() {
// 	$("#myButton").hide();
// 	$("#myInput").show().focus().select();
// }

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
var c = [];
// var i = 0; // i для turn

$("#list").hide(); // скрываем список

function list() {
	$.each(a, function (i) {
		// формируем список в div
		var lwrList = a[i].cityName.toLowerCase(); // массив в нижний регистр - для поиска
		var uppList = lwrList.charAt(0).toUpperCase() + lwrList.substr(1); //Названия делаем с большой буквы
		b[i] = '<div class="list" tabindex="0" data-id="' + lwrList + '">' + uppList + "</div>";
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
	$(".list").on("click", function () {
		$("#myInput").val($(this).html());
		turnUp();
		textInButton();
		focusOut();
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
	// i = 0;
}
function turnDown() {
	$("#list").slideDown(200);
	// i = 1;
}

// поиск совпадений
function search() {
	turnDown();
	setTimeout(function () {
		list();
		// console.log("старое - " + oldValue);
		var lwrSrch = $("#myInput").val().toLowerCase();
		// console.log("новое - " + lwrSrch);
		let match = $("#list").children();
		// let isDelete = oldValue && lwrSrch.length < oldValue.length;
		// if (isDelete) {
		// 	console.log("удаление символа");
		// }
		if (match.length) {
			match.each(function (i, d) {
				d = $(d);
				if (d.is('[data-id*="' + lwrSrch + '"]')) d.show();
				else d.hide();
				/*Формирование списка в выпадайке, подходящее под поиск*/
				// c[i] =
				// 	'<div class="list" data-id="' +
				// 	$(this).attr("data-id") +
				// 	'">' +
				// 	$(this).attr("data-id").charAt(0).toUpperCase() +
				// 	$(this).attr("data-id").substr(1) +
				// 	"</div>";
				// i++;
			});

			//$("#list").html(c);
			// c = [];
			checking();
			// oldValue = lwrSrch;
		}
		// else {
		// 	if ($("#myInput").val() != "") {
		// 		$("#list").html("");
		// 		checking();
		// 	} else {
		// 		reset();
		// 		checking();
		// 		console.log("reset");
		// 	}
		// }
		// console.log("старое = новое = " + oldValue);
	}, 50); // ожидание во избежание ошибок
}

let oldValue = null;
console.log("Начальное - " + oldValue);
$("#myInput").on("input", search);
// .on("keyup", function (eventObject) {
// 	if (eventObject.key == "Shift" || eventObject.key == "Control") {
// 		return false;
// 	} else if (eventObject.key == "Backspace") {
// 		console.log("Backspace");
// 		search();
// 	} else {
// 		search();
// 	}
// });
