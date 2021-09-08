const request = require('supertest');
// import server
const server = require('../server');
const allLinks = require('../data')

describe('API server', () => {
    let api;
    beforeAll(() => {
        // start the server and store it in the api variable
        api = server.listen(5000, () =>
            console.log('Test server running on port 5000')
        );
    });

    afterAll((done) => {
        // close the server, then run done
        console.log('test server is closed');
        api.close(done);
    });

    it('responds to get / with status 200', (done) => {
        request(api).get('/').expect(200, done);
    });


    it('retrieves a serchResultLink by id', (done) => {
        request(api)
            .get('/results/3')
            .expect(200)
            .expect({id:3, url:'https://www.codecademy.com/learn/paths/web-development', title:'Web Development | Codecademy', description:'career PathWeb Development ... Go from no-code to an in-demand junior web developer, at a fraction of the cost of a bootcamp. Start with the front-end by learning ...'}
            , done);
    });

    it('retrieves all serchResultLink at /results', (done) => {
        request(api)
            .get('/results/')
            .expect(200)
            .expect(allLinks, done);
    });


/*
    it('retrieves one  random serchResultLink ', (done) => {
        request(api)
            .get('/results/random')
            .expect(200)
      //?  lenght of res == 1 ?  contains id title description??
      //      .expect(
            , done);
    });
  */
 
    

    it('responds to a unknown search result id with a 404', (done) => {
        request(api).get('/results/11').expect(404).expect({}, done);
    });


    it('responds to non existing paths with 404', (done) => {
        request(api).get('/no').expect(404, done);
    });

    it('responds to invalid method request with 405', (done) => {
        request(api).post('/').expect(405, done);
    });
});
