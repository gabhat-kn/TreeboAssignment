import request from 'superagent';

export const REQUEST_GIFS = 'REQUEST_GIFS';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const REQUEST_TENDING_GIFS = "REQUEST_TENDING_GIFS"

const API_URL = 'https://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=SWOitu6kdcad3Sz75yZjMu8Y81ps02qH';
const TRENDINGAPI_URL = 'https://api.giphy.com/v1/gifs/trending';
const TRENDINGAPI_KEY = '?api_key=SWOitu6kdcad3Sz75yZjMu8Y81ps02qH';

export function requestGifs(term = null) {
    const data = request.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`);

    return {
        type: REQUEST_GIFS,
        payload: data
    }
}

export function fetchTrendingGifs() {
    const data = request.get(`${TRENDINGAPI_URL}${TRENDINGAPI_KEY}`);

    return {
        type: REQUEST_TENDING_GIFS,
        payload: data
    }
}

export function openModal(gif) {
    return {
        type: OPEN_MODAL,
        gif
    }
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}