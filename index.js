// The locale our app first shows
const defaultLocale = "en";

const supportedLocales = ["en", "pt"];

const fullyQualifiedLocaleDefaults = {
  en: "en-US",
  pt: "pt-BR",
};

// The active locale
let locale;

function isSupported(locale) {
  return supportedLocales.indexOf(locale) > -1;
}

function supportedOrDefault(locales) {
  return locales.find(isSupported) || defaultLocale;
}

function browserLocales(languageCodeOnly = false) {
  return navigator.languages.map((locale) =>
    languageCodeOnly ? locale.split("-")[0] : locale,
  );}

async function setLocale(newLocale) {
  if (newLocale === locale) return;
  
  const langData = await fetchLanguageData(newLocale);
  
  locale = newLocale;
  document.documentElement.lang = newLocale;

  
  updateContent(langData);
}

// Function to update content based on selected language
function updateContent(langData) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.innerHTML = langData[key];
  });
}

// Function to set the language preference
function setLanguagePreference(lang) {
  localStorage.setItem("language", lang);
  location.reload();
}

// Function to fetch language data
async function fetchLanguageData(lang) {
  const response = await fetch(`languages/${lang}.json`);
  return response.json();
}

// Function to change language
async function changeLanguage(lang) {
  await setLanguagePreference(lang);

  const langData = await fetchLanguageData(lang);
  updateContent(langData);
}

function bindLocaleSwitcher(initialValue) {
  const switcher = document.querySelector(
    "[data-i18n-switcher]",
  );

  switcher.value = initialValue;

  switcher.onchange = (e) => {
    setLocale(e.target.value);
  };
}

document.addEventListener("DOMContentLoaded", async () => {
  const initialLocale = supportedOrDefault(
    browserLocales(true),
  );

  setLocale(initialLocale);
  bindLocaleSwitcher(initialLocale);
});


// Call updateContent() on page load
// window.addEventListener("DOMContentLoaded", async () => {
//   const userPreferredLanguage = locale || "en";
//   const langData = await fetchLanguageData(userPreferredLanguage);
//   updateContent(langData);
// });


// Dark Mode Toggle

function darkMode() {
  var element = document.body
  element.classList.toggle("dark-mode")
}

const darkToggle = document.getElementById("dark-toggle")

darkToggle.addEventListener("click", darkMode);



