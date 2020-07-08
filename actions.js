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
const fetchDesserts = () => {
    return async (dispatch) => {
        const desserts = (await axios.get('/api/desserts')).data.desserts
        return dispatch(gotDesserts(desserts))
    }
}


const postDessert = (dessertObj) => {
    return async (dispatch) => {
        const dessert = (await axios.post('/api/desserts', dessertObj)).data.newDessert
        return dispatch(addDessert(dessert))
    }
}

module.exports = { gotDesserts, addDessert, fetchDesserts, postDessert };
