import React,{useState} from 'react';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
import Button from './Button';
function AddUser(props) {
  const[enteredUsername,setEnteredUsername] = useState('')
  const[enteredAge,setEnteredAge] = useState('')
  const[error,setError] = useState('')
    const addUserHandler = (event) =>{
        event.preventDefault();
        if(enteredAge.trim().length === 0 || enteredUsername.trim().length === 0){
          setError({
            title:"Invalid username, this field should not be blank",
            message:"This field should not be blank"
          })
          return;
        }
        if(+enteredAge < 1){
          setError({
            title:"Invalid age",
            message:"Age should be greater than 0"
          })
          return;
        }
        props.onAddUser(enteredUsername,enteredAge)
        setEnteredAge('')
        setEnteredUsername('')
    }
    const changeUsernameHandler = (event) =>{
      setEnteredUsername(event.target.value)
    }
    const changeAgeHandler = (event) =>{
      setEnteredAge(event.target.value)
    }
    const setErrorHandler = () =>{
      setError(null);
    }
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={setErrorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id= 'username' type='text' value={enteredUsername} onChange={changeUsernameHandler} />
        <label htmlFor='age'>Age(Years)</label>
        <input id= 'age' type='number' value={enteredAge} onChange={changeAgeHandler} />
        <Button type='submit'>Add user</Button>
    </form>
      </Card>
    </div>
    
    
  )
}

export default AddUser