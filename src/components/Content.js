import React, {useContext} from "react";
import ContentContext from "../context/ContentContext";

import styles from "../styles.module.css";
function Content() {
    const {weatherInfo, days} = useContext(ContentContext)
    return (
        <div className={styles.main}>
            {console.log(weatherInfo)}
            {weatherInfo.map((i, index) => (<div className={styles.day} key={index}>
            <div>{days[new Date(i.weatherday).getDay()]}</div>
            <img src={i.icon} alt={i.weatherType}></img>
            <div> {i.min}F / {i.max}F </div> 
            </div>))}
        </div>
    )
}
export default Content;