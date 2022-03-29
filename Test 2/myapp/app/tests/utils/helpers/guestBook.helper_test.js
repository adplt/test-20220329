function addGuestBookHelper (res) {
    res.body.data.should.have.property('wedding_book_id');
    res.body.data.should.have.property('wedding_id');
    res.body.data.should.have.property('user_id');
    res.body.data.should.have.property('guest_name');
    res.body.data.should.have.property('guest_address');
    res.body.data.should.have.property('guest_phone');
    res.body.data.should.have.property('guest_note');
    res.body.data.should.have.property('status_id');
    res.body.data.should.have.property('created_by');
    res.body.data.should.have.property('created_date');
    res.body.data.should.have.property('created_from');
    res.body.data.should.have.property('modified_by');
    res.body.data.should.have.property('modified_date');
    res.body.data.should.have.property('modified_from');
}

function showGuestBookHelper (res) {
    res.body.data[0].should.have.property('wedding_book_id');
    res.body.data[0].should.have.property('wedding_id');
    res.body.data[0].should.have.property('user_id');
    res.body.data[0].should.have.property('guest_name');
    res.body.data[0].should.have.property('guest_address');
    res.body.data[0].should.have.property('guest_phone');
    res.body.data[0].should.have.property('guest_note');
    res.body.data[0].should.have.property('status_id');
    res.body.data[0].should.have.property('created_by');
    res.body.data[0].should.have.property('created_date');
    res.body.data[0].should.have.property('created_from');
    res.body.data[0].should.have.property('modified_by');
    res.body.data[0].should.have.property('modified_date');
    res.body.data[0].should.have.property('modified_from');
}