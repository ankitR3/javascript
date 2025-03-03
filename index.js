const express = require("express");

const app = express();

function sum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans = ans + i;
    }
    return ans;
}

// // req, res => request and response
// app.get('/', function(req,res) {
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send("hii your ans is " + ans);
// });

app.get('/', function(req,res) {
    // console.log(1 / 0);
    throw new Error("asdasdasd");
})

app.listen(3000);
