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
        const savedAlbum = await album.save();
        res.send(savedAlbum);
    } catch (err) {
        res.status(404).send(err);
    }
    
});

router.get('/', async (req, res) => {
    const offset = parseInt(req.query.offset as string);
    const limit = parseInt(req.query.limit as string);
    console.log(offset,limit);
    try {
        const albums = await Album.find()
        .skip(offset)
        .limit(limit)
        .exec();
        
        res.json(albums);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const album = await Album.findById(req.params.id);
        if (album == null) {
            return res.status(404).json({ message: "Can't find album"});
        }
        res.json(album);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const album = await Album.findById(req.params.id);
        if (album == null) {
            return res.status(404).json({ message: "Can't find album" });
        }
        
        if (req.body.name != null) {
            album.name = req.body.name;
        }
        if (req.body.picture != null) {
            album.picture = req.body.picture;
        }
        
        const updatedAlbum = await album.save();
        res.json(updatedAlbum);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        let album = await Album.findById(req.params.id);
        if (album == null) {
            return res.status(404).json({ message: "Can't find album" });
        }
        
        await Album.deleteOne({ _id: req.params.id });
        res.json({ message: 'Deleted Album' });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
});

export default router;