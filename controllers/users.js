const express = require('express')
const User = require('../models/users')
const mongoose = require('mongoose')
    // async function getData(req, resp) {
    //     console.log("Student data is here")
    //     let a = 20;
    //     let b = 30;
    //     let result = a + b;
    //     resp.send(`Student Data is here. The result of ${a} + ${b} is ${result}`)
    // }

//module.exports = { getData }

// userController.js

// async function getUser(req, res) {
//     try {
//         // Your logic to fetch user data
//         const userData = {
//             name: "John Doe",
//             age: 30,
//             email: "john@example.com"
//         };

//         res.json(userData); // Sending user data as JSON response
//     } catch (error) {
//         console.error("Error fetching user:", error);
//         res.status(500).send("Internal Server Error");
//     }
// }

exports.getAllUsers = async(req, res) => {
    try {
        const allUsers = await User.find({});
        res.json(allUsers);
        //res.render("index", { users: allUsers });
        console.log(allUsers)
    } catch (error) {
        console.error("Error fetching all users:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getAllUsersData = async(req, res) => {
    try {
        const allUsers = await User.find({});
        //res.json(allUsers);
        res.render("index", { users: allUsers });
        console.log(allUsers)
    } catch (error) {
        console.error("Error fetching all users:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


// exports.createUser = async(req, res) => {
//     try {
//         const { firstname, lastname, gender, email, city } = req.body;
//         const newUser = await User.create({ firstname, lastname, gender, email, city });
//         res.status(201).json(newUser);
//     } catch (error) {
//         console.error("Error creating user:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };


// exports.getUserById = async(req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         if (!user) {
//             return res.status(404).json({ error: "User not found" });
//         }
//         res.json(user);
//     } catch (error) {
//         console.error("Error fetching user:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

// exports.updateUser = async(req, res) => {
//     try {
//         const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedUser) {
//             return res.status(404).json({ error: "User not found" });
//         }
//         res.json(updatedUser);
//     } catch (error) {
//         console.error("Error updating user:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

// exports.deleteUser = async(req, res) => {
//     try {
//         const deletedUser = await User.findByIdAndDelete(req.params.id);
//         if (!deletedUser) {
//             return res.status(404).json({ error: "User not found" });
//         }
//         res.json({ msg: "User deleted successfully" });
//     } catch (error) {
//         console.error("Error deleting user:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// }


// // async function postUsers(req, resp) {
// //     const body = req.body;
// //     const result = await User.insertOne({
// //         firstname: body.firstname,
// //         lastname: body.lastname,
// //         gender: body.gender,
// //         email: body.email,
// //         city: body.city

// //     })
// //     return resp.status(201).json({ msg: "User created successfully", id: result._id })
// // }

// // async function saveDataIndB(req, resp) {
// //     let data = User.insertOne(req.body)
// //     let result = await data.save()
// //     console.log(result);
// //     resp.send("Data inserted...")
// // }



// //module.exports = { getData, getUser, getUserAll };

//const User = require('../models/users');

// Render the edit user form
exports.getEditUserForm = async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.render('editUserForm', { user });
    } catch (error) {
        console.error("Error fetching user for edit:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Update an existing user
exports.updateUser = async(req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.redirect('/'); // Redirect to the user list page after successful update
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Delete a user
exports.deleteUser = async(req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.redirect('/'); // Redirect to the user list page after successful deletion
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Create a new user
exports.createUser = async(req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.redirect('/'); // Redirect to the user list page after successful creation
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};