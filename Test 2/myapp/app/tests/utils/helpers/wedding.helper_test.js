function addWeddigHelper (res) {
    res.body.data.should.have.property('wedding_id');
    res.body.data.should.have.property('wedding_name');
    res.body.data.should.have.property('wedding_address');
    res.body.data.should.have.property('wedding_date');
    res.body.data.should.have.property('status_id');
    res.body.data.should.have.property('created_by');
    res.body.data.should.have.property('created_date');
    res.body.data.should.have.property('created_from');
    res.body.data.should.have.property('modified_by');
    res.body.data.should.have.property('modified_date');
    res.body.data.should.have.property('modified_from');
}

function showWeddigListHelper (res) {
    res.body.data[0].should.have.property('wedding_id');
    res.body.data[0].should.have.property('wedding_name');
    res.body.data[0].should.have.property('wedding_address');
    res.body.data[0].should.have.property('wedding_date');
    res.body.data[0].should.have.property('status_id');
    res.body.data[0].should.have.property('created_by');
    res.body.data[0].should.have.property('created_date');
    res.body.data[0].should.have.property('created_from');
    res.body.data[0].should.have.property('modified_by');
    res.body.data[0].should.have.property('modified_date');
    res.body.data[0].should.have.property('modified_from');
}