import Card from '../UI/Card';
import classes from './NewMeetupForm.module.css';
import { useRef } from 'react';


const NewMeetupForm = () => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const adressInputRef = useRef();
    const descriptionInputRef = useRef();


    const submitHandler = (event) => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current;
        const enteredImage = imageInputRef.current;
        const enteredAdress = adressInputRef.current;
        const enteredDescription = descriptionInputRef.current;
    };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea id='description' required rows='5'></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;