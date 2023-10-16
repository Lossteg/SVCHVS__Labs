const langs = ["ru", "eng"];
let currLang = localStorage.getItem("language") || "eng";
const langBtns = document.querySelectorAll("[data-btn]");

const multiLang = { 
    "agency_description": {
        eng: "A creative agency based in Helsinki",
        ru: "Креативное агентство в Хельсинки",
    },
    "menu_link-1" : {
        eng: "Home",
        ru: "На главную",
    },
    "menu_link-2" : {
        eng: "About",
        ru: "О нас",
    },
    "menu_link-3" : {
        eng: "News",
        ru: "Новости",
    },
    "menu_link-4" : {
        eng: "Contact",
        ru: "Контакты",
    },
    "menu_link-5" : {
        eng: 'Сart (0)',
        ru: 'Корзина (0)',
    },
    "tagline-1" : {
        eng: '"We believe that',
        ru: '"Мы верим, что',
    },
    "tagline-2" : {
        eng: "The power of design",
        ru: "Сила дизайна",
    },
    "tagline-3" : {
        eng: "Helps",
        ru: "Помогает",
    },
    "tagline-4" : {
        eng: "businesses",
        ru: "бизнесам\"",
    },
    "collab-btn" : {
        eng: 'work with us',
        ru: 'работать с нами',
    },
    "partners" : {
        eng: 'We partner with',
        ru: 'Мы сотрудничаем с',
    },
    "partners-1" : {
        eng: "startups.",
        ru: "стартапами.",
    },
    "partners-span" : {
        eng: "forward-thinking",
        ru: "перспективными",
    },
    "accompl-tagline" : {
        eng: "The perfect",
        ru: "Идеальное",
    },
    "accompl-tagline-span" : {
        eng: "agency for your brand",
        ru: "агенство для вашего бренда",
    },
    "statement-1" : {
        eng: "We love what we do and create partnerships with our clients to ensure their digital transformation is positioned for long-term success.",
        ru: "Мы любим свое дело и создаем партнерские отношения с нашими клиентами для обеспечения долгосрочного успеха их цифровой трансформации.",
    },
    "statement-2" : {
        eng: "We believe that the human dimensions essential to start any successful project and that this is where splendid emotional relationships between the company and people are born.",
        ru: "Мы считаем, что для начала любого успешного проекта важны человеческие аспекты и что именно здесь рождаются великолепные эмоциональные отношения между компанией и людьми.",
    },
    "awards" : {
        eng: "Awards",
        ru: "Награды",
    },
    "award-1" : {
        eng: "Site of the Day",
        ru: "Сайт Дня",
    },
    "award-2" : {
        eng: "Developer Award",
        ru: "Награда для Разработчиков",
    },
    "award-3" : {
        eng: "Honorable Mention",
        ru: "Почётный Знак",
    },
    "award-4" : {
        eng: "Mobile Exellence",
        ru: "Мобильное Превосходство",
    },
    "CSS-awards" : {
        eng: "CSS design awards",
        ru: "Награды в Области дизайна CSS",
    },
    "CSS-award-1" : {
        eng: "UX Design Award",
        ru: "Премия в Области UX-дизайна",
    },
    "CSS-award-2" : {
        eng: "UI Design Award",
        ru: "Премия в Области UI-дизайна",
    },
    "CSS-award-3" : {
        eng: "Innovation Design Award",
        ru: "Премия за Инновационный Дизайн",
    },
    "CSS-award-4" : {
        eng: "Website of the Day",
        ru: "Вебсайт Дня",
    },
    "selectedWork-tagline-1" : {
        eng: "Selected",
        ru: "Избранные"
    },
    "selectedWork-tagline-2" : {
        eng: "work",
        ru: "работы"
    },
    "selectedWork-1": {
        eng: "Conference",
        ru: "Конференция",
    },
    "selectedWork-1_1": {
        eng: "Art Direction, Design",
        ru: "Художественное руководство, дизайн",
    },
    "selectedWork-2": {
        eng: "Ivor application",
        ru: "Приложение для Айвора",
    },
    "selectedWork-2_1": {
        eng: "User Interface",
        ru: "Пользовательский интерфейс",
    },
    "selectedWork-3": {
        eng: "Flying to the moon",
        ru: "Полёт на луну",
    },
    "selectedWork-3_1": {
        eng: "User Experiences",
        ru: "Пользовательский опыт",
    },
    "selectedWork-4": {
        eng: "Magazine",
        ru: "Журнал",
    },
    "selectedWork-4_1": {
        eng: "Logo, User Interface",
        ru: "Логотип, пользовательский интерфейс",
    },
    "selectedWork-5": {
        eng: "Black apple watch",
        ru: "Черные часы Apple Watch",
    },
    "selectedWork-6": {
        eng: "Dharma webfont",
        ru: "Веб-шрифт Dharma",
    },
    "selectedWork-6_1": {
        eng: "Branding, Web Design",
        ru: "Брендинг, веб-дизайн",
    },
    "improveBrand-tagline" : {
        eng: "Improve",
        ru: "Улучшите",
    },
    "IYB-tagline-span" : {
        eng: "your brand",
        ru: "ваш бренд",
    },
    "improveBrand-tagline-1" : {
        eng: "with an awesome site.",
        ru: "благодаря потрясающему сайту",
    },
    "benefit-1" : {
        eng: "Comprehensive brand",
        ru: 'Комплексный бренд',
    },
    "benefit-2" : {
        eng: 'Web presence',
        ru: 'Присутствие в интернете',
    },
    "opinions-tagline-1" : {
        eng: "What",
        ru: "Что",
    },
    "opinions-tagline-2" : {
        eng: "they",
        ru: "они",
    },
    "opinions-tagline-3" : {
        eng: "think",
        ru: "думают",
    },
    "opinion" : {
        eng: "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with.",
        ru: "\"Общественность больше знакома с плохим дизайном, чем с хорошим. По сути дела, она вынуждена отдавать предпочтение плохому дизайну, поскольку именно с ним она и живет.\"",
    },
    "opinion-1" : {
        eng: "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with.",
        ru: "\"Общественность больше знакома с плохим дизайном, чем с хорошим. По сути дела, она вынуждена отдавать предпочтение плохому дизайну, поскольку именно с ним она и живет.\"",
    },
    "opinion-2" : {
        eng: "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.",
        ru: "\"Дизайнер знает, что достиг совершенства, не тогда, когда нечего добавить, а когда нечего отнять.\"",
    },
    "occupation" : {
        eng: "Webflow Founder",
        ru: "Основатель Webflow",
    },
    "occupation-1" : {
        eng: "Webflow Founder",
        ru: "Основатель Webflow",
    },
    "occupation-2" : {
        eng: "Webflow Founder",
        ru: "Основатель Webflow",
    },
    "name-1" : {
        eng: "Paige Brennan",
        ru: "Пейдж Бреннан",
    },
    "name-2" : {
        eng: "Caitlin Ward",
        ru: "Кэтлин Уорд",
    },
    "name-3" : {
        eng: "Matthew Webster",
        ru: "Мэтью Вебстер",
    },
    "skills-tagline-1" : {
        eng: "Our",
        ru: "Навыки",
    },
    "skills-tagline-2" : {
        eng: "team",
        ru: "нашей",
    },
    "skills-tagline-3" : {
        eng: "skills",
        ru: "команды",
    },
    "skill-1" : {
        eng: "Graphic design",
        ru: "Графический дизайн",
    },
    "skill-2" : {
        eng: "Lead generation",
        ru: "Генерация лидов",
    },
    "skill-3" : {
        eng: "Photoshop",
        ru: "Фотошоп",
    },
    "skill-4" : {
        eng: "Illustration",
        ru: "Иллюстрирование",
    },
    "PS" : {
        eng: "* Over 8 years creating templates on Marketplace.",
        ru: "* Более 8 лет создаём шаблоны на Маркетплейсе",
    },
    "ff-tagline-1" : {
        eng: "Fun",
        ru: "Интересные",
    },
    "ff-tagline-2" : {
        eng: "facts",
        ru: "факты",
    },
    "fact-1" : {
        eng: "Years on market",
        ru: "Лет на рынке",
    },
    "fact-2" : {
        eng: "Project done",
        ru: "Проектов сделано",
    },
    "fact-3" : {
        eng: "Hero's member",
        ru: "Героев в команде",
    },
    "fact-4" : {
        eng: "Cups of coffee",
        ru: "Чашек кофе",
    },
    "blog-tagline" : {
        eng: 'Our',
        ru: 'Наш',
    },
    "blog-tagline-1" : {
        eng: 'blog',
        ru: 'блог',
    },
    "blog-btn" : {
        eng: 'View all post',
        ru: 'Показать все посты',
    },
    "post-1-topic" : {
        eng: "Marketing",
        ru: "Маркетинг",
    },
    "post-2-topic" : {
        eng: "Design",
        ru: "Дизайн",
    },
    "post-3-topic" : {
        eng: "Code",
        ru: "Кодинг",
    },
    "post-1-header" : {
        eng: "Curating a workplace that inspires all of us",
        ru: "Создание рабочего места, которое вдохновляет всех нас",
    },
    "post-2-header" : {
        eng: "Designers who changed the web with webflow",
        ru: "Дизайнеры, изменившие веб с помощью webflow",
    },
    "post-3-header" : {
        eng: "Communication between studio departments",
        ru: "Коммуникация между отделами студии",
    },
    "post-1-date" : {
        eng: "February 3, 2021",
        ru: "3 февраля 2021 г.",
    },
    "post-2-date" : {
        eng: "February 25, 2021",
        ru: "25 февраля 2021 г.",
    },
    "post-3-date" : {
        eng: "March 9, 2021",
        ru: "9 марта 2021 г.",
    },
    "talk-tagline-1" : {
        eng: "Let's",
        ru: "Давайте",
    },
    "talk-tagline-2" : {
        eng: "talk",
        ru: "поговорим",
    },
    "talk-proposal" : {
        eng: "Feel free to contact us",
        ru: "Не стесняйтесь связаться с нами",
    },
    "talk-btn" : {
        eng: "View on designer",
        ru: "Посмотреть на дизайнера",
    },
    "address" : {
        eng: "Address",
        ru: "Адрес",
    },
    "address-1" : {
        eng: "14 New South Head Rd, Triple Bay 3148 London, UK",
        ru: "14 New South Head Rd, Triple Bay 3148 Лондон, Великобритания",
    },
    "address-btn" : {
        eng: "Find on map",
        ru: "Найти на карте",
    },
    "sitemap-1" : {
        eng: "Home",
        ru: "На главную",
    },
    "sitemap-2" : {
        eng: "About",
        ru: "О нас",
    },
    "sitemap-3" : {
        eng: "News",
        ru: "Новости",
    },
    "sitemap-4" : {
        eng: "Pricing",
        ru: "Цены",
    },
    "sitemap-5" : {
        eng: "Style Guide",
        ru: "Каталог стилей",
    },
    "sitemap-6" : {
        eng: "Image Licensing",
        ru: "Лицензирование изображений",
    },
    "contactInfo" : {
        eng: "Contact",
        ru: "Контакты",
    },
    "watermark" : {
        eng: "© This is a Deni Bozo template powered by Webflow",
        ru: "© Это шаблон Дени Бозо на базе Webflow",
    }
}

function changeLang() {
    console.log(currLang);
    for (const key in multiLang) {
        const elem = document.querySelector(`[data-lang=${key}]`);
        if(elem) {
            elem.textContent = multiLang[key][currLang];
        }
    }
}
changeLang();

// Вешаем обработчики на каждую кнопку 
langBtns.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		if (!event.target.classList.contains("header__btn_active")) {
			currLang = event.target.dataset.btn;
			localStorage.setItem("language", event.target.dataset.btn);
			resetActiveClass(langBtns, "header__btn_active");
			btn.classList.add("header__btn_active");
			changeLang();
		}
	});
});

// Сброс активного класса у переданного массива элементов
function resetActiveClass(arr, activeClass) {
	arr.forEach((elem) => {
		elem.classList.remove(activeClass);
	});
}

// Проверка активной кнопки
function checkActiveLangButton() {
	switch (currLang) {
		case "ru":
			document
				.querySelector('[data-btn="ru"]')
				.classList.add("header__btn_active");
			break;
		case "eng":
			document
				.querySelector('[data-btn="eng"]')
				.classList.add("header__btn_active");
			break;
    }        
}
checkActiveLangButton();