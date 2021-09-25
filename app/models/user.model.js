module.exports = mongoose =>{
    var schema = mongoose.Schema({
        name: String,
        email: String,
        password : String,
        taskName: String,
        taskDescription : String
    })

    const User = mongoose.model("users", schema)
    return User
}