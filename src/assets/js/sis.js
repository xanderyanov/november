// Список стран
var countries = [
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
countries2 = [
	"Абхазия",
	"Австралия",
	"Австрия",
	"Азербайджан",
	"Азорские острова",
	"Аландские острова",
	"Албания",
	"Алжир",
	"Американское Самоа",
	"Ангилья",
	"Ангола",
	"Андорра",
	"Антигуа и Барбуда",
	"Аомынь",
	"Аргентина",
	"Армения",
	"Аруба",
	"Афганистан",
	"Багамы",
	"Бангладеш",
	"Барбадос",
	"Бахрейн",
	"Белоруссия",
	"Белиз",
	"Бельгия",
	"Бенин",
	"Бермуды",
	"Болгария",
	"Боливия",
	"Босния и Герцеговина",
	"Ботсвана",
	"Бразилия",
	"Британская территория в Индийском океане",
	"Бруней",
	"Буркина Фасо",
	"Бурунди",
	"Бутан",
	"Вануату",
	"Ватикан",
	"Великобритания",
	"Венгрия",
	"Венесуэла",
	"Британские Виргинские острова",
	"Американские Виргинские острова",
	"Восточный Тимор",
	"Вьетнам",
	"Габон",
	"Гавайи",
	"Гаити",
	"Гайана",
	"Гамбия",
	"Гана",
	"Гваделупа",
	"Гватемала",
	"Гвинея",
	"Гвинея-Бисау",
	"Германия",
	"Гернси",
	"Гибралтар",
	"Гондурас",
	"Гонконг",
	"Гренада",
	"Гренландия",
	"Греция",
	"Грузия",
	"Гуам",
	"Дания",
	"Джерси",
	"Джибути",
	"Доминика",
	"Доминиканская Республика",
	"Египет",
	"Замбия",
	"Зимбабве",
	"Израиль",
	"Индия",
	"Индонезия",
	"Иордания",
	"Ирак",
	"Иран",
	"Ирландия",
	"Исландия",
	"Испания",
	"Италия",
	"Йемен",
	"Кабо-Верде",
	"Казахстан",
	"Каймановы острова",
	"Камбоджа",
	"Камерун",
	"Канада",
	"Канарские острова",
	"Катар",
	"Кения",
	"Кипр",
	"Киргизия",
	"Кирибати",
	"КНР",
	"Китайская Республика",
	"Кокосовые острова",
	"Колумбия",
	"Коморы",
	"Республика Конго",
	"ДР Конго",
	"КНДР",
	"Республика Корея",
	"Республика Косово",
	"Коста-Рика",
	"Кот-д’Ивуар",
	"Куба",
	"Кувейт",
	"Острова Кука",
	"Кюрасао",
	"Лаос",
	"Латвия",
	"Лесото",
	"Либерия",
	"Ливан",
	"Ливия",
	"Литва",
	"Лихтенштейн",
	"Люксембург",
	"Маврикий",
	"Мавритания",
	"Мадагаскар",
	"Мадейра",
	"Майотта",
	"Республика Македония",
	"Малави",
	"Малайзия",
	"Мали",
	"Мальдивы",
	"Мальта",
	"Марокко",
	"Мартиника",
	"Маршалловы Острова",
	"Мексика",
	"Мелилья",
	"Микронезия",
	"Мозамбик",
	"Молдавия",
	"Монако",
	"Монголия",
	"Монтсеррат",
	"Мьянма",
	"Остров Мэн",
	"Нагорно-Карабахская Республика",
	"Намибия",
	"Науру",
	"Непал",
	"Нигер",
	"Нигерия",
	"Нидерланды",
	"Никарагуа",
	"Ниуэ",
	"Новая Зеландия",
	"Новая Каледония",
	"Норвегия",
	"Остров Норфолк",
	"ОАЭ",
	"Оман",
	"Пакистан",
	"Палау",
	"Палестина",
	"Панама",
	"Папуа — Новая Гвинея",
	"Парагвай",
	"Перу",
	"Острова Питкэрн",
	"Польша",
	"Португалия",
	"Приднестровская Молдавская Республика",
	"Пуэрто-Рико",
	"Реюньон",
	"Остров Рождества",
	"Россия",
	"Руанда",
	"Румыния",
	"Сальвадор",
	"Самоа",
	"Сан-Марино",
	"Сан-Томе и Принсипи",
	"Сахарская Арабская Демократическая Республика",
	"Саудовская Аравия",
	"Свазиленд",
	"Остров Святой Елены",
	"Северные Марианские острова",
	"Турецкая Республика Северного Кипра",
	"Сейшельские Острова",
	"Сенегал",
	"Сен-Мартен",
	"Сен-Пьер и Микело",
	"Сент-Винсент и Гренадины",
	"Сент-Китс и Невис",
	"Сент-Люсия",
	"Сербия",
	"Сеута",
	"Силенд",
	"Синт-Маартен",
	"Сингапур",
	"Сирия",
	"Словакия",
	"Словения",
	"США",
	"Соломоновы Острова",
	"Сомали",
	"Сомалиленд",
	"Судан",
	"Суринам",
	"Сьерра-Леоне",
	"Таджикистан",
	"Таиланд",
	"Танзания",
	"Тёркс и Кайкос",
	"Того",
	"Токелау",
	"Тонга",
	"Тринидад и Тобаго",
	"Тувалу",
	"Тунис",
	"Туркмения",
	"Турция",
	"Уганда",
	"Узбекистан",
	"Украина",
	"Уоллис и Футуна",
	"Уругвай",
	"Фарерские острова",
	"Фиджи",
	"Филиппины",
	"Финляндия",
	"Фолклендские острова",
	"Франция",
	"Французская Гвиана",
	"Французская Полинезия",
	"Французские Южные и Антарктические Территории",
	"Хорватия",
	"ЦАР",
	"Чад",
	"Черногория",
	"Чехия",
	"Чили",
	"Швейцария",
	"Швеция",
	"Шпицберген",
	"Шри-Ланка",
	"Эквадор",
	"Экваториальная Гвинея",
	"Эритрея",
	"Эстония",
	"Эфиопия",
	"Южная Георгия и Южные Сандвичевы острова",
	"Южная Осетия",
	"ЮАР",
	"Южный Судан",
	"Ямайка",
	"Япония",
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
	$("#search_field").hide();
}

function focusIn() {
	$("#myButton").hide();
	$("#search_field").show().focus().select();
}

function textInButton() {
	var t = $("#search_field").val();
	$("#myButton").text(t);
	if (t == "") $("#myButton").text("Введите значние");
}

//Номер активного элемента в списке подсказок
numActiveItem = 0;

//Количество элементов в списке подсказок
countItemsListHelp = 0;

// Создание списка подсказок
function createHelpList(event) {
	var event = event || window.event;
	var key = event.keyCode || event.charCode;
	var target = event.target || event.srcElement;
	var len_key_words = target.value.length;
	var reg = new RegExp("^" + target.value + ".*$", "i");
	counter = 0;

	// Нажат Enter
	if (key == 13) {
		document.getElementById("select_list").style.display = "none";
	} else if (key == 40 || (key == 38 && countItemsListHelp != 0)) {
		/* Перебор подсказок */
		if (key == 40) numActiveItem++;
		else numActiveItem--;

		if (numActiveItem > countItemsListHelp) numActiveItem = 1;
		else if (numActiveItem < 1) numActiveItem = countItemsListHelp;

		for (i = 0; i < document.getElementById("select_list").childNodes.length; i++) {
			if (document.getElementById("select_list").childNodes[i].nodeType == 1) {
				counter++;
				document.getElementById("select_list").childNodes[i].style.background = "#ffffff";
				if (counter == numActiveItem) {
					document.getElementById("select_list").childNodes[i].style.background = "#fdedaf";
					document.getElementById("search_field").value = document
						.getElementById("select_list")
						.childNodes[i].getElementsByTagName("span")[0].innerHTML;
				}
			}
		}
	} else if (len_key_words && key != 37 && key != 39) {
		/* Поиск и вывод подсказок */
		numActiveItem = 0;
		document.getElementById("select_list").style.display = "none";
		code = "";
		for (i = 0; i < countries2.length; i++)
			if (reg.exec(countries2[i].substr(0, len_key_words)) != null) {
				code +=
					"<li><span style='display: none;'>" +
					countries2[i] +
					"</span><strong>" +
					countries2[i].substr(0, len_key_words) +
					"</strong><span style='color: #b4b3b3'>" +
					countries2[i].substr(len_key_words) +
					"</span></li>";
				counter++;
			}
		if (counter) {
			countItemsListHelp = counter;
			document.getElementById("select_list").innerHTML = code;
			document.getElementById("select_list").style.display = "block";
		}
	} else if (!len_key_words) {
		/* Если поле пустое*/
		document.getElementById("select_list").style.display = "none";
	}
}

function selectHelp(ev) {
	var event = ev || window.event;
	var target = event.target || event.srcElement;
	document.getElementById("search_field").value = target.getElementsByTagName("span")[0].innerHTML;
	document.getElementById("select_list").style.display = "none";
}

// разбираю функцию createHelpList
function test1(ev) {
	var key = ev.keyCode || ev.charCode;
	if (key == 13) {
		console.log("enter");
	}
	// else if (key == 40 || (key == 38 && countItemsListHelp != 0)) {
	if (key == 40) numActiveItem++;
	if (key == 38) numActiveItem--;
	console.log(numActiveItem);
	// }
}
