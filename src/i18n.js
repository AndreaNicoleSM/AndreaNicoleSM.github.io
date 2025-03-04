import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
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
    fallbackLng: "en",
    debug: true,

    resources: {
      en: {
        translation: {
          welcome_message:
            "Hello, I'm <2>Andréa Melo</2>. \n  I'm a front-end web developer.",
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
          attribute_2_txt:
            "I offer services in English and Brazilian Portuguese.",
          attribute_3: "Modern",
          attribute_3_txt: "Strong preference for modern design aesthetics.",
          attribute_4: "Dynamic",
          attribute_4_txt: "I offer dynamic designs with simple animations.",
          bio_header: "Who am I?",
          bio_txt:
            "I'm an aspiring Front-End Web Developer hailing from Pittsburgh,PA. \n  I have a passion for creating sleek websites with minimalistic and modern design aesthetics.",
          section_portfolio: "PORTFOLIO",
          web_app_content:
            "Web apps I've created using a combination of HTML, CSS, Javascript, and React.js",
          react_content:
            "Web apps I've created exclusively using the React.js framework",
          python_content:
            "Apps I've created using Python, NumPy, and Pandas. For a fuller picture of my Python projects, please check my <a href='https://github.com/AndreaNicoleSM' target='_blank'>Github profile.</a>",
          certifications_content:
            "Certifications I've earned in various areas of web and software development.",
          project_title_1: "ARTELEONOIR",
          project_txt_1:
            "A kitschy, early-2000s-era digital art portfolio website. \n  \n  Created for <1 href='https://bsky.app/profile/arteleonoir.bsky.social' target='_blank'>@artleoenoir.bsky.social</1>",
          project_title_2: "My Blog",
          project_txt_2:
            "My cozy corner of the internet. \n  \n  Check for more information about me.",
          section_contact: "CONTACT",
          cta: "Have a question or want to work with me?",
          submit_btn: "SUBMIT",
          client_tag: "client",
          pricing: "PRICING",
          service_pricing: "Service Pricing & Terms",
          single_page: "Single-Page Website:",
          multi_page: "Multi-Page Website:",
          base_price: "Base Price:",
          price_single: "$150 USD",
          price_multi: "$350 USD",
          est_turnaround: "Est. Turnaround Time:",
          turnaround_single: "2 - 4 Business Days",
          turnaround_multi: "1 - 2 Weeks",
          hosting: "Hosting:",
          hosting_txt: "Included",
          custom_domain: "Custom Domain:",
          custom_domain_txt: "Included for 1 year with option to renew",
          design_reference:
            "You may provide a figma design file if you have one, but this is not required. You may also send me inspirational references.",
          terms: "Terms of Service",
          terms_1:
            "I, Andréa Melo, reserve and retain the copyright for all code produced in the making of any and all commissioned products. Rights to the code of a project can be purchased by the commissioner for an additional fee contingent upon the complexity of the project.",
          terms_2: "All websites will be created using the React.JS framework.",
          terms_3:
            "Hosting of websites will be done via Netlify. This ensures all websites are HTTPS complient with SSL/TLS certification for security purposes.",
          terms_4:
            "All prices listed are base prices. I reserve the right to quote the price of a project based on its complexity at no less than the base price. I will determine the complexity of a project at the time of quoting by assessing the technical needs and demand of requested features.",
          terms_5:
            "Examples of complex features that would require additional time and increase the quote of a project are, but are not limited to, the addition of a log-in / authentication feature, e-commerce site requirements such as payment systems integration, and other back-end features. For clarity, all additional charges will be listed on the quote invoice.",
          terms_6:
            "For a project to begin, both the quote and terms will be agreed upon by both myself and the commissioner, at which time paymentin the amount of half of the quoted price will become due. <2>Work will not commence unless payment is received.</2> Upon completion of the project, the remaining half of the quoted price will become due. <2>Ownership of the website and its associated domain will not be given until this payment has been received.</2>",
          terms_7:
            "Listed turnaround times are estimates based on the base complexity of a project. Turnaround times are subject to change based on complexity. I will cite the guaranteed turnaround time at the time of consultation.",
          terms_8: "",
          close: "Close",
        },
      },
      pt: {
        translation: {
          welcome_message:
            "Olá, sou <2>Andréa Melo</2>. \n  Sou uma desenvolvedora web front-end.",
          hero_btn_txt: "Meu trabalho",
          nav_1: "INÍCIO",
          nav_2: "SOBRE",
          nav_3: "PORTFÓLIO",
          nav_4: "CONTATO",
          nav_5: "BLOG",
          language_menu: "Idioma",
          section_about: "SOBRE",
          attribute_1: "Responsivo",
          attribute_1_txt:
            "Meus designs funcionarão em dispositivos de qualquer tamanho.",
          attribute_2: "Multilíngue",
          attribute_2_txt:
            "Ofereço meus serviços em Inglês e Português Brasileiro.",
          attribute_3: "Moderno",
          attribute_3_txt:
            "Tenho preferência pela estética de designs modernos.",
          attribute_4: "Dinâmico",
          attribute_4_txt: "Ofereço designs dinâmicos com animações simples.",
          bio_header: "Quem sou eu?",
          bio_txt:
            "Sou uma aspirante Desenvolvedora Web Front-End de Pittsburgo, Pensilvânia. \n  Minha paixão é criar websites elegantes e minimalistas com estética e design moderno.",
          section_portfolio: "PORTFÓLIO",
          web_app_content:
            "Aplicativos web criados por mim usando uma combinação de HTML, CSS, Javascript e React.js",
          react_content:
            "Aplicativos web criados exclusivamente usando o framework React.js",
          python_content:
            "Aplicativos criados usando Python, NumPy, e Pandas. Para uma apresentação mais completa dos meus projetos em Python, favor checar meu <a href='https://github.com/AndreaNicoleSM' target='_blank'>perfil no Github</a>.",
          project_title_1: "ARTELEONOIR",
          project_txt_1:
            "Website para um portfólio de arte digital com visual retrô dos anos 2000. \n  \n  Criado para <1 href='https://bsky.app/profile/arteleonoir.bsky.social' target='_blank'>@artleoenoir.bsky.social</1>",
          project_title_2: "Meu Blog",
          project_txt_2:
            "Meu cantinho da internet. \n  \n  Confira para mais informaçôes sobre mim.",
          certifications_content:
            "Meus certificados em diferentes áreas de desenvolvimento web e de software.",
          section_contact: "CONTATO",
          cta: "Tem uma pergunta ou gostaria de trabalhar comigo?",
          submit_btn: "ENVIAR",
          all_web_apps: "TODOS WEB APPS",
          react_apps: "REACT APPS",
          client_tag: "cliente",
          pricing: "PREÇOS",
          service_pricing: "Preços e Termos de Serviço",
          single_page: "Site de Página Única:",
          multi_page: "Site de Várias Paginas:",
          base_price: "Preço Base:",
          price_single: "R$ 300",
          price_multi: "R$ 700",
          est_turnaround: "Tempo Estimado de Entrega:",
          turnaround_single: "2 - 4 dias úteis",
          turnaround_multi: "1 - 2 semanas",
          hosting: "Hospedagem de site:",
          hosting_txt: "Incluso",
          custom_domain: "Domínio Personalizado:",
          custom_domain_txt: "Incluído por 1 ano com opção de renovação",
          design_reference:
            "Você pode fornecer um arquivo de design figma se tiver um, mas isso não é obrigatório. Você também pode me enviar referências para inspiração.",
          terms: "Termos de Serviço",
          terms_1:
            "Eu, Andréa Melo, reservo e mantenho os direitos autorais de todo código produzido na criação de todo e qualquer produto comissionado. Os direitos sobre o código de um projeto podem ser adquiridos pelo comissário por uma taxa adicional, dependendo da complexidade do projeto.",
          terms_2: "Todos os sites serão criados usando o framework React.JS.",
          terms_3:
            "A hospedagem dos sites será feita via Netlify. Isso garante que todos os sites sejam compatíveis com HTTPS com certificação SSL/TLS para fins de segurança.",
          terms_4:
            "Todos os preços listados são preços base. Eu me reservo o direito de cotar o preço de um projeto com base em sua complexidade em não menos que o preço base. Eu determinarei a complexidade de um projeto no momento da cotação, avaliando as necessidades técnicas e a demanda dos recursos solicitados.",
          terms_5:
            "Exemplos de recursos complexos que exigiriam tempo adicional e aumentariam o orçamento de um projeto são, mas não estão limitados a, a adição de um recurso de login/autenticação, requisitos de site de e-commerce, como integração de sistemas de pagamento e outros recursos de back-end. Para maior clareza, todos os encargos adicionais serão listados na fatura do orçamento.",
          terms_6:
            "Para que um projeto comece, tanto o orçamento quanto os termos serão acordados por mim e pelo comissário, momento em que o pagamento no valor de metade do preço cotado será devido. <2>O trabalho não começará a menos que o pagamento seja recebido.</2> Após a conclusão do projeto, a metade restante do preço cotado será devida. <2>A propriedade do site e seu domínio associado não serão concedidos até que este pagamento seja recebido.</2>",
          terms_7:
            "Os tempos de entrega listados são estimativas baseadas na complexidade base de um projeto. Os tempos de entrega estão sujeitos a alterações com base na complexidade. Citarei o tempo de entrega garantido no momento da consulta.",
          terms_8: "",
          close: "Fechar",
        },
      },
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
