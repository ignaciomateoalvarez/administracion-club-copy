import './styles.css'
import CloseIcon from "@assets/close-icon.svg?react";

interface ForgotPasswordProps {
  onSubmit: () => void;
  onClose: () => void;
}

export const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onSubmit, onClose }) => {

  const handleCloseModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.className === "modal-container") {
      onClose();
    }
  };

  return (
    <div className="modal-container" onClick={handleCloseModalClick}>
      <div className='modal'>
        <div className="modal-header">
          <p className="close" onClick={() => onClose()}><CloseIcon /></p>
          <h1>Recuperar contraseña</h1>
          <span>Ingresa tu mail de registro para poder recurperar tu contraseña</span>
        </div>
        <div className="modal-content">
          <label>Correo electrónico</label>
          <input placeholder='example@gmail.com'/>
          <button className='submit-button' onClick={() => onSubmit()}>Enviar correo electrónico</button>
        </div>
      </div>
    </div>
  )
}
