import { useState, useEffect } from 'react';
import { GET } from '../assets/confAxios';
import StarList from './StarList';
import './Stars.css';
import Star from './Star';

const Stars = () => {
    const [error, setError] = useState(null);
    const [stars, setStars] = useState([]);

    const [isShow, setIsShow] = useState(true);
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

    const handleToggleButton = async (id) => {
        console.log(id);
        setIsShow(prevState => !prevState); // pareil que setIsShow(!isShow) - 
        console.log(isShow);
        if (isShow) {
            //setStar(id);
            try { 
                const response =  await GET('/star/' + id);
                const data = response.data;
                setStar(data);
                console.log('Chargement de la Star réussie !');
                console.log(star);
            } catch (e) {
                setError(e); 
            }
        } else {
            setStar(null);
        }
    }

    /*
    const handlerCreateStar = async (formData) => {
        try {
            await POST( '/api/post', formData)
            const response = await GET('/api/post');
            const data = response.data;
            setPosts(data);
            console.log('Post bien créé !');
            
        } catch (e) {
            setError(e.response.data.error);
        }
	};

    const handlerDeleteStarButton = async (id) => {
        try {
            await DELETE( '/api/post/' + id);
            setPosts(posts.filter( actualPost => actualPost.id !== id ));
        } catch (e) {
            setError(e.response.data.error);
        }
    }
    */

    return (
        <>
        <div>
            {error && <div>{error}</div>}
            
        </div>
        <div className='Destop'>
            <ul>
                {stars.map(star => {
                    return <StarList star={star} key={star.id} onClick={handleToggleButton} />;
                })}
            </ul>
            {star != null && <div> <Star star={star} /></div>}
        </div>
        </>
    )
}

export default Stars;
//<CreateStar onAddStarHandler={handlerCreateStar}/>