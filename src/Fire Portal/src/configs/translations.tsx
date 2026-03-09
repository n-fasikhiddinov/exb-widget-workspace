export const LANGS = {
    UZ: "O'zbekcha",
    RU: "Русский",
    EN: "English",
} as const;
export type LangKey = keyof typeof LANGS;
export const Translations: Record<string, Record<LangKey, string>> = {
    "logOut": {
        "UZ": "Chiqish",
        "RU": "Выход",
        "EN": "Log out"
    },
    "headerTitle": {
        "UZ": "Еhtimoli yuqori yong'in bo'lgan",
        "RU": "Территории с высокой вероятностью возникновения пожаров",
        "EN": "High-risk fire areas"
    },
    "headerParagraph": {
        "UZ": "hududlarining kosmik monitoringi",
        "RU": "космический мониторинг",
        "EN": "space monitoring"
    },
    "headerSearch": {
        "UZ": "ID ni kiriting",
        "RU": "Введите ID",
        "EN": "Enter ID"
    },
    "yearsSelector": {
        "UZ": "Yilni tanlang",
        "RU": "Выберите год",
        "EN": "Select year"
    },
    "typesSelector": {
        "UZ": "Toifani tanlang",
        "RU": "Выберите категорию",
        "EN": "Select category"
    },
    "countIndicator": {
        "UZ": "Aniqlangan obyektlar soni",
        "RU": "Количество обнаруженных объектов",
        "EN": "Number of detected objects"
    },
    "sumIndicator": {
        "UZ": "Aniqlangan obyektlar maydoni",
        "RU": "Площадь обнаруженных объектов",
        "EN": "Area of detected objects"
    },
    "graphicTitle": {
        "UZ": "Hudud bo‘yicha statistika",
        "RU": "Статистика по районам",
        "EN": "Statistics by district"
    },
    "tableTitle": {
        "UZ": "Yong’inlar jadvali",
        "RU": "Таблица пожаров",
        "EN": "Fire table"
    },
    "imgTitle": {
        "UZ": "Kosmik surat",
        "RU": "Космический снимок",
        "EN": "Satellite image"
    },
    "regionBarChartRegion": {
        "UZ": "Viloyat kesimida statistika",
        "RU": "Статистика по областям",
        "EN": "Statistics by region"
    },
    "regionBarChartDistrict": {
        "UZ": "Tuman kesimida statistika",
        "RU": "Статистика в разрезе районов",
        "EN": "Statistics by district"
    },
    "statusBarChart": {
        "UZ": "Statuslar bo‘yicha statistika",
        "RU": "Статистика по статусам",
        "EN": "Statistics by status"
    },

    // -------------------------------- Region --------------------------
    "1703": { // Andijon viloyati
        "UZ": "Andijon",
        "RU": "Андижанская",
        "EN": "Andijan"
    },
    "1706": { // Buxoro viloyati
        "UZ": "Buxoro",
        "RU": "Бухарская",
        "EN": "Bukhara"
    },
    "1730": { // Farg'ona viloyati
        "UZ": "Farg'ona",
        "RU": "Ферганская",
        "EN": "Fergana"
    },
    "1708": { // Jizzax viloyati
        "UZ": "Jizzax",
        "RU": "Джизакская",
        "EN": "Jizzakh"
    },
    "1714": { // Namangan viloyati
        "UZ": "Namangan",
        "RU": "Наманганская",
        "EN": "Namangan"
    },
    "1712": { // Navoiy viloyati
        "UZ": "Navoiy",
        "RU": "Навоийская",
        "EN": "Navoiy"
    },
    "1710": { // Qashqadaryo viloyati
        "UZ": "Qashqadaryo",
        "RU": "Кашкадарьинская",
        "EN": "Qashqadaryo"
    },
    "1735": { // Qoraqalpog'iston Respublikasi
        "UZ": "Qoraqalpogʻiston",
        "RU": "Каракалпакстан",
        "EN": "Karakalpakstan"
    },
    "1718": { // Samarqand viloyati
        "UZ": "Samarqand",
        "RU": "Самаркандская",
        "EN": "Samarkand"
    },
    "1724": { // Sirdaryo viloyati
        "UZ": "Sirdaryo",
        "RU": "Сырдарьинская",
        "EN": "Sirdaryo"
    },
    "1722": { // Surxondaryo viloyati
        "UZ": "Surxondaryo",
        "RU": "Сурхандарьинская",
        "EN": "Surxondaryo"
    },
    "1727": { // Toshkent viloyati
        "UZ": "Toshkent",
        "RU": "Ташкентская",
        "EN": "Tashkent"
    },
    "1733": { // Xorazm viloyati
        "UZ": "Xorazm",
        "RU": "Хорезмская",
        "EN": "Khorezm"
    },

    // -------------------------------- District --------------------------
    "1735204": {
        "UZ": "Amudaryo",
        "RU": "Амударьинский",
        "EN": "Amudaryo"
    },
    "1703203": {
        "UZ": "Andijon",
        "RU": "Андижанский",
        "EN": "Andijan"
    },
    "1722202": {
        "UZ": "Angor",
        "RU": "Ангорский",
        "EN": "Angor"
    },
    "1708201": {
        "UZ": "Arnasoy",
        "RU": "Арнасайский",
        "EN": "Arnasoy"
    },
    "1703224": {
        "UZ": "Asaka",
        "RU": "Асакинский",
        "EN": "Asaka"
    },
    "1703206": {
        "UZ": "Baliqchi",
        "RU": "Балыкчинский",
        "EN": "Baliqchi"
    },
    "1722203": {
        "UZ": "Bandixon",
        "RU": "Бандиханский",
        "EN": "Bandixon"
    },
    "1727220": {
        "UZ": "Bekobod",
        "RU": "Бекабадский",
        "EN": "Bekabad"
    },
    "1735207": {
        "UZ": "Beruniy",
        "RU": "Берунийский",
        "EN": "Beruniy"
    },
    "1730215": {
        "UZ": "Beshariq",
        "RU": "Бешарыкский",
        "EN": "Beshariq"
    },
    "1730209": {
        "UZ": "Bog‘dod",
        "RU": "Боғдодский",
        "EN": "Bog‘dod"
    },
    "1733204": {
        "UZ": "Bog‘ot",
        "RU": "Боғотский",
        "EN": "Bog‘ot"
    },
    "1727228": {
        "UZ": "Bo‘ka",
        "RU": "Букинский",
        "EN": "Bo‘ka"
    },
    "1727224": {
        "UZ": "Bo‘stonliq",
        "RU": "Бостанлыкский",
        "EN": "Bo‘stonliq"
    },
    "1703209": {
        "UZ": "Bo‘ston",
        "RU": "Бустанский",
        "EN": "Bo‘ston"
    },
    "1724212": {
        "UZ": "Boyovut",
        "RU": "Баёвутский",
        "EN": "Boyovut"
    },
    "1703210": {
        "UZ": "Buloqboshi",
        "RU": "Булокбошинский",
        "EN": "Buloqboshi"
    },
    "1718206": {
        "UZ": "Bulung‘ur",
        "RU": "Булунғурский",
        "EN": "Bulung‘ur"
    },
    "1730212": {
        "UZ": "Buvayda",
        "RU": "Бувайдинский",
        "EN": "Buvayda"
    },
    "1706207": {
        "UZ": "Buxoro",
        "RU": "Бухарский",
        "EN": "Bukhara"
    },
    "1735240": {
        "UZ": "Chimboy",
        "RU": "Чимбайский",
        "EN": "Chimboy"
    },
    "1727256": {
        "UZ": "Chinoz",
        "RU": "Чиназский",
        "EN": "Chinoz"
    },
    "1714237": {
        "UZ": "Chust",
        "RU": "Чустский",
        "EN": "Chust"
    },
    "1730236": {
        "UZ": "Dang‘ara",
        "RU": "Данғаринский",
        "EN": "Dang‘ara"
    },
    "1722210": {
        "UZ": "Denov",
        "RU": "Денауский",
        "EN": "Denov"
    },
    "1708215": {
        "UZ": "Do‘stlik",
        "RU": "Дустликский",
        "EN": "Do‘stlik"
    },
    "1730238": {
        "UZ": "Furqat",
        "RU": "Фуркатский",
        "EN": "Furqat"
    },
    "1706215": {
        "UZ": "G‘ijduvon",
        "RU": "Гиждуванский",
        "EN": "G‘ijduvon"
    },
    "1724401": {
        "UZ": "Guliston",
        "RU": "Гулистан",
        "EN": "Gulistan"
    },
    "1724220": {
        "UZ": "Guliston",
        "RU": "Гулистанский",
        "EN": "Gulistan"
    },
    "1733208": {
        "UZ": "Gurlan",
        "RU": "Гурланский",
        "EN": "Gurlan"
    },
    "1718212": {
        "UZ": "Ishtixon",
        "RU": "Иштыханский",
        "EN": "Ishtixon"
    },
    "1703214": {
        "UZ": "Izboskan",
        "RU": "Избасканский",
        "EN": "Izboskan"
    },
    "1703211": {
        "UZ": "Jalaquduq",
        "RU": "Джалакудукский",
        "EN": "Jalaquduq"
    },
    "1722212": {
        "UZ": "Jarqo‘rg‘on",
        "RU": "Джаркурганский",
        "EN": "Jarqo‘rg‘on"
    },
    "1718209": {
        "UZ": "Jomboy",
        "RU": "Джамбайский",
        "EN": "Jomboy"
    },
    "1706246": {
        "UZ": "Jondor",
        "RU": "Жондорский",
        "EN": "Jondor"
    },
    "1718215": {
        "UZ": "Kattaqo‘rg‘on",
        "RU": "Каттакурганский",
        "EN": "Kattaqo‘rg‘on"
    },
    "1735212": {
        "UZ": "Kegeyli",
        "RU": "Кегейлийский",
        "EN": "Kegeyli"
    },
    "1703227": {
        "UZ": "Marxamat",
        "RU": "Мархаматский",
        "EN": "Marxamat"
    },
    "1714204": {
        "UZ": "Mingbuloq",
        "RU": "Мингбулакский",
        "EN": "Mingbuloq"
    },
    "1708223": {
        "UZ": "Mirzacho‘l",
        "RU": "Мирзачульский",
        "EN": "Mirzacho‘l"
    },
    "1724228": {
        "UZ": "Mirzaobod",
        "RU": "Мирзаабадский",
        "EN": "Mirzaobod"
    },
    "1735222": {
        "UZ": "Mo‘ynoq",
        "RU": "Муйнакский",
        "EN": "Mo‘ynoq"
    },
    "1722207": {
        "UZ": "Muzrabot",
        "RU": "Музрабатский",
        "EN": "Muzrabot"
    },
    "1714212": {
        "UZ": "Namangan",
        "RU": "Наманганский",
        "EN": "Namangan"
    },
    "1718218": {
        "UZ": "Narpay",
        "RU": "Нарпайский",
        "EN": "Narpay"
    },
    "1714216": {
        "UZ": "Norin",
        "RU": "Нарынский",
        "EN": "Norin"
    },
    "1735225": {
        "UZ": "Nukus",
        "RU": "Нукусский",
        "EN": "Nukus"
    },
    "1727401": {
        "UZ": "Nurafshon",
        "RU": "Нурафшан",
        "EN": "Nurafshon"
    },
    "1727212": {
        "UZ": "Ohangaron",
        "RU": "Ахангаранский",
        "EN": "Ohangaron"
    },
    "1730203": {
        "UZ": "Oltiariq",
        "RU": "Алтыарыкский",
        "EN": "Oltiariq"
    },
    "1703202": {
        "UZ": "Oltinko‘l",
        "RU": "Алтынкульский",
        "EN": "Oltinko‘l"
    },
    "1722201": {
        "UZ": "Oltinsoy",
        "RU": "Алтынсайский",
        "EN": "Oltinsoy"
    },
    "1718203": {
        "UZ": "Oqdaryo",
        "RU": "Акдарьинский",
        "EN": "Oqdaryo"
    },
    "1724206": {
        "UZ": "Oqoltin",
        "RU": "Акалтынский",
        "EN": "Oqoltin"
    },
    "1727206": {
        "UZ": "Oqqo‘rg‘on",
        "RU": "Аккурганский",
        "EN": "Oqqo‘rg‘on"
    },
    "1727253": {
        "UZ": "O‘rtachirchiq",
        "RU": "Уртачирчикский",
        "EN": "O‘rtachirchiq"
    },
    "1730230": {
        "UZ": "O‘zbekiston",
        "RU": "Узбекистанский",
        "EN": "O‘zbekiston"
    },
    "1718227": {
        "UZ": "Pastdarg‘om",
        "RU": "Пастдаргомский",
        "EN": "Pastdarg‘om"
    },
    "1708228": {
        "UZ": "Paxtakor",
        "RU": "Пахтакорский",
        "EN": "Paxtakor"
    },
    "1703232": {
        "UZ": "Paxtaobod",
        "RU": "Пахтаабадский",
        "EN": "Paxtaobod"
    },
    "1718224": {
        "UZ": "Payariq",
        "RU": "Пайарыкский",
        "EN": "Payariq"
    },
    "1706240": {
        "UZ": "Peshko‘",
        "RU": "Пешкунский",
        "EN": "Peshko‘"
    },
    "1714219": {
        "UZ": "Pop",
        "RU": "Папский",
        "EN": "Pop"
    },
    "1727250": {
        "UZ": "Pskent",
        "RU": "Пскентский",
        "EN": "Pskent"
    },
    "1710220": {
        "UZ": "Qamashi",
        "RU": "Камашинский",
        "EN": "Qamashi"
    },
    "1735218": {
        "UZ": "Qanliko‘l",
        "RU": "Канлыкульский",
        "EN": "Qanliko‘l"
    },
    "1727248": {
        "UZ": "Qibray",
        "RU": "Кибрайский",
        "EN": "Qibray"
    },
    "1712216": {
        "UZ": "Qiziltepa",
        "RU": "Кызылтепинский",
        "EN": "Qiziltepa"
    },
    "1722215": {
        "UZ": "Qiziriq",
        "RU": "Кизирикский",
        "EN": "Qiziriq"
    },
    "1735215": {
        "UZ": "Qo‘ng‘irot",
        "RU": "Кунградский",
        "EN": "Qo‘ng‘irot"
    },
    "1735211": {
        "UZ": "Qorauzak",
        "RU": "Караузякский",
        "EN": "Qorauzak"
    },
    "1703220": {
        "UZ": "Qo‘rg‘ontepa",
        "RU": "Кургантепинский",
        "EN": "Qo‘rg‘ontepa"
    },
    "1706232": {
        "UZ": "Qorovulbozor",
        "RU": "Караулбазарский",
        "EN": "Qorovulbozor"
    },
    "1733212": {
        "UZ": "Qo‘shko‘pir",
        "RU": "Кошкупырский",
        "EN": "Qo‘shko‘pir"
    },
    "1730206": {
        "UZ": "Qo‘shtepa",
        "RU": "Куштепинский",
        "EN": "Qo‘shtepa"
    },
    "1722214": {
        "UZ": "Qumqo‘rg‘on",
        "RU": "Кумкурганский",
        "EN": "Qumqo‘rg‘on"
    },
    "1730218": {
        "UZ": "Quva",
        "RU": "Кувинский",
        "EN": "Quva"
    },
    "1727233": {
        "UZ": "Quyichirchiq",
        "RU": "Куйичирчикский",
        "EN": "Quyichirchiq"
    },
    "1730224": {
        "UZ": "Rishton",
        "RU": "Риштанский",
        "EN": "Rishton"
    },
    "1706242": {
        "UZ": "Romitan",
        "RU": "Ромитанский",
        "EN": "Romitan"
    },
    "1718233": {
        "UZ": "Samarqand",
        "RU": "Самаркандский",
        "EN": "Samarkand"
    },
    "1724226": {
        "UZ": "Sardoba",
        "RU": "Сардобинский",
        "EN": "Sardoba"
    },
    "1722217": {
        "UZ": "Sariosiyo",
        "RU": "Сариасийский",
        "EN": "Sariosiyo"
    },
    "1724216": {
        "UZ": "Sayxunobod",
        "RU": "Сайхунабадский",
        "EN": "Sayxunobod"
    },
    "1708212": {
        "UZ": "Sharof Rashidov",
        "RU": "Шараф Рашидовский",
        "EN": "Sharof Rashidov"
    },
    "1703230": {
        "UZ": "Shaxrixon",
        "RU": "Шахриханский",
        "EN": "Shaxrixon"
    },
    "1722223": {
        "UZ": "Sherobod",
        "RU": "Шерабадский",
        "EN": "Sherobod"
    },
    "1724410": {
        "UZ": "Shirin",
        "RU": "Ширин",
        "EN": "Shirin"
    },
    "1706258": {
        "UZ": "Shofirkon",
        "RU": "Шафирканский",
        "EN": "Shofirkon"
    },
    "1722226": {
        "UZ": "Sho‘rchi",
        "RU": "Шурчинский",
        "EN": "Sho‘rchi"
    },
    "1733230": {
        "UZ": "Shovot",
        "RU": "Шаватский",
        "EN": "Shovot"
    },
    "1735243": {
        "UZ": "Shumanay",
        "RU": "Шуманайский",
        "EN": "Shumanay"
    },
    "1724231": {
        "UZ": "Sirdaryo",
        "RU": "Сырдарьинский",
        "EN": "Sirdaryo"
    },
    "1735230": {
        "UZ": "Taxtako‘pir",
        "RU": "Тахтакупырский",
        "EN": "Taxtako‘pir"
    },
    "1718238": {
        "UZ": "Tayloq",
        "RU": "Тайлакский",
        "EN": "Tayloq"
    },
    "1722220": {
        "UZ": "Termiz",
        "RU": "Термезский",
        "EN": "Termez"
    },
    "1735233": {
        "UZ": "To‘rtko‘l",
        "RU": "Турткульский",
        "EN": "To‘rtko‘l"
    },
    "1727265": {
        "UZ": "Toshkent",
        "RU": "Ташкентский",
        "EN": "Tashkent"
    },
    "1730227": {
        "UZ": "Toshloq",
        "RU": "Ташлакский",
        "EN": "Toshloq"
    },
    "1733221": {
        "UZ": "Tuproqqal‘a",
        "RU": "Тупроқкалинский",
        "EN": "Tuproqqal‘a"
    },
    "1730221": {
        "UZ": "Uchko‘prik",
        "RU": "Учкуприкский",
        "EN": "Uchko‘prik"
    },
    "1714234": {
        "UZ": "Uchqo‘rg‘on",
        "RU": "Учкурганский",
        "EN": "Uchqo‘rg‘on"
    },
    "1703217": {
        "UZ": "Ulug‘nor",
        "RU": "Улугнорский",
        "EN": "Ulug‘nor"
    },
    "1733217": {
        "UZ": "Urganch",
        "RU": "Ургенчский",
        "EN": "Urganch"
    },
    "1718236": {
        "UZ": "Urgut",
        "RU": "Ургутский",
        "EN": "Urgut"
    },
    "1714229": {
        "UZ": "Uychi",
        "RU": "Уйчинский",
        "EN": "Uychi"
    },
    "1722221": {
        "UZ": "Uzun",
        "RU": "Узунский",
        "EN": "Uzun"
    },
    "1706212": {
        "UZ": "Vobkent",
        "RU": "Вабкентский",
        "EN": "Vobkent"
    },
    "1733220": {
        "UZ": "Xazorasp",
        "RU": "Хазараспский",
        "EN": "Xazorasp"
    },
    "1733226": {
        "UZ": "Xiva",
        "RU": "Хивинский",
        "EN": "Xiva"
    },
    "1703236": {
        "UZ": "Xo‘jaobod",
        "RU": "Ходжаабадский",
        "EN": "Xo‘jaobod"
    },
    "1735236": {
        "UZ": "Xo‘jayli",
        "RU": "Ходжейлийский",
        "EN": "Xo‘jayli"
    },
    "1733223": {
        "UZ": "Xonqa",
        "RU": "Ханкинский",
        "EN": "Xonqa"
    },
    "1724235": {
        "UZ": "Xovos",
        "RU": "Хавастский",
        "EN": "Xovos"
    },
    "1710250": {
        "UZ": "Yakkabog‘",
        "RU": "Яккабагский",
        "EN": "Yakkabog‘"
    },
    "1733233": {
        "UZ": "Yangiariq",
        "RU": "Янгиарыкский",
        "EN": "Yangiariq"
    },
    "1727259": {
        "UZ": "Yangiyo‘l",
        "RU": "Янгиюльский",
        "EN": "Yangiyo‘l"
    },
    "1730242": {
        "UZ": "Yozyovon",
        "RU": "Язъяванский",
        "EN": "Yozyovon"
    },
    "1727239": {
        "UZ": "Yuqorichirchiq",
        "RU": "Юкоричирчикский",
        "EN": "Yuqorichirchiq"
    },
    "1708225": {
        "UZ": "Zafarobod",
        "RU": "Зафарабадский",
        "EN": "Zafarobod"
    },
    "1727237": {
        "UZ": "Zangiota",
        "RU": "Зангиатинский",
        "EN": "Zangiota"
    },
    "1708220": {
        "UZ": "Zarbdor",
        "RU": "Зарбдарский",
        "EN": "Zarbdor"
    },
    "1708218": {
        "UZ": "Zomin",
        "RU": "Зааминский",
        "EN": "Zomin"
    },

    "0": {
        "UZ": "Jarayonda",
        "RU": "В процессе",
        "EN": "In progress"
    },
    "1": {
        "UZ": "Tasdiqlanmagan",
        "RU": "Не подтвержден",
        "EN": "Not confirmed"
    },
    "2": {
        "UZ": "Tasdiqlangan",
        "RU": "Подтвержден",
        "EN": "Confirmed"
    },
    "3": {
        "UZ": "Tekshirilgan",
        "RU": "Проверяные",
        "EN": "Verified"
    }
};
export type TranslationKey = keyof typeof LANGS;