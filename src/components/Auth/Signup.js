import {useAuth} from './AuthProvider'
import {useRef} from 'react'

function Signup()
{
    const authContext = useAuth();
    const userRef = useRef();
    const pwdRef = useRef();

    function onAttemptSignup(e)
    {
        e.preventDefault();
        if (userRef.current.value==="")
            {alert('Please enter your email')}
        else if (pwdRef.current.value==="")
            {alert('Please enter your password')}
        else
            {authContext.signup(userRef.current.value,pwdRef.current.value)}
    }

    return(
        <>
        <div className="signupform">
            <form>
                <table className="formtable" style={{border:0}}>
                <thead></thead>
                <tbody>
                <tr>
                <td id="loginmail">Email: </td>
                <td><input type="email" placeholder="xxx@email.com" ref={userRef} required maxLength="30"></input></td>
                </tr>
                <tr>
                <td id="loginpass">Password: </td>
                <td><input type="text" ref={pwdRef} required maxLength="30"></input></td>
                </tr>
                <tr>
                <td colSpan="2" id="tablebutton"><button id="logsignbutton" onClick={onAttemptSignup}>Sign up</button></td>
                </tr>
                </tbody>
                </table>
            </form>
            
        </div>
        <footer><p>N.S. Water Safe Ltd. 2023</p></footer>
        </>
    )
}

export default Signup