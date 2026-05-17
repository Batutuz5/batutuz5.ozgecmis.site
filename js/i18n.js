const translations = {
  tr: {
    skip: "İçeriğe atla",
    menu: "Menü",
    "nav.home": "Ana Sayfa",
    "nav.about": "Hakkımda",
    "nav.skills": "Beceriler",
    "nav.cv": "CV",
    "nav.contact": "İletişim",
    "hero.eyebrow": "Bilgisayar Programcısı",
    "hero.greeting": "Merhaba, ben",
    "hero.lead": "Bilgisayar programcısıyım. Donanıma ilgiliyim.",
    "hero.cta.about": "Hakkımda",
    "hero.cta.cv": "CV İndir",
    "hero.stat.term1": "1. dönem",
    "hero.stat.term2": "2. dönem",
    "about.title": "Hakkımda",
    "about.p1":
      "İzmir Ekonomi Üniversitesi Bilgisayar Programcılığı bölümünde öğrenim görüyorum. İlk dönem 3,18, ikinci dönem 3,08 ortalama ile şeref öğrencisiyim.",
    "about.p2":
      "İZSU CBS'de stajyer olarak SQL, Excel, QGIS ve C# üzerinde geliştirme fırsatı edindim; takım çalışması ve iş ortamını deneyimledim.",
    "about.edu.title": "Eğitim",
    "about.edu.detail": "Bilgisayar Programcılığı · 2024 – Günümüz",
    "about.edu.honour": "1. dönem 3,18 · 2. dönem 3,08 — Şeref Öğrencisi",
    "about.edu.courses":
      "Web Tasarımı ve Programlama, Nesne Tabanlı Programlama, SQL, Sunucu İşletim Sistemleri, Ağ Temelleri",
    "about.intern.title": "Staj",
    "about.intern.role": "Stajyer · 02.06.2025 – 31.07.2025",
    "about.intern.detail":
      "SQL, Excel, QGIS, C# üzerinde geliştirme; takım çalışması ve iş ortamı deneyimi.",
    "skills.title": "Beceriler",
    "skills.technical": "Stajda kullandıklarım",
    "skills.courses": "Aldığım dersler",
    "skills.hobbies": "Hobiler",
    "skills.certs": "Sertifikalar",
    "skills.lang": "Yabancı Dil",
    "skills.english": "İngilizce — Orta",
    "skills.none": "—",
    "cv.title": "CV İndir",
    "cv.intro": "Türkçe ve İngilizce özgeçmişlerimi Word dosyası olarak indirebilirsiniz.",
    "cv.tr": "Özgeçmiş (Türkçe)",
    "cv.en": "Resume (English)",
    "cv.download": "İndir (.docx)",
    "cv.downloadEn": "İndir (.docx)",
    "contact.title": "İletişim",
    "contact.intro": "Aşağıdaki kanallardan ulaşabilirsiniz.",
    "contact.phone": "Telefon",
  },
  en: {
    skip: "Skip to content",
    menu: "Menu",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.cv": "CV",
    "nav.contact": "Contact",
    "hero.eyebrow": "Computer Programmer",
    "hero.greeting": "Hi, I'm",
    "hero.lead": "Computer programmer. Also good at hardware.",
    "hero.cta.about": "About",
    "hero.cta.cv": "Download CV",
    "hero.stat.term1": "Term 1",
    "hero.stat.term2": "Term 2",
    "about.title": "About",
    "about.p1":
      "Studying Computer Programming at İzmir University of Economics. Honour student with 3.18 (term 1) and 3.08 (term 2) GPA.",
    "about.p2":
      "Intern at İZSU CBS: gained experience with SQL, Excel, QGIS, and C#; learned teamwork and the work environment.",
    "about.edu.title": "Education",
    "about.edu.detail": "Computer Programming · 2024 – Present",
    "about.edu.honour": "Term 1: 3.18 · Term 2: 3.08 — Honour Student",
    "about.edu.courses":
      "Web Design and Programming, Object Oriented Programming, SQL, Server Operating Systems, Basics of Network",
    "about.intern.title": "Internship",
    "about.intern.role": "Intern · 02.06.2025 – 31.07.2025",
    "about.intern.detail":
      "Development with SQL, Excel, QGIS, C#; teamwork and workplace experience.",
    "skills.title": "Skills",
    "skills.technical": "From internship",
    "skills.courses": "Coursework",
    "skills.hobbies": "Hobbies",
    "skills.certs": "Certificates",
    "skills.lang": "Languages",
    "skills.english": "English — Intermediate",
    "skills.none": "—",
    "cv.title": "Download CV",
    "cv.intro": "Download my Turkish and English résumés as Word documents.",
    "cv.tr": "Özgeçmiş (Turkish)",
    "cv.en": "Resume (English)",
    "cv.download": "Download (.docx)",
    "cv.downloadEn": "Download (.docx)",
    "contact.title": "Contact",
    "contact.intro": "Reach me via the channels below.",
    "contact.phone": "Phone",
  },
};

let currentLang = localStorage.getItem("portfolio-lang") || "tr";

function t(key) {
  return translations[currentLang][key] ?? translations.tr[key] ?? key;
}

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = t(key);
    if (value) el.textContent = value;
  });
  const toggle = document.getElementById("lang-toggle");
  if (toggle) toggle.textContent = currentLang === "tr" ? "EN" : "TR";
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("portfolio-lang", lang);
  applyTranslations();
  if (typeof window.renderSkills === "function") window.renderSkills();
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
  document.getElementById("lang-toggle")?.addEventListener("click", () => {
    setLanguage(currentLang === "tr" ? "en" : "tr");
  });
});

window.portfolioI18n = { t, currentLang: () => currentLang };
