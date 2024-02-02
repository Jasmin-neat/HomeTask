import { initializeApp } from 'firebase/app';
// import { functions } from 'firebase/functions';
// replace with your own Firebase config

const firebaseConfig = {
    apiKey: 'AIzaSyBNsAlAfnnKhxBcKY4kC0qRaGjCWMrhf1o',
    authDomain: 'albumsite-9092c.firebaseapp.com',
    projectId: 'albumsite-9092c',
    storageBucket: 'albumsite-9092c.appspot.com',
    messagingSenderId: '837796765835',
    appId: '1:837796765835:web:dc64d2aacce8375ef1748e',
    measurementId: 'G-KPCYNCX1K8'
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export for use in other components
export default app;
