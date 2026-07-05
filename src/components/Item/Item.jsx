import Text from "../Text/Text"
import { IoTimeOutline } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";
import { PiBowlFood } from "react-icons/pi";
import { PiHardHatLight } from "react-icons/pi";

function Item({name, time, servings, calories, difficulty, image}) {
    return (
        <li>
            <h1>Name: {name}</h1>
            <Text text={time} icon={<IoTimeOutline />}/>
            <Text text={servings} icon={<MdMiscellaneousServices />}/>
            <Text text={calories} icon={<PiBowlFood />}/>
            <Text text={difficulty} icon={<PiHardHatLight />}/>
            <img src={image} alt="image" width="300px"/>
        </li>
    )
}

export default Item