import React from 'react'
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
return (
    <div>
        <div className={styles["food-nav"]}>
            <div>
                <img className={styles["food-logo"]} src="rest-logo.png" alt=""/>
            </div>

            <div className={styles["menu"]}>
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
            </div>

            <div className={styles["menu"]}>

            <div className={styles["contact"]}>
                <FontAwesomeIcon icon={faPhone} size='1.5x'/><span>+234 814 4781 580</span>
            </div>
            <div>
                <FontAwesomeIcon icon={faFacebookF} size='1.5x'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faTwitter} size='1.5x'/>
            </div>
            </div>
        </div>
    </div>
)
}

export default Navbar
