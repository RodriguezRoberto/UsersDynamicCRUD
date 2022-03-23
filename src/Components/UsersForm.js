import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ( {
    setAddUser, 
    getUsers, 
    selectedUser, 
    setSelectedUser,
    firstName, 
    setFirstName,
    lastName, 
    setLastName,
    email, 
    setEmail,
    password, 
    setPassword,
    birthday, 
    setBirthday
} ) => {

    const { register, handleSubmit, formState: { errors } } = useForm(  );

    const onSubmit = data => {
        if ( selectedUser === null ) {
            axios
                .post( 'https://users-crud1.herokuapp.com/users/', data )
                .then( (  ) => {
                    getUsers(  )
                    setAddUser( false )
                    setSelectedUser( null )
                } )
        }
        else {
            axios
                .put( `https://users-crud1.herokuapp.com/users/${ selectedUser.id }/`, data )
                .then( (  ) => {
                    getUsers(  )
                    setAddUser( false )
                    setSelectedUser( null )
                } )
        }
    }

    const [ showPassword, setShowPassword ] = useState( false )

    return (
        <form onSubmit={ handleSubmit( onSubmit ) } id='users-form'>
            <h1>{ ( selectedUser === null ) ? 'ADDING USER' : 'UPDATING USER' }</h1>
            <div className="input-container">
                <label htmlFor="first-name">
                    <i className="fa-solid fa-user"></i>
                    &nbsp; FIRST NAME &nbsp;
                </label>
                <input
                    name='first_name'
                    {...register( 'first_name', {
                        required: true
                    } ) }
                    placeholder='user first name'
                    id='first-name' 
                    type="text" 
                    onChange={ ( e ) => { setFirstName( e.target.value ) } }
                    value={ firstName }
                />
                { errors.firstName?.type === 'required' && 
                    <>
                        <br/><p className='required'>First name is required</p>
                    </>
                }
            </div>
            <div className="input-container">
                <label htmlFor="last-name">
                    <i className="fa-solid fa-user"></i>
                    &nbsp; LAST NAME &nbsp;
                </label>
                <input
                    name='last_name'
                    {...register( 'last_name', {
                        required: true
                    } ) }
                    placeholder='user last name'
                    id='last-name' 
                    type="text" 
                    onChange={ ( e ) => { setLastName( e.target.value ) } }
                    value={ lastName }
                />
                { errors.lastName?.type === 'required' && 
                    <>
                        <br/><p className='required'>Last name is required</p>
                    </>
                }
            </div>
            <div className="input-container">
                <label htmlFor="e-mail">
                    <i className="fa-solid fa-envelope"></i>
                    &nbsp; E-MAIL &nbsp;
                </label>
                <input
                    name='email'
                    {...register( 'email', {
                        required: true,
                    } ) }
                    placeholder='user@domain.com'
                    id='e-mail' 
                    type="email"
                    onChange={ ( e ) => { setEmail( e.target.value ) } }
                    value={ email }
                />
                { errors.email?.type === 'required' && 
                    <>
                        <br/><p className='required'>E-mail is required</p>
                    </>
                }
            </div>
            <div className="input-container">
                <label htmlFor="password">
                    <i className="fa-solid fa-lock"></i>
                    &nbsp; PASSWORD &nbsp;
                </label>
                <input
                    name='password'
                    {...register( 'password', {
                        required: true,
                        minLength: 8
                    } ) }
                    placeholder='minimum 8 characters'
                    id='password' 
                    type={ ( showPassword === false ) ? 'password' : 'text' }
                    onChange={ ( e ) => { setPassword( e.target.value ) } }
                    value={ password }
                />
                <button type='button' onClick={ (  ) => { setShowPassword( !showPassword ) } }>
                    { ( showPassword === true ) ?
                    <i className="fa-solid fa-eye-low-vision"></i> :
                    <i className="fa-solid fa-eye"></i>
                    }
                </button>
                { errors.password?.type === 'required' && 
                    <>
                        <br/><p className='required'>Password is required</p>
                    </>
                }
                { errors.password?.type === 'minLength' && 
                    <>
                        <br/><p className='required'>Minimum 8 characters</p>
                    </>
                }
            </div>
            <div className="input-container">
                <label htmlFor="birthday">
                    <i className="fa-solid fa-cake-candles"></i>
                    &nbsp; BIRTHDAY &nbsp;
                </label>
                <input
                    name='birthday'
                    {...register( 'birthday', {
                        required: true
                    } ) }
                    id='birthday' 
                    type="date" 
                    onChange={ ( e ) => { setBirthday( e.target.value ) } }
                    value={ birthday }
                />
                { errors.birthday?.type === 'required' && 
                    <>
                        <br/><p className='required'>Birthday date is required</p>
                    </>
                }
            </div>
            <button type='submit' className='go'>
                <i className="fa-solid fa-user-check"></i>
                &nbsp; { ( selectedUser === null ) ? 'SUBMIT' : 'UPDATE' }
            </button>
            <button type='button'
            className='stop'
            onClick={ (  ) => {
                setAddUser( false ) 
                setSelectedUser( null )
                setFirstName( "" )
                setLastName( "" )
                setEmail( "" )
                setPassword( "" )
                setBirthday( "" )
            } }>
                <i className="fa-solid fa-x"></i>
                &nbsp; CANCEL
            </button>
        </form>
    );
};

export default UsersForm;