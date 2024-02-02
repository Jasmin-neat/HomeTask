import React from 'react';

interface AlbumCardProps {
    album: {
        image: string;
        name: string;
    };
}
const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => (
    <div>
        <img src={album.image} alt={album.name} />
        <h2>{album.name}</h2>
    </div>
);

export default AlbumCard;
