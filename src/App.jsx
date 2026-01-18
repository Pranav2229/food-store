import { useState } from 'react'
import Header from './src/components/Header'
import Footer from './src/components/Footer'
import AppRoutes from './src/routes/AppRoutes'
import GlobalCursorCanvas from './src/pages/Canva'
import Demo from './src/pages/Demo'
function App() {

  return (
    <>
      <>
        {/* <Demo /> */}
        {/* <GlobalCursorCanvas /> */}
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
