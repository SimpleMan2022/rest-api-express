const logRequest = (req, res, next) => {
    console.log(`terjadi request pada PATH : ${req.path}`);
    next()
}

module.exports = logRequest