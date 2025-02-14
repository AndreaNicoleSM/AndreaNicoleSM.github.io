import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,

    resources: {
        en: {
            translation: {
                welcome_message: "Hello, I'm <2>Andréa Melo</2>. \n  I'm a front-end web developer.",
                hero_btn_txt: "View my work",
                nav_1: "HOME",
                nav_2: "ABOUT",
                nav_3: "PORTFOLIO",
                nav_4: "CONTACT",
                nav_5: "BLOG",
                section_about: "ABOUT",
                language_menu: "Language",
                attribute_1: "Responsive",
                attribute_1_txt: "My designs will work on any device, big or small.",
                attribute_2: "Multilingual",
                attribute_2_txt: "I offer services in English and Brazilian Portuguese.",
                attribute_3: "Modern",
                attribute_3_txt: "Strong preference for modern design aesthetics.",
                attribute_4: "Dynamic",
                attribute_4_txt: "I offer dynamic designs with simple animations.",
                bio_header: "Who am I?",
                bio_txt: "I'm an aspiring Front-End Web Developer hailing from Pittsburgh,PA. \n  I have a passion for creating sleek websites with minimalistic and modern design aesthetics.",
                section_portfolio: "PORTFOLIO",
                web_app_content: "Web apps I've created using a combination of HTML, CSS, Javascript, and React.js",
                react_content: "Web apps I've created exclusively using the React.js framework",
                python_content: "Apps I've created using Python, NumPy, and Pandas. For a fuller picture of my Python projects, please check my <a href='https://github.com/AndreaNicoleSM' target='_blank'>Github profile.</a>",
                certifications_content: "Certifications I've earned in various areas of web and software development.",
                project_title_1: "ARTELEONOIR",
                project_txt_1: "A kitschy, early-2000s-era digital art portfolio website. \n  \n  Created for <1 href='https://bsky.app/profile/arteleonoir.bsky.social' target='_blank'>@artleoenoir.bsky.social</1>",
                project_title_2: "My Blog",
                project_txt_2: "My cozy corner of the internet. \n  \n  Check for more information about me.",
                section_contact: "CONTACT",
                cta: "Have a question or want to work with me?",
                submit_btn: "SUBMIT",
                client_tag: "client"
            }
        },
        pt: {
            translation: {
                welcome_message: "Olá, sou <2>Andréa Melo</2>. \n  Sou uma desenvolvedora web front-end.",
                hero_btn_txt: "Meu trabalho",
                nav_1: "INÍCIO",
                nav_2: "SOBRE",
                nav_3: "PORTFÓLIO",
                nav_4: "CONTATO",
                nav_5: "BLOG",
                language_menu: "Idioma",
                section_about: "SOBRE",
                attribute_1: "Responsivo",
                attribute_1_txt: "Meus designs funcionarão em dispositivos de qualquer tamanho.",
                attribute_2: "Multilíngue",
                attribute_2_txt: "Ofereço meus serviços em Inglês e Português Brasileiro.",
                attribute_3: "Moderno",
                attribute_3_txt: "Tenho preferência pela estética de designs modernos.",
                attribute_4: "Dinâmico",
                attribute_4_txt: "Ofereço designs dinâmicos com animações simples.",
                bio_header: "Quem sou eu?",
                bio_txt: "Sou uma aspirante Desenvolvedora Web Front-End de Pittsburgo, Pensilvânia. \n  Minha paixão é criar websites elegantes e minimalistas com estética e design moderno.",
                section_portfolio: "PORTFÓLIO",
                web_app_content: "Aplicativos web criados por mim usando uma combinação de HTML, CSS, Javascript e React.js",
                react_content: "Aplicativos web criados exclusivamente usando o framework React.js",
                python_content: "Aplicativos criados usando Python, NumPy, e Pandas. Para uma apresentação mais completa dos meus projetos em Python, favor checar meu <a href='https://github.com/AndreaNicoleSM' target='_blank'>perfil no Github</a>.",
                project_title_1: "ARTELEONOIR",
                project_txt_1: "Website para um portfólio de arte digital com visual retrô dos anos 2000. \n  \n  Criado para <1 href='https://bsky.app/profile/arteleonoir.bsky.social' target='_blank'>@artleoenoir.bsky.social</1>",
                project_title_2: "Meu Blog",
                project_txt_2: "Meu cantinho da internet. \n  \n  Confira para mais informaçôes sobre mim.",
                certifications_content: "Meus certificados em diferentes áreas de desenvolvimento web e de software.",
                section_contact: "CONTATO",
                cta: "Tem uma pergunta ou gostaria de trabalhar comigo?",
                submit_btn: "ENVIAR",
                all_web_apps: "TODOS WEB APPS",
                react_apps: "REACT APPS",
                client_tag: "cliente"
            }
        }
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;