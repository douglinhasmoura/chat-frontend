import React, { useState } from "react";
import "../../styles/pages/login.css";

interface IUser {
  email?: string;
  password?: string;
}

export default function Login() {
  const [user, setUser] = useState<IUser>();

  const setUserEmail = (email: string) => {
    const newUser:IUser = {
      email,
      password: user?.password,
    }
    setUser(newUser);
  }

  const setUserPwd = (password: string) => {
    
    const newUser:IUser = {
      password,
      email: user?.email,
    }
    setUser(newUser);
  }

  const login = () => {
     
  };
  return (
    <div id="login-page">
      <div className="content-wrapper">
        <main>
          <div className="form-login">
            <form className="form-login" onSubmit={login}>
              <div className="form-input">
                <input
                  id="login"
                  type={"email"}
                  className="input-text"
                  aria-label="E-mail"
                  placeholder="E-mail"
                  onChange={(event) => setUserEmail(event.target.value)}
                />
              </div>

              <div className="form-input">
                <input
                  id="login"
                  type={"password"}
                  className="input-text"
                  placeholder="Senha"
                  aria-label="Senha"
                  onChange={(event) => setUserPwd(event.target.value)}
                />
              </div>
              <div>
                <button className="form-button" >
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
