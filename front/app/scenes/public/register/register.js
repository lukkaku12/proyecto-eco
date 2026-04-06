import styles from './register.css';

export function RegisterPage() {
  const pageContent = `
    <div class="${styles['my-div']} ${styles['my-border']}">Hola mundo</div>
    <p>Esta es la vista para registrarse</p>
    <button id="register">Registrarse</button>
  `;

  const logic = () => {
    const myBtn = document.querySelector('#register');
    if (!myBtn) {
      return;
    }

    myBtn.addEventListener('click', () => {
      alert('Registrado');
    });
  };

  return {
    pageContent,
    logic,
  };
}
