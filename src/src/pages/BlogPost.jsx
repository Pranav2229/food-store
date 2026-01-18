import React from 'react'
import styles from '../../assets/css/Blogpost.module.css'
import blog1 from '../../assets/Image/blog-1.png'
import blog2 from '../../assets/Image/blog-2.png'
import blog3 from '../../assets/Image/blog-3.png'

function BlogPost(props) {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#F53E32', color: 'white', height: '35px' }}>
                <div>
                    Shop
                </div>
                <div>
                    Home - Blog
                </div>
            </div>
            <section className={styles.blogPage}>
                <div className={styles.blogWrapper}>

                    {/* MAIN BLOG CONTENT */}
                    <main className={styles.blogContent}>

                        <img
                            src={blog1}
                            alt="blog"
                            className={styles.blogHero}
                        />

                        <div className={styles.blogMeta}>
                            <span className={styles.author}>By Admin -</span>
                            <span>07 Comment -</span>
                            <span>Date - 09.09.2024</span>
                        </div>

                        <h1 className={styles.blogTitle}>
                            Health Benefits of a Row food
                        </h1>

                        <p className={styles.blogText}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia
                            nihil sunt reprehenderit natus, soluta officia iure enim itaque...
                        </p>

                        <div className={styles.blogImages}>
                            <img src={blog2} alt="" />
                            <img src={blog3} alt="" />
                        </div>

                        <div className={styles.quoteBox}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                                repellat earum architecto.
                            </p>
                            <span>— John Martin</span>
                        </div>

                        <p className={styles.blogText}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                            officia magni explicabo.
                        </p>

                        <div className={styles.blogFooter}>
                            <div className={styles.tags}>
                                <span>Cabbage</span>
                                <span>Appetizer</span>
                                <span>Meat Food</span>
                            </div>

                            <div className={styles.social}>
                                <button>f</button>
                                <button>x</button>
                                <button>in</button>
                            </div>
                        </div>

                        <div className={styles.pagination}>
                            <button>Previous</button>
                            <button className={styles.active}>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>Next</button>
                        </div>

                    </main>

                    {/* RIGHT SIDEBAR */}
                    <aside className={styles.sidebar}>

                        {/* Search */}
                        <div className={styles.searchBox}>
                            <input type="text" placeholder="Search here..." />
                            <button>🔍</button>
                        </div>

                        {/* Category */}
                        <div className={styles.widget}>
                            <h4>Category</h4>
                            <ul>
                                <li>Milks & Dairies <span>(56)</span></li>
                                <li>Sea Food <span>(34)</span></li>
                                <li>Fresh Fruit <span>(53)</span></li>
                                <li>Pet Food <span>(21)</span></li>
                                <li>Meat Food <span>(45)</span></li>
                            </ul>
                        </div>

                        {/* Recent Post */}
                        <div className={styles.widget}>
                            <h4>Recent Post</h4>

                            <div className={styles.recentPost}>
                                <img src={blog1} alt="" />
                                <span className={styles.date}>Sep 09, 2023</span>
                                <h5>10 Tasty Organic Fruit choose</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>

                        {/* Gallery */}
                        <div className={styles.widget}>
                            <h4>Latest Gallery</h4>
                            <div className={styles.gallery}>
                                {[1, 2, 3, 4, 5, 6].map(i => (
                                    <img key={i} src={blog2} alt="" />
                                ))}
                            </div>
                        </div>

                        {/* Tags */}
                        <div className={styles.widget}>
                            <h4>Popular Tags</h4>
                            <div className={styles.tagList}>
                                <span>Vegetables</span>
                                <span>Juice</span>
                                <span>Meat Food</span>
                                <span>Cabbage</span>
                                <span>Organic Food</span>
                            </div>
                        </div>

                    </aside>

                </div>
            </section>

        </>
    )
}

export default BlogPost