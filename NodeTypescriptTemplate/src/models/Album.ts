import mongoose, { Document, Schema } from "mongoose";

interface IAlbum extends Document {
    name: string;
    picture: string;
}

const AlbumSchema: Schema = new Schema({
    name: { type:String, required: true },
    picture: { type:String, required: true }
});

export default mongoose.model<IAlbum>("Album", AlbumSchema);