import express, { Request, Response } from 'express';
import firebase_admin from 'firebase-admin';
import dotenv from 'dotenv';
import albumRoutes from "./src/routes/albumRoutes";

dotenv.config();

// Initialize Firebase
firebase_admin.initializeApp({
    credential: firebase_admin.credential.cert({
        projectId: process.env.FB_PROJECT_ID,
        clientEmail: process.env.FB_CLIENT_EMAIL, 
        privateKey: process.env.FB_PRIVATE_KEY?.replace(/\\n/g, '\n')
    })
});

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use("/api/albums", albumRoutes);

// Add Routes (to be set up)
app.get('/',(req:Request, res:Response)=>{
    res.send("Server is up and running.");
});

app.listen(port, ()=>console.log(`Server is running on port ${port}`));