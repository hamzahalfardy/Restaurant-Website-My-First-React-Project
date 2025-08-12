import React from 'react'
import styles from "./App.module.css"

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src="/images/foods.jpg" alt="" />

      <div className= {styles.Lorem}>
        <h1>
          Healthy food Recipes
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed unde pariatur libero. Ex.
        </p>
        <button>
          Read More
        </button>

      </div>
    </div>
  )
}
export default Banner
