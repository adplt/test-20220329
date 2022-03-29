const http = require('./chaiHttp.util_test');

function addGuestBook(data) {
    return http.POST('/wedding/guestbook/add', data);
}

function showGuestBookList(data) {
    return http.POST('/wedding/guestbook/list', data);
}

function addWeddig(data) {
    return http.POST('/wedding/add', data);
}

function showWeddingList(data) {
    return http.POST('/wedding/list', data);
}

module.exports = {
    addGuestBook,
    showGuestBookList,
    addWeddig,
    showWeddingList,
}