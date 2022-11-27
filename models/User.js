const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    // firstName: {
    //     type: String,
    //     required: [true, 'Username is required']
    // },
    // secondName: {
    //     type: String,
    //     required: [true, 'Username is required']
    // },
    email: {
        type: String,
        required: true,
    },
    // tel: {
    //     type: String,
    //     required: true,
    // },
    hashedPassword: {
        type: String,
        required: true,
    }
})

userSchema.index({email:1}, {
    collation:{
        locale: 'en',
        strength: 2
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User
