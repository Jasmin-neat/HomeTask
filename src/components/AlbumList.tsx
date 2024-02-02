import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import AlbumCard from './AlbumCard';

interface Album {
    id: string;
    image: string;
    name: string;
}

interface AlbumListProps {
    albums: Album[];
    fetchMoreData: () => void;
}

const AlbumList: React.FC<AlbumListProps> = ({ albums, fetchMoreData }) => (
    <InfiniteScroll
        dataLength={albums.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}        
        endMessage={<p>No more albums</p>}
        >
        {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
        ))}
    </InfiniteScroll>
);

export default AlbumList;
