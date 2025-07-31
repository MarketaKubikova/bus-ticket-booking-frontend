import type {ReactNode} from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            <header className="bg-primary text-white p-4 text-xl font-bold">🚌 Bus Booking</header>
            <main className="p-4">{children}</main>
            <footer className="p-4 text-center text-sm text-gray-500">© 2025 BusBooking</footer>
        </div>
    )
}

export default Layout
