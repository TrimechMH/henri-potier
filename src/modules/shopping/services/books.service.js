import Vue from 'vue';

const getBooksService = async () => {
    try {
        const response = await Vue.http.get(`http://henri-potier.xebia.fr/books`);
        return Promise.resolve(response);
    } catch (error) {
        return Promise.reject(error);
    }
};


export {
    getBooksService
};
