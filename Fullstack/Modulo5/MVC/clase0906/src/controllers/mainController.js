const {validationResult} = require("express-validator")

module.exports = {
    index: function(req, res) {
        let data = {}
        if (typeof req.cookies != "undefined") {
            data.color = req.cookies.color
        }
        else {
            data = undefined
        }
        res.render("index", {data: data})

    },
    store: function(req, res) {
        let errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.render("index", {errors: errors.errors})
        }
        else{

            if (req.body.remind) {
                res.cookie("color", req.body.color, {maxAge: 60 * 1000})
            }
            return res.render("index", {data: req.body})
        }
    }
}