import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './CardContainer.css';
//COMPONENTS
import CardUser from '../CardUser/CardUser';

const CardExampleCard = () => {
    const [users, setUsers] = useState([]);
    // console.log('USERSSSSSSS', users);
    useEffect(() => {
        axios.get('https://api.github.com/users').then((res) => setUsers(res.data));
    }, [])

    return(
        <div className='cardContainer'>
            <h1>CardContainer</h1>
            <CardUser users={users} />
        </div>
    );
}

export default CardExampleCard