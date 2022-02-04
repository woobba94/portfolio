function Contact() {
  return (
    <div className="Contact">
      <form
        className="section-content gform pure-form pure-form-stacked"
        data-aos="fade-left"
        data-aos-duration="2000"
        data-aos-delay="400"
        method="POST"
        data-email="example@email.net"
        action="https://script.google.com/macros/s/AKfycbyv7qnDKmarGeojIlFk0ycd_rwjdm5GnDMkeeo81Z4nC_CasvkJlBhcaHisWbcgGphK/exec"
      >
        <div className="form-elements flex-wrap-column">
          <fieldset className="pure-group">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" placeholder="이름(별명)" />
          </fieldset>

          <fieldset className="pure-group">
            <label htmlFor="email">Your Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value=""
              required
              placeholder="답변받을 이메일주소"
            />
          </fieldset>

          <fieldset className="pure-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="10" placeholder="보낼 내용"></textarea>
          </fieldset>

          <fieldset className="pure-group honeypot-field">
            <label htmlFor="honeypot">Spam Strainer</label>
            <input id="honeypot" type="text" name="honeypot" value="" />
          </fieldset>
          <button className="btn-contact">SEND</button>
        </div>

        <div className="thankyou_message" style="display:none;">
          <p>Thank you for your email.</p>
          <p>I will reply soon.</p>
        </div>
      </form>
    </div>
  );
}
export default Contact;
