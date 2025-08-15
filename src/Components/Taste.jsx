import { useState } from 'react';
import styles from "./App.module.css";

const Taste = () => {
  const foodCategories = [
    { name: 'Salad', img: 'salad.png', description: 'Fresh and healthy salad recipes' },
    { name: 'Cake', img: 'cake.png', description: 'Delicious cake recipes for all occasions' },
    { name: 'Burger', img: 'burger.webp', description: 'Juicy burger recipes you can make at home' },
    { name: 'Ice-cream', img: 'ice-cream.webp', description: 'Creamy ice-cream recipes to beat the heat' },
    { name: 'Pasta', img: 'pasta.png', description: 'Tasty pasta recipes for pasta lovers' },
    { name: 'Cookies', img: 'cookies.png', description: 'Homemade cookies recipes for everyone' },
    { name: 'Hot Dog', img: 'hotDog.webp', description: 'Delicious hot dog recipes for BBQ lovers' },
    { name: 'Fish Roll', img: 'fish-roll.png', description: 'Crispy fish roll recipes for seafood lovers' },
  ];

  const [showAll, setShowAll] = useState(false);
  const displayedFoods = showAll ? foodCategories : foodCategories.slice(0, 4);

  return (
    <div className={styles['food-taste']}>
      <h1 className='text-2xl m-3 font-extrabold text-neutral-700'>
        Taste of food
      </h1>
      <div className={styles['food-container']}>
        {displayedFoods.map((item, index) => (
          <div key={index} className={styles['food-listed']}>
            <img src={`/images/${item.img}`} alt={item.name} />
            <div className={styles['food-content']}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Show Less' : 'Read More'}
      </button>
    </div>
  );
};

export default Taste;
