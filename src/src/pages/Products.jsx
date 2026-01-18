import React from 'react'
import styles from '../../assets/css/Product.module.css'
import product1 from '../../assets/Image/product/1.png'
import filter49 from '../../assets/Image/49.png'
import filter52 from '../../assets/Image/52.png'
import { useNavigate } from 'react-router-dom'

// import product2 from '../../assets/Image/product/2.jpg'
// import product3 from '../../assets/Image/product/3.jpg'
// import product9 from '../../assets/Image/product/9.jpg'
// import product10 from '../../assets/Image/product/10.jpg'
// import product11 from '../../assets/Image/product/11.jpg'
// import product12 from '../../assets/Image/product/12.jpg'
// import product13 from '../../assets/Image/product/13.jpg'
// import product17 from '../../assets/Image/product/17.jpg'

function Products(props) {
    const navigate = useNavigate()
    const Handleproduct = () => {
        navigate('/product/1524')
    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#F53E32', color: 'white', height: '35px' }}>
                <div>
                    Shop
                </div>
                <div>
                    Home - Product
                </div>
            </div>
            <section className={styles.productsPage}>
                <div className={styles.wrapper}>

                    {/* LEFT SIDEBAR */}
                    <aside className={styles.sidebar}>
                        <h4>Product Category</h4>

                        <label><input type="checkbox" /> Juice & Drinks <span>[20]</span></label>
                        <label><input type="checkbox" /> Dairy & Milk <span>[54]</span></label>
                        <label><input type="checkbox" /> Snack & Spice <span>[64]</span></label>

                        <h4>Filter By Price</h4>
                        <input type="range" style={{ width: '100%' }} />
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

                    {/* RIGHT PRODUCTS */}
                    <main className={styles.productsArea}>
                        <div className={styles.topBar}>
                            {/* <p>We found 29 items for you!</p> */}
                            <div>
                                <img src={filter49} alt='filter' style={{ width: '30px' }} />
                                <img src={filter52} alt='leftmenu' style={{ width: '30px', marginLeft: 20 }} />
                            </div>
                            <select className={styles.selectopt}>
                                <option>Featured</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </div>

                        <div className={styles.productsGrid}>
                            {[...Array(9)].map((_, i) => (
                                <div className={styles.productCard} key={i} onClick={() => Handleproduct()}>
                                    <img src={product1} alt="product" />
                                    <p className={styles.category}>Fruits</p>
                                    <h5>Fresh organic apple 1kg simla</h5>
                                    <div className={styles.rating}>★★★★★ (4.5)</div>
                                    <div className={styles.price}>
                                        <span className={styles.new}>$120.25</span>
                                        <span className={styles.old}>$123.25</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.pagination}>
                            <button>Previous</button>
                            <button className={styles.active}>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>Next</button>
                        </div>
                    </main>

                </div>
            </section>

        </>
    )
}

export default Products