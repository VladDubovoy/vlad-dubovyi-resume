"use strict";

const lang = {
  "label" : {
    "ru" : "Язык",
    "en" : "Lang",
    "ua" : "Мова"
  },
  "contacts-title" : {
    "ru" : "Контакты",
    "en" : "Contacts",
    "ua" : "Контакти"
  },
  "tech-skills-title" : {
    "ru" : "Технические навыки",
    "en" : "Tech skills",
    "ua" : "Технічні навички"
  },
  "soft-skills-title" : {
    "ru" : "Гибкие навыки",
    "en" : "Soft skills",
    "ua" : "Гнучкі навички"
  },
  "teamwork" : {
    "ru" : "Командная работа",
    "en" : "Teamwork",
    "ua" : "Командна робота"
  },
  "education" : {
    "ru" : "Самообучение",
    "en" : "Self-education",
    "ua" : "Самостійне навчання"
  },
  "communication" : {
    "ru" : "Разговорный английский язык",
    "en" : "English communication skills",
    "ua" : "Розмовна англійська мова"
  },
  "flexibility" : {
    "ru" : "Гибкость",
    "en" : "Flexibility",
    "ua" : "Гнучкість"
  },
  "language-title" : {
    "ru" : "Языки",
    "en" : "Languages",
    "ua" : "Мови"
  },
  "russian" : {
    "ru" : "Русский..........[Родной]",
    "en" : "Russian..........[Native]",
    "ua" : "Російська..........[Рідна]"
  },
  "ukrainian" : {
    "ru" : "Украинский......[Родной]",
    "en" : "Ukrainian......[Native]",
    "ua" : "Українська......[Рідна]"
  },
  "english" : {
    "ru" : "Английский......[Продвинутый - C1]",
    "en" : "English...........[Advanced - C1]",
    "ua" : "Англійська......[Поглиблена - C1]"
  },
  "training-title" : {
    "ru" : "Тренинги",
    "en" : "Training courses",
    "ua" : "Тренінги"
  },
  "marketing" : {
    "ru" : "Web Promo Experts - Маркетинг",
    "en" : "Web Promo Experts - Marketing",
    "ua" : "Web Promo Experts - Маркетинг"
  },
  "bio-title" : {
    "ru" : "Владислав Дубовой",
    "en" : "Vladyslav Dubovyi",
    "ua" : "Владислав Дубовий"
  },
  "subtitle-portfolio" : {
    "ru" : "Учебное портфолио",
    "en" : "Learning Portfolio",
    "ua" : "Навчальне портфоліо"
  },
  "subtitle-jobs" : {
    "ru" : "Опыт работы",
    "en" : "Work Experience",
    "ua" : "Досвід роботи"
  },
  "subtitle-education" : {
    "ru" : "Образование",
    "en" : "Education",
    "ua" : "Освіта"
  },
  "data-art" : {
    "ru" : "Разработчик программного обеспечения в <a class='university college' href='https://www.dataart.com.ua/' target='_blank'>DataArt</a>",
    "en" : "Software developer at <a class='university college' href='https://www.dataart.com.ua/' target='_blank'>DataArt</a>",
    "ua" : "Розробник програмного забезпечення в <a class='university college' href='https://www.dataart.com.ua/' target='_blank'>DataArt</a>"
  },
  "dan-it-course" : {
    "ru" : "Студент в <a class='university college' href='https://dan-it.com.ua/' target='_blank'>DAN.IT</a>",
    "en" : "Student at <a class='university college' href='https://dan-it.com.ua/' target='_blank'>DAN.IT</a>",
    "ua" : "Студент в <a class='university college' href='https://dan-it.com.ua/' target='_blank'>DAN.IT</a>"
  },
  "qr-job" : {
    "ru" : "Бортпроводник в <a class='company-name' href='https://www.qatarairways.com/en/homepage.html' target='_blank'>Qatar Airways</a>",
    "en" : "Cabin Crew at <a class='company-name' href='https://www.qatarairways.com/en/homepage.html' target='_blank'>Qatar Airways</a>",
    "ua" : "Бортпровідник в <a class='company-name' href='https://www.qatarairways.com/en/homepage.html' target='_blank'>Qatar Airways</a>"
  },
  "qr-working-time" : {
    "ru" : "Июнь 2018 - Август 2020 <span class='accent-line'>|</span> Катар",
    "en" : "June 2018 - August 2020 <span class='accent-line'>|</span> Qatar",
    "ua" : "Червень 2018 - Серпень 2020 <span class='accent-line'>|</span> Катар",
  },
  "danit-working-time" : {
    "ru" : "Август 2020 - Март 2021 <span class='accent-line'>|</span> Украина",
    "en" : "August 2020 - March 2021 <span class='accent-line'>|</span> Ukraine",
    "ua" : "Серпень 2020 - Березень 2021 <span class='accent-line'>|</span> Україна",
  },
  "data-art-working-time" : {
    "ru" : "Апрель 2021 - до сейчас <span class='accent-line'>|</span> Украина",
    "en" : "April 2021 - up to now <span class='accent-line'>|</span> Ukraine",
    "ua" : "Квітень 2021 - до сьогодні <span class='accent-line'>|</span> Україна",
  },
  "qr-item1" : {
    "ru" : "Проведение предполетных проверок безопасности",
    "en" : "Conducting pre-flight safety-checks &amp; security search",
    "ua" : "Проведення передпольотних перевірок безпеки",
  },
  "qr-item2" : {
    "ru" : "Подготовка самолета к полёту",
    "en" : "Preparing the aircraft for a flight",
    "ua" : "Підготовка літака до польоту",
  },
  "qr-item3" : {
    "ru" : "Предоставление первой медицинской помощи",
    "en" : "Dealing with medical cases (First Aid)",
    "ua" : "Надання першої медичної допомоги",
  },
  "qr-item4" : {
    "ru" : "Обеспечение 100% безопасности пассажиров на протяжении всего полета",
    "en" : "Ensuring 100% safety of the passengers throughout the flight",
    "ua" : "Забезпечення 100% безпеки пасажирів протягом усього рейсу",
  },
  "qr-item5" : {
    "ru" : "Связь между кабиной самолета и лётным экипажем",
    "en" : "Communication between the cabin and the flight-deck",
    "ua" : "Зв'язок між кабіною літака та пілотами",
  },
  "qr-item6" : {
    "ru" : "Послеполетные обязанности",
    "en" : "Post-flight duties",
    "ua" : "Післяпольотні обов'язки",
  },
  "qr-item7" : {
    "ru" : "Предоставление 5 звездочного сервиса",
    "en" : "Providing 5 star experience",
    "ua" : "Надання 5 зіркового сервісу",
  },
  "qr-item8" : {
    "ru" : "Посетил более 60 стран по всему миру",
    "en" : "Visited 60+ countries worldwide",
    "ua" : "Відвідав понад 60 країн світу",
  },
  "qr-item9" : {
    "ru" : "2+ лет опыта работы",
    "en" : "2+ years working experience",
    "ua" : "2+ років досвіду роботи",
  },
  "qr-item10" : {
    "ru" : "Сделал около 250 перелётов за 2 года",
    "en" : "More than 250 flights within 2 years",
    "ua" : "Зробив близько 250 перельотів за 2 роки",
  },
  "university-working-time1": {
    "ru" : "Сентябрь 2022 - до сейчас",
    "en" : "September 2022 - up to now",
    "ua" : "Вересень 2022 - до сьогодні",
  },
  "university-working-time2" : {
    "ru" : "Сентябрь 2016 - Февраль 2018",
    "en" : "September 2016 - February 2018",
    "ua" : "Вересень 2016 - Лютий 2018",
  },
  "university-working-time3" : {
    "ru" : "Сентябрь 2016 - Февраль 2018",
    "en" : "September 2016 - February 2018",
    "ua" : "Вересень 2016 - Лютий 2018",
  },
  "university1" : {
    "ru" : "Киевский политехнический институт имени Игоря Сикорского",
    "en" : "Igor Sikorsky Kyiv Polytechnic Institute",
    "ua" : "Київський політехнічний інститут імені Ігоря Сікорського",
  },
  "university2" : {
    "ru" : "Киевский национальный торгово-экономический университет",
    "en" : "Kyiv National University of Trade and Economics",
    "ua" : "Київський національний торговельно-економічний університет",
  },
  "university3" : {
    "ru" : "Киевский национальный торгово-экономический университет",
    "en" : "Kyiv National University of Trade and Economics",
    "ua" : "Київський національний торговельно-економічний університет",
  },
  "university-degree1" : {
    "ru" : "Инженерия программного обеспечения <span class='accent-line'>|</span> Бакалавр",
    "en" : "Software engineering <span class='accent-line'>|</span> Bachelor degree",
    "ua" : "Інженерія програмного забезпечення <span class='accent-line'>|</span> Бакалавр",
  },
  "university-degree2" : {
    "ru" : "Товароведение и торговое предпринимательство <span class='accent-line'>|</span> Магистр",
    "en" : "Commodity science and trade entrepreneurship <span class='accent-line'>|</span> Master degree",
    "ua" : "Товарознавство і торговельне підприємництво <span class='accent-line'>|</span> Магістр",
  },
  "university-degree3" : {
    "ru" : "Менеджмент внешнеэкономической деятельности <span class='accent-line'>|</span> Магистр",
    "en" : "Management of foreign economic activity <span class='accent-line'>|</span> Master degree",
    "ua" : "Менеджмент зовнішньоекономічної діяльності <span class='accent-line'>|</span> Магістр",
  },
};

const select = document.querySelector("select");
const allLang = ["ua", "en", "ru"];

select.addEventListener("change", () => {
  let language = select.value;
  location.href = `${window.location.pathname}#${language}`;
  changeLanguage();
});

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#en";
  }
  select.value = hash;
  document.querySelector("title").textContent = lang["bio-title"][hash];
  for ( let key in lang ) {
    let elem = document.querySelector(`.${key}`);
    if (elem) {
      elem.innerHTML = lang[key][hash];
    }
  }
}
