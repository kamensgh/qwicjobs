import React from 'react'
import axios from 'axios';

export default axios.create({
    baseURL: 'https://qwicjobs-api.herokuapp.com/'
})