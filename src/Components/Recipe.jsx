import { useState } from 'react';
import styles from "./App.module.css";
import Cards from './Cards';
import { images } from './data.jsx'; 

const Recipe = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleReadMore = () => {
    setVisibleCount(prev =>
      prev >= images.length ? 4 : prev + 4
    );
  };

  return (
    <div className={styles.center}>
      <h1 className="text-2xl m-3 font-extrabold text-neutral-700">Recipes</h1>

      <Cards>
        {images.slice(0, visibleCount).map((image) => (
          <div key={image.id}>
            <img src={image.img} alt="African Foods" />
          </div>
        ))}
      </Cards>

      {images.length > 4 && (
        <button
          className={styles.readMore}
          onClick={handleReadMore}
        >
          {visibleCount >= images.length ? "Show Less" : "View More"}
        </button>
      )}
    </div>
  );
};

export default Recipe;
