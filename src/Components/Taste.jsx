import React from 'react'
import styles from "./App.module.css"
import { useState } from "react";

const Taste = () => {
  const allFoodCategories = [
    { name: "Salad", img: "salad.png" },
    { name: "Cake", img: "cake.png" },
    { name: "Burger", img: "burger.webp" },
    { name: "Ice-cream", img: "ice-cream.webp" },
    { name: "Paster", img: "paster.png" },
    { name: "Cookies", img: "cookies.png" },
    { name: "Hot Dog", img: "hotDog.webp" },
    { name: "Fish Roll", img: "fish-roll.png" },
  ];

  const [visibleCount, setVisibleCount] = useState(4);

  const handleReadMore = () => {
    setVisibleCount((prev) =>
      prev >= allFoodCategories.length ? 4 : prev + 4
    );
  };

  return (
    <div className={styles["food-taste"]}>
      <h1 className="text-2xl m-3 font-extrabold text-neutral-700">
        Taste of food
      </h1>

      <div className={styles["food-container"]}>
        {allFoodCategories.slice(0, visibleCount).map((item, index) => (
          <div key={index} className={styles["food-listed"]}>
            <img src={`/images/${item.img}`} alt={item.name} />
            <div className={styles["food-content"]}>
              <h3>{item.name}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < allFoodCategories.length && (
        <button
          onClick={handleReadMore}
          className={styles.readMore}
        >
          Read More
        </button>
      )}
    </div>
  );
};

export default Taste;

