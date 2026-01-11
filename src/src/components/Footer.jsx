import React from 'react'
import styles from '../../assets/css/Footer.module.css'
import boyimage from '../../assets/Image/boyimage.png'
import footerimg1 from '../../assets/Image/footerimg1.png'
import footerimg2 from '../../assets/Image/footerimg2.png'
import footerimg3 from '../../assets/Image/footerimg3.png'
import footerimg4 from '../../assets/Image/footerimg4.png'
import footerimg5 from '../../assets/Image/footerimg5.png'

function Footer(props) {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footerGrid}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <img src={boyimage} alt="Foodzy" />
                            <div>
                                <h3>Foodzy</h3>
                                <p>A Treasure of Tastes</p>
                            </div>
                        </div>

                        <p className={styles.desc}>
                            FoodTrove is the biggest market of grocery products.
                            Get your daily needs from our store.
                        </p>

                        <ul className={styles.contact}>
                            <li>📍 51 Green St. Huntington ohio beach ontario, NY 11746 KY 4783, USA.</li>
                            <li>✉ example@email.com</li>
                            <li>📞 +91 123 4567890</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Delivery Information</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Contact Us</li>
                            <li>Support Center</li>
                        </ul>
                    </div>

                    {/* Category */}
                    <div>
                        <h4>Category</h4>
                        <ul>
                            <li>Dairy & Bakery</li>
                            <li>Fruits & Vegetable</li>
                            <li>Snack & Spice</li>
                            <li>Juice & Drinks</li>
                            <li>Chicken & Meat</li>
                            <li>Fast Food</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4>Subscribe Our Newsletter</h4>

                        <div className={styles.newsletter}>
                            <input type="email" placeholder="Search here..." />
                            <button>➤</button>
                        </div>

                        <div className={styles.socials}>
                            <span>f</span>
                            <span>X</span>
                            <span>🌐</span>
                            <span>📸</span>
                        </div>

                        <div className={styles.gallery}>
                            <img src={footerimg1} />
                            <img src={footerimg2} />
                            <img src={footerimg3} />
                            <img src={footerimg4} />
                            <img src={footerimg5} />
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    © 2025 <span>Foodzy</span>, All rights reserved.
                </div>
            </footer>

        </>
    )
}

export default Footer