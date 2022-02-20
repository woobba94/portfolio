import { useState } from 'react';
import styled from 'styled-components';

const Honeypot = styled.fieldset`
  display: none;
`;

const ThankYouMessage = styled.div`
  display: none;
`;

function Contact() {
  const [emailVal, setEmailVal] = useState('');
  const [honeypotVal, setHoneypotVal] = useState('');
  const emailChangeState = (e) => {
    setEmailVal(e.target.value);
  };
  const honeypotChangeState = (e) => {
    setHoneypotVal(e.target.value);
  };
  return (
    <div className="Contact" id="Contact">
      <form
        className="gform pure-form pure-form-stacked"
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
              required
              placeholder="답변받을 이메일주소"
              onChange={emailChangeState}
            />
          </fieldset>

          <fieldset className="pure-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="10" placeholder="보낼 내용"></textarea>
          </fieldset>

          <Honeypot className="pure-group honeypot-field">
            <label htmlFor="honeypot">Spam Strainer</label>
            <input id="honeypot" type="text" name="honeypot" onChange={honeypotChangeState} />
          </Honeypot>
          <button className="btn-contact">SEND</button>
        </div>

        <ThankYouMessage className="thankyou_message">
          <p>Thank you for your email.</p>
          <p>I will reply soon.</p>
        </ThankYouMessage>
      </form>
      <div className="right">
        <p>어떤 의견이든 보내주세요.</p>
        <p>피드백에 미리 감사드립니다.</p>
      </div>
    </div>
  );
}
export default Contact;
