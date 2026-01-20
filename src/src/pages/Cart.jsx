import React from 'react'
import styles from '../../assets/css/card.module.css'
import product1 from '../../assets/Image/product/1.png'
import MostPopular from '../components/MostPopular'
import { useNavigate } from 'react-router-dom'
function Cart(props) {
    const navigate = useNavigate()
    const cartItems = [
        {
            id: 1,
            name: "Organic Lemon",
            price: 56,
            image: product1,
        },
        {
            id: 2,
            name: "Apple Juice",
            price: 75,
            image: product1,
        },
        {
            id: 3,
            name: "Watermelon 5kg Pack",
            price: 48,
            image: product1,
        },
        {
            id: 4,
            name: "Pomegranate 5 kg pack",
            price: 90,
            image: product1,
        },
        {
            id: 5,
            name: "Organic Peach Fruits",
            price: 50,
            image: product1,
        },
    ];
    return (
        <>
            <section className={styles.cartPage}>
                <div className={styles.cartBox}>

                    {/* HEADER */}
                    <div className={styles.cartHeader}>
                        <span>Product</span>
                        <span>Price</span>
                        <span>Quantity</span>
                        <span>Total</span>
                        <span>Action</span>
                    </div>

                    {/* ITEMS */}
                    {cartItems.map((item) => (
                        <div className={styles.cartRow} key={item.id}>
                            <div className={styles.product}>
                                <img src={item.image} alt={item.name} />
                                <p>{item.name}</p>
                            </div>

                            <p className={styles.price}>${item.price}.00</p>

                            <div className={styles.qty}>
                                <button>+</button>
                                <span>1</span>
                                <button>-</button>
                            </div>

                            <p className={styles.total}>${item.price}.00</p>

                            <button className={styles.delete}>🗑</button>
                        </div>
                    ))}

                    {/* FOOTER */}
                    <div className={styles.cartFooter}>
                        <a className={styles.continue}>Continue Shopping</a>
                        <button className={styles.checkout} onClick={() => navigate('/checkout')}>Check Out</button>
                    </div>

                </div>
            </section>
            <MostPopular />
        </>
    )
}

export default Cart