module.exports = app =>{
    const users = require("../controller/user.controller")
    var router = require("express").Router()

    // Saving data to server
    router.post("/saveUser", users.create)

    // Fetch all data from database and return to client
    router.get("/getAllUserData", users.findAll)

    // Fetch user data by id
    router.get("/getTaskbyId/:id", users.getById)

    // update user based on id
    router.put("/updateTaskbyId/:id", users.updateTask)

    // Delete Task based on id
    router.delete("/deleteUserTask/:id", users.deleteTask)

    app.use("/api", router)
}