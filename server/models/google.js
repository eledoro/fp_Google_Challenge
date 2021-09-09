/*const searchData = require('../data');

class SearchResult {
    constructor(data) {
        this.id = data.id;
        this.url = data.url;
        this.title = data.title;
        this.description = data.description;
    };

    static get all() {
        const allLinks = searchData.map((searchResult) => new SearchResult(searchResult));
        return allLinks;
    };

    static randomLink() {
        try {
            let indexNumber = Math.floor(Math.random() * searchData.length);
            return searchData[indexNumber]
        } catch (err) {
            throw new Error('Something has gone wrong');
        }
    };   
}
module.exports = SearchResult