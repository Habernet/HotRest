// Dependencies
let express = require("express");
let path = require("path");

let app = express();
let PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', express.static(path.join(__dirname, '/public')));

// Array to hold current reservation objects
let currentReservations = [
    {
    "name": 'Patrick',
    "phone_number": 9842321201,
    "email": "phaberern@gmail.com",
    "unique_id": "sup"
    },
    {
    "name": 'Logan',
    "phone_number": 9123412442,
    "email": "logan@gmail.com",
    "unique_id": "supdude"
    }
];
// Array to hold current waiting list objects
let waitingList = [
    {
        "name": 'Patrick',
        "phone_number": 9842321201,
        "email": "phaberern@gmail.com",
        "unique_id": "sup"
        }
];


// Routes!

// / ----> Root
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});


// api/tables will have post and get routes
// api/waitlist will have post and get routes

// --------------------------------------- //
app.get("/api/tables", (req,res) => {
  return res.json(currentReservations);
});
app.post("/api/tables", (req, res) => {

});

// --------------------------------------- //
app.get("/api/waitlist", (req,res) => {
    return res.json(waitingList);
});

app.post("/api/waitlist", (req, res) => {
    // the req body will be parsed and information will be stored in our arrays based on some sweet ass server side logic

    // req.body is equal to the JSON post sent from the user
    // This works because of our body parsing middleware refer to lines 9 + 10
    let newWait = req.body;
    // This might need to be changed a bit depending on what we receive from the frontend.
    newWait.routeName = newWait.name.replace(/\s+/g, "").toLowerCase();
    console.log()
});




// Kick off the server!
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});



//