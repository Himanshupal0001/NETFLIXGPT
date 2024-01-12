import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom'
function useAuth() {
    const [curPath, setCurPath] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMouseHovering, setIsMouseHovering] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useSelector(store => store.auth);

    useEffect(() => {
        if (location) {
            setCurPath(location.pathname);
        }
        if (Object.keys(user).length > 0 && user.uid.length > 0) {
            setIsLoggedIn(true)
        }
        else {
            setIsLoggedIn(false)
        }

        if (isLoggedIn === true && curPath === '/') {
            navigate('/browse');

        }
    }, [user, location, isLoggedIn]);

    // const handleAvatarModel = () => {
    //     setIsMouseHovering(!isMouseHovering)
    // }

    const handleMouseEnter = () => {
        setIsMouseHovering(true);
        console.log('mouseEnters')
    }

    const handleMouseLeave = () => {
        setIsMouseHovering(false);
        console.log('mouse out')
    }

    return {
        curPath,
        isLoggedIn,
        isMouseHovering,
        user,
        handleMouseEnter,
        handleMouseLeave,
    };

}

export default useAuth;