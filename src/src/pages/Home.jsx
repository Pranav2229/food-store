import React from 'react'
import styles from '../../assets/css/Home.module.css'
import texture from '../../assets/Image/Background.png'
import pngwing from '../../assets/Image/pngwing.png'
import product1 from '../../assets/Image/product5-1.png'
import bannerdeals from '../../assets/Image/bannerdeals.png'
import Fattoushsalad from '../../assets/Image/Fattoushsalad.png'
import image28 from '../../assets/Image/image28.png'
import stayhome from '../../assets/Image/stayhome.png'

function Home(props) {
    return (
        <>
            <section className={styles.categorySection}>
                {/* Background / Texture */}
                <div className={styles.bgImage}>
                    <img src={texture} alt="home texture" />
                </div>

                {/* Section Heading */}
                <div className={styles.cust}>
                    <p className={styles.subTitle}>Customer Favorites</p>
                    <h3 className={styles.title}>Popular Categories</h3>
                </div>

                {/* Category Card */}
                <div className={styles.categoryWrapper}>
                    <div className={styles.categoryCard}>
                        <img src={pngwing} alt="burger" />
                        <p className={styles.categoryName}>Main Dish</p>
                        <p className={styles.categoryCount}>(86 dishes)</p>
                    </div>


                    <div className={styles.categoryCard}>
                        <img src={pngwing} alt="burger" />
                        <p className={styles.categoryName}>Main Dish</p>
                        <p className={styles.categoryCount}>(86 dishes)</p>
                    </div>
                    <div className={styles.categoryCard}>
                        <img src={pngwing} alt="burger" />
                        <p className={styles.categoryName}>Main Dish</p>
                        <p className={styles.categoryCount}>(86 dishes)</p>
                    </div>
                    <div className={styles.categoryCard}>
                        <img src={pngwing} alt="burger" />
                        <p className={styles.categoryName}>Main Dish</p>
                        <p className={styles.categoryCount}>(86 dishes)</p>
                    </div>
                    <div className={styles.categoryCard}>
                        <img src={pngwing} alt="burger" />
                        <p className={styles.categoryName}>Main Dish</p>
                        <p className={styles.categoryCount}>(86 dishes)</p>
                    </div>
                </div>
            </section>
            <section className={styles.bestSells}>
                <div className={styles.container}>

                    {/* Section Header */}
                    <div className={styles.header}>
                        <h2>Daily Best Sells</h2>

                        <div className={styles.tabs}>
                            <button className={styles.active}>Featured</button>
                            <button>Popular</button>
                            <button>New added</button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className={styles.content}>

                        {/* Banner */}
                        <div className={styles.banner}>
                            {/* <img src={divbanner} alt='banner'/> */}
                        </div>

                        {/* Product Cards */}
                        <div className={styles.products}>

                            {/* Card */}
                            <div className={styles.card}>
                                <span className={`${styles.badge} ${styles.save}`}>Save 35%</span>

                                <img src={product1} alt="product" />

                                <p className={styles.brand}>Hodo Foods</p>
                                <h4>All Natural Italian-Style Chicken Meatballs</h4>

                                <div className={styles.price}>
                                    <span className={styles.new}>₹238.85</span>
                                    <span className={styles.old}>₹245.8</span>
                                </div>

                                <div className={styles.progress}>
                                    <span style={{ width: "75%" }}></span>
                                </div>
                                <p className={styles.sold}>Sold: 90/120</p>

                                <button className={styles.cartBtn}>Add To Cart</button>
                            </div>
                            <div className={styles.card}>
                                <span className={`${styles.badge} ${styles.save}`}>Save 35%</span>

                                <img src={product1} alt="product" />

                                <p className={styles.brand}>Hodo Foods</p>
                                <h4>All Natural Italian-Style Chicken Meatballs</h4>

                                <div className={styles.price}>
                                    <span className={styles.new}>₹238.85</span>
                                    <span className={styles.old}>₹245.8</span>
                                </div>

                                <div className={styles.progress}>
                                    <span style={{ width: "75%" }}></span>
                                </div>
                                <p className={styles.sold}>Sold: 90/120</p>

                                <button className={styles.cartBtn}>Add To Cart</button>
                            </div>
                            <div className={styles.card}>
                                <span className={`${styles.badge} ${styles.save}`}>Save 35%</span>

                                <img src={product1} alt="product" />

                                <p className={styles.brand}>Hodo Foods</p>
                                <h4>All Natural Italian-Style Chicken Meatballs</h4>

                                <div className={styles.price}>
                                    <span className={styles.new}>₹238.85</span>
                                    <span className={styles.old}>₹245.8</span>
                                </div>

                                <div className={styles.progress}>
                                    <span style={{ width: "75%" }}></span>
                                </div>
                                <p className={styles.sold}>Sold: 90/120</p>

                                <button className={styles.cartBtn}>Add To Cart</button>
                            </div>
                            <div className={styles.card}>
                                <span className={`${styles.badge} ${styles.save}`}>Save 35%</span>

                                <img src={product1} alt="product" />

                                <p className={styles.brand}>Hodo Foods</p>
                                <h4>All Natural Italian-Style Chicken Meatballs</h4>

                                <div className={styles.price}>
                                    <span className={styles.new}>₹238.85</span>
                                    <span className={styles.old}>₹245.8</span>
                                </div>

                                <div className={styles.progress}>
                                    <span style={{ width: "75%" }}></span>
                                </div>
                                <p className={styles.sold}>Sold: 90/120</p>

                                <button className={styles.cartBtn}>Add To Cart</button>
                            </div>
                            {/* Repeat cards as needed */}
                        </div>

                    </div>
                </div>
            </section>
            <section className={styles.specialSection}>
                <div className={styles.header}>
                    <p className={styles.tag}>SPECIAL DISHES</p>

                    <div className={styles.arrows}>
                        <button className={styles.arrowLeft}>‹</button>
                        <button className={styles.arrowRight}>›</button>
                    </div>
                </div>
                <div className={styles.cardWrapper}>
                    {/* Card 1 */}
                    <div className={styles.card}>
                        <div className={styles.favIcon}>♡</div>

                        <img src={Fattoushsalad} alt="Fattoush salad" />
                        <h3>Fattoush salad</h3>
                        <p>Description of the item</p>
                    </div>

                    {/* Card 2 */}
                    <div className={styles.card}>
                        <div className={styles.favIcon}>♡</div>

                        <img src={Fattoushsalad} alt="Vegetable salad" />
                        <h3>Vegetable salad</h3>
                        <p>Description of the item</p>
                    </div>

                    {/* Card 3 */}
                    <div className={styles.card}>
                        <div className={styles.favIcon}>♡</div>

                        <img src={Fattoushsalad} alt="Egg vegi salad" />
                        <h3>Egg vegi salad</h3>
                        <p>Description of the item</p>
                    </div>

                    {/* Card 3 */}
                    <div className={styles.card}>
                        <div className={styles.favIcon}>♡</div>

                        <img src={Fattoushsalad} alt="Egg vegi salad" />
                        <h3>Egg vegi salad</h3>
                        <p>Description of the item</p>
                    </div>
                </div>
            </section>
            <section className={styles.dealsSection}>
                <div className={styles.header}>
                    <h2>Deals Of The Day</h2>
                    <a href="#" className={styles.allDeals}>
                        All Deals →
                    </a>
                </div>

                <div className={styles.cardGrid}>
                    {/* Card */}
                    <div className={styles.card}>
                        <img src={bannerdeals} alt="product" />

                        <div className={styles.cardContent}>
                            <h3>Seeds of Change Organic Quinoa, Brown, & Red Rice</h3>

                            <div className={styles.rating}>
                                ⭐ <span>(4.0)</span>
                            </div>

                            <p className={styles.brand}>
                                By <span>NestFood</span>
                            </p>

                            <div className={styles.priceRow}>
                                <div>
                                    <span className={styles.price}>$32.85</span>
                                    <span className={styles.oldPrice}>$33.8</span>
                                </div>

                                <button className={styles.addBtn}>🛒 Add</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={bannerdeals} alt="product" />
                        <div className={styles.cardContent}>
                            <h3>Seeds of Change Organic Quinoa, Brown, & Red Rice</h3>

                            <div className={styles.rating}>
                                ⭐ <span>(4.0)</span>
                            </div>

                            <p className={styles.brand}>
                                By <span>NestFood</span>
                            </p>

                            <div className={styles.priceRow}>
                                <div>
                                    <span className={styles.price}>$32.85</span>
                                    <span className={styles.oldPrice}>$33.8</span>
                                </div>

                                <button className={styles.addBtn}>🛒 Add</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={bannerdeals} alt="product" />

                        <div className={styles.cardContent}>
                            <h3>Seeds of Change Organic Quinoa, Brown, & Red Rice</h3>

                            <div className={styles.rating}>
                                ⭐ <span>(4.0)</span>
                            </div>

                            <p className={styles.brand}>
                                By <span>NestFood</span>
                            </p>

                            <div className={styles.priceRow}>
                                <div>
                                    <span className={styles.price}>$32.85</span>
                                    <span className={styles.oldPrice}>$33.8</span>
                                </div>

                                <button className={styles.addBtn}>🛒 Add</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={bannerdeals} alt="product" />

                        <div className={styles.cardContent}>
                            <h3>Seeds of Change Organic Quinoa, Brown, & Red Rice</h3>

                            <div className={styles.rating}>
                                ⭐ <span>(4.0)</span>
                            </div>

                            <p className={styles.brand}>
                                By <span>NestFood</span>
                            </p>

                            <div className={styles.priceRow}>
                                <div>
                                    <span className={styles.price}>$32.85</span>
                                    <span className={styles.oldPrice}>$33.8</span>
                                </div>
                                <button className={styles.addBtn}>🛒 Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.stayhomewithus}>
                <div>
                    <img src={stayhome} alt='stayhome' />
                </div>
                <div className={styles.styhome}>
                    <div className={styles.infoCard}>
                        <div className={styles.icon}>
                            💸
                        </div>

                        <div className={styles.text}>
                            <h4>Best prices & offers</h4>
                            <p>Orders $50 or more</p>
                        </div>
                    </div>
                    <div className={styles.infoCard}>
                        <div className={styles.icon}>
                            💸
                        </div>

                        <div className={styles.text}>
                            <h4>Best prices & offers</h4>
                            <p>Orders $50 or more</p>
                        </div>
                    </div>
                    <div className={styles.infoCard}>
                        <div className={styles.icon}>
                            💸
                        </div>

                        <div className={styles.text}>
                            <h4>Best prices & offers</h4>
                            <p>Orders $50 or more</p>
                        </div>
                    </div>
                    <div className={styles.infoCard}>
                        <div className={styles.icon}>
                            💸
                        </div>

                        <div className={styles.text}>
                            <h4>Best prices & offers</h4>
                            <p>Orders $50 or more</p>
                        </div>
                    </div>
                    <div className={styles.infoCard}>
                        <div className={styles.icon}>
                            💸
                        </div>

                        <div className={styles.text}>
                            <h4>Best prices & offers</h4>
                            <p>Orders $50 or more</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.whyChoose}>
                <div className={styles.container}>
                    {/* Left Image */}
                    <div className={styles.imageBox}>
                        <img src={image28} alt="Why choose us" />
                    </div>

                    {/* Right Content */}
                    <div className={styles.content}>
                        <h2 className={styles.title}>Why People Choose us?</h2>

                        <div className={styles.card}>
                            <div>
                                <div className={styles.icon}>🚚</div>
                                <h4>Convenient and Reliable</h4>
                                <p>
                                    Whether you dine in, take out, or order delivery, our service is
                                    convenient, fast, and reliable, making mealtime hassle-free.
                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div>
                                <div className={styles.icon}>🥫</div>
                                <h4>Variety of Options</h4>
                                <p>
                                    From hearty meals to light snacks, we offer a wide range of options
                                    to suit every taste and craving.
                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div>
                                <div className={styles.icon}>🍔</div>

                                <h4>Eat Burger</h4>
                                <p>
                                    Our burgers are grilled to perfection, with juicy patties and
                                    flavorful toppings that make every bite a delicious experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home