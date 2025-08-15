// Banner.jsx
import styles from "./App.module.css"
import { useState } from "react"
import { descriptions } from "./data.jsx"

const Banner = () => {
  const [showMore, setShowMore] = useState(false)

  const text = showMore
    ? descriptions
    : descriptions.substring(0, 91) + "..." // limit preview

  return (
    <div className={styles.banner}>
      <img src="/images/foods.jpg" alt="" />

      <div className={styles.Lorem}>
        <h1>Healthy food Recipes</h1>
        <p>{text}</p>
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  )
}

export default Banner
