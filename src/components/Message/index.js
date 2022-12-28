import React from "react";
import PropTypes from "prop-types";
import { formatDistance } from "date-fns";
import ruLocale from "date-fns/locale/ru";
import classNames from "classnames";

import readedSvg from "../../assets/img/readed.svg";
import noReadedSvg from "../../assets/img/noreaded.svg";

import "./Message.scss";

const Message = ({ avatar, user, text, date, isMe, isReaded, attachments }) => {
  return (
    <div className={classNames("message", { "message--isme": isMe })}>
      <div className="message__content">
        {isMe && isReaded ? (
          <img
            className="message__icon-readed"
            src={readedSvg}
            alt="Readed icon"
          />
        ) : (
          <img
            className="message__icon-readed message__icon-readed--no"
            src={noReadedSvg}
            alt="No readed icon"
          />
        )}
        <div className="message__avatar">
          <img
            src={avatar}
            alt={`Avatar ${user.fullname}`}
            className="avatar"
          />
        </div>
        <div className="message__info">
          <div className="message__bubble">
            <p className="message__text">{text}</p>
          </div>
          {attachments && (
            <div className="message__attachments">
              {attachments.map(item => (
                <div className="message__attachments-item" key={item.url}>
                  <img src={item.url} alt ={item.filename } />
                </div>
              ))}
            </div>
          )}
          <span className="message__date">
            {formatDistance(date, new Date(), {
              addSuffix: true,
              locale: ruLocale,
            })}
          </span>
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
  date: PropTypes.number,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  isTyping: PropTypes.bool,
  audio: PropTypes.string,
};

export default Message;
