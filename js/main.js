const skills = {
  technical: {
    tr: ["SQL", "Excel", "QGIS", "C#"],
    en: ["SQL", "Excel", "QGIS", "C#"],
  },
  courses: {
    tr: [
      "Web Tasarımı ve Programlama",
      "Nesne Tabanlı Programlama",
      "SQL",
      "Sunucu İşletim Sistemleri",
      "Ağ Temelleri",
    ],
    en: [
      "Web Design and Programming",
      "Object Oriented Programming",
      "SQL",
      "Server Operating Systems",
      "Basics of Network",
    ],
  },
  hobbies: {
    tr: ["Yürüyüş yapmak", "Bisiklet sürmek", "Ev sunucumu ayarlamak"],
    en: ["Walking", "Cycling", "Configuring homelab server"],
  },
  certs: {
    tr: [
      "Yapay Zekanın İş Dünyasına Etkisi Eğitimi Sertifikası",
      "RYLA Kültür Sanat Katılım Belgesi",
    ],
    en: [
      "Yapay Zekanın İş Dünyasına Etkisi Eğitimi Sertifikası",
      "RYLA Kültür Sanat Katılım Belgesi",
    ],
  },
};

function renderSkills() {
  if (!window.portfolioI18n) return;
  const lang = window.portfolioI18n.currentLang();

  const fillTags = (id, items) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (!items.length) {
      el.innerHTML = `<li class="tag-empty">${window.portfolioI18n.t("skills.none")}</li>`;
      return;
    }
    el.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
  };

  fillTags("skills-technical", skills.technical[lang]);
  fillTags("skills-courses", skills.courses[lang]);
  fillTags("skills-hobbies", skills.hobbies[lang]);

  const certsEl = document.getElementById("skills-certs");
  if (certsEl) {
    certsEl.innerHTML = skills.certs[lang].map((c) => `<li>${c}</li>`).join("");
  }
}

window.renderSkills = renderSkills;

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  renderSkills();

  const toggle = document.querySelector(".nav-toggle");
  const navList = document.getElementById("nav-menu");

  toggle?.addEventListener("click", () => {
    const open = navList?.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  navList?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navList.classList.remove("is-open"));
  });

  const header = document.querySelector(".site-header");
  window.addEventListener(
    "scroll",
    () => {
      if (!header) return;
      header.style.boxShadow =
        window.scrollY > 20 ? "0 4px 24px rgba(0,0,0,0.3)" : "none";
    },
    { passive: true }
  );
});
