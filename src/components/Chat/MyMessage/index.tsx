import React from "react";

import "./my-message.css";

import {BsCheckAll} from 'react-icons/bs'
import { MessageModel } from "../../../models/MessageModel";

export const MyMessage: React.FC<{message: MessageModel}> = ({message}) => {
    
  return (
    <div id="my-message-container">
      <div className="message-blue">
        <p className="message-content">{message.text}</p>
        <div className="message-timestamp-rigth">
          <p>{`${message.date.getHours()}:${message.date.getMinutes()}`}</p><BsCheckAll size={18} color={"#81E299"}/>
        </div>
      </div>
    </div>
  );
}
