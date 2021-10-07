import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GoogleSignIn } from '../../Firebase/Login&SignUp/LoginAndSignUp';

const Home = () => {
    // const [user, setUser] = useState({});
    // const [error, setError] = useState();
    const handleGoogleSignIn = () => {
        const user = GoogleSignIn();
        console.log(user)
        // console.log(fault);
    }
    // console.log(user);
    // console.log(error);
    return (
        <div>
            <h1>Welcome</h1>
            <Link to='/Login'><Button className='mx-3' variant="outline-primary"><i className="fas fa-sign-in-alt"></i> Login</Button></Link>
            <Link to='/SignUp'><Button className='mx-3' variant="outline-primary"><i className="fas fa-user-plus"></i> Sign Up</Button></Link>
            <Button onClick={handleGoogleSignIn}>Google Sign In</Button>
        </div>
    );
};

export default Home;