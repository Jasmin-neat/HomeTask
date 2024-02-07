// import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import FormData from "form-data";

const MyForm = styled.form`
  width: 300px;
`;
const InputDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;
const AlbumForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [file, setFile] = useState<File | undefined>();

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "lhqdarnt");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dvhlkxmrl/image/upload",
      formData
    );

    return res.data.secure_url;
  };

  const handleOnClick = async (event: React.FormEvent) => {
    event.preventDefault();

    const imageUrl = file ? await uploadImage(file) : "";

    try {
      const response = await axios.post("/api/albums", {
        name,
        picture: imageUrl,
      });

      console.log(response.data);
      // Update your UI here with the received response if needed
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };
  return (
    <MyForm>
      <InputDiv>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
      </InputDiv>
      <input
        type="file"
        onChange={(e) =>
          setFile(e.target.files ? e.target.files[0] : undefined)
        }
      />
      <button onClick={handleOnClick}>Create Album</button>
    </MyForm>
  );
};

export default AlbumForm;
