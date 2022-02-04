import StarMobile from './StarMobile';
import {useState} from 'react';
import './StarList.css';
import Button from './Button';

const StarList = (props) => {
    const { star, onClick } = props;
    const [cardShow, setCardShow] = useState(null);
    
    const handleButton = (StarId) => {
        onClick(StarId); 
        setCardShow(prevState => !prevState);
    }

    return (
        <>
            <li className={cardShow && "active-li"}>
                <Button text={star.surname} textBis={star.name} className={cardShow && "active-liste"}  onClick={() => handleButton(star.id)}/>
            </li>
            {cardShow && <StarMobile star={star} /> }
        </>
    )}


export default StarList;
