// const express = require('express')
// const router = express.Router()
// const userController = require('../controllers/users')

// // router.route('/').get(getUser)
// // router.route('/data').get(getData)
// // router.route('/users').get(getUserAll)
// router.get('/', userController.getAllUsers);
// router.post('/', userController.createUser);
// router.get('/data', userController.getAllUsersData);
// router.get('/:id', userController.getUserById);
// router.put('/:id', userController.updateUser);
// router.delete('/:id', userController.deleteUser);

// module.exports = router;

const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

// Route to render the user list page
//router.get('/', userController.getAllUsers);
router.get('/', userController.getAllUsersData);

// Route to render the add new user form
router.get('/new', (req, res) => {
    res.render('newUserForm'); // Assuming you have a view file named 'newUserForm.ejs'
});

// Route to handle the creation of a new user
router.post('/new', userController.createUser);

// Route to render the edit user form
router.get('/edit/:id', userController.getEditUserForm);

// Route to handle the update of an existing user
router.post('/edit/:id', userController.updateUser);

// Route to handle the deletion of a user
router.post('/delete/:id', userController.deleteUser);

module.exports = router;