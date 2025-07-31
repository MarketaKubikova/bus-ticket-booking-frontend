import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import Layout from './layouts/Layout'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <AppRoutes />
            </Layout>
        </BrowserRouter>
    )
}

export default App
