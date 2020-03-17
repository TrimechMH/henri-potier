import Vue from 'vue';

const getBooksService = () => {
    return new Promise((resolve, reject) => {
        Vue.http.get(`http://henri-potier.xebia.fr/books`).then(response => {
            resolve(response);
        }, error => {
            reject(error);
        });
    });
};


export {
    getBooksService
};
