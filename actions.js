const axios = require('axios');

//TYPES
const { GOT_DESSERTS_DATA, NEW_DESSERT_DATA } = require('./types');

/* YOUR CODE GOES HERE */
const gotDesserts = (desserts) => ({
    type:GOT_DESSERTS_DATA,
    desserts
})
 const addDessert = (newDessert) => ({
    type:NEW_DESSERT_DATA,
    newDessert,
 })
const fetchDesserts = async() => {
    const desserts = (await axios.get('/api/desserts')).data
    return ({
        type:GOT_DESSERTS_DATA,
        desserts
    })
}


const postDessert = async() => {
    await axios.post('/api/desserts')
    const desserts = (await axios.get('/api/desserts')).data
    return ({
        type:GOT_DESSERTS_DATA,
        desserts
})
}

module.exports = { gotDesserts, addDessert, fetchDesserts, postDessert };
