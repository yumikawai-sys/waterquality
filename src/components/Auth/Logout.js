import {useAuth} from './AuthProvider'

function Logout()
{
    const loginInfo = useAuth()
    loginInfo.signout();
    return(
        <>
        <div className="logoutform">
            <b>You have been logged out. Come back soon!</b>
        </div>
        <footer><p>N.S. Water Safe Ltd. 2023</p></footer>
        </>
    )
}

export default Logout