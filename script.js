const translations = {
    en: {
        home: "Home",
        about: "About",
        blogs: "Blogs",
        privacy: "Privacy",
        terms: "Terms",
        welcome: "Welcome to Bhavishya Jyotish",
        tagline: "Your trusted partner in Astrology, Numerology, and Horoscope Predictions."
    },
    hi: {
        home: "होम",
        about: "हमारे बारे में",
        blogs: "ब्लॉग्स",
        privacy: "गोपनीयता",
        terms: "नियम",
        welcome: "भविष्य ज्योतिष में आपका स्वागत है",
        tagline: "ज्योतिष, अंक ज्योतिष और राशिफल में आपका भरोसेमंद साथी।"
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        el.textContent = translations[lang][key] || el.textContent;
    });
}