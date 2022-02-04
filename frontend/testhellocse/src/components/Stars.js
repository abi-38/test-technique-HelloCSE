import { useState, useEffect } from 'react';
import { GET } from '../assets/confAxios';
import StarList from './StarList';
import './Stars.css';
import Star from './Star';

const Stars = () => {
    const [error, setError] = useState(null);
    const [stars, setStars] = useState([]);
    const [star, setStar] = useState(null);

    useEffect(() => {
        const loadStars = async () => {
            try { 
                const response =  await GET('/star/');
                const data = response.data;
                setStars(data);
                console.log('Chargement des Stars réussis !');
                console.log(stars);
            } catch (e) {
                setError(e.response.data.error); 
            }
            
        }
        loadStars();
    }, [])

    const handleButton = async (id) => {
        try { 
            const response =  await GET('/star/' + id);
            const data = response.data;
            setStar(data);
            console.log('Chargement de la Star réussie !');
        } catch (e) {
            setError(e); 
        }
    }

    return (
        <>
        <div>{error && <div>{error}</div>}
        </div>
        <div className='Destop'>
            <ul>
                {stars.map(star => {
                    return <StarList star={star} key={star.id} onClick={handleButton} />;
                })}
            </ul>
            {star != null && <div> <Star star={star} /></div>}
        </div>
        </>
    )
}

export default Stars;
