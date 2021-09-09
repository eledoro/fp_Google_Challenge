const searchData = require('../data');

class SearchResult {
    constructor(data) {
        this.id = data.id;
        this.url = data.url;
        this.title = data.title;
        this.description = data.description;
    }

    static get all() {
        const searchResults = searchData.map((searchResult) => new SearchResult(searchResult));
        return searchResults;
    }

    static random() {
        try {
            let indexNumber = Math.floor(Math.random()*13);
            let indexShow = searchData.filter((searchResult) => searchResult[] === indexNumber)[0]
            return new SearchResult(indexShow)
        } catch (err) {
            throw new Error('Something has gone wrong');
        }
    }    
    
}
module.exports = SearchResult