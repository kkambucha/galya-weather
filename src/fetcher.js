import 'whatwg-fetch';

class Fetcher {

    static getData (url, params = null) {
        console.log(fetch(url));
        return fetch(url)
            .then(Fetcher.checkStatus)
            .then(Fetcher.parseJSON);
    }

    static checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            const error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }

    static parseJSON(response) {
        return response.json();
    }

}

export default Fetcher;