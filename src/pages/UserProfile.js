import Header from 'C:/Users/Аленка/wedding/src/components/Header.js';
import UserData from 'C:/Users/Аленка/wedding/src/components/UserData.js';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserProfile =() =>{
    const [appState, setAppState] = useState([]);
    const [person, setPerson] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect (() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`) .then(res => {
            const personData = res.data;
            console.log(res.data)
            setPerson(personData);
          });
        }, []);
    return(
        <div>
            <div className='headerProfile'>
            <Header/>
            
            </div>
            <div className='userInfo'>
                <p>Имя: {person?.name}</p>
                <p>Ник: {person?.username}</p>
                <p>Эл.почта: {person?.email}</p>
                <p>Телефон: {person?.phone}</p>
                <p>Сайт: {person?.website}</p>
            </div>
            {/* <div>
                <UserData persons={appState}/>
            </div> */}
            
        </div>

    )
};

export default UserProfile;
