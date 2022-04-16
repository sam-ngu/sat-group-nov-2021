// User:

// username

// String
// Unique
// Required
// Trimmed
// email

// String
// Required
// Unique
// Must match a valid email address (look into Mongoose's matching validation)
// thoughts

// Array of _id values referencing the Thought model
// friends


const { Schema, model } = require("mongoose");
const { validateEmail } = require("../utils/validator");



// Schema to create a user model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [validateEmail, "Please fill a valid email address"],
        },

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "thought",
            },
        ],

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "user",
            },
        ],
    },
    {
        timestamps: true,
        id: true,

    }
);

const User = model("user", userSchema);

module.exports = User;

