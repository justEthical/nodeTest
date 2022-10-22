const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    res.send("Hello Cyclic 2");
    console.log("user");
});

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
});