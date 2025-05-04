

import './Contact.css';

const Contact = ({ email }) => {
  return (
    <section id="contact" className="contact">
      <p className="contact-overline">04. What's Next?</p>
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-text">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <a href={`mailto:${email}`} className="contact-button">Say Hello</a>
    </section>
  );
};

export default Contact;