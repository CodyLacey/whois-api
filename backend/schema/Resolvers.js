const fetch = require('node-fetch')

const resolvers = {
    Query: {
        getDomain: async () => {
            const API_ENDPOINT = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_SQftXETTUeNVaZvOuF1B7Hd1WfaP6&domainName=twitter.com&ip=1&outputFormat=JSON`
            const data = await fetch(API_ENDPOINT)
            const res = await data.json()
            const obj = await res.WhoisRecord
            console.log(obj);
        },


    },

    Mutation: {
        getUrl(parent, args) {

        }
    }
}

module.exports = { resolvers }