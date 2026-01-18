import React from 'react'
import styles from '../../assets/css/Login.module.css'
import boyimage from '../../assets/Image/boyimage.png'
import { useNavigate } from 'react-router-dom'

function Login(props) {
    const navigate = useNavigate()
    return (
        <>
            <section className={styles.loginPage}>
                <div className={styles.card}>

                    {/* LOGO */}
                    <div className={styles.logo}>
                        <img src={boyimage} alt="Foodzy Logo" />
                        <div>
                            <h2>Foodzy</h2>
                            <p>A Treasure of Tastes</p>
                        </div>
                    </div>

                    {/* FORM */}
                    <form className={styles.form}>
                        <div className={styles.field}>
                            <label>Email Address*</label>
                            <input type="email" placeholder="Enter Your Email" />
                        </div>

                        <div className={styles.field}>
                            <label>Password*</label>
                            <input type="password" placeholder="Enter your password" />
                        </div>

                        <div className={styles.options}>
                            <label className={styles.remember}>
                                <input type="checkbox" />
                                Remember Me
                            </label>

                            <span className={styles.forgot}>Forgot Password?</span>
                        </div>

                        <div className={styles.footer}>
                            <button className={styles.loginBtn}>Login</button>
                            <p className={styles.signupText} onClick={() => navigate('/register')}>
                                Signup?
                            </p>
                        </div>
                    </form>

                </div>
            </section>
        </>
    )
}

export default Login