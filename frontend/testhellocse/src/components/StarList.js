import StarMobile from './StarMobile';
import {useState} from 'react';
import './StarList.css';

const StarList = (props) => {
    const { star, onClick } = props;
    const [cardShow, setCardShow] = useState(null);
    
    const handleButton = (StarId) => {
        onClick(StarId); 
        setCardShow(prevState => !prevState);
    }

    return (
        <>
            <li>
                {cardShow ? <button onClick={() => handleButton(star.id)} className="active-liste" >{star.surname} {star.name}</button> : <button onClick={() => handleButton(star.id)} >{star.surname} {star.name}</button>} 
            </li>
            {cardShow && <StarMobile star={star} /> }
        </>
    )}


export default StarList;