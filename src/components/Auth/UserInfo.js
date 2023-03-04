
import {useAuth} from './AuthProvider'

function UserInfo()
{
    const user = useAuth()
    return(
        <b>{user.currentUser?user.currentUser:null}</b>
    )
}

export default UserInfo