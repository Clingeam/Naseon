import styles from './style.module.css'
export function Redefinir_senha2() {
    return(
        <>
        <div className={styles.container}>
                <img src="\src\assets\redefinir_senha_fundo.svg" alt="" className={styles.left_img} />
                <div className={styles.right_container}>
                    <img className={styles.logo} src="\src\assets\logo.svg" alt="" />
                    <div id={styles.progress_bar}>
                        <div id={styles.fill_progress}></div>
                    </div>
                    <form action="">
                        <h3>Aguardando confirmação de e-mail</h3>
                        <h3>Digite o código enviado para a sua caixa de entrada.</h3>
                        <input type="text" name="" id="" />                   
                    <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <div className={styles.buttons}>
                       
                            <a href="/login">Cancelar</a>
                            <button type="submit">
                                Continuar
                            </button>
                        </div>
                    </form>
                </div>
        </div>
        </>
    );
} 