import React, {useRef, useState} from 'react';


import Button from "./UI/Button";
import '../css/form.css'
import errorIcon from '../images/icon-error.svg'

function Form() {

//<input id="firstname" type="text" placeholder="First Name" ref={nameInputRef}/>
//<input id="lasttname" type="text" placeholder="Last Name" ref={surnameInputRef}/>
//<input id="email" type="email" placeholder="Email Address" ref={emailInputRef}/>
//<input id="password" type="password" placeholder="Password" ref={passwordInputRef}/>
//{name && <p className='form__error'>First Name cannot be empty</p>}

    const nameInputRef = useRef();
    const surnameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const [name, setName] = useState(false);
    const [surname, setSurname] = useState(false);
    const [email, setEmail] = useState(false);
    const [emailValidity, setEmailValidity] = useState(true);
    const [password, setPassword] = useState(false);

    const inputData = [
        {
            id:'firstname',
            type:'text',
            placeholder:'First Name',
            ref:nameInputRef,
            error:'First Name cannot be empty',
            validator:name
        },
        {
            id:'surname',
            type:'text',
            placeholder:'Last Name',
            ref:surnameInputRef,
            error:'Last Name cannot be empty',
            validator:surname
        },
        {
            id:'email',
            type:'email',
            placeholder:'Email Address',
            ref:emailInputRef,
            error:'Email cannot be empty',
            validator:email
        },
        {
            id:'password',
            type:'password',
            placeholder:'Password',
            ref:passwordInputRef,
            error:'Password cannot be empty',
            validator:password
        }
    ]

    const regex = /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/i;

    const SubmitHandler = (event) => {
        event.preventDefault();

        nameInputRef.current.value === '' ? setName(true) : setName(false); 
        surnameInputRef.current.value === '' ? setSurname(true) : setSurname(false);
        emailInputRef.current.value === '' ? setEmail(true) : setEmail(false);
        passwordInputRef.current.value === '' ? setPassword(true) : setPassword(false);

        regex.test(passwordInputRef.current.value) === false ? setEmailValidity(false) : setEmailValidity(true);
    }

    return ( 
        <form noValidate className="form" onSubmit={SubmitHandler}>
            {inputData.map((inputDataItem) =>
                <div key={inputDataItem.id} className='form__input-container'>
                    {inputDataItem.validator && <img className="form__error-icon" src={errorIcon} alt="error icon"/>}
                    <input 
                        className={(inputDataItem.validator && "form__error form__input") || 'form__input'} 
                        id={inputDataItem.id}
                        type={inputDataItem.type}
                        placeholder={inputDataItem.placeholder}
                        ref={inputDataItem.ref}
                    />
                    {(inputDataItem.validator && <p className='form__error-message'>{inputDataItem.error}</p>)}
                    {(inputDataItem.type === 'email' & !emailValidity & !email) ? <p className='form__error-message'>Looks like this is not an email</p> : undefined}
                </div>
            )}
            <Button className="button-margin">claim your free trial</Button>
            <p className='form__TC-message'>By clicking the button, you are agreeing to our <a href="#termsandconditions" className="form__link">Terms and Services</a></p>
        </form>
     );
}

export default Form;