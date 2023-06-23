import './UserData.css';
import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const UserData = (props) =>{
    const { persons } = props;
    const navigate = useNavigate();

    if (!persons || persons.length === 0) return <p className='userDataText'>Нет данных.</p>

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>website</th>
                    </tr>
                </thead>
                <tbody>
                    {
                            persons.map((person) =>
                            <tr key={person.id} onClick={() => navigate(`profile/${person.id}`)}>
                                <td>{person.name}</td>
                                <td>{person.username}</td>
                                <td>{person.email}</td>
                                <td>{person.phone}</td>
                                <td>{person.website}</td>
                                <button onClick={() => props.onDeleteRow(person.id)}>x</button>
                            </tr>
                        )
                        
                    }
                    
                </tbody>
            </table>
      </div>
    )
}

export default UserData