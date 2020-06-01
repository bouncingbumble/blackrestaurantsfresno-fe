import axios from 'axios'

export const apiCall = async (method, path, data) => {
    try {
        const res = await axios[method.toLowerCase()](
            `https://blackrestaurantsfresno-backend.herokuapp.com${path}`,
            data
        )
        return res.data
    } catch (err) {
        throw err.response
    }
}

export const externalApiCall = async (method, path, data) => {
    try {
        const res = await axios[method.toLowerCase()](
            `${path}`,
            data
        )
        return res.data
    } catch (err) {
        throw err.response
    }
}