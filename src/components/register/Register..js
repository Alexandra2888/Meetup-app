
import { useRef } from 'react';
import Card from '../UI/Card';
import classes from './Register.module.css';

const Register = (props) => {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();


  const submitHandler = (event) => {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const registerData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      password: enteredPassword,
    };

    props.onAddRegister(registerData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='first-name'>First Name</label>
          <input type='text' required id='first-name' ref={firstNameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='last-name'>Last Name</label>
          <input type='text' required id='last-name' ref={lastNameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input type='email' required id='email' ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <div className={classes.control}>
          <label htmlFor='password'>Password</label>
          <input type='password' required id='email' ref={passwordInputRef} />
        </div >
        <div className={classes.actions}>
          <button>Sign in</button>
        </div>
    </div>
      </form>
    </Card>
  );
}


export default Register;