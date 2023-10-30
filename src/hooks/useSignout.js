import { useDispatch } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase';
import { removeUser } from '../redux/authSlice'
import { useNavigate } from 'react-router-dom';

const useSignout = () => {
    const disptach = useDispatch();
    const navigate = useNavigate();

    const handleSignout = (token) => {
        if (token) {
            signOut(auth)
                .then(() => {
                    disptach(removeUser());
                    navigate('/')
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    return handleSignout;
}

export default useSignout;