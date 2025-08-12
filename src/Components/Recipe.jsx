import React from 'react'
import styles from "./App.module.css"
import Cards from './Cards';
import { images } from './data';

const Recipe = () => {
  return (
    <div className={styles.center}>
      <Cards>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.img} alt="African Foods" />
        </div>
      ))}
      </Cards>          
          <button className={styles.readMore}>
            Read More
          </button>
    </div>
  )
}

export default Recipe
