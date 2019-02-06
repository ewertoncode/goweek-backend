const Tweet = require('../models/Tweet')

module.exports = {
    async index(req, res) {
        const tweets = await Tweet.find({}).sort('-createdAt')

        return res.json(tweets)
    },

    async store(req, res) {
        console.log(req.boby)
        const tweet = await Tweet.create(req.boby);

        return res.json(tweet);
    }
}