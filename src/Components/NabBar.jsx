import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentDots,
  faKitchenSet,
  faPhone,
  faBookOpenReader,
  faFaceGrinTongue,
} from '@fortawesome/free-solid-svg-icons';
import {
  faBlogger,
  faFacebookF,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import styles from "./App.module.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div >
      <div className={styles["food-nav"]}>
        <div>
          <img className={styles["food-logo"]} src="rest-logo.png" alt=""/>
        </div>


      {/* Menu - Shows under hamburger on small screens */}
      <div className={`${styles.menu} ${isOpen ? styles["show-menu"] : ""} md:text-white` }>
        <div>
          <FontAwesomeIcon icon={faKitchenSet} size='1.5x'/>
          <p>Kitchen</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faFaceGrinTongue} size='1.5x' />
          <p>Taste</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faBookOpenReader} size='1.5x' />
          <p>Recipes</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faBlogger} size='1.5x'/>
          <p>Blog</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faCommentDots} size='1.5x'/>
          <p>Contact</p>
        </div>

                {/* Contact + Social Icons */}
      <div className='flex-col space-y-2 items-center md:hidden'>

        <div className={`${styles.contact} md:mt-0`}>
          <FontAwesomeIcon icon={faPhone} size='1.5x' /><span className='hidden'>+234 814 4781 580</span>
        </div>

        <div>
          <FontAwesomeIcon icon={faFacebookF} size='1.5x' className='text-white cursor-pointer md:text-stone-500'/>
        </div>

        <div>
          <FontAwesomeIcon icon={faTwitter} size='1.5x' className='text-white
          cursor-pointer md:text-stone-500'/>
        </div>

      </div>


      </div>

        {/* Contact + Social Icons */}
      <div className='hidden space-x-3 items-center md:flex'>

        <div className={styles["contact"] }>
          <FontAwesomeIcon icon={faPhone} size='1.5x' /><span>+234 814 4781 580</span>
        </div>

        <div>
          <FontAwesomeIcon icon={faFacebookF} size='1.5x' className='text-stone-500 cursor-pointer'/>
        </div>

        <div>
          <FontAwesomeIcon icon={faTwitter} size='1.5x' className='text-stone-500
          cursor-pointer'/>
        </div>

      </div>



        {/* Hamburger */}
        <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <span className='text-3xl mb-6'>☰</span>
        </div>
      </div>

    </div>
  )
}

export default Navbar;
