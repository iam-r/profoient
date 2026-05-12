"use strict";

// ╔══════════════════════════════════════════════════════════════╗
// ║                  === ПРОФЕССИИ ===                           ║
// ║  Чтобы добавить профессию: добавь объект в этот массив.     ║
// ║  id     — уникальный ключ (лат. буквы)                       ║
// ║  name   — название                                           ║
// ║  icon   — эмодзи для иконки                                  ║
// ║  desc   — краткое описание (1–2 предложения)                 ║
// ║  skills — 3–5 ключевых навыков                               ║
// ║  steps  — 2–3 конкретных шага для развития                   ║
// ╚══════════════════════════════════════════════════════════════╝
const PROFESSIONS = [
  {
    id: "dev",
    name: "IT-разработчик",
    icon: "💻",
    desc: "Создаёт приложения, сайты и сервисы, которыми пользуются миллионы людей. Одна из самых востребованных и высокооплачиваемых профессий на рынке РФ.",
    skills: ["Логическое мышление", "Python / JavaScript", "Работа с алгоритмами", "Внимание к деталям", "Самостоятельность"],
    steps: [
      "Пройди бесплатный курс «Python для начинающих» на Яндекс Практикуме или Stepik.org",
      "Создай первый проект: простой сайт-портфолио или телеграм-бота за месяц",
      "Участвуй в школьных олимпиадах по информатике и хакатонах (например, ВКонтакте Hack)"
    ]
  },
  {
    id: "data",
    name: "Data-аналитик",
    icon: "📊",
    desc: "Превращает большие массивы данных в понятные выводы, помогая бизнесу принимать правильные решения. Очень высокий спрос в банках, ритейле и tech-компаниях.",
    skills: ["Аналитика данных", "Excel / SQL / Python", "Визуализация", "Критическое мышление", "Работа с цифрами"],
    steps: [
      "Изучи Excel на продвинутом уровне, затем начни с SQL на платформе sqlbolt.com (есть русская локализация)",
      "Разбери открытые датасеты на Kaggle.com — попробуй найти закономерности самостоятельно",
      "Пройди курс по статистике на Khan Academy — без статистики в данных никуда"
    ]
  },
  {
    id: "cyber",
    name: "Специалист по кибербезопасности",
    icon: "🛡️",
    desc: "Защищает компании и государственные структуры от взломов, утечек и кибератак. Дефицит кадров в России огромен — спрос вырос на 200% за 3 года.",
    skills: ["Анализ угроз", "Сетевые технологии", "Linux / Windows", "Внимательность", "Стрессоустойчивость"],
    steps: [
      "Зарегистрируйся на платформе TryHackMe.com — там есть интерактивные задания с нуля на русском",
      "Участвуй в соревнованиях CTF (Capture The Flag) для школьников на ctftime.org",
      "Изучи основы сетей: бесплатный курс «Компьютерные сети» от Cisco Networking Academy"
    ]
  },
  {
    id: "robot",
    name: "Инженер-робототехник",
    icon: "🤖",
    desc: "Проектирует и программирует роботов для промышленности, медицины и исследований. Россия активно развивает промышленную автоматизацию — специалисты нарасхват.",
    skills: ["Физика и математика", "Программирование (C++, ROS)", "3D-моделирование", "Инженерное мышление", "Работа руками"],
    steps: [
      "Запишись в кружок робототехники Lego Mindstorms или Arduino — они есть в большинстве городов",
      "Участвуй в соревнованиях РобоФест или WorldSkills в номинации «Мобильная робототехника»",
      "Изучи основы Arduino на сайте arduino.cc — есть обучающие проекты для начинающих"
    ]
  },
  {
    id: "ecom",
    name: "Менеджер маркетплейсов",
    icon: "🛒",
    desc: "Управляет продажами товаров на Wildberries, Ozon и других площадках. Один из самых быстрорастущих сегментов — в 2024 году оборот рынка превысил 7 трлн рублей.",
    skills: ["Аналитика продаж", "Маркетинг", "Переговоры", "Управление товаром", "Работа с цифрами"],
    steps: [
      "Пройди бесплатный мини-курс от самого Ozon или Wildberries — у них есть образовательные центры",
      "Попробуй продать что-нибудь простое: родители поддержат маленький учебный эксперимент",
      "Изучи юнит-экономику — она поможет понять, выгоден ли товар на маркетплейсе"
    ]
  },
  {
    id: "ai",
    name: "Специалист по нейросетям и AI",
    icon: "🧠",
    desc: "Разрабатывает и обучает модели искусственного интеллекта для решения реальных задач. Самая горячая специальность в мире: зарплаты начинаются от 200 000 рублей.",
    skills: ["Математика (линейная алгебра)", "Python / PyTorch", "Исследовательский склад ума", "Английский язык", "Терпение"],
    steps: [
      "Пройди курс «Нейронные сети» от Яндекс ШАД — есть бесплатная версия на YouTube",
      "Поиграй с готовыми моделями: Hugging Face, Stable Diffusion, попробуй дообучить модель",
      "Участвуй в олимпиадах по ML: «Олимпиада НТО» трек ИИ принимает старшеклассников"
    ]
  },
  {
    id: "eco",
    name: "Эколог / ESG-консультант",
    icon: "🌱",
    desc: "Помогает компаниям работать с учётом экологии и социальной ответственности. ESG-направление обязательно к 2026 году для крупного бизнеса в России.",
    skills: ["Экология и биология", "Анализ данных", "Коммуникация", "Системное мышление", "Знание законодательства"],
    steps: [
      "Вступи в экологическое движение школьников «Экодвор» или «РазДельный сбор»",
      "Изучи основы ESG-отчётности: Сбербанк и крупные компании публикуют открытые годовые отчёты",
      "Участвуй в экологических олимпиадах — они дают льготы при поступлении"
    ]
  },
  {
    id: "biotech",
    name: "Медицинский технолог / Биоинженер",
    icon: "🧬",
    desc: "Создаёт новые лекарства, медицинские устройства и технологии лечения. Биотех — одна из приоритетных отраслей государственных инвестиций в РФ до 2030 года.",
    skills: ["Биология и химия", "Лабораторный анализ", "Внимательность", "Научное мышление", "Английский язык"],
    steps: [
      "Участвуй в олимпиадах по биологии и химии: результаты ценятся в профильных вузах",
      "Запишись на открытые лекции Сеченовского университета или МФТИ — они бесплатны",
      "Прочитай научно-популярные книги: «Ген» Сиддхартха Мукерджи или «Код жизни» Матвея Навоша"
    ]
  },
  {
    id: "urban",
    name: "Урбанист / Архитектор цифровых пространств",
    icon: "🏙️",
    desc: "Проектирует комфортные города, цифровые среды и общественные пространства. В России рынок умных городов вырастет до 200 млрд руб. к 2026 году.",
    skills: ["Пространственное мышление", "3D-моделирование", "Социология", "Дизайн", "Работа с GIS"],
    steps: [
      "Попробуй SketchUp или Blender — бесплатные программы для 3D-моделирования",
      "Изучи проекты КБ «Стрелка» и Агентства стратегических инициатив — они публикуют открытые кейсы",
      "Участвуй в школьных конкурсах городского дизайна — например, «Архитектурный сезон»"
    ]
  },
  {
    id: "tutor",
    name: "Педагог-наставник / Тьютор",
    icon: "👩‍🏫",
    desc: "Помогает людям учиться эффективно, раскрывает потенциал каждого ученика. Профессия активно оцифровывается: онлайн-репетиторы зарабатывают наравне с IT.",
    skills: ["Эмпатия", "Коммуникация", "Терпение", "Знание предмета", "Ораторское мастерство"],
    steps: [
      "Начни с волонтёрства: помогай одноклассникам или младшим школьникам по сложным предметам",
      "Зарегистрируйся на платформе Profi.ru или Репетитор.ру и изучи, как устроен рынок",
      "Пройди курс по педагогике и психологии общения — Coursera и Stepik предлагают их бесплатно"
    ]
  },
  {
    id: "mktg",
    name: "Специалист по цифровому маркетингу",
    icon: "📱",
    desc: "Продвигает бренды и продукты в интернете через соцсети, рекламу и контент. ВКонтакте, Telegram, Rutube — российский digital-рынок активно растёт.",
    skills: ["Креативность", "Аналитика", "Копирайтинг", "SMM", "A/B-тестирование"],
    steps: [
      "Создай свой Telegram-канал или группу ВКонтакте и попробуй собрать первые 100 подписчиков",
      "Пройди бесплатный курс «Основы digital-маркетинга» от Google или ВКонтакте для бизнеса",
      "Изучи метрики: что такое CPM, CTR, ROI — без цифр в маркетинге никуда"
    ]
  },
  {
    id: "logist",
    name: "Логист / Менеджер цепей поставок",
    icon: "📦",
    desc: "Организует движение товаров, ресурсов и информации так, чтобы всё работало слаженно и вовремя. В условиях перестройки цепей поставок в РФ — крайне востребованная роль.",
    skills: ["Системное мышление", "Переговоры", "Работа с данными", "Стрессоустойчивость", "Geography"],
    steps: [
      "Изучи основы Supply Chain Management: курс от MIT OpenCourseWare доступен бесплатно",
      "Поиграй в логистические симуляторы: игра «Satisfactory» или «Factorio» развивают нужные навыки",
      "Ознакомься с системами WMS/TMS: у 1С и SAP есть демо-версии и обучающие видео на YouTube"
    ]
  }
];

// ╔══════════════════════════════════════════════════════════════╗
// ║                   === ВОПРОСЫ ===                            ║
// ║  text    — текст вопроса                                     ║
// ║  options — массив из 4 вариантов ответа                      ║
// ║  Каждый option:                                               ║
// ║    text   — текст варианта                                   ║
// ║    scores — объект { id_профессии: балл, ... }              ║
// ╚══════════════════════════════════════════════════════════════╝
const QUESTIONS = [
  {
    text: "Что тебе больше всего нравится делать после школы?",
    options: [
      { text: "Программировать, разбираться с техникой или играть в стратегии", scores: { dev:3, cyber:2, ai:2, robot:2, data:1 } },
      { text: "Создавать что-то своими руками: рисовать, конструировать, лепить", scores: { urban:3, robot:2, mktg:2, biotech:1, eco:1 } },
      { text: "Общаться с людьми, организовывать что-то, помогать друзьям", scores: { tutor:3, mktg:2, ecom:2, logist:1, eco:1 } },
      { text: "Читать, исследовать, узнавать что-то новое о мире", scores: { data:3, ai:2, biotech:3, eco:2, cyber:1 } }
    ]
  },
  {
    text: "Если тебе нужно решить сложную задачу, ты обычно…",
    options: [
      { text: "Разбиваешь её на маленькие шаги и идёшь по алгоритму", scores: { dev:3, data:3, logist:2, cyber:2, ai:2 } },
      { text: "Ищешь нестандартное решение, думаешь «снаружи коробки»", scores: { ai:2, mktg:3, urban:2, robot:2, eco:1 } },
      { text: "Спрашиваешь других, обсуждаешь и находишь решение вместе", scores: { tutor:3, ecom:2, logist:2, mktg:2, eco:2 } },
      { text: "Долго изучаешь тему, собираешь всю информацию прежде чем начать", scores: { biotech:3, cyber:2, data:2, eco:2, urban:1 } }
    ]
  },
  {
    text: "Что из этого тебя больше всего мотивирует?",
    options: [
      { text: "Создавать продукт, которым пользуются тысячи людей", scores: { dev:3, ai:3, ecom:2, mktg:2, robot:1 } },
      { text: "Делать мир лучше и помогать конкретным людям", scores: { tutor:3, eco:3, biotech:2, urban:2, logist:1 } },
      { text: "Зарабатывать хорошо и строить карьеру", scores: { ecom:3, data:2, cyber:2, logist:2, mktg:2 } },
      { text: "Разгадывать загадки и понимать, как устроены вещи", scores: { ai:3, data:3, biotech:3, cyber:2, robot:2 } }
    ]
  },
  {
    text: "Выбери описание, которое лучше всего тебя характеризует:",
    options: [
      { text: "Я люблю работать в тишине, один — мне так продуктивнее", scores: { dev:3, data:2, cyber:2, ai:2, biotech:2 } },
      { text: "Мне нравится работать в команде, я часто беру на себя роль организатора", scores: { ecom:3, logist:3, mktg:2, tutor:2, urban:2 } },
      { text: "Мне важно видеть результат своего труда «вживую», руками", scores: { robot:3, urban:3, biotech:2, eco:2, tutor:1 } },
      { text: "Я легко переключаюсь между задачами и люблю разнообразие", scores: { mktg:3, ecom:2, logist:2, tutor:2, data:1 } }
    ]
  },
  {
    text: "Как ты относишься к числам и статистике?",
    options: [
      { text: "Обожаю! Данные и графики — это интересно и понятно", scores: { data:4, ai:2, cyber:1, ecom:2, logist:2 } },
      { text: "Нормально, если нужно — разберусь", scores: { dev:2, mktg:2, urban:1, ecom:1, biotech:1 } },
      { text: "Предпочитаю текст и образы, а не таблицы", scores: { tutor:2, mktg:2, urban:2, eco:2, logist:1 } },
      { text: "Не очень люблю, но знаю, что без этого никуда", scores: { robot:1, biotech:2, eco:1, cyber:1, tutor:1 } }
    ]
  },
  {
    text: "Что тебя больше пугает в работе мечты?",
    options: [
      { text: "Что работа окажется скучной и монотонной", scores: { mktg:2, ai:2, ecom:2, urban:2, robot:2 } },
      { text: "Что я не буду справляться с высокой ответственностью", scores: { tutor:2, biotech:2, cyber:2, logist:2, eco:2 } },
      { text: "Что придётся всё время общаться с людьми и «продавать себя»", scores: { dev:2, data:2, ai:2, cyber:2, biotech:2 } },
      { text: "Что работа не будет приносить реальную пользу обществу", scores: { eco:3, tutor:3, biotech:2, urban:2, logist:1 } }
    ]
  },
  {
    text: "Если бы ты мог провести один день в любой компании, что бы ты выбрал?",
    options: [
      { text: "Лаборатория Яндекса или Сбера, разработка AI-алгоритмов", scores: { ai:4, dev:3, data:3, cyber:1 } },
      { text: "Крупный ритейлер: смотреть, как движутся товары и работает цепочка поставок", scores: { logist:4, ecom:3, data:2, mktg:1 } },
      { text: "Экологическая организация или биотех-стартап", scores: { eco:4, biotech:4, urban:1, tutor:1 } },
      { text: "Архитектурное или дизайн-бюро, создание проектов для города", scores: { urban:4, mktg:2, robot:1, eco:1 } }
    ]
  },
  {
    text: "Что из перечисленного ты делаешь лучше всего?",
    options: [
      { text: "Объясняю сложные вещи просто и доходчиво", scores: { tutor:4, mktg:2, ai:1, eco:1, urban:1 } },
      { text: "Нахожу ошибки и уязвимости там, где другие не замечают", scores: { cyber:4, data:2, dev:2, ai:1, biotech:1 } },
      { text: "Быстро учусь новому и адаптируюсь к изменениям", scores: { ai:2, ecom:3, mktg:2, logist:2, dev:2 } },
      { text: "Планирую и организую процессы так, чтобы всё работало чётко", scores: { logist:4, ecom:3, urban:2, data:2, cyber:1 } }
    ]
  },
  {
    text: "Какой тип контента ты смотришь охотнее всего?",
    options: [
      { text: "YouTube о технологиях, программировании, нейросетях", scores: { dev:3, ai:3, cyber:2, data:2, robot:2 } },
      { text: "Видео о природе, экологии, науке о жизни", scores: { eco:4, biotech:3, urban:1, tutor:1 } },
      { text: "Подкасты и видео об успешных людях, бизнесе, карьере", scores: { ecom:3, mktg:3, logist:2, tutor:2, data:1 } },
      { text: "Документальные фильмы об архитектуре, дизайне или социальных явлениях", scores: { urban:4, eco:2, tutor:2, mktg:1, logist:1 } }
    ]
  },
  {
    text: "Представь: тебе нужно сделать школьный проект. Какой формат ты выберешь?",
    options: [
      { text: "Программа, сайт или бот — что-то работающее", scores: { dev:4, ai:2, cyber:2, robot:3, data:2 } },
      { text: "Исследование с данными, таблицами и выводами", scores: { data:4, biotech:3, eco:3, ai:2, logist:2 } },
      { text: "Презентация с историями, визуальными образами и живым выступлением", scores: { mktg:3, tutor:3, ecom:2, urban:2, eco:1 } },
      { text: "Практический макет, модель или эксперимент", scores: { robot:4, urban:3, biotech:3, eco:2, dev:1 } }
    ]
  },
  {
    text: "Как ты реагируешь, когда что-то идёт не по плану?",
    options: [
      { text: "Начинаю анализировать, что пошло не так, ищу причину", scores: { data:3, cyber:3, ai:2, dev:2, biotech:2 } },
      { text: "Адаптируюсь на ходу и нахожу альтернативный путь", scores: { ecom:3, logist:3, mktg:3, robot:2, tutor:2 } },
      { text: "Стараюсь сохранить спокойствие и поддержать команду", scores: { tutor:3, logist:2, eco:2, urban:2, ecom:1 } },
      { text: "Переключаюсь на другую задачу, чтобы вернуться с свежей головой", scores: { mktg:2, urban:2, biotech:2, ai:2, dev:2 } }
    ]
  },
  {
    text: "Что важнее для тебя в будущей работе?",
    options: [
      { text: "Постоянно учиться и развиваться — технологии не стоят на месте", scores: { ai:3, dev:3, cyber:2, data:2, biotech:2 } },
      { text: "Видеть реальный результат — улучшение жизни людей или планеты", scores: { eco:4, biotech:3, tutor:3, urban:3, logist:1 } },
      { text: "Свобода и возможность работать из любой точки мира", scores: { mktg:3, dev:2, data:2, tutor:2, ecom:2 } },
      { text: "Стабильность, чёткие процессы и понятная карьерная лестница", scores: { logist:3, cyber:2, biotech:2, ecom:2, data:2 } }
    ]
  },
  {
    text: "Твой класс готовит мероприятие. Что ты делаешь?",
    options: [
      { text: "Создаю сайт или чат-бота для организации мероприятия", scores: { dev:4, ai:2, cyber:1, data:1, mktg:2 } },
      { text: "Придумываю концепцию, визуальный стиль и контент", scores: { mktg:4, urban:3, ecom:2, tutor:1, ai:1 } },
      { text: "Координирую всех участников, слежу за сроками и бюджетом", scores: { logist:4, ecom:3, tutor:2, urban:2, data:1 } },
      { text: "Становлюсь ведущим или куратором — мне нравится вести людей", scores: { tutor:4, mktg:2, eco:1, urban:1, ecom:1 } }
    ]
  },
  {
    text: "Если ты смотришь на робота или нейросеть, что тебя интересует больше всего?",
    options: [
      { text: "Как это работает внутри? Хочу разобрать и понять алгоритм", scores: { ai:4, dev:3, robot:3, cyber:2, data:2 } },
      { text: "Как это влияет на людей и на рабочие места? Что будет с обществом?", scores: { eco:3, tutor:3, urban:2, logist:2, biotech:1 } },
      { text: "Как это можно применить в бизнесе или продать?", scores: { ecom:3, mktg:3, logist:2, ai:1, data:2 } },
      { text: "Как это можно улучшить? Я бы добавил вот такую функцию…", scores: { robot:4, ai:3, dev:3, urban:2, cyber:1 } }
    ]
  },
  {
    text: "Выбери фразу, которая описывает тебя лучше всего:",
    options: [
      { text: "«Я не успокоюсь, пока не найду решение» — задачи для меня как вызов", scores: { cyber:4, dev:3, ai:3, data:2, robot:2 } },
      { text: "«Важно, чтобы всем было хорошо» — я думаю о других", scores: { tutor:4, eco:4, biotech:2, urban:2, logist:1 } },
      { text: "«Покажи мне данные» — без фактов я не принимаю решения", scores: { data:4, logist:3, ecom:2, ai:2, cyber:2 } },
      { text: "«Давайте сделаем это красиво и по-новому» — я ценю эстетику и оригинальность", scores: { mktg:4, urban:4, robot:2, ecom:2, tutor:1 } }
    ]
  }
];

// ╔══════════════════════════════════════════════════════════════╗
// ║              === МАТРИЦА БАЛЛОВ ===                          ║
// ║  Матрица собирается динамически из QUESTIONS.options.scores. ║
// ║  Максимально возможный балл для профессии — сумма всех       ║
// ║  максимальных очков во всех вопросах, где она встречается.   ║
// ║  Процент = (набранный балл / максимальный балл) * 100        ║
// ╚══════════════════════════════════════════════════════════════╝

// ── Состояние приложения ──
const state = {
  currentQ: 0,      // Текущий индекс вопроса
  answers: {},      // { questionIndex: optionIndex }
  scores: {},       // Накопленные баллы по профессиям
  maxScores: {}     // Максимально возможные баллы по профессиям
};

// ── Расчёт максимально возможных баллов ──
function calcMaxScores() {
  const maxS = {};
  PROFESSIONS.forEach(p => maxS[p.id] = 0);

  QUESTIONS.forEach(q => {
    // Для каждого вопроса находим максимальный балл каждой профессии среди всех вариантов
    const qMax = {};
    q.options.forEach(opt => {
      Object.entries(opt.scores).forEach(([pid, pts]) => {
        if (!qMax[pid] || pts > qMax[pid]) qMax[pid] = pts;
      });
    });
    Object.entries(qMax).forEach(([pid, pts]) => {
      if (maxS[pid] !== undefined) maxS[pid] += pts;
    });
  });
  return maxS;
}

// ── Инициализация звёзд ──
function initStars() {
  const container = document.getElementById('stars');
  const count = 80;
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      --dur: ${3 + Math.random() * 5}s;
      --delay: ${Math.random() * 8}s;
      --bright: ${0.3 + Math.random() * 0.7};
    `;
    container.appendChild(star);
  }
}

// ── Показать экран ──
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('screen-' + name);
  if (target) {
    target.classList.add('active');
    target.focus?.();
  }
}

// ── Начать тест ──
function startTest() {
  state.currentQ = 0;
  state.answers = {};
  state.scores = {};
  PROFESSIONS.forEach(p => state.scores[p.id] = 0);
  state.maxScores = calcMaxScores();

  showScreen('quiz');
  renderQuestion();
}

// ── Рендер вопроса ──
function renderQuestion() {
  const q = QUESTIONS[state.currentQ];
  const total = QUESTIONS.length;
  const current = state.currentQ + 1;
  const pct = Math.round((current / total) * 100);

  // Прогресс
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-count').textContent = current + ' / ' + total;
  const aria = document.getElementById('progress-aria');
  aria.setAttribute('aria-valuenow', pct);

  // Кнопка Назад
  const btnBack = document.getElementById('btn-back');
  btnBack.style.visibility = state.currentQ === 0 ? 'hidden' : 'visible';

  // Кнопка Далее/Завершить
  const btnNext = document.getElementById('btn-next');
  btnNext.textContent = state.currentQ === total - 1 ? 'Завершить ✓' : 'Далее →';

  // Скрыть предупреждение
  hideWarn();

  // Рендер вопроса
  const letters = ['А', 'Б', 'В', 'Г'];
  const selectedIdx = state.answers[state.currentQ];

  const html = `
    <p class="question-num" aria-hidden="true">Вопрос ${current}</p>
    <h2 class="question-text">${escHtml(q.text)}</h2>
    <div class="options-grid" role="radiogroup" aria-label="${escHtml(q.text)}">
      ${q.options.map((opt, i) => `
        <button
          class="option-btn ${selectedIdx === i ? 'selected' : ''}"
          onclick="selectOption(${i})"
          role="radio"
          aria-checked="${selectedIdx === i}"
          aria-label="Вариант ${letters[i]}: ${escHtml(opt.text)}"
        >
          <span class="option-letter" aria-hidden="true">${letters[i]}</span>
          <span>${escHtml(opt.text)}</span>
        </button>
      `).join('')}
    </div>
  `;
  document.getElementById('question-area').innerHTML = html;
}

// ── Выбрать вариант ──
function selectOption(idx) {
  state.answers[state.currentQ] = idx;
  hideWarn();
  renderQuestion();
}

// ── Назад ──
function goBack() {
  if (state.currentQ > 0) {
    state.currentQ--;
    renderQuestion();
  }
}

// ── Далее / Завершить ──
function goNext() {
  if (state.answers[state.currentQ] === undefined) {
    showWarn();
    return;
  }

  if (state.currentQ < QUESTIONS.length - 1) {
    state.currentQ++;
    renderQuestion();
  } else {
    computeResults();
  }
}

// ── Предупреждения ──
function showWarn() {
  document.getElementById('warn-msg').classList.add('visible');
}
function hideWarn() {
  document.getElementById('warn-msg').classList.remove('visible');
}

// ── Подсчёт результатов ──
function computeResults() {
  showScreen('computing');

  // Обнуляем баллы
  PROFESSIONS.forEach(p => state.scores[p.id] = 0);

  // Суммируем баллы по ответам
  Object.entries(state.answers).forEach(([qIdx, optIdx]) => {
    const q = QUESTIONS[parseInt(qIdx)];
    if (!q) return;
    const opt = q.options[optIdx];
    if (!opt) return;
    Object.entries(opt.scores).forEach(([pid, pts]) => {
      if (state.scores[pid] !== undefined) {
        state.scores[pid] += pts;
      }
    });
  });

  // Конвертируем в проценты
  const percentages = {};
  PROFESSIONS.forEach(p => {
    const max = state.maxScores[p.id] || 1;
    percentages[p.id] = Math.round((state.scores[p.id] / max) * 100);
  });

  // Сортировка
  const sorted = PROFESSIONS
    .map(p => ({ ...p, pct: percentages[p.id] }))
    .sort((a, b) => b.pct - a.pct);

  // Задержка для анимации загрузки
  setTimeout(() => renderResults(sorted), 900);
}

// ── Рендер результатов ──
function renderResults(sorted) {
  const top3 = sorted.slice(0, 3);
  const rest = sorted.slice(3);
  const top1 = top3[0];

  // Проверка крайних случаев
  const notices = [];
  if (top1.pct > 70) {
    notices.push(`🌟 Отличный сигнал! У тебя очень высокое совпадение с профессией «${top1.name}» — ${top1.pct}%. Это серьёзная подсказка!`);
  }
  // Проверяем равные результаты у топ-2
  if (top3.length >= 2 && Math.abs(top3[0].pct - top3[1].pct) <= 3) {
    notices.push(`ℹ️ Два первых направления почти равны по баллам. Это значит, что ты гармоничный человек с широким диапазоном интересов!`);
  }

  const rankClasses = ['rank-1', 'rank-2', 'rank-3'];
  const rankLabels = ['🥇 Лучшее совпадение', '🥈 Второе место', '🥉 Третье место'];

  // Top-3
  let top3Html = '';
  top3.forEach((p, i) => {
    top3Html += `
      <article class="prof-card ${rankClasses[i]}" aria-label="${p.name}: совпадение ${p.pct}%">
        <div class="prof-card-header">
          <div>
            <div class="prof-rank">${rankLabels[i]}</div>
            <div class="prof-name">${escHtml(p.name)}</div>
          </div>
          <span class="prof-icon" aria-hidden="true">${p.icon}</span>
          <div class="percent-badge" aria-label="${p.pct} процентов совпадения">${p.pct}%</div>
        </div>
        <div class="match-bar-wrap" role="progressbar" aria-valuenow="${p.pct}" aria-valuemin="0" aria-valuemax="100">
          <div class="match-bar" style="width:0%" data-width="${p.pct}%"></div>
        </div>
        <p class="prof-desc">${escHtml(p.desc)}</p>
        <div class="skills-row" aria-label="Ключевые навыки">
          ${p.skills.map(s => `<span class="skill-tag">${escHtml(s)}</span>`).join('')}
        </div>
        <div class="steps-title">Как начать прямо сейчас</div>
        <div class="steps-list" aria-label="Шаги для развития">
          ${p.steps.map((st, si) => `
            <div class="step-item">
              <div class="step-dot" aria-hidden="true">${si+1}</div>
              <span>${escHtml(st)}</span>
            </div>
          `).join('')}
        </div>
      </article>
    `;
  });

  // Все остальные
  let allHtml = '';
  rest.forEach(p => {
    allHtml += `
      <div class="mini-prof" aria-label="${p.name}: ${p.pct}%">
        <span class="mp-icon" aria-hidden="true">${p.icon}</span>
        <div class="mp-info">
          <div class="mp-name">${escHtml(p.name)}</div>
          <div class="mp-pct">${p.pct}%</div>
          <div class="mini-pct-bar"><div class="mini-pct-fill" style="width:0%" data-width="${p.pct}%"></div></div>
        </div>
      </div>
    `;
  });

  // Эмодзи по результату
  const emoji = top1.pct >= 80 ? '🚀' : top1.pct >= 60 ? '🎯' : '🌟';

  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-title').textContent = `Твоё направление: ${top1.name}`;

  // Уведомления
  let noticeHtml = '';
  notices.forEach(n => {
    noticeHtml += `<div class="notice"><span class="notice-icon">💡</span><span>${escHtml(n)}</span></div>`;
  });
  document.getElementById('notice-area').innerHTML = noticeHtml;

  document.getElementById('top3-grid').innerHTML = top3Html;
  document.getElementById('all-profs-grid').innerHTML = allHtml;

  showScreen('results');

  // Анимируем прогресс-бары с небольшой задержкой
  requestAnimationFrame(() => {
    setTimeout(() => {
      document.querySelectorAll('[data-width]').forEach(el => {
        el.style.width = el.dataset.width;
      });
    }, 200);
  });
}

// ── Рестарт ──
function restartTest() {
  startTest();
}

// ── Сохранить / Распечатать ──
function printResult() {
  window.print();
}

// ── Безопасный HTML ──
function escHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ── Инициализация ──
initStars();