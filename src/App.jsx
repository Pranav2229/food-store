import { useState } from 'react'
import Header from './src/components/Header'
import Footer from './src/components/Footer'
import AppRoutes from './src/routes/AppRoutes'
function App() {

  return (
    <>
      <>
        <section>
          <Header />
          <AppRoutes />
          <Footer />
        </section>
      </>
    </>
  )
}

export default App
