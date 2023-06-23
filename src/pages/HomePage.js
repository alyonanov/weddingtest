import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from 'C:/Users/Аленка/wedding/src/components/Header.js';
import UserData from 'C:/Users/Аленка/wedding/src/components/UserData.js';


const HomePage =() => {
  //const DataLoading = UserData;
  const [inputValue, setInputValue] = useState('');
  const [toDoList, setToDoList] = useState([]);
  const [checked, setChecked] = useState([]);
  const [appState, setAppState] = useState([]);
  const location = useLocation();
  const onSubmit = () => {
    const newArray = [...toDoList]
    newArray.unshift(inputValue)
    setToDoList(newArray)
    setInputValue('')
  };
  
  useEffect (() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`) .then(res => {
            const allPersons = res.data;
            setAppState(allPersons);
            console.log(location);
          });
        }, []);

  const onDeleteRow = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => {
      console.log(res)
    });
  }

  const onDelete =(index) => {
    setToDoList([...toDoList.slice(0, index), ...toDoList.slice(index + 1)]);
  }
  const onCheckBox = (event, index) => {
    const updatedList = [...toDoList];
    const updatedChecked = [...checked]; 
    if (event.target.checked) {
      const item = updatedList.splice(index, 1)[0];
      updatedList.push(item);
      updatedChecked.push(item); 
    } else {
      updatedChecked.splice(updatedChecked.indexOf(updatedList[index]), 1); 
    }
    setToDoList(updatedList);
    setChecked(updatedChecked);
  };
 
  const isChecked = (element) =>
   checked.includes(element) ? "checked-item" : "not-checked-item";

   return(
    <div>
        <Header/>
        <div className='inputContainer'>
        <input className='inputBlock' value={inputValue} onChange={(event) =>
        {setInputValue(event.target.value)}
        }/>
        <button className='btnSubmit' onClick={onSubmit}>
          +
        </button>
        </div>
        {toDoList.map((element, index) =>
        (<div className='containerToDoList' key={index}>
          <div className='todolist'>
              <input
                value={element}
                type="checkbox"
                onChange={(event) => onCheckBox(event, index)}
              />
              <span className={isChecked(element)}>{element}</span>
              <button className='button-add' onClick={() => onDelete(index)}><img src={'/delete.png'}/> </button>
          </div>
        </div>)
        )}
        <div>
        <UserData persons={appState} onDeleteRow={onDeleteRow}/>
        </div>
    </div>
)
}
export default HomePage;
