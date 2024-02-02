import React, { useEffect, useState } from 'react';
import AlbumList from './AlbumList';
import axios from 'axios';

interface Album {
    id: string;
    image: string;
    name: string;
}

const AlbumPage: React.FC = () => {
    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        fetchAlbums();
    }, []);

    const fetchAlbums = () => {
        axios
            .get('http://localhost:5000/albums')
            .then((res) => setAlbums((prevState) => [...prevState, res.data]))
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <h1>Albums</h1>
            <AlbumList albums={albums} fetchMoreData={fetchAlbums} />
        </div>
    );
};

export default AlbumPage;
