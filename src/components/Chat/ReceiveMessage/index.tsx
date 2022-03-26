import React from 'react'
import { MessageModel } from '../../../models/MessageModel';

import './receive-message.css';

export const ReceiveMessage: React.FC<{message: MessageModel}> = ({message}) => {
  return (
    <div id="receive-message-container">
    <div className="message-gray">
      <p className="message-content">{message.text}</p>
      <div className="message-timestamp-rigth">
        <p>{`${message.date.getHours()}:${message.date.getMinutes()}`}</p>
      </div>
    </div>
  </div>
  )
}
