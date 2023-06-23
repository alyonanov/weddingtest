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
    const [showField, setShowField] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const onShowField = () => {
        setShowField(!showField)
    }

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
            <button onClick={onShowField}>
                {showField ? 'Дополнительная информация':'Основная информация'}
            </button>
            </div>
            <div className='userInfo'>
            {showField ? (
                <div className='userInfo'>
                <p>Имя: {person?.name}</p>
                <p>Ник: {person?.username}</p>
                </div>
            ) : (
                <div className='userInfo' >
                <p>Эл.почта: {person?.email}</p>
                <p>Телефон: {person?.phone}</p>
                <p>Сайт: {person?.website}</p>
                </div>
            )}
                
                
            </div>
            
        </div>

    )
};

export default UserProfile;
