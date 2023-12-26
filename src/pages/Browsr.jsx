import React, { useEffect, useState } from 'react'
import { app, auth } from '../utils/firebase'
import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore'
import { useSelector } from 'react-redux';
import Header from '../components/Header'

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

    return (
        <div>
            <Header />

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

