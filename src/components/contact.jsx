import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="container">
      <div className="triangle-down"></div>
      <div className="header-wrapper flex-col">
        <h2 className="contact-header">{t("section_contact")}</h2>
        <div className="underline contact-header"></div>
        <p className="contact-question">{t("cta")}</p>
        <form
          className="flex-col"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="0cdb24d8-c53f-4557-87ee-3bf8bac97b98"
          />
          <input type="hidden" name="subject" value="New Commission Request" />
          <input type="hidden" name="form_name" value="Website Contact Form" />
          <input
            className="input-area"
            placeholder="Name / Nome"
            name="name"
            type="text"
            id="name"
            required
          />
          <input
            className="input-area"
            placeholder="Email"
            name="email"
            type="email"
            id="email"
            required
          />
          <textarea
            className="input-area"
            id="message"
            placeholder="Message / Mensagem"
            name="message"
            required
          ></textarea>
          <button
            id="submit-btn"
            className="hero-btn btn-bg"
            type="submit"
            value="SUBMIT"
          >
            <p className="hero-btn-txt">{t("submit_btn")}</p>
          </button>{" "}
        </form>{" "}
      </div>{" "}
    </section>
  );
}
