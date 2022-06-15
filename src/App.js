import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import User from './pages/User'
import NotFound from './pages/NotFound'
import Wait from './pages/Wait'
import Alert from './components/layout/Alert'
import { GithubProvider } from './context/github/GithubContex'
import { AlertProvider } from './context/alerts/AlertContext'

function App() {
	return (
		<GithubProvider>
			<AlertProvider>
				<Router>
					<div className='flex flex-col justify-between h-screen'>
						<Navbar />
						<main className='container mx-auto px-3 pb-12'>
							<Alert />
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='/about' element={<About />} />
								<Route path='/user/:login' element={<User />} />
								<Route path='/notfound' element={<NotFound />} />
								<Route path='/wait' element={<Wait />} />
								<Route path='/*' element={<NotFound />} />
							</Routes>
						</main>
						<Footer />
					</div>
				</Router>
			</AlertProvider>
		</GithubProvider>
	)
}

export default App
