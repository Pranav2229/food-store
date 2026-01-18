import React from 'react'
import styles123 from '../../assets/css/Popular.module.css'
import product1 from '../../assets/Image/product/1.png'

function MostPopular(props) {
    return (
        // <section className={styles123.productsPage}>
            <div className={styles123.popularWrapper}>
                <h2 className={styles123.heading}>Popular Products</h2>
                <p className={styles123.subHeading}>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et viverra maecenas accumsan lacus vel facilisis.
                </p>

                <div className={styles123.productsGrid}>

                    {/* Product Card */}
                    <div className={styles123.productCard}>
                        <div className={styles123.imageBox}>
                            <img src={product1} alt="product" />
                            <span className={styles123.cartIcon}>🛒</span>
                        </div>

                        <p className={styles123.category}>Snacks</p>

                        <div className={styles123.rating}>
                            ★★★★★ <span>(4.5)</span>
                        </div>

                        <h4 className={styles123.title}>
                            Best snakes with hazel nut mix pack 200gm
                        </h4>

                        <div className={styles123.price}>
                            <span className={styles123.newPrice}>$120.25</span>
                            <span className={styles123.oldPrice}>$123.25</span>
                        </div>
                    </div>

                    {/* Repeat card */}
                    <div className={styles123.productCard}>
                        <div className={styles123.imageBox}>
                            <img src={product1} alt="product" />
                            <span className={styles123.cartIcon}>🛒</span>
                        </div>

                        <p className={styles123.category}>Snacks</p>

                        <div className={styles123.rating}>
                            ★★★★★ <span>(5.0)</span>
                        </div>

                        <h4 className={styles123.title}>
                            Sweet snakes crunchy nut mix 250gm pack
                        </h4>

                        <div className={styles123.price}>
                            <span className={styles123.newPrice}>$100.00</span>
                            <span className={styles123.oldPrice}>$110.00</span>
                        </div>
                    </div>

                    {/* Repeat card */}
                    <div className={styles123.productCard}>
                        <div className={styles123.imageBox}>
                            <img src={product1} alt="product" />
                            <span className={styles123.cartIcon}>🛒</span>
                        </div>

                        <p className={styles123.category}>Snacks</p>

                        <div className={styles123.rating}>
                            ★★★★★ <span>(5.0)</span>
                        </div>

                        <h4 className={styles123.title}>
                            Sweet snakes crunchy nut mix 250gm pack
                        </h4>

                        <div className={styles123.price}>
                            <span className={styles123.newPrice}>$100.00</span>
                            <span className={styles123.oldPrice}>$110.00</span>
                        </div>
                    </div>

                    {/* Repeat card */}
                    <div className={styles123.productCard}>
                        <div className={styles123.imageBox}>
                            <img src={product1} alt="product" />
                            <span className={styles123.cartIcon}>🛒</span>
                        </div>

                        <p className={styles123.category}>Snacks</p>

                        <div className={styles123.rating}>
                            ★★★★★ <span>(5.0)</span>
                        </div>

                        <h4 className={styles123.title}>
                            Sweet snakes crunchy nut mix 250gm pack
                        </h4>

                        <div className={styles123.price}>
                            <span className={styles123.newPrice}>$100.00</span>
                            <span className={styles123.oldPrice}>$110.00</span>
                        </div>
                    </div>

                </div>
            </div>
        // </section>
    )
}

export default MostPopular