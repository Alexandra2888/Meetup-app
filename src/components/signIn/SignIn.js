
import { useRef } from 'react';
import Card from '../UI/Card';
import classes from './SignIn.module.css';

const SignIn = (props) => {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const passwordInputRef = useRef();


  const submitHandler = (event) => {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const signInData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      password: enteredPassword,
    };

    props.onAddRegister(signInData);
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


export default SignIn;