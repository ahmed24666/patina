import { useState } from "react"

// import styles of this component
import styles from "./Dropdown.module.css"

// import other react pkg to use
import { ArrowUp3 } from "iconsax-react"
import { PropTypes } from 'prop-types';

// import other component to use
import Button from "../Button/Button"
import images from "../../../Jsons/Images.json";

// Dropdown Component
const Dropdown = ({ items, title, liftingDdTextUp }) => {

  return (
    <div className={styles["dropdown"]}>
      <Button theme="transparent" className="flex align-items-center">
        All Items
        <span className={styles["dropdown-arrow-icon"]}>
          <ArrowUp3 color="var(--gold)" />
        </span>
      </Button>
      <ul className={styles["dropdown-menu"]}>
        {images.categories.cat.map(item => (
          <li 
            className={`${styles["dropdown-item-menu"]} ${item.active && styles.active}`}>
              { item.categories }
          </li>
        ))}
      </ul>
    </div>
  )
}

// validate dropdown component props
Dropdown.propTypes  = {
  items: PropTypes.array,
  title: PropTypes.string,
  liftingDdTextUp: PropTypes.func
}

export default Dropdown