const logRequest = ((req, res, next) => {
    console.log('Sedang terjadi request ke PATH: ', req.path)
    next()
})

module.exports = logRequest