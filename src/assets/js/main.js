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

$(function () {});

// $("input").on("keypress", function (e) {
// 	if (e.which == ArrowDown) {
// 		e.preventDefault();
// 		console.log("Нажатие вниз");
// 		// var $next = $("[tabIndex=" + (+this.tabIndex + 1) + "]");
// 		// console.log($next.length);
// 		// if (!$next.length) {
// 		// 	$next = $("[tabIndex=1]");
// 		// }
// 		// $next.focus();
// 	}
// });

$("#myButton").on("click", function () {
	// $("#block").addClass("active");
	focusIn();
});
$("#myButton").on("focus", function () {
	// $("#block").addClass("active");
	focusIn();
});

function focusOut() {
	// $("#block").removeClass("active");
	$("#myButton").show();
	$("#myInput").hide();
}

function focusIn() {
	$("#myButton").hide();
	$("#myInput").show().focus().select();
	$("#list").slideDown(200);
	listNavigate();
}

// function textInButton() {
// 	var t = $("#myInput").val();
// 	$("#myButton").text(t);
// 	if (t == "") $("#myButton").text("Введите значние");
// }

var b = [];
function list() {
	var tabindexVal = parseInt($("#myInput").attr("tabindex"));

	$.each(a, function (i) {
		// формируем список в div
		// var tabindexItem =
		var id = a[i].id;
		var lwrList = a[i].cityName.toLowerCase(); // массив в нижний регистр - для поиска
		var uppList = lwrList.charAt(0).toUpperCase() + lwrList.substr(1); //Названия делаем с большой буквы
		b[i] =
			'<div class="list" tabundex="' +
			(i + tabindexVal + 1) +
			'" data-title="' +
			uppList +
			'" data-id="' +
			lwrList +
			'"><span>' +
			id +
			" </span><span>" +
			uppList +
			"</span></div>";
		/* data-id делает уникальным каждый блок при клике и будет использоваться в поиске совпадений */
	});
	$("#list").html(b); // помещаем весь массив в родительский div
}
list();

// function keyup() {
// 	$(document).on("keyup", function (e) {
// 		// console.dir(e);
// 		if (e.target.id == "myInput" && e.key == "ArrowDown") {
// 			$("#list").slideDown(200).addClass("active");
// 			var $next = $(".list:visible").first();
// 			// $next.focus();
// 			$next.addClass("selected");
// 			// return;
// 		}
// 		// if (e.key == "ArrowDown") {
// 		// 	e.preventDefault();
// 		// 	if ($("#list").hasClass("active")) {
// 		// 		var $next = $(".list:visible").first();
// 		// 		if ($next) {
// 		// 			$next.removeClass("active");
// 		// 			$next = $next.next();
// 		// 			$next.addClass("active");
// 		// 		} else {
// 		// 			$(".list:visible").first().addClass("active");
// 		// 		}
// 		// 	}
// 		// 	// return;
// 		// }

// 		if (e.target.className == "list" && e.key == "ArrowUp") {
// 			e.preventDefault();
// 			var next = e.target.previousSibling;
// 			if (next) {
// 				next.addClass("active");
// 			} else {
// 				$("#list").slideUp(200);
// 				$("#myInput").focus();
// 			}
// 			// return;
// 		}

// 		if ((e.target.className == "list" || e.target.id == "myInput") && e.key == "Enter") {
// 			var val = e.target.dataset.title;
// 			if (val) {
// 				$("#myInput").val(val).hide();
// 			} else {
// 				val = $("#myInput").val();
// 			}
// 			console.log(val);
// 			$("#list").slideUp(200);
// 			$("#myInput").val(val).hide();
// 			$("#myButton").html(val).show();
// 			// return;
// 		}
// 	});
// }
// keyup();

function listNavigate() {
	var li = $(".list").filter(":visible");
	console.log(li);
	var liSelected;
	$(document).on("keyup", function (e) {
		if (e.key == "ArrowDown") {
			if (liSelected) {
				liSelected.removeClass("selected");
				next = liSelected.next();
				if (next.length > 0) {
					liSelected = next.addClass("selected");
					let listcont = $("#list");
					listcont.scrollTop(listcont.scrollTop() + next.position().top);
				} else {
					liSelected = li.eq(0).addClass("selected");
				}
			} else {
				liSelected = li.eq(0).addClass("selected");
			}
		} else if (e.key == "ArrowUp") {
			if (liSelected) {
				liSelected.removeClass("selected");
				next = liSelected.prev();
				if (next.length > 0) {
					liSelected = next.addClass("selected");
					let listcont = $("#list");
					listcont.scrollTop(listcont.scrollTop() + next.position().top);
				} else {
					liSelected = li.last().addClass("selected");
				}
			} else {
				liSelected = li.last().addClass("selected");
			}
		}
	});
}

$("#myInput").on("input", function () {
	search();
	//keyup();
	// listNavigate();
});

function search() {
	$("#list").slideDown(200);
	setTimeout(function () {
		var lwrSrch = $("#myInput").val().toLowerCase();
		let match = $("#list").children();

		var tabindexVal2 = parseInt($("#myInput").attr("tabindex"));
		console.log(tabindexVal2);

		// $(".list").each(function (i) {
		// 	$(this).attr("tabindex", i + tabindexVal + 1);
		// });

		if (match.length) {
			match.each(function (i, d) {
				d = $(d);
				if (d.is('[data-id*="' + lwrSrch + '"]')) d.show();
				else d.hide(); /*.attr("tabindex", "0")*/
			});
			checking();
		}
	}, 50);
}

function textInButton() {
	var t = $("#myInput").val();
	$("#myButton").text(t);
	if (t == "") $("#myButton").text("Введите значние");
}

function checking() {
	$(".list")
		.on("click", function () {
			$("#myInput").val($(this).data("title"));
			$("#list").slideUp(200);
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

function contentDisp() {
	$.ajax({
		url: "file.csv",
		success: function (data) {
			$("#contentArea").html(data);
		},
	});
}
