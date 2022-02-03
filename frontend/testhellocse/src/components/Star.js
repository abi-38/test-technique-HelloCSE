import DayJS from 'react-dayjs';
import './Star.css';

const Star = (props) => {
    const { star } = props;
    console.log(star.name);

    return (
    <div className='Margin'>
        <div>
            <p>{star.surname} {star.name}</p>
        </div>
        
        <div>
            <div>
                <img className='PhotoDescription' src={star.imageUrl} alt='photoPost' />
            </div>
            <p className='Paragraphe'>
                {star.description}
            </p>
        </div>
    </div>)
}

export default Star;

/*
<div>                    
    <p>Publié le : </p><DayJS format="DD-MM-YYYY" date={star.createdAt}/>
</div>
*/