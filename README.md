# Social Networking

In this project I create a app that would allow you to interact with thoughts that are posting by a users. You are able to create reaction
for that specific thought and store them. They are using Mongo db in order to store and manage the information. You are also able to insert
friends into the users account by referencing the friends user id.

## Authors

- [@marshallrizzuto](https://github.com/Zoot83)

Website: https://zoot83.github.io/Social-Network/

## Features

- Node
- Query
- Mongo
- Promises
- Packages
- Npm
- Databases
- Express
- Routers
- Sequalize
- Mongoose
- Routes

## Demo

Link to demo: https://drive.google.com/file/d/1uTmFZEG1REsAfSelWuOmjP170l-DWBJ1/view

## Usage/Examples

In this example I am showing how I used the functions defined for the specific route. By bundling the routes into one line and defining the
kind of call that will be made selects the routes that will be called along with the function that is for it. This one shows how I was able to add a
friend to the friends array of the user with that id.

     updateFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { friends: req.params.friendId } }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));

},
