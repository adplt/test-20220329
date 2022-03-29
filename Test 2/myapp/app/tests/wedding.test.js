const api = require('./utils/api.util_http');
const weddingHelper = require('./utils/helpers/wedding.helper_test');

describe('Wedding', () => {
    before(() => {

    });

    it('It should successfully add Wedding', () => {
        const res = await api.addWeddig({
            name: 'Wedding',
            address: 'Jakarta',
            date: '2022-03-29',
            userId: 'e09cee8d-e18d-4f50-ac31-14f863d1e37e',
        });
        weddingHelper.addWeddig(res);
    });

    it('It should successfully show Wedding list', () => {
        const res = await api.showWeddingList({ userId: 'e09cee8d-e18d-4f50-ac31-14f863d1e37e' });
        weddingHelper.showWeddingList(res);
    });
});