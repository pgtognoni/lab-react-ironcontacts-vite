import { useState, useEffect } from 'react'
import './App.css'
import contacts from './contacts.json'
import Contact from './components/Contact'

function App() {

  const data = contacts;
  const [ dataFive, setDataFive ] = useState([]);

  useEffect(() => {

    const getRandomFive = () => {
      const newArr = [];
      for (let i = 0; i < 5; i++) {
        const addContact = () => {
          const newContact = getRandom()
          const ids = newArr.map(contact => contact.id);
  
          if (!ids.includes(newContact.id)){ newArr.push(newContact) 
          } else addContact();
        }
        addContact();
      }
      setDataFive(newArr);
    }

    getRandomFive();

  }, [])


  const getRandom = () => {
    const randomContact = data[Math.floor(Math.random() * data.length)];
    return randomContact;
  }

  const addRandom = () => {

    const newContact = getRandom()
    const exist = dataFive.filter(contact => contact.id === newContact.id)
    const newArr = [...dataFive, newContact]
    
    if (exist.length === 0) {
      setDataFive(newArr)
    } else {
      addRandom()
    }
  }

  const sortByName = () => {
    const newArr = dataFive.sort((a, b) =>  a.name.localeCompare(b.name))
    setDataFive([...newArr])
  }

  const sortByPopularity = () => {
    const newArr = dataFive.sort((a, b) =>  b.popularity - a.popularity)
    setDataFive([...newArr])
  }

  const deleteContact = (id) => {
    const index = dataFive.findIndex(contact => contact.id === id);
    const newArr = [...dataFive];
    newArr.splice(index, 1);
    setDataFive(newArr);
  }
  
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandom}>Add a random contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table className="contacts-table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataFive.map(contact =>{
            return (
              <Contact contact={contact} deleteContact={deleteContact} key={contact.id}/>
            ) 
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App
