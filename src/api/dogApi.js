import axios from 'axios';

const dogApi = axios.create({
    baseURL: 'https://dog.ceo/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getBreedList = () => {
    return dogApi.get('/breeds/list/all')
        .then(response => {
            return response.data.message;
        })
        .catch(err => {
            return err;
        });
};

export const getImgByBreed = breed => {
    return dogApi.get(`/breed/${breed}/images/random`)
        .then(response => {
            return response.data.message;
        })
        .catch(err => {
            return err;
        });
};