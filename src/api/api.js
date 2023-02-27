import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();


export const getAllItems = async () => {
    let url = `http://localhost:5000/product`
    const response = await axios.get(url, {});
    // console.log('fallItems', response.data)
    return response.data;
}


export const getOneItem = async (itemId) => {
    let url = `http://localhost:5000/product/${itemId}`
    const response = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${cookies.get('data').user.token}`
        }
    });
    // console.log('oneItem', response.data)
    return response.data;
}
export const updateItem = async (data, token) => {
    let url = `http://localhost:5000/product`
    const result = await axios.put(url, data, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    // console.log(result);
    return result;
};

export const deleteItem = async (token) => {
    let url = `http://localhost:5000/product`
    const result = await axios.delete(url, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    // console.log(result);
    return result;
};
