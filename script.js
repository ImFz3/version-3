const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav a")];
const languageSelect = document.querySelector(".language-select");
const themeToggle = document.querySelector(".theme-toggle");

const translations = {
  en: {
    metaDescription:
      "Portfolio of Mohammad Faza, a multilingual student focused on communication, adaptability, language learning, and cross-cultural academic work.",
    homeAria: "Mohammad Faza home",
    portraitAlt: "Mohammad Faza portrait",
    navAria: "Primary navigation",
    preferencesAria: "Site preferences",
    languageAria: "Language",
    darkOnAria: "Turn on dark mode",
    darkOffAria: "Turn off dark mode",
    navAbout: "About",
    navJourney: "Journey",
    navSkills: "Skills",
    navContact: "Contact",
    location: "Bordeaux, France",
    heroTitle: "Multilingual student building across cultures.",
    heroLead:
      "I am Mohammad Faza, a top graduate and language-focused student with academic experience in Kuwait, China, and France.",
    getInTouch: "Get in touch",
    downloadCv: "Download CV",
    viewCv: "View CV",
    heroImageAlt: "Abstract route connecting Kuwait, Xi'an, and Bordeaux with language and academic highlights",
    profileEyebrow: "Profile",
    aboutTitle: "International learning, practical independence.",
    aboutBody:
      "My academic path has trained me to adapt quickly, communicate across languages, and manage learning in new environments. I graduated top of my class with a 91.93% cumulative average and continued building language, research, and independent study skills abroad.",
    highlightsAria: "Portfolio highlights",
    statAverage: "Top graduate average",
    statLanguages: "Working languages",
    statCountries: "Academic countries",
    journeyEyebrow: "Education & Experience",
    journeyTitle: "A focused academic journey.",
    topGraduate: "Top Graduate",
    kuwaitSchool: "High school, Kuwait",
    kuwaitBody:
      "Graduated top of the class with a cumulative average of 91.93%, demonstrating strong performance and consistency across subjects.",
    chineseStudent: "Chinese Language Student",
    xjtu: "XJTU, Xi'an, China",
    chinaBody:
      "Studied Mandarin Chinese in an international academic setting, improving communication, intercultural confidence, and independent living skills.",
    independentStudent: "Independent Student",
    france: "France",
    franceBody:
      "Continuing French language development and academic preparation while independently managing educational and administrative processes in France.",
    capabilities: "Capabilities",
    skillsTitle: "Language fluency with adaptable study habits.",
    languages: "Languages",
    arabic: "Arabic",
    english: "English",
    french: "French",
    mandarin: "Mandarin",
    native: "Native",
    fluent: "Fluent",
    intermediate: "A1-A2 / Beginner",
    coreSkills: "Core Skills",
    skillsAria: "Skills",
    skillCommunication: "Multilingual communication",
    skillAdaptability: "Adaptability",
    skillIndependent: "Independent learning",
    skillProblem: "Problem solving",
    skillResearch: "Research",
    skillCulture: "Cross-cultural collaboration",
    contactEyebrow: "Contact",
    contactTitle: "Open to academic and professional opportunities.",
    email: "Email",
    phone: "Phone",
    locationLabel: "Location",
    routeKuwaitLabel: "Kuwait",
    routeKuwaitTitle: "Kuwait",
    routeKuwaitDesc: "Graduated top of class (91.93%). Built strong academic foundations.",
    routeXianLabel: "Xi'an",
    routeXianTitle: "Xi'an, China",
    routeXianDesc: "Intensive Mandarin studies at XJTU. Achieved HSK 4 proficiency.",
    routeBordeauxLabel: "Bordeaux",
    routeBordeauxTitle: "Bordeaux, France",
    routeBordeauxDesc: "Independent academic preparation and French language immersion,"
  },
  fr: {
    metaDescription:
      "Portfolio de Mohammad Faza, etudiant multilingue axe sur la communication, l'adaptabilite, les langues et le travail academique interculturel.",
    homeAria: "Accueil de Mohammad Faza",
    portraitAlt: "Portrait de Mohammad Faza",
    navAria: "Navigation principale",
    preferencesAria: "Preferences du site",
    languageAria: "Langue",
    darkOnAria: "Activer le mode sombre",
    darkOffAria: "Desactiver le mode sombre",
    navAbout: "Profil",
    navJourney: "Parcours",
    navSkills: "Competences",
    navContact: "Contact",
    location: "Bordeaux, France",
    heroTitle: "Etudiant multilingue construit par les cultures.",
    heroLead:
      "Je suis Mohammad Faza, major de promotion et etudiant oriente vers les langues, avec une experience academique au Koweit, en Chine et en France.",
    getInTouch: "Me contacter",
    downloadCv: "Telecharger le CV",
    viewCv: "Voir le CV",
    heroImageAlt: "Route abstraite reliant le Koweit, Xi'an et Bordeaux avec des points forts linguistiques et academiques",
    profileEyebrow: "Profil",
    aboutTitle: "Apprentissage international, autonomie concrete.",
    aboutBody:
      "Mon parcours academique m'a appris a m'adapter rapidement, a communiquer entre les langues et a gerer mon apprentissage dans de nouveaux environnements. J'ai termine major de ma classe avec une moyenne cumulative de 91,93 %, tout en continuant a developper mes langues, ma recherche et mon etude autonome a l'etranger.",
    highlightsAria: "Points forts du portfolio",
    statAverage: "Moyenne de major de promotion",
    statLanguages: "Langues de travail",
    statCountries: "Pays d'etudes",
    journeyEyebrow: "Formation & experience",
    journeyTitle: "Un parcours academique cible.",
    topGraduate: "Major de promotion",
    kuwaitSchool: "Lycee, Koweit",
    kuwaitBody:
      "Diplome major de la classe avec une moyenne cumulative de 91,93 %, montrant une performance solide et constante dans les matieres.",
    chineseStudent: "Etudiant en chinois",
    xjtu: "XJTU, Xi'an, Chine",
    chinaBody:
      "Etude du mandarin dans un environnement academique international, avec progres en communication, confiance interculturelle et autonomie.",
    independentStudent: "Etudiant independant",
    france: "France",
    franceBody:
      "Poursuite du developpement en francais et preparation academique, tout en gerant de facon autonome les demarches educatives et administratives en France.",
    capabilities: "Capacites",
    skillsTitle: "Maitrise linguistique et habitudes d'etude adaptables.",
    languages: "Langues",
    arabic: "Arabe",
    english: "Anglais",
    french: "Francais",
    mandarin: "Mandarin",
    native: "Langue maternelle",
    fluent: "Courant",
    intermediate: "A1-A2 / Débutant",
    coreSkills: "Competences cles",
    skillsAria: "Competences",
    skillCommunication: "Communication multilingue",
    skillAdaptability: "Adaptabilite",
    skillIndependent: "Apprentissage autonome",
    skillProblem: "Resolution de problemes",
    skillResearch: "Recherche",
    skillCulture: "Collaboration interculturelle",
    contactEyebrow: "Contact",
    contactTitle: "Ouvert aux opportunites academiques et professionnelles.",
    email: "Email",
    phone: "Telephone",
    locationLabel: "Localisation",
    routeKuwaitLabel: "Koweït",
  routeKuwaitTitle: "Koweït",
  routeKuwaitDesc: "Diplômé major de promotion (91,93 %). Solides bases académiques établies.",
  routeXianLabel: "Xi'an",
  routeXianTitle: "Xi'an, Chine",
  routeXianDesc: "Études intensives de mandarin à l'XJTU. Niveau de compétence HSK 4 atteint.",
  routeBordeauxLabel: "Bordeaux",
  routeBordeauxTitle: "Bordeaux, France",
  routeBordeauxDesc: "Préparation académique indépendante et immersion linguistique en français.",
  },
  ar: {
    metaDescription:
      "ملف محمد فزع الشخصي، طالب متعدد اللغات يركز على التواصل والقدرة على التكيف وتعلم اللغات والعمل الأكاديمي بين الثقافات.",
    homeAria: "الصفحة الرئيسية لمحمد فزع",
    portraitAlt: "صورة محمد فزع",
    navAria: "التنقل الرئيسي",
    preferencesAria: "تفضيلات الموقع",
    languageAria: "اللغة",
    darkOnAria: "تفعيل الوضع الداكن",
    darkOffAria: "إيقاف الوضع الداكن",
    navAbout: "نبذة",
    navJourney: "المسار",
    navSkills: "المهارات",
    navContact: "التواصل",
    location: "بوردو، فرنسا",
    heroTitle: "طالب متعدد اللغات يتعلم عبر الثقافات.",
    heroLead:
      "أنا محمد فزع، خريج متفوق وطالب مهتم باللغات، لدي خبرة أكاديمية في الكويت والصين وفرنسا.",
    getInTouch: "تواصل معي",
    downloadCv: "تحميل السيرة",
    viewCv: "عرض السيرة",
    heroImageAlt: "مسار بصري يربط الكويت وشيان وبوردو مع أبرز نقاط اللغة والدراسة",
    profileEyebrow: "الملف",
    aboutTitle: "تعلم دولي واستقلالية عملية.",
    aboutBody:
      "علمني مساري الأكاديمي سرعة التكيف والتواصل عبر اللغات وإدارة التعلم في بيئات جديدة. تخرجت في المرتبة الأولى بمعدل تراكمي 91.93%، وواصلت تطوير مهارات اللغة والبحث والدراسة المستقلة في الخارج.",
    highlightsAria: "أبرز نقاط الملف",
    statAverage: "معدل التخرج المتفوق",
    statLanguages: "لغات العمل",
    statCountries: "دول الدراسة",
    journeyEyebrow: "التعليم والخبرة",
    journeyTitle: "مسار أكاديمي واضح.",
    topGraduate: "خريج متفوق",
    kuwaitSchool: "المدرسة الثانوية، الكويت",
    kuwaitBody:
      "تخرجت في المرتبة الأولى بمعدل تراكمي 91.93%، مع أداء قوي وثابت في المواد الدراسية.",
    chineseStudent: "طالب لغة صينية",
    xjtu: "جامعة XJTU، شيان، الصين",
    chinaBody:
      "درست اللغة الصينية في بيئة أكاديمية دولية، مما طور التواصل والثقة بين الثقافات ومهارات الاستقلال.",
    independentStudent: "طالب مستقل",
    france: "فرنسا",
    franceBody:
      "أواصل تطوير اللغة الفرنسية والتحضير الأكاديمي مع إدارة الإجراءات التعليمية والإدارية في فرنسا بشكل مستقل.",
    capabilities: "القدرات",
    skillsTitle: "طلاقة لغوية وعادات دراسة مرنة.",
    languages: "اللغات",
    arabic: "العربية",
    english: "الإنجليزية",
    french: "الفرنسية",
    mandarin: "الصينية",
    native: "اللغة الأم",
    fluent: "طليق",
    intermediate: "مبتدئ / A1-A2",
    coreSkills: "المهارات الأساسية",
    skillsAria: "المهارات",
    skillCommunication: "التواصل متعدد اللغات",
    skillAdaptability: "القدرة على التكيف",
    skillIndependent: "التعلم المستقل",
    skillProblem: "حل المشكلات",
    skillResearch: "البحث",
    skillCulture: "التعاون بين الثقافات",
    contactEyebrow: "التواصل",
    contactTitle: "متاح للفرص الأكاديمية والمهنية.",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    locationLabel: "الموقع",
    routeKuwaitLabel: "الكويت",
    routeKuwaitTitle: "دولة الكويت",
    routeKuwaitDesc: "تخرجت في طليعة الدفعة بنسبة (91.93%). بناء أسس أكاديمية متينة.",
    routeXianLabel: "شيان",
    routeXianTitle: "شيان، الصين",
    routeXianDesc: "دراسة مكثفة للغة الصينية في جامعة جياوتونغ. تحقيق الكفاءة بمستوى HSK 4.",
    routeBordeauxLabel: "بوردو",
    routeBordeauxTitle: "بوردو، فرنسا",
    routeBordeauxDesc: "إعداد أكاديمي مستقل وانغماس لغوي كامل في الثقافة الفرنسية."
  },
  zh: {
    metaDescription: "Mohammad Faza 的作品集，多语言学生，专注于沟通、适应力、语言学习和跨文化学术经历。",
    homeAria: "Mohammad Faza 主页",
    portraitAlt: "Mohammad Faza 肖像",
    navAria: "主导航",
    preferencesAria: "网站偏好设置",
    languageAria: "语言",
    darkOnAria: "开启深色模式",
    darkOffAria: "关闭深色模式",
    navAbout: "简介",
    navJourney: "经历",
    navSkills: "技能",
    navContact: "联系",
    location: "法国波尔多",
    heroTitle: "在跨文化学习中成长的多语言学生。",
    heroLead: "我是 Mohammad Faza，一名优秀毕业生和语言学习者，拥有在科威特、中国和法国的学术经历。",
    getInTouch: "联系我",
    downloadCv: "下载简历",
    viewCv: "查看简历",
    heroImageAlt: "连接科威特、西安和波尔多的抽象路线图，展示语言和学术亮点",
    profileEyebrow: "个人简介",
    aboutTitle: "国际化学习，实际独立能力。",
    aboutBody:
      "我的学术经历培养了快速适应、跨语言沟通和在新环境中管理学习的能力。我以 91.93% 的累计平均分成为班级优秀毕业生，并在海外继续提升语言、研究和自主学习能力。",
    highlightsAria: "作品集亮点",
    statAverage: "优秀毕业平均分",
    statLanguages: "工作语言",
    statCountries: "学习国家",
    journeyEyebrow: "教育与经历",
    journeyTitle: "清晰专注的学术路径。",
    topGraduate: "优秀毕业生",
    kuwaitSchool: "高中，科威特",
    kuwaitBody: "以 91.93% 的累计平均分成为班级优秀毕业生，展现了稳定而出色的学业表现。",
    chineseStudent: "中文语言学生",
    xjtu: "西安交通大学，中国西安",
    chinaBody: "在国际化学术环境中学习普通话，提升了沟通能力、跨文化信心和独立生活能力。",
    independentStudent: "独立学生",
    france: "法国",
    franceBody: "继续提升法语能力并进行学术准备，同时在法国独立处理教育和行政流程。",
    capabilities: "能力",
    skillsTitle: "语言能力与灵活的学习习惯。",
    languages: "语言",
    arabic: "阿拉伯语",
    english: "英语",
    french: "法语",
    mandarin: "普通话",
    native: "母语",
    fluent: "流利",
    intermediate: "A1-A2 / 初学者",
    coreSkills: "核心技能",
    skillsAria: "技能",
    skillCommunication: "多语言沟通",
    skillAdaptability: "适应力",
    skillIndependent: "自主学习",
    skillProblem: "解决问题",
    skillResearch: "研究",
    skillCulture: "跨文化协作",
    contactEyebrow: "联系",
    contactTitle: "欢迎学术和职业机会。",
    email: "邮箱",
    phone: "电话",
    locationLabel: "地点",
    routeKuwaitLabel: "科威特",
  routeKuwaitTitle: "科威特",
  routeKuwaitDesc: "以全班第一名（91.93%）的高分毕业。建立了坚实的学术基础。",
  routeXianLabel: "西安",
  routeXianTitle: "中国西安",
  routeXianDesc: "在西安交通大学进行密集的汉语学习。达到了汉语水平考试（HSK）四级水平。",
  routeBordeauxLabel: "波尔多",
  routeBordeauxTitle: "法国波尔多",
  routeBordeauxDesc: "独立进行学术准备，并完全沉浸在法语语言环境中。",
  },
};

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  { rootMargin: "-30% 0px -55% 0px", threshold: [0.12, 0.35, 0.6] }
);

function applyLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attribute, key] = pair.split(":");
      if (attribute && key && dictionary[key]) element.setAttribute(attribute, dictionary[key]);
    });
  });

  localStorage.setItem("portfolio-language", language);
  updateThemeLabel();
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  updateThemeLabel();
}

function updateThemeLabel() {
  const language = languageSelect.value || "en";
  const dictionary = translations[language] || translations.en;
  const isDark = document.documentElement.dataset.theme === "dark";
  themeToggle.setAttribute("aria-label", isDark ? dictionary.darkOffAria : dictionary.darkOnAria);
}

sections.forEach((section) => observer.observe(section));

languageSelect.addEventListener("change", (event) => applyLanguage(event.target.value));
themeToggle.addEventListener("click", () => {
  applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});

const savedLanguage = localStorage.getItem("portfolio-language") || "en";
const savedTheme =
  localStorage.getItem("portfolio-theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

languageSelect.value = translations[savedLanguage] ? savedLanguage : "en";
applyTheme(savedTheme);
applyLanguage(languageSelect.value);
