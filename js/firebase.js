// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
import { getDatabase, ref, push, onValue, update, serverTimestamp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDWcHnd1gm2L8Fbq-GaoyVJJk3tySbzSvk",
    authDomain: "wasl-fba4b.firebaseapp.com",
    projectId: "wasl-fba4b",
    storageBucket: "wasl-fba4b.firebasestorage.app",
    messagingSenderId: "604065858483",
    appId: "1:604065858483:web:398fae3b5c8f28a06a01c6"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// تصدير الدوال والمراجع لاستخدامها في الصفحات الأخرى
export { db, ref, push, onValue, update, serverTimestamp };