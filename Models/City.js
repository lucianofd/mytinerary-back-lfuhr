import { Schema, model, Types} from "mongoose"

let collection = 'cities'
let schema = new Schema ({
    
    name:{ type: String, required: true, },
    picture: {type: String, required: true},
    country: {type: String, required: true},
    description: {type: String, required: false},
    atractions: {type: String, required: false},
    created_by: { type:Types.ObjectId,ref:'users' }


}, {
    timestamps: true
}
)

let City = model(collection, schema)

export default City