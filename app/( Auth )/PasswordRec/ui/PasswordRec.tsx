import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePassrecoverMutation } from '../model/passRecApi';

const PasswordRec = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [passrecover] = usePassrecoverMutation()

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        try {
            const userData = await passrecover(inputValue)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
        <div className='Background'
            onClick={()=>navigate('/')}
        />
        <div className="Sign">
            <h1>Восстановление пароля</h1>
            <h2>Введите email, который вы использовали при регистрации.</h2>
            <form name='password recover' onSubmit={handleSubmit}>
                <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} autoComplete='on' name='email' className='greyInput' placeholder='Введите e-mail ' type="text" />
                <button className='emptyBlackButton'>Восстановить</button>
            </form>

            <div style={{justifyContent: "space-evenly", marginTop: '80px'}}>
                <a onClick={()=>navigate('/signin')}>Войти</a>
                <a onClick={()=>navigate('/signup')}>Зарегистрироваться</a>
            </div>
        </div>
        </>
    );
};

export default PasswordRec;