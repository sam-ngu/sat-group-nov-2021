
const { Schema, model } = require("mongoose");
const { validateEmail } = require("../utils/validator");

const reactionSchema = new Schema({
    body: {
        type: String,
        required: true,
        max: 280,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },



}, {
    id: true,
})


// Schema to create a thought model
const thoughtSchema = new Schema(
    {
        thought_text: {
            type: String,
            required: true,
            max: 280,
            min: 1,
        },
        
        reactions: [
            reactionSchema,
        ],
    },
    {
        timestamps: true,
        id: true,
    }
);

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
