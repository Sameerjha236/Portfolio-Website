import React, { useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import Loading from "./Loading";
const Contact = ({ isLoading, setIsLoading }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const form = useRef();
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [setIsLoading]);
  if (isLoading) return <Loading />;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_29fmhe5",
      "template_6als9oh",
      form.current,
      "azoSKxYbS9-_7Epo3"
    );
    form.current.reset();
  };

  return (
    <div className="contact">
      <div className="header">
        <h4>Get in Touch</h4>
        <h3>Contact Me</h3>
      </div>
      <div className="contact-container">
        <div className="contact-options">
          <article className="card contact-option">
            <MdOutlineMail className="contact-icon" />
            <h4>Email</h4>
            <h5>sameerjha236@gmail.com</h5>
            <a
              href="mailto:sameerjha236@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="card contact-option ">
            <BsWhatsapp className="contact-icon" />
            <h4>Whatsapp</h4>
            <h5>9210925656</h5>
            <a
              href="https://api.whatsapp.com/send?phone=9210925656"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Whatsapp Message
            </a>
          </article>
        </div>
        <form ref={form} className="form" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
