let users = []

const UserController = {
    createUser: (req, res) => {
        const { username, email } = req.body;
        const newUser = {id: users.length + 1, username, email };
        users.push(newUser);
        res.status(201).json(newUser);
   },
   getUsers: (req, res) => {
    res.json(users);
   },

   getUserById: (req, res) => {
    const userId = parseInt (req.params.id);
    const user = users.find(user => user.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({message: 'User not found'});
    }
   },
}

export default UserController