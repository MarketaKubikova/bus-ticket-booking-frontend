import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes later */}
    </Routes>
)

export default AppRoutes
