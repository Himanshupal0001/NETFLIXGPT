import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore'
import { app } from "../utils/firebase"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const usePaymentWall = (uid) => {
    //const { uid } = useSelector(store => store.auth);
    //console.log(uid);
    const db = getFirestore(app)
    const [stripeId, setStripeId] = useState(null);
    const [payment, setPayment] = useState(null);

    //const docRef = doc(db, 'customers', uid);
    //const paymentRef = collection(docRef, 'payments');
    //console.log(docRef, paymentRef)

    useEffect(() => {
        if (!uid) return

        const fetchData = async () => {
            const docRef = doc(db, 'customers', uid);
            try {
                const document = await getDoc(docRef);
                if (document) {
                    setStripeId(document.data());
                    //console.log(stripeId)
                } else {
                    console.log('Document not found');
                }
            } catch (error) {
                console.error('Error fetching document:', error);
            }

            const paymentRef = collection(docRef, 'payments');
            try {
                const paymentSnapshot = await getDocs(paymentRef);
                if (paymentSnapshot) {
                    const payments = paymentSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    setPayment(payments[0]?.status);
                    //console.log(payment)
                }
                else {
                    console.log('payment Error')
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [uid]);

    // useEffect(() => {
    //     getStripId();
    // }, [uid, docRef])
    // useEffect(() => {
    //     fetchPayment();
    // }, [uid, paymentRef])

    // async function getStripId() {
    //     try {
    //         const document = await getDoc(docRef);
    //         if (document) {
    //             setStripeId(document.data());
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
    //         if (paymentSnapshot) {
    //             const payments = paymentSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //             setPayment(payments);
    //         }
    //         else {
    //             console.log('payment Error')
    //         }
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    // }
    //console.log(stripeId, payment)

    return { stripeId, payment };

}

export default usePaymentWall;