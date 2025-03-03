

const express = require("express");

function calculateSum(n) {
    let ans = 0;
    for(let i = 1; i <= n; i++) {
        ans = ans + i;
    }
    return ans;
}

const app = express();

app.get('/', function(req,res) {
    const n = parseInt(req.query.n);
    if(isNaN(n)) {
        return res.send("<h4>Invalid input! Please provide a number.<h4/>")
    }
    const ans = calculateSum(n)
    res.send(ans);
});

app.listen(3000, function() {
    console.log("Server is running on http://localhost:3000");
});