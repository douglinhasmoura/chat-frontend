import React from "react";
import "../../styles/pages/login.css";

export default function Login() {
  const login = () => {
      
  };
  return (
    <div id="login-page">
      <div className="content-wrapper">
        <main>
          <div className="form-login">
            <form className="form-login">
              <div className="form-input">
                <input
                  id="login"
                  type={"email"}
                  className="input-text"
                  aria-label="E-mail"
                  placeholder="E-mail"
                />
              </div>

              <div className="form-input">
                <input
                  id="login"
                  type={"password"}
                  className="input-text"
                  placeholder="Senha"
                  aria-label="Senha"
                />
              </div>
              <div>
                <button className="form-button" onClick={() => login()}>
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
