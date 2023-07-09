import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:3000'


export const createComment = (histPlaceId, { nickName, message, image }) => {
	const requestUrl = '/comments/' + histPlaceId

	return axios({
		method: 'post',
		data: { 
			nickName,
			message,
			image,
		},
		url: requestUrl,
	})
}
