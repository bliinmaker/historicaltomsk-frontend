import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:3000'


export const uploadImage = (imageData) => {
    const requestUrl = '/uploads/image'

	return axios({
		method: 'post',
		data: imageData,
		url: requestUrl,
	})
}
