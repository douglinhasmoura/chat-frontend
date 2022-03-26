import React from "react";

import "./footer.css";
import {AiOutlineSend} from 'react-icons/ai'

export default function Footer() {
  return (
    <div id="footer-component">
        <div className="container-footer">
          <div className="container-input">
            <textarea
              className="input-footer-component"
              cols={50}
              rows={50}
              placeholder="Escreva uma mensagem"
            ></textarea>
            <button className="button-send-text"><AiOutlineSend size={22} /></button>
          </div>
        </div>
    </div>
  );
}
