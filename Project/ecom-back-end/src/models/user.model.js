import mongoose,{Schema} from "mongoose";


const userSchema = new Schema({
    name : {
        type: String,
        required: false
    },
    id: {
        type: String,
        required: true
    }

    ,
    cartItems : {
        type: Schema.Types.ObjectId,
        ref: "Product",
    
    }
});



export const User = mongoose.model("User", userSchema);