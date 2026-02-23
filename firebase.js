import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
 apiKey: "ضع المفتاح هنا",
 authDomain: "mit-store-bd580.firebaseapp.com",
 projectId: "mit-store-bd580",
 storageBucket: "mit-store-bd580.firebasestorage.app",
 messagingSenderId: "382577223227",
 appId: "ضع appId هنا"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
