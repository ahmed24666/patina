// import styles of this component
import styles from "./Header.module.css"

// import other components
import ContainerCard from '../ContainerCard/ContainerCard';
import Nav from "../Nav/Nav"
import BrickLayout from "../BrickLayout/BrickLayout";
import HeaderBoxes from "./HeaderBoxes/HeaderBoxes";

// import something from react packages
import { SearchNormal1 } from "iconsax-react";
import { Setting4 } from "iconsax-react";

// import jsons
import JsonHeader from '../../Jsons/HeaderBoxes.json';

// Header component
const Header = ({title1,title2,title3,title4,word,word2}) => {
  return (
    <header className={`${styles.header} flex justify-content-center`}>
        <ContainerCard className="flex flex-column">
          <div className={styles["blur-circle-shape"]}></div>

          <BrickLayout />
          
          <div className={`${styles["headings-header"]} flex justify-content-center flex-column `}>
            {title1&&<h2 className={styles["heading-header-title"]}>{title1}</h2>}
            <h1 className={styles["heading-header-second-title"]}>
              {title2&&title2} <br />
              {title3&&title3} <span>{word&&word}</span> {word2&&word2}
            </h1>
            {title4&&<h2 className={styles["heading-header-title"]} style={{marginTop:'25px'}}>{title4}</h2>}

            {/* <div className={`${styles["search-bar"]} flex align-items-center`}>
              <SearchNormal1 size="30" color="var(--dark-100)"/>
              <input type="text" className={styles["search-input"]} placeholder="Search who can change the world" />
              
            </div> */}

            {/* <HeaderBoxes titles_numbers={JsonHeader.informations} /> */}
          </div>
        </ContainerCard>
    </header>
  )
}

export default Header