
const friends = require("../data/friends.js")

module.exports = function (app) {
    
    app.get("/api/friends", function (req, res) {
        res.json(friends);
        console.log("1!", friends);
        // res.json(res.body);
    });

    app.post("/api/friends", function (req, res) {
        // console.log(req.body);
        var friend = req.body;
        console.log(friend);
        friends.push(friend);
        res.json(req.body)
    })

}