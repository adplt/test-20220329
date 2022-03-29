const api = require('./utils/api.util_http');
const guestBookHelper = require('./utils/helpers/guestBook.helper_test');

describe('Guest Book', () => {
    before(() => {

    });

    it('It should successfully add Guest Book', async () => {
        const res = await api.addGuestBook({
            weddingId: 'e09cee8d-e18d-4f50-ac31-14f863d1e37d',
            name: 'Atria',
            address: 'Jakarta',
            phone: '6281234567890',
            note: 'happy wedding',
        });
        guestBookHelper.addGuestBook(res);
    });

    it('It should successfully show Guest Book list', () => {
        const res = await api.showGuestBookList({ weddingId: 'e09cee8d-e18d-4f50-ac31-14f863d1e37d' });
        guestBookHelper.addGuestBook(res);
    });
});