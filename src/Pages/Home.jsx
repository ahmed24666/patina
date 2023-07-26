import React, { useState } from 'react'
import Header from '../Components/Header/Header'
import ContainerCard from '../Components/ContainerCard/ContainerCard'
import images from "../Jsons/Images.json";
import styles from "../App.module.css";
import Dropdown from "../Components/Elements/Dropdown/Dropdown";
import MasonryLayout from "../Components/MasonryLayout/MasonryLayout";

const Home = () => {
  const [categoryImage, setCategoryImage] = useState(images.categories.all);

  const takeDdTitle = (ddTitle) => {
    setCategoryImage(() => {
      let categoryChoose = Object.keys(images.categories).filter((item) => {
        const titleSplited = ddTitle.toLowerCase().split(" ")[0];
        return item.toLowerCase().includes(titleSplited);
      });
      return [...images.categories[categoryChoose]];
    });
  };
    return (
        <div>
            <Header title1='Be one who change the world 😎🤘' title2='Artists make The Arts better
' title3='The Arts design the' word='world ' word2='better'/>
            <div
                className="flex justify-content-center"
                style={{ marginTop: "50px", padding: "50px" }}
            >
                <ContainerCard>
                    <div
                        className={`${styles["gallery-setting"]} flex justify-content-center align-items-center`}
                    >
                        <h1>Best Sellers</h1>
                    </div>
                    <MasonryLayout images={categoryImage} />
                </ContainerCard>
            </div>
        </div>
    )
}

export default Home