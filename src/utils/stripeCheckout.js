"use client";
import { getAuth } from "firebase/auth";
import {
    addDoc,
    collection,
    onSnapshot,
    getFirestore
} from "firebase/firestore";

import { getFunctions, httpsCallable } from "firebase/functions";

//handle checkout 
export const getCheckoutUrl = async (app, priceId) => {
    const auth = getAuth(app);
    const userId = auth.currentUser?.uid;
    if (!userId) throw new Error("User is not authenticated");

    const db = getFirestore(app);
    const checkoutSessionRef = collection(
        db,
        "customers",
        userId,
        "checkout_sessions"
    );

    const docRef = await addDoc(checkoutSessionRef, {
        price: priceId,
        //after payment success user will redirect to hommepage --> can replace with /login to redirect the user to login page
        success_url: window.location.origin + '/browse',
        cancel_url: window.location.origin,
    });

    return new Promise((resolve, reject) => {
        const unsubscribe = onSnapshot(docRef, (snap) => {
            const { error, url } = snap.data();
            if (error) {
                unsubscribe();
                reject(new Error(`An error occurred: ${error.message}`));
            }
            if (url) {
                //console.log("Stripe Checkout URL:", url);
                unsubscribe();
                resolve(url);
            }
        });
    });
};

export const getPortalUrl = async (app) => {
    const auth = getAuth(app);
    const user = auth.currentUser;

    let dataWithUrl;
    try {
        const functions = getFunctions(app, "us-central1");
        const functionRef = httpsCallable(
            functions,
            "ext-firestore-stripe-payments-createPortalLink"
        );
        const { data } = await functionRef({
            customerId: user?.uid,
            returnUrl: window.location.origin,
        });

        // Add a type to the data
        dataWithUrl = data;
        console.log("Reroute to Stripe portal: ", dataWithUrl.url);
    } catch (error) {
        console.error(error);
    }

    return new Promise((resolve, reject) => {
        if (dataWithUrl.url) {
            resolve(dataWithUrl.url);
        } else {
            reject(new Error("No url returned"));
        }
    });
};
