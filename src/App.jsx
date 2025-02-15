
import AppLayout from './components/AppLayout'
import './App.css'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'


const App = () => (
	<AppLayout>
		<LandingPage />
		<AboutPage />
	</AppLayout>
)

export default App
