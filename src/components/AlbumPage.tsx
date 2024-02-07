import React, { useEffect, useState } from "react";
import AlbumList from "./AlbumList";
import AlbumForm from "./AlbumForm";
import axios from "axios";

interface Album {
  id: string;
  picture: string;
  name: string;
}

const AlbumPage: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };
  
  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = () => {
    axios
      .get("/api/albums", { params: { offset: albums.length, limit: 2 } })
      .then((res) => setAlbums((prevState) => [...prevState, ...res.data]))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Albums</h1>
      <AlbumList albums={albums} fetchMoreData={fetchAlbums} />
      <button onClick={handleButtonClick}>
        {showForm ? "Close" : "Create New Album"}
      </button>
      {showForm && <AlbumForm />}
    </div>
  );
};

export default AlbumPage;
