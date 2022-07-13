import "./contact.css";
import Address from "../../img/address.png";
import GitHub from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qtbn0zt",
        "template_bvxjxxl",
        formRef.current,
        "mugqGBI46XwRprCi2"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={GitHub} alt="" className="c-icon" />
              https://github.com/Rbenney15
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Linkedin} alt="" />
              https://www.linkedin.com/in/robert-benney/
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Baltimore, MD
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;