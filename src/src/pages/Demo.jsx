import React from 'react'
import '../../assets/css/DEmo.css'
function Demo(props) {
    return (
        <>

            <header>
                <div class="container nav">
                    <h2>PharmaCo</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="shop.html">Products</a></li>
                        <li><a href="certifications.html">Certifications</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </header>

            <section class="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '80px 0' }}>
                <div>
                    <h1 style={{ fontSize: '48px' }}>Trusted Pharmaceutical Products</h1>
                    <p style={{ margin: '20px 0', color: 'var(--muted)' }}>
                        WHO-GMP certified medicines with global standards.
                    </p>
                    <a class="btn btn-primary">Shop Products</a>
                    <a class="btn btn-outline">Contact Sales</a>
                </div>
                <img src="images/hero.png" alt="" />
            </section >

            <section class="container">
                <h2>Popular Medicines</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px', marginTop: '24px' }}>
                    <div class="product-card">
                        <img src="images/tablet.png" />
                        <h4>Paracetamol 500mg</h4>
                        <p>₹120</p>
                        <a class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </section>

            <footer>
                <div class="container">
                    <p>© 2026 PharmaCo. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Demo