import StarMobile from './StarMobile';
import {useState} from 'react';
import './StarList.css';

const StarList = (props) => {
    const { star, onClick } = props;
    const [cardShow, setCardShow] = useState(false);

    //const ctx = useContext(AuthContext);
    
    /*const handleDelete = (idComment) => {
        onClick(idComment);     
    }*/

    //const [isShow, setIsShow] = useState(true);
    
    const handleToggleButton = (StarId) => {
        onClick(StarId); 
        setCardShow(prevState => !prevState); 
        console.warn(cardShow);
    }

    return (
        <>
            <li>
                {cardShow ? <button onClick={() => handleToggleButton(star.id)} className="active-liste" >{star.surname} {star.name}</button> : <button onClick={() => handleToggleButton(star.id)} >{star.surname} {star.name}</button>} 
            </li>
            {cardShow && <StarMobile star={star} /> }
        </>
    )}


export default StarList;

/*
 <div>
    {isShow && <Star star={star}/>}
</div>
*/

// {((ctx.user && ctx.user.isAdmin) || (ctx.user && ctx.user.id === props.userId)) && <Button text='Supprimer' onClick={() => handleDelete(props.id)} />}