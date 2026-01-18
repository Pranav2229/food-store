import React from 'react'
import styles123 from '../../assets/css/Productdetail.module.css'
import styles from '../../assets/css/Product.module.css'
import product1 from '../../assets/Image/product/1.png'
import MostPopular from '../components/MostPopular'
function ProductDetail(props) {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#F53E32', color: 'white', height: '35px' }}>
                <div>
                    Shop
                </div>
                <div>
                    Home - ProductDetail
                </div>
            </div>
            <section className={styles.productsPage}>
                <div className={styles123.wrapper}>

                    {/* LEFT SIDEBAR */}
                    <aside className={styles.sidebar}>
                        <h4>Product Category</h4>

                        <label><input type="checkbox" /> Juice & Drinks <span>[20]</span></label>
                        <label><input type="checkbox" /> Dairy & Milk <span>[54]</span></label>
                        <label><input type="checkbox" /> Snack & Spice <span>[64]</span></label>

                        <h4>Filter By Price</h4>
                        <input type="range" className={styles.range} />
                        <p><b>Price:</b> $20 - $250</p>
                        <button className={styles.filterBtn}>Filter</button>

                        <h4>Color</h4>
                        <label><input type="checkbox" /> Blue <span className={styles.blue}></span></label>
                        <label><input type="checkbox" /> Yellow <span className={styles.yellow}></span></label>
                        <label><input type="checkbox" /> Red <span className={styles.red}></span></label>

                        <h4>Weight</h4>
                        <label><input type="checkbox" /> 2kg Pack</label>
                        <label><input type="checkbox" /> 20kg Pack</label>
                        <label><input type="checkbox" /> 30kg Pack</label>

                        <h4>Product Tags</h4>
                        <div className={styles.tags}>
                            <span>Vegetables</span>
                            <span>Juice</span>
                            <span>Food</span>
                            <span>Dry Fruits</span>
                        </div>
                    </aside>

                    {/* PRODUCT DETAILS */}
                    <div>
                        <div className={styles123.productContainer}>

                            {/* Images */}
                            <div className={styles123.productImages}>
                                <div className={styles123.mainImage}>
                                    <img src={product1} alt="Product" />
                                </div>

                                <div className={styles123.thumbnailList}>
                                    <img src={product1} alt="" />
                                    <img src={product1} alt="" />
                                    <img src={product1} alt="" />
                                    <img src={product1} alt="" />
                                </div>
                            </div>

                            {/* Details */}
                            <div className={styles123.productDetails}>
                                <h3>Seeds Of Change Organic Quinoa, Brown</h3>

                                <p className={styles123.shortDesc}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>

                                {/* <div className={styles123.rating}>
                                ★★★★★ <span>(75 Review)</span>
                            </div> */}
                                <div className='flex'>
                                    <div className={styles.rating}>
                                        ★★★★★ (4.5)
                                    </div>
                                    <div className={styles123.rating}>
                                        <span>(75 Review)</span>
                                    </div>
                                </div>


                                <ul className={styles123.meta}>
                                    <li><strong>Brand:</strong> ESTA BETTERU CO</li>
                                    <li><strong>Flavour:</strong> Super Saver Pack</li>
                                    <li><strong>Diet Type:</strong> Vegetarian</li>
                                    <li><strong>Weight:</strong> 200 Grams</li>
                                    <li><strong>Speciality:</strong> Gluten Free, Sugar Free</li>
                                    <li><strong>Info:</strong> Egg Free, Allergen-Free</li>
                                </ul>

                                <div className={styles123.price}>
                                    <span className={styles123.newPrice}>$120.25</span>
                                    <span className={styles123.oldPrice}>$123.25</span>
                                </div>

                                <div className={styles123.sizes}>
                                    <p>Size / Weight:</p>
                                    <button className={styles123.active} style={{ marginLeft: 10 }}>50kg</button>
                                    <button>80kg</button>
                                    <button>120kg</button>
                                    <button>200kg</button>
                                </div>

                                <div className={styles123.cartActions}>
                                    <div className={styles123.qty}>
                                        <button>-</button>
                                        <input type="text" value="1" readOnly />
                                        <button>+</button>
                                    </div>

                                    <button className={styles123.addCart}>Add To Cart</button>
                                    <button className={styles123.iconBtn}>♡</button>
                                    <button className={styles123.iconBtn}>👁</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            {/* TABS */}
                            <div className={styles123.tabs}>
                                <div className={styles123.tabHeader}>
                                    <span className={styles123.active}>Description</span>
                                    <span>Information</span>
                                    <span>Review</span>
                                </div>

                                <div className={styles123.tabContent}>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit.elit.
                                    </p>

                                    <h4>Packaging & Delivery</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
               <MostPopular/>
            </section>
            {/* <section className={styles.productsPage}>

            </section> */}

        </>
    )
}

export default ProductDetail