import React from 'react';
import styles from "./App.module.css";


const Cards = ({children}) => {
  return (
    <div className={styles.recipe}>
      {children}
    </div>
  )
}
export default Cards;
