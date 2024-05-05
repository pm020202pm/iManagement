import db from "./config";
import {doc , setDoc, getDoc} from "firebase/firestore";

const addItemToInventory = async (item) => {
    const uid = getUID();
    const docRef = doc(db, "inventory", uid);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        await setDoc(docRef, {
            items: [...docSnap.data().items, item]
        })
    } else {
        await setDoc(docRef, {
            items: [item]
        })
    }
}

const getInventory = async () => {
    const uid = getUID();
    const docRef = doc(db, "inventory", uid);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        return docSnap.data().items;
    } else {
        return [];
    }
}

const updateItemInInventory = async (oldItem, newItem) => {
    const uid = getUID();
    const docRef = doc(db, "inventory", uid);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        const newItems = docSnap.data().items.map(i => i === oldItem ? newItem : i);
        await setDoc(docRef, {
            items: newItems
        })
    }
}

const deleteItemFromInventory = async (item) => {
    const uid = getUID();
    const docRef = doc(db, "inventory", uid);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        const newItems = docSnap.data().items.filter(i => i !== item);
        await setDoc(docRef, {
            items: newItems
        })
    }
}

const getUID = () => {
    // add logic for auth

    return "123";
}

export { addItemToInventory, getInventory, updateItemInInventory, deleteItemFromInventory};