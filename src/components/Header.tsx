
const Header = () => {
  return (
    <header className="bg-transparent py-7 text-white flex justify-between px-20">
      <div className="font-bold text-xl poppins-bold">
        <a href="#hero">CodeWave</a>
      </div>

      <div className="flex gap-10 items-center text-sm poppins-regular">
        <a href="#services" className="hover:text-red-800">Services</a>
        <a href="#portfolio" className="hover:text-red-800">Portfolio</a>
        <a href="#testimonials" className="hover:text-red-800">Testimonials</a>
        <a href="#about" className="hover:text-red-800">About</a>

        <div className="bg-red-800 py-2 px-6 rounded-full border hover:bg-red-900 poppins-medium">
            <button>Get A Quote</button>
        </div>
      </div>
    </header>
  )
}

export default Header
