import {useContext} from "react";
import ContentContext from "../context/ContentContext";

function Dropbox() {
    const {setCity, cities } = useContext(ContentContext)

    return (
        <div>
            
            <select type="dropbox" style={{ marginLeft:"5rem",width:"200px"}} onChange={((e) => setCity(e.target.value))} >
                {cities.map((item, index) => 
                <option key={index} value={item}>{item}</option>
                                )}
            </select>
            
        </div>
    )
}
export default Dropbox;