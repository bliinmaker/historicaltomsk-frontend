import { useEffect, useState } from 'react'
import { getHistPlaces } from '../../api/histPlace'
import './Feature.scss'

export const Feature = () => {
	const [histPlaces, setHistPlaces] = useState([])
	useEffect(() => {
		getHistPlaces({}).then(resp => {
			if (resp.status === 200) {
				setHistPlaces(resp.data)
				console.log(resp.data)
			}
		})
	}, [])
	return (
		<section id='featured' className='py-4'>
			<div className='container'>
				<div className='title-wrap'>
					<span className='sm-title'>узнай больше про</span>
					<h2 className='lg-title'>Самые популярные места Томска</h2>
				</div>
				<div className='featured-row'>
					{histPlaces.map(histPlace => (
						<div key={histPlace._id} className='featured-item my-2 shadow'>
							<img src={histPlace.image} alt='featured place'></img>
							<div className='featured-item-content'>
								<span>
									<i className='fas fa-map-marker-alt'></i>
									{histPlace.title}
								</span>
								<div>
									<p className='text'>{histPlace.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
