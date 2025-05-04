

import './EmailLink.css';

const EmailLink = ({ email }) => {
  return (
    <div className="email-link">
      <a href={`mailto:${email}`}>{email}</a>
      <div className="email-line"></div>
    </div>
  );
};

export default EmailLink;