import React, { useEffect, useState } from 'react'
import { app, auth } from '../utils/firebase'
import { getFirestore, doc, getDoc, collection, getDocs, collectionGroup } from 'firebase/firestore'
import { useSelector } from 'react-redux';
import Header from '../components/Header'
import { TMBD_URL, REACT_APP_API_OPTIONS } from '../utils/utils';
import dotenv from 'dotenv'
dotenv.config();
function Browsr() {

    // const uid = useSelector(store => store.auth.user.uid);
    // const db = getFirestore(app);
    // const [payment, setPayment] = useState(null);
    // const [user, setUser] = useState(null);
    // const docRef = doc(db, 'customers', uid);
    // const paymentRef = collection(docRef, 'payments');
    // async function getUser() {

    //     try {
    //         const document = await getDoc(docRef);
    //         if (document) {
    //             setUser(document.data());
    //         } else {
    //             console.log('Document not found');
    //         }
    //     } catch (error) {
    //         console.error('Error fetching document:', error);
    //     }

    // }

    // async function fetchPayment() {
    //     try {
    //         const paymentSnapshot = await getDocs(paymentRef);
    //         const payments = paymentSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //         setPayment(payments);
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    // }

    // useEffect(() => {
    //     getUser();
    // }, [uid])
    // useEffect(() => {
    //     fetchPayment();
    // }, [uid])

    // console.log(payment[0]?.status);
    // console.log(user);

    // const getNowPlayingMovies = () => {
    //     const fetchData = fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', process.env.REACT_APP_API_OPTIONS)
    //         .then(response => response.json())
    //         .then(response => console.log(response))
    //         .catch(err => console.error(err));

    //     return fetchData;
    // }
    //console.log(process.env.REACT_APP_TMBD_READ_ACCESS_TOKEN)

    const getNowPlayingMovies = async () => {
        const data = await fetch(TMBD_URL, REACT_APP_API_OPTIONS);
        const json = await data.json();
        console.log(json.results)
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, [])
    return (
        <div className='flex justify-center'>
            <Header />
            {/* 
            MianContainer
                -VideoBackground
                -Video Title
                -video details and buttons
            SecondaryContainer
                -MovieList *n
                -MovieCard *n
            */}
        </div>
    )
}

export default Browsr


/*

useEffect(() => {

        const docRef = doc(db, 'customers', uid,);
        const fetchData = async () => {
            try {
                const document = await getDoc(docRef);
                if (document) {
                    setDocData(document.data());
                } else {
                    console.log('Document not found');
                }
            } catch (error) {
                console.error('Error fetching document:', error);
            }
        };

        fetchData();
    }, [db, uid]);

  
*/

