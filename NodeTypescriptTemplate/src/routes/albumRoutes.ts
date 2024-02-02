import { Router } from "express";
import Album from "../models/Album";

const router = Router();

router.post('/', async (req, res) => {
    const { name, picture } = req.body;
    const album = new Album({
        name,
        picture
    });

    try {
        const savedAlbum = album.save();
        res.send(savedAlbum);
    } catch (err) {
        res.status(404).send(err);
    }
});

export default router;