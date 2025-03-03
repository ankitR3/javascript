const express = require("express");
const app = express();

const users = [{
    name: 'John',
    kidneys: [{
        healthy: false
    }]
}]

app.use(express.json());

// app.get('/', function(req,res) {
//     const johnKidneys = users[0].kidneys;
//     console.log(johnKidneys);
// });

// console.log(users[0]);

// filter in javascript
app.get("/", function(req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKindeys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKindeys - numberOfHealthyKidneys;
    res.json({
        numberOfKindeys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

// middlewares
app.post("/", function(req, res) {
    // console.log(req.body); // undefined
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "done!"
    })
})

app.put("/", function(req, res) {
    for (let i = 0; i < users[0].kidneys.lenght; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

// removing all the unhealthy kidneys
app.delete("/", function(req, res) {
    if(isThereAtLeastOneUnhealthyKidney()) {
        const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            });
        }
    }
    users[0].kidneys = newKidneys;
    res.json({ msg: "done" })
    } else {
        res.status(411).json({
            msg: "you have no bad kidneys"
        });
    }
})

function isThereAtLeastOneUnhealthyKidney() {
    let atLeastOneUnhealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            return true;
        }
    }
    return false;
}

app.listen(3000);
console.log(users[0].kidneys);