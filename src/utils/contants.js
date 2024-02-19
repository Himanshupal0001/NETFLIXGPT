import { netflixAvatar } from '../../public/assets/netflixLogo'
import { PiPencilFill } from "react-icons/pi";
import { FiUserCheck, FiHelpCircle } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
export const headerMenu = [
    {
        id: 1,
        path: '/',
        name: 'Home'
    },
    {
        id: 2,
        path: '/',
        name: 'TV Shows'
    },
    {
        id: 3,
        path: '/',
        name: 'Movies'
    },
    {
        id: 4,
        path: '/',
        name: 'New & Popular'
    },
    {
        id: 5,
        path: '/',
        name: 'My Playlist'
    },
    {
        id: 6,
        path: '/',
        name: 'Browse By Language'
    },
]

export const avatarModel = [
    {
        path: '/browse',
        content: <img src={netflixAvatar} alt="profile" className='h-6 w-6' />,
        name: 'User name',
    },
    {
        path: '/',
        content: <PiPencilFill size='1.5em' />,
        name: 'Manage Profile'
    },
    {
        path: '/',
        content: <FiUserCheck size='1.5em' />,
        name: 'Transfer Profile'
    },
    {
        path: '/',
        content: <AiOutlineUser size='1.5em' />,
        name: 'Acount'
    },
    {
        path: '/',
        content: <FiHelpCircle size='1.5em' />,
        name: 'Help Center'
    },
]


export const NOW_PLAYING = 'now_playing';
export const POPULAR = 'popular';
export const TOP_RATED = 'top_rated';
export const UPCOMING = 'upcoming';

//manage profile
//transfer profile
//acount
//help center
//signout of netflix