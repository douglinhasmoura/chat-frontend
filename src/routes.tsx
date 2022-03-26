import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Chat/Footer";
import { HeaderChat } from "./components/Chat/Header";
import { ImageProfile } from "./components/Chat/ImageProfile";
import {MyMessage} from "./components/Chat/MyMessage";
import {ReceiveMessage} from "./components/Chat/ReceiveMessage";
import { MessageModel } from "./models/MessageModel";
import Chat from "./pages/Chat";
import Login from "./pages/Login";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}
