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

$("#myButton").on("click", function () {
	focusIn();
});

$(document).on("mouseup", function (e) {
	var container = $(".block");
	if (container.has(e.target).length === 0) {
		focusOut();
	}
});

function focusOut() {
	$("#myButton").show().focus();
	$("#myInput").hide();
	$("#list").slideUp(200);
}

function focusIn() {
	setTimeout(() => {
		$("#myButton").hide();
		$("#myInput").show().focus().select();
		$("#list").slideDown(200).scrollTop("0");
		// listNavigate();
	}, 100);
}

//Формируем список в выпадайке
var b = [];
function list() {
	$.each(a, function (i) {
		var id = a[i].id;
		var lwrList = a[i].cityName.toLowerCase();
		var uppList = lwrList.charAt(0).toUpperCase() + lwrList.substr(1);
		b[i] =
			'<div class="list" data-title="' +
			uppList +
			'" data-id="' +
			lwrList +
			'"><span>' +
			id +
			" </span><span>" +
			uppList +
			"</span></div>";
	});
	$("#list").html(b); // помещаем весь массив в родительский div
}
list();

function ensureItemVisble(container, item) {
	let ch = container.height();
	let ct = container.scrollTop();
	let ih = item.height();
	let it = item.position().top;
	if (ch <= ih || it < 0) {
		container.scrollTop(ct + it);
	} else if (it + ih > ch) {
		container.scrollTop(ct + it + ih - ch);
	}
}

console.log("Включили навигацию");
$("#myInput").on("keydown", listKeydown);

function listKeydown(e) {
	let listContainer = $("#list");
	let allVisible = listContainer.children(".list:visible");
	let selectedItem = allVisible.filter(".selected");
	let currentIndex = allVisible.index(selectedItem);

	if (e.key === "ArrowDown") {
		if (selectedItem.length > 0) {
			if (currentIndex >= allVisible.length - 1) currentIndex = -1;
			selectedItem.removeClass("selected");
			selectedItem = allVisible.eq(currentIndex + 1);
		} else {
			selectedItem = allVisible.eq(0);
			console.log("первый раз вниз");
		}
		selectedItem.addClass("selected");
		ensureItemVisble(listContainer, selectedItem);
		$("#myInput").val(selectedItem.data("title"));
		return;
	}

	if (e.key === "ArrowUp") {
		if (selectedItem.length > 0) {
			if (currentIndex <= 0) currentIndex = allVisible.length;
			selectedItem.removeClass("selected");
			selectedItem = allVisible.eq(currentIndex - 1);
		} else {
			selectedItem = allVisible.eq(allVisible.length - 1);
			console.log("первый раз вверх");
		}
		selectedItem.addClass("selected");
		ensureItemVisble(listContainer, selectedItem);
		$("#myInput").val(selectedItem.data("title"));
		return;
	}

	if (e.key === "Enter") {
		e.preventDefault();
		console.log("Enter");
		if (selectedItem.length) {
			newCheck(selectedItem);
			selectedItem.removeClass("selected");
			listContainer.scrollTop(0);
		}
		return;
	}

	if (e.key === "Esc") {
		console.log("Esc");
		if (selectedItem.length) {
			//newCheck(selectedItem);
			// здесь надо скрыть выпадайку, не меняя значение.
			selectedItem.removeClass("selected");
			listContainer.scrollTop(0);
		}
	}
}

//работает этот
function newCheck(event) {
	$("#myInput").val($(event).data("title"));
	$("#list").slideUp(200);
	focusOut();
	$("#myButton").text($(event).data("title"));
}

$(".list").on("click", function () {
	$("#myInput").val($(this).data("title"));
	$("#list").slideUp(200);
	focusOut();
	$("#myButton").text($(this).data("title"));
});

// function checking() {
// 	$(".list")
// 		.on("click", function () {
// 			$("#myInput").val($(this).data("title"));
// 			$("#list").slideUp(200);
// 			textInButton();
// 			focusOut();
// 		})
// 		.on("keyup", function (eventObject) {
// 			if (eventObject.key == "Enter") {
// 				console.log("ArrowDown");
// 				$("#list").children(":first").focus().select();
// 			}
// 		});
// }
// checking();

// //клик по элементу списка с присвоением значения инпуту
// checking();
// function checking() {
// 	$(".list").on("click", function () {
// 		$("#myInput").val($(this).data("title"));
// 		textInButton();
// 		focusOut();
// 	});
// }

//поиск в инпуте
$("#myInput").on("input", function () {
	search();
});

function search() {
	setTimeout(function () {
		var lwrSrch = $("#myInput").val().toLowerCase();
		let match = $("#list").children();
		if (match.length) {
			match.each(function (i, d) {
				d = $(d);
				if (d.is('[data-id*="' + lwrSrch + '"]')) d.show();
				else d.hide(); /*.attr("tabindex", "0")*/
			});
			// newCheck(d);
		}
	}, 50);
}

function textInButton() {
	var t = $("#myInput").val();
	$("#myButton").text(t);
	if (t == "") $("#myButton").text("Введите значние");
}

// function contentDisp() {
// 	$.ajax({
// 		url: "file.csv",
// 		success: function (data) {
// 			$("#contentArea").html(data);
// 		},
// 	});
// }
