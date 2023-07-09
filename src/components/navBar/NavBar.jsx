import { Link } from 'react-router-dom'
import './NavBar.scss'

export const NavBar = () => {
	return (
		<nav className='navbar'>
			<div className='container flex'>
				<Link to={`/`} className='site-brand'>
					Исторический<span>Томск</span>
				</Link>
				<button type='button' id='navbar-show-btn' className='flex'>
					<i className='fas fa-bars'></i>
				</button>
				<div id='navbar-collapse'>
					<button type='button' id='navbar-close-btn' className='flex'>
						<i className='fas fa-times'></i>
					</button>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<Link to={`/`} className='nav-link'>
								Главная
							</Link>
						</li>
						<li className='nav-item'>
							<Link to={`/histPages`} className='nav-link'>
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
			</div>
		</nav>
	)
}
