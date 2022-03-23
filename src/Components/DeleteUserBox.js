import React from 'react';
import axios from 'axios';

const DeleteUserBox = ( {
    setDeleteUser,
    deleteUser,
    getUsers
} ) => {

    const confirmDelete = (  ) => {
        axios
            .delete( `https://users-crud1.herokuapp.com/users/${ deleteUser.id }/` )
            .then( (  ) => {
                getUsers(  )
                setDeleteUser( null )
            } )
    }

    return (
        <div id='delete-user-box'>
            <div className='warning'>
                <h4>ARE YOU SURE YOU WANT TO DELETE THIS USER?</h4>
            </div>
            <div className='delete-buttons'>
                <button
                    className='go'
                    onClick={ confirmDelete }
                >
                    YES
                </button>
                <button
                    className='stop'
                    onClick={ (  ) => {
                        setDeleteUser( null )
                    } }
                >
                    CANCEL
                </button>
            </div>
        </div>
    );
};

export default DeleteUserBox;