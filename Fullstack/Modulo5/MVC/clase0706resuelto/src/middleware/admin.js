const admins = ["Ada", "Greta", "Vim", "Tim"];

function admin(req, res, next) {
    let user = req.query.user
    if (user) {
        admins.forEach(function (admin) {
            if (user == admin) {
                next();
            }
        })
        res.send("No tiene privilegios para ingresar.")
    } else {
        res.send("No tiene privilegios para ingresar.")
    }
}
module.exports = admin;