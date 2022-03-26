import React, { useEffect, useState } from "react";
import Footer from "../../components/Chat/Footer";
import { HeaderChat } from "../../components/Chat/Header";
import { ImageProfile } from "../../components/Chat/ImageProfile";
import { MyMessage } from "../../components/Chat/MyMessage";
import { ReceiveMessage } from "../../components/Chat/ReceiveMessage";
import { ConversationMock } from "../../mock/ConversationMock";
import { MessageModel } from "../../models/MessageModel";

import "../../styles/pages/chat.css";

export default function Chat() {
  const [messages, setMessages] = useState<MessageModel[]>([]);

  useEffect(() => {
    setMessages(ConversationMock);
    window.scrollTo(0, 15000);
  }, []);

  return (
    <div id="chat-page">
      <div className="main-chat-page">
      <header>
         <div className="header">
          <HeaderChat />
         </div>
        </header>
       
        <main>
          {messages.map((value) =>
            value.isMe ? (
              <div className="message-right">
                <div className="container-profile">
                  <ImageProfile />
                  <p className="profile-name">Douglas Moura</p>
                </div>
                <MyMessage message={value} />
              </div>
            ) : (
              <div className="message-left">
                <div className="container-profile">
                  <ImageProfile />
                  <p className="profile-name">Douglas Moura</p>
                </div>
                <ReceiveMessage message={value} />
              </div>
            )
          )}
        </main>
        <footer>
          <div className="footer">
            <Footer />
          </div>
        </footer>
      </div>
    </div>
  );
}
