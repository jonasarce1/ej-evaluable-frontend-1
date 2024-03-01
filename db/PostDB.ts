import mongoose, {InferSchemaType} from "npm:mongoose"


const Schema = mongoose.Schema;

const PostSchema = new Schema ({
    name: {type: String, required: true},
    author: {type: String, required: true},
    date: {type: Date, required: true},
    desc:  {type: String, required: true}    
})

export type PostModelType = mongoose.Document & InferSchemaType<typeof PostSchema>

export const PostModel = mongoose.model<PostModelType>('Post', PostSchema)

