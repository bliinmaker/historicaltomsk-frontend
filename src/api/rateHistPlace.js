import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:3000'

export const getHistPlaceRating = (histPlaceId) => {

	const requestUrl = `/histPlaces/${histPlaceId}/rating`

	return axios({
		method: 'get',
		url: requestUrl,
	})
}

export const rateHistPlace = (histPlaceId, rating) => {
    const requestUrl = `/histPlaces/${histPlaceId}/rating`

	return axios({
		method: 'post',
		data: {rating},
		url: requestUrl,
	})
}
