import { Feature } from "../components/feature/Feature"
import { Header } from "../components/header/Header"
import { NavBar } from "../components/navBar/NavBar"
import { Video } from "../components/video/Video"

function Home() {
	return (
			<>
				<NavBar />
				<Header />
				<Feature />
				<Video />
			</>
	)	
}

export default Home
