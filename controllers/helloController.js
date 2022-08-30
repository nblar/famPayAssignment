const dummyResponse = (req, res, next) => {
    res.json({message: "Hello World from Rest Controller"}); // dummy function for now
};

module.exports = {dummyResponse};
