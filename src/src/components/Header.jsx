import React from 'react'
import styles from '../../assets/css/Header.module.css'
import boyimage from '../../assets/Image/boyimage.png'
import profile from '../../assets/Image/profile.png'
import call from '../../assets/Image/call.png'
import chart from '../../assets/Image/chart.png'
import bag from '../../assets/Image/bag.png'
import search from '../../assets/Image/search.png'
function Header(props) {
    return (
        <>
            <header className={styles.header}>
                {/* Top Bar */}
                <div className={styles.topBar}>
                    <button className={styles.menuBtn}>☰</button>

                    <nav className={styles.topNav}>
                        <a href="/">Home</a>

                        <div className={styles.dropdown}>
                            <span>Category</span>
                        </div>

                        <div className={styles.dropdown}>
                            <span>Products</span>
                        </div>

                        <div className={styles.dropdown}>
                            <span>Pages</span>
                        </div>

                        <div className={styles.dropdown}>
                            <span>Blog</span>
                        </div>

                        <div className={styles.dropdown}>
                            <span>Elements</span>
                        </div>
                    </nav>

                    <div className={styles.contact}>
                        <span><img src={call} alt='call' /> +123 (456) (7890)</span>
                    </div>
                </div>

                {/* Main Header */}
                <div className={styles.mainHeader}>
                    {/* Logo */}
                    <div className={styles.logo}>
                        <img src={boyimage} alt="Foodzy Logo" />
                        <div>
                            <h2>Foodzy</h2>
                            <p>A Treasure of Tastes</p>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className={styles.searchBar}>
                        <input
                            type="text"
                            placeholder="Search For items..."
                        />

                        <select>
                            <option>All Categories</option>
                            <option>Vegetables</option>
                            <option>Fruits</option>
                            <option>Groceries</option>
                        </select>

                        <button className={styles.searchBtn}>
                            <img src={search} alt="search" />
                        </button>
                    </div>

                    {/* Actions */}
                    <div className={styles.actions}>
                        <button className={styles.actionItem}>
                            <img src={profile} alt='logo' /> <span>Account</span>
                        </button>

                        <button className={styles.actionItem}>
                            <img src={chart} alt='chart' /> <span>Wishlist</span>
                        </button>

                        <button className={styles.actionItem}>
                            <img src={bag} alt='bag' /> <span>Cart</span>
                        </button>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header