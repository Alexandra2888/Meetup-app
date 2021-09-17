import SignIn from "../signIn/SignIn";
import Register from "../register/Register.";
import Card from "../UI/Card";

const SignInAndSignUp = () => (
    <Card>
  <div className='sign-in-and-sign-up'>
      <SignIn />
      <Register />
        </div>
        </Card>
);

export default SignInAndSignUp;