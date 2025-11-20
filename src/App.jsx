import Hero from './components/Hero'
import Services from './components/Services'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]"></div>
      <div className="relative">
        {/* Simple top bar */}
        <header className="sticky top-0 z-10 backdrop-blur bg-slate-900/60 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
            <a href="#" className="font-semibold">Blue Hair Studio</a>
            <nav className="hidden md:flex items-center gap-6 text-blue-100">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#booking" className="hover:text-white">Book</a>
              <a href="/test" className="hover:text-white">System Check</a>
            </nav>
          </div>
        </header>

        <Hero />
        <Services />
        <BookingForm />
        <Footer />
      </div>
    </div>
  )
}

export default App