import styles from "./styles.module.css"
import { NavLink } from "react-router-dom"
export function Redefinir_senha() {


    return (
        <>
            <div className={styles.container}>
                <img src="\src\assets\redefinir_senha_fundo.svg" alt="" className={styles.left_img} />
                <div className={styles.right_container}>
                    <img className={styles.logo} src="\src\assets\logo.svg" alt="" />
                    <div id={styles.progress_bar}>
                        <div id={styles.fill_progress}></div>
                    </div>
                    <form action="">
                        <h2>Esqueceu sua senha?</h2>
                        <p>Escreva seu e-mail no campo abaixo para que possamos enviar o código de confirmação para a alteração de senha.</p>
                        <input type="email" name="" id="" placeholder="Digite seu e-mail"/>
                        <div className={styles.buttons}>
                            <a href="/login">Cancelar</a>
                           <NavLink to={'/redefinir_senha2'}>
                            <button type="submit" className={styles.button_submit}>
                                Continuar
                                </button>
                            </NavLink>  
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}