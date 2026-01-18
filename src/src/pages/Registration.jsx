import React from 'react'
import styles from '../../assets/css/Registration.module.css'
import boyimage from '../../assets/Image/boyimage.png'
import { useNavigate } from 'react-router-dom'

function Registration(props) {
    const navigate = useNavigate()
    return (
        <>
            <section className={styles.registerPage}>
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
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label>First Name*</label>
                                <input type="text" placeholder="Enter Your First Name" />
                            </div>

                            <div className={styles.field}>
                                <label>Last Name*</label>
                                <input type="text" placeholder="Enter Your Last Name" />
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label>Email*</label>
                                <input type="email" placeholder="Enter Your email" />
                            </div>

                            <div className={styles.field}>
                                <label>Phone Number*</label>
                                <input type="tel" placeholder="Enter your phone number" />
                            </div>
                        </div>

                        <div className={styles.field}>
                            <label>Address*</label>
                            <input type="text" placeholder="Address" />
                        </div>

                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label>City*</label>
                                <input type="text" placeholder="City" />
                            </div>

                            <div className={styles.field}>
                                <label>Post Code</label>
                                <input type="text" placeholder="Post Code" />
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label>Country*</label>
                                <input type="text" placeholder="Country" />
                            </div>

                            <div className={styles.field}>
                                <label>Region State*</label>
                                <input type="text" placeholder="Region/State" />
                            </div>
                        </div>

                        {/* FOOTER */}
                        <div className={styles.footer}>
                            <button className={styles.signupBtn}>Signup</button>
                            <p className={styles.loginText} onClick={() => navigate('/login')}>
                                Have an account? <span>Login</span>
                            </p>
                        </div>
                    </form>

                </div>
            </section>
        </>
    )
}

export default Registration