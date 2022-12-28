import React from "react";
import PropTypes from "prop-types";

import "./Message.scss";

const Message = ({ avatar, user, text, date }) => {
  return (
    <div className="message">
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullname}`} className="avatar" />
      </div>
      <div className="message__content">
        <div className="message__info">
          <div className="message__bubble">
            <p className="message__text">{text}</p>
          </div>
          <span className="message__date">{date}</span>
        </div>
      </div>
    </div>
  );
};

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  isTyping: PropTypes.bool,
  audio: PropTypes.string,
};

export default Message;
