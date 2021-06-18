const { monefy,  friendlyDate } = require('../../client/js/utils.js');

test('Should convert 1000 into "1.000"', async () => {
    expect(monefy(1000)).toBe('1.000');
});

test('Should convert 100 into "100"', async () => {
    expect(monefy(100)).toBe('100');
});

test('Should convert undefined into ""', async () => {
    expect(monefy(undefined)).toBe('');
});

test('Should convert "2021-01-01T03:00:00.000Z" into "1/1/2021"', async () => {
    expect(friendlyDate('2021-01-01T03:00:00.000Z')).toBe('1/1/2021');
});

test('Should convert "2021-04-01T03:00:00.000Z" into "1/4/2021"', async () => {
    expect(friendlyDate('2021-04-01T03:00:00.000Z')).toBe('1/4/2021');
});

test('Should convert "2021-05-01T03:00:00.000Z" into "1/5/2021"', async () => {
    expect(friendlyDate('2021-05-01T03:00:00.000Z')).toBe('1/5/2021');
});


