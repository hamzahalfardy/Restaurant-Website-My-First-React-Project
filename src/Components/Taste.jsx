import React from 'react'
import styles from "./App.module.css"

const Taste = () => {
  const foodCategories = [
    { name: 'Salad', img: 'salad.png' },
    { name: 'Cake', img: 'cake.png' },
    { name: 'Burger', img: 'burger.webp' },
    { name: 'Ice-cream', img: 'ice-cream.webp' },
    { name: 'Paster', img: 'paster.png' },
    { name: 'Cookies', img: 'cookies.png' },
    { name: 'Hot Dog', img: 'hotDog.webp' },
    { name: 'Fish Roll', img: 'fish-roll.png' },
  ];

  return (
    <div className={styles['food-taste']}>
      <h1>
        Taste of food
      </h1>
      <div className={styles['food-container']}>
        {foodCategories.map((item, index) => (
          <div key={index} className={styles['food-listed']}>
            <img src={`/images/${item.img}`} alt={item.name} />
            <div className={styles['food-content']}>
              <h3>{item.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        ))}
      </div>
      <button>
        Read More
      </button>
    </div>
  );

}

export default Taste
