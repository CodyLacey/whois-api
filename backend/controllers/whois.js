

const axios = require("axios");
const WHOISAPI = 'https://www.whoisxmlapi.com/whoisserver/WhoisService?';
const apiKey = 'at_SQftXETTUeNVaZvOuF1B7Hd1WfaP6' || process.env.APIKEY

module.exports = {
    getApi: async(req,res) => {
        try{
            axios.get(`${WHOISAPI}apiKey=${apiKey}&domainName=${req.params.lookup}&ip=1&outputFormat=JSON`)
                .then((response) =>  {
                res.send(response.data);
                console.log(response.data);
         })
        }catch(err){
            console.log(error.message);

            res.json({ error: error });
        }
            
    }
}