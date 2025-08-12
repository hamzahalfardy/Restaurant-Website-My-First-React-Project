import React from 'react';
import Navbar  from './Components/NabBar';
import Banner from './Components/Banner';
import Taste from './Components/Taste';
import Recipe from './Components/Recipe';
import Blogs from './Components/Blogs';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Taste />
      <Recipe />
      <Blogs />
      <Footer />
    </div>
  )
}

export default App
