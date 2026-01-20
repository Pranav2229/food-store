import React from 'react'
import styles from '../../assets/css/Checkout.module.css'
function Checkout(props) {
    return (
        <>
            <div className={styles.parentClass}>
                <div className={styles.checkoutPage}>
                    <div className={styles.checkoutContainer}>

                        {/* LEFT SECTION */}
                        <div className={styles.left}>

                            {/* New / Returning Customer */}
                            <div className={styles.card}>
                                <h3>New Customer</h3>
                                <p className={styles.subText}>Checkout Options</p>
                                <div style={{ display: 'flex', gap: 10 }}>
                                    <label className={styles.radio}>
                                        <input type="radio" name="account" defaultChecked />
                                        <p>Register Account</p>
                                    </label>

                                    <label className={styles.radio}>
                                        <input type="radio" name="account" />
                                        Guest Account
                                    </label>
                                </div>
                                <p className={styles.infoText}>
                                    By creating an account you will be able to shop faster and track orders.
                                </p>

                                <button className={styles.primaryBtn}>Continue</button>
                            </div>

                            {/* Returning Customer */}
                            <div className={styles.card}>
                                <h3>Returning Customer</h3>

                                <label>Email Address</label>
                                <input type="email" style={{ marginLeft: '20px' }} placeholder="Enter your email address" />

                                <label style={{ marginLeft: '20px' }}>Password</label>
                                <input type="password" style={{ marginLeft: '20px' }} placeholder="Enter your password" />

                                <div className={styles.loginRow}>
                                    <button className={styles.primaryBtn}>Login</button>
                                    <span className={styles.link}>Forgot Password?</span>
                                </div>
                            </div>

                            {/* Billing Details */}
                            <div className={styles.card}>
                                <h3>Billing Details</h3>

                                <div className={styles.grid2}>
                                    <input placeholder="First Name*" />
                                    <input placeholder="Last Name*" />
                                </div>

                                <input placeholder="Address Line 1" />

                                <div className={styles.grid2}>
                                    <input placeholder="City*" />
                                    <input placeholder="Post Code" />
                                </div>

                                <div className={styles.grid2}>
                                    <input placeholder="Country*" />
                                    <input placeholder="Region / State*" />
                                </div>
                            </div>

                        </div>

                        {/* RIGHT SECTION */}
                        <div className={styles.right}>

                            {/* Order Summary */}
                            <div className={styles.card}>
                                <h3>Summary</h3>

                                <div className={styles.summaryRow}>
                                    <span>Sub-Total</span>
                                    <span>$80.00</span>
                                </div>

                                <div className={styles.summaryRow}>
                                    <span>Delivery Charges</span>
                                    <span>$0.00</span>
                                </div>

                                <div className={styles.totalRow}>
                                    <span>Total Amount</span>
                                    <span>$80.00</span>
                                </div>
                            </div>

                            {/* Delivery Method */}
                            <div className={styles.card}>
                                <h3>Delivery Method</h3>

                                <label className={styles.radio}>
                                    <input type="radio" name="delivery" defaultChecked />
                                    Free Shipping (Rate - $0.00)
                                </label>

                                <label className={styles.radio}>
                                    <input type="radio" name="delivery" />
                                    Flat Rate (Rate - $5.00)
                                </label>

                                <textarea placeholder="Add comments about your order" />
                            </div>

                            {/* Payment Method */}
                            <div className={styles.card}>
                                <h3>Payment Method</h3>

                                <label className={styles.radio}>
                                    <input type="radio" name="payment" defaultChecked />
                                    Cash On Delivery
                                </label>

                                <label className={styles.radio}>
                                    <input type="radio" name="payment" />
                                    UPI
                                </label>

                                <label className={styles.radio}>
                                    <input type="radio" name="payment" />
                                    Bank Transfer
                                </label>

                                <button className={styles.primaryBtn}>Place Order</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout