import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import UsersForm from './Components/UsersForm';
import UsersList from './Components/UsersList';

function App() {

  const [ users, setUsers ] = useState( [  ] )
  const [ addUser, setAddUser ] = useState( false )
  const [ selectedUser, setSelectedUser ] = useState( null )
  const [ firstName, setFirstName ] = useState( "" )
  const [ lastName, setLastName ] = useState( "" )
  const [ email, setEmail ] = useState( "" )
  const [ password, setPassword ] = useState( "" )
  const [ birthday, setBirthday ] = useState( "" )

  const getUsers = (  ) => {
    axios
      .get( 'https://users-crud1.herokuapp.com/users/' )
      .then( ( res ) => { setUsers( res.data ) } )
  }

  useEffect( (  ) => {
    getUsers(  )
  }, [  ] )

  return (
    <div className="App">
      <button id='add-user' onClick={ (  ) => { setAddUser( true ) } }> 
          <><i className="fa-solid fa-user-plus"></i>
          &nbsp; ADD USER </>
      </button>
      { ( addUser === true ) && <UsersForm 
                                  setAddUser={ setAddUser } 
                                  getUsers={ getUsers }
                                  selectedUser={ selectedUser }
                                  setSelectedUser={ setSelectedUser }
                                  firstName={ firstName }
                                  setFirstName={ setFirstName }
                                  lastName={ lastName }
                                  setLastName={ setLastName }
                                  email={ email }
                                  setEmail={ setEmail }
                                  password={ password }
                                  setPassword={ setPassword }
                                  birthday={ birthday }
                                  setBirthday={ setBirthday }
                                /> }
      < UsersList
        getUsers={ getUsers } 
        users={ users } 
        setAddUser={ setAddUser }
        setSelectedUser={ setSelectedUser }
        setFirstName={ setFirstName }
        setLastName={ setLastName }
        setEmail={ setEmail }
        setPassword={ setPassword }
        setBirthday={ setBirthday }
      />
      <footer id="footer">
        <p>CRUD creation and API consumption example</p>
        <p>Endpoint: https://users-crud1.herokuapp.com/users/</p>
        <p>Contact:</p>
        <p>robertorodriguez@academlo.com</p>
        <p>Copyright © 2022: Roberto Rodríguez, México 55070</p>
        <p>Hecho con ❤ en Academlo.</p>
        </footer>
    </div>
  );
}

export default App;