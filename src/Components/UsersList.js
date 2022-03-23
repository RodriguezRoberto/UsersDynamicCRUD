import React, { useState } from 'react';
import DeleteUserBox from './DeleteUserBox';

const UsersList = ( {
    getUsers,
    users, 
    setAddUser, 
    setSelectedUser,
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    setBirthday
} ) => {

    const [ deleteUser, setDeleteUser ] = useState( null )

    return (
        <ul className='users-list'>
            { users.map( ( user ) => (
                <li className='user-card' key={ user.id }>
                    <div className='info-wrapper'>
                        <h2><i className="fa-solid fa-user"></i> { user.first_name.toUpperCase(  ) } { user.last_name.toUpperCase(  ) }</h2>
                        <p><i className="fa-solid fa-envelope"></i> { user.email }</p>
                        <p><i className="fa-solid fa-cake-candles"></i> { user.birthday }</p>
                    </div>
                    <div className='buttons-wrapper'>
                        <button
                            className='go'
                            type='button'
                            onClick={ (  ) => {
                                setSelectedUser( user )
                                setAddUser( true )
                                setFirstName( user.first_name )
                                setLastName( user.last_name )
                                setEmail( user.email )
                                setPassword( user.password )
                                setBirthday( user.birthday )
                            } }
                        >
                            <i className="fa-solid fa-user-pen"></i>
                        </button>
                        <button
                            className='stop'
                            type='button'
                            onClick={ (  ) => {
                                setDeleteUser( user )
                            } }
                        >
                            <i className="fa-solid fa-trash-can"></i>
                        </button>
                        { deleteUser===user && <DeleteUserBox 
                                                setDeleteUser={ setDeleteUser }
                                                deleteUser={ deleteUser }
                                                getUsers={ getUsers }
                                            /> }
                    </div>
                </li>
            ) ) }
        </ul>
    );
};

export default UsersList;