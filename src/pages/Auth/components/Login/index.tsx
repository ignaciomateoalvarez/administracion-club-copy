import useAuth from "@hooks/useAuth";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from 'react-router-dom'
import { ForgotPassword } from "./components/ForgotPassword";
import DepArmenioLogo from "@assets/dep_armenio.svg?react";

import "./styles.css"
import usePasswordToggle from "./hooks/usePasswordToggle";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const {InputType, ToggledIcon} = usePasswordToggle()
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    login({ email, password, rememberMe })
    navigate("/");
  };

  const handleKeyPress = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };
  

  const handleButtonClick = () => {
    setModalOpen(false)
  }

  return (
    <>
      <header className="login-header">
        <DepArmenioLogo />
        <h5>Deportivo Armenio</h5>
      </header>
      <div className="login-container">
        <div className="login-content" onKeyDown={handleKeyPress}>
          <h4>Iniciar sesión</h4>
          <div className="login-input-box email-input">
            <label>Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
            />
          </div>
          <div className="login-input-box password-input">
            <label>Contraseña</label>
            <div className="password-input-wrapper">
              <input
                type={InputType}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="**********"
                />
              <span className="password-toggle-icon">
                {ToggledIcon}
              </span>
            </div>
          </div>
          <div className="login-remember-forgot-container">
            <div className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label>Recordarme</label>
            </div>
            <button onClick={() => setModalOpen(true)}>Olvide mi contraseña</button>
            {modalOpen && createPortal(
              <ForgotPassword
                onSubmit={handleButtonClick}
                onClose={handleButtonClick} />, document.body)}
          </div>
          <button className="login-button" onClick={handleLogin}>Iniciar sesión</button>
        </div>
      </div>
    </>

  );
};

export default Login;