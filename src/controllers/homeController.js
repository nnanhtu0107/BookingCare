import pool from '../configs/connectDB';

let getHomePage = (req, res) => {
    return res.send("Hello from controller")
}

module.exports = {
    getHomePage: getHomePage,
}