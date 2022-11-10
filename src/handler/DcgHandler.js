exports.testingApi = (req, res) => {
    res.status(200)
        .contentType('application/json')
        .json({
            status: 'Success',
            message: 'Server is up.'
        })
};