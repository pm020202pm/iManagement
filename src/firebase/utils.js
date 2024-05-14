import db from "./config";
import {doc , setDoc, getDoc, arrayUnion, updateDoc, arrayRemove} from "firebase/firestore";

const addItemToInventory = async (uid,item) => {
    // const uid = getUID();
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

const getInventory = async (uid) => {
    console.log("uid:", uid);
    const docRef = doc(db, "inventory", uid);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        return docSnap.data().items;
    } else {
        return [];
    }
}

const updateItemInInventory = async (uid, oldItem, newItem) => {
    console.log("oldItem:", oldItem);
    console.log("newItem:", newItem);
    const docRef = doc(db, "inventory", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        await updateDoc(docRef, {
          items: arrayRemove(oldItem),
        });
        await updateDoc(docRef, {
          items: arrayUnion(newItem),
        });
    }
}

const deleteItemFromInventory = async (uid,item) => {
    const docRef = doc(db, "inventory", uid);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
        const newItems = docSnap.data().items.filter((i) => {
            for (let key in i) {
                if(i[key] !== item[key]){
                    return true;
                }
            }
            return false;
        });
        await setDoc(docRef, {items: newItems})
    }
}

const getUID = () => {
    // add logic for auth
    return "123";
}

export { addItemToInventory, getInventory, updateItemInInventory, deleteItemFromInventory};