import fontawesome from '@fortawesome/fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'

fontawesome.library.add(faBars, faTimes)

export const NavBar = () => {
	useEffect(() => {
		// let navbarDiv = document.querySelector('.navbar')
		// window.addEventListener('scroll', () => {
		// 	if (
		// 		document.body.scrollTop > 40 ||
		// 		document.documentElement.scrollTop > 40
		// 	) {
		// 		navbarDiv.classList.add('navbar-cng')
		// 	} else {
		// 		navbarDiv.classList.remove('navbar-cng')
		// 	}
		// })

		// const navbarCollapseDiv = document.getElementById('navbar-collapse')
		// const navbarShowBtn = document.getElementById('navbar-show-btn')
		// const navbarCloseBtn = document.getElementById('navbar-close-btn')
		// // show navbar
		// navbarShowBtn.addEventListener('click', () => {
		// 	navbarCollapseDiv.classList.add('navbar-collapse-rmw')
		// })

		// // hide side bar
		// navbarCloseBtn.addEventListener('click', () => {
		// 	navbarCollapseDiv.classList.remove('navbar-collapse-rmw')
		// })

		// document.addEventListener('click', e => {
		// 	if (
		// 		e.target.id != 'navbar-collapse' &&
		// 		e.target.id != 'navbar-show-btn' &&
		// 		e.target.parentElement.id != 'navbar-show-btn'
		// 	) {
		// 		navbarCollapseDiv.classList.remove('navbar-collapse-rmw')
		// 	}
		// })

		// // stop transition and animatino during window resizing
		// let resizeTimer
		// window.addEventListener('resize', () => {
		// 	document.body.classList.add('resize-animation-stopper')
		// 	clearTimeout(resizeTimer)
		// 	resizeTimer = setTimeout(() => {
		// 		document.body.classList.remove('resize-animation-stopper')
		// 	}, 400)
		// })
	}, [])

	return (
		<nav className='navbar'>
			<Link to={`/`} className='site-brand'>
					Исторический<span>Томск</span>
			</Link>
			<button type='button' id='navbar-show-btn' className='flex'>
				<i>
					<FontAwesomeIcon icon='fa-solid fa-bars' />
				</i>
			</button>
			<div id='navbar-collapse navbar-collapse-rmw'>
				<button type='button' id='navbar-close-btn' className='flex'>
					<i>
						<FontAwesomeIcon icon='fas fa-times' />
					</i>
				</button>
				<ul className='navbar-nav'>
					<li className='nav-item'>
						<Link to={`/`} className='nav-link'>
							Главная
						</Link>
					</li>
					<li className='nav-item'>
						<Link to={`/AllHistPlacesPage`} className='nav-link'>
							Исторические места
						</Link>
					</li>
					<li className='nav-item'>
						<Link to={`/about`} className='nav-link'>
							О нас
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}
