const path = require("path");

const mainController = {
    index: (req, res) => {
        res.send("Funcionando")
    }
}

module.exports = mainController;