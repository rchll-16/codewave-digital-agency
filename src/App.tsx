import { useState, useEffect } from 'react'
import Header from './components/Header'
import p1 from "./assets/Rectangle 4.png"
import p2 from "./assets/Rectangle 5.png"
import p3 from "./assets/Rectangle 6.png"
import p4 from "./assets/Rectangle 7.png"
import Footer from './components/Footer'

const App = () => {
  const services = [
    {
      icon: <svg  
              xmlns="http://www.w3.org/2000/svg" 
              width="44" height="44"  
              fill="#E63946" viewBox="0 0 24 24" >
              <path d="M5 21h14c1.1 0 2-.9 2-2v-7h-2v7H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2"></path>
              <path d="M7 13v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l9-9a.996.996 0 0 0 0-1.41l-3-3a.996.996 0 0 0-1.41 0l-9.01 8.99A1 1 0 0 0 7 13m10-7.59L18.59 7 17.5 8.09 15.91 6.5zm-8 8 5.5-5.5 1.59 1.59-5.5 5.5H9z"></path>
            </svg>,
      title: "Creative Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet quam fringilla libero rutrum lobortis. Nam id vulputate odio."
    },
    {
      icon: <svg  
              xmlns="http://www.w3.org/2000/svg" 
              width="44" height="44"  
              fill="#E63946" viewBox="0 0 24 24" >
              <path d="M20 4h-8.59L10 2.59C9.63 2.22 9.11 2 8.59 2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-8.79 10.29L9.8 15.7l-3.71-3.71L9.8 8.28l1.41 1.41-2.29 2.29 2.29 2.29Zm3 1.41-1.41-1.41L15.09 12 12.8 9.71l1.41-1.41 3.71 3.71-3.71 3.71Z"></path>
            </svg>,
      title: "Web & App Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet quam fringilla libero rutrum lobortis. Nam id vulputate odio."
    },
    {
      icon: <svg  
              xmlns="http://www.w3.org/2000/svg" 
              width="44" height="44"  
              fill="#E63946" viewBox="0 0 24 24" >
              <path d="M3 15h2v6H3zm4-2h2v8H7zm4-1h2v9h-2zm4 1h2v8h-2zm4-5h2v13h-2z"></path><path d="m19.21 2.38-4.87 6.21-5-4-6.13 7.79 1.58 1.24 4.87-6.21 5 4 6.13-7.79z"></path>
            </svg>,
      title: "Digital Marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet quam fringilla libero rutrum lobortis. Nam id vulputate odio."
    },
    {
      icon: <svg  
              xmlns="http://www.w3.org/2000/svg" 
              width="44" height="44"  
              fill="#E63946" viewBox="0 0 24 24" >
              <path d="M12 2C6.49 2 2 6.49 2 12c0 2.12.68 4.19 1.93 5.9l-1.75 2.53c-.21.31-.24.7-.06 1.03.17.33.51.54.89.54h9c5.51 0 10-4.49 10-10S17.51 2 12 2m2 13H7v-2h7zm3-4H7V9h10z"></path>
            </svg>,
      title: "Social Media Management",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet quam fringilla libero rutrum lobortis. Nam id vulputate odio."
    },
    {
      icon: <svg  
              xmlns="http://www.w3.org/2000/svg" 
              width="44" height="44"  
              fill="#E63946" viewBox="0 0 24 24" >
              <path d="M2.95 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-.16-.05-.31-.11-.44s-1.72-3.45-1.72-3.45A2 2 0 0 0 17.33 2H6.56c-.76 0-1.45.42-1.79 1.11L3.05 6.56c-.07.14-.11.29-.11.45v13ZM12 15c-2.76 0-5-2.24-5-5h2c0 1.65 1.35 3 3 3s3-1.35 3-3h2c0 2.76-2.24 5-5 5M6.56 4h10.76l1 2H5.56z"></path>
            </svg>,
      title: "eCommerce Solutions",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet quam fringilla libero rutrum lobortis. Nam id vulputate odio."
    },
    {
      icon: <svg  
              xmlns="http://www.w3.org/2000/svg" 
              width="44" height="44"  
              fill="#E63946" viewBox="0 0 24 24" >
              <path d="M12 2C6.49 2 2 6.49 2 12v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1H4.07C4.56 7.06 7.93 4 12 4s7.44 3.06 7.93 7H18c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h2v1c0 .55-.45 1-1 1h-4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c1.65 0 3-1.35 3-3v-7c0-5.51-4.49-10-10-10"></path>
            </svg>,
      title: "Ongoing Support",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet quam fringilla libero rutrum lobortis. Nam id vulputate odio."
    },
  ];

  const testimonials = [
    {
      tagline: "Creatives Mind and Works!",
      desc: " Nullam viverra leo quis libero vulputate ultricies sit amet et lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ",
      avatar: "src/assets/avatar.png",
      name: "John Doe",
      position: "CEO, Centrix"
    },
    {
      tagline: "Amazing Experience!",
      desc: " Nullam viverra leo quis libero vulputate ultricies sit amet et lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      avatar: "src/assets/avatar.png",
      name: "William James",
      position: "CTO, CodeWave"
    },
    {
      tagline: "Great Work!",
      desc: " Nullam viverra leo quis libero vulputate ultricies sit amet et lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      avatar: "src/assets/avatar.png",
      name: "Benjamin Franklin",
      position: "COO, Codex" 
    },
  ]

  const team = [
    {
      avatar: "src/assets/team2.png",
      name: "Alex Carter",
      position: "Co-Founder & CEO"
    },
    {
      avatar: "src/assets/team1.png",
      name: "Maria Gomez",
      position: "Operations Director"
    },
    {
      avatar: "src/assets/team3.png",
      name: "James Lee",
      position: "HR Director"
    },
  ]

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setFade(true); // fade in
      }, 300);
    }, 3000); // change every 3s

    return () => clearInterval(interval);
  }, []);

  const clientLogos = [
    "src/assets//logos/logo1.png",
    "src/assets//logos/logo2.png",
    "src/assets//logos/logo3.png",
    "src/assets//logos/logo4.png",
  ];


  return (
    <div>
      <div id="hero" className='bg-[url(src/assets/hero.png)] bg-cover min-h-screen bg-blend-multiply bg-neutral-400 pt-24'>
        <Header />

        <div className='flex-col py-45 px-24'>
          <div className='text-white mb-10'>
            <h4 className='poppins-bold'>Fast, secure, and creative digital solutions.</h4>
            <h1 className='poppins-black text-6xl max-w-240 py-2.5'>Build Powerful & Creative Digital Solutions</h1>
            <p className='poppins-light max-w-200'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam provident deleniti unde? Ullam, vero voluptate, architecto deserunt obcaecati dicta magnam repellendus vel blanditiis laudantium magni qui? Repellendus recusandae nobis id!</p>
          </div>

          <button className='bg-red-800 py-2 px-8 text-white rounded-full border hover:bg-red-900 poppins-medium'>Get Started</button>
        </div>
      </div>

      <div id='services' className='bg-red-100 py-15'>
        <div className='py-10 text-center'>
          <h1 className='poppins-bold text-4xl'>Ready to grow your business?</h1>
          <p className='poppins-light py-3 max-w-2xl mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero at beatae sunt est minus atque quae eaque maiores enim facere, excepturi dolorem.</p>
          <button className='py-2 px-4 mt-4 bg-red-800 rounded-full text-white poppins-medium text-sm hover:bg-red-900'>Let's Connect</button>
        </div>

        <div className='grid grid-cols-3 gap-5 px-24 py-7'>
          {services.map((service, index) => (
            <div key={index} className='bg-white py-10 px-10'>
              {service.icon}
              <h5 className='poppins-semibold py-2'>{service.title}</h5>
              <p className='poppins-regular text-sm'>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div id='portfolio' className='py-28'>
          <div className='text-center py-10'>
            <h1 className='poppins-bold text-4xl'>Portfolio</h1>
            <p className='poppins-light py-3 max-w-xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsam et dolore provident aliquam quidem quae.</p>
          </div>

          <div className='flex justify-center gap-6 px-24'>
            <img src={p1} alt="Portfolio Picture" className='w-80'/>
            <img src={p2} alt="Portfolio Picture" className='w-80'/>
            <img src={p3} alt="Portfolio Picture" className='w-80'/>
            <img src={p4} alt="Portfolio Picture" className='w-80'/>
          </div>

          <div className='flex justify-center py-10'>
            <button className='py-2 px-4 mt-4 bg-red-800 rounded-full text-white poppins-medium text-sm hover:bg-red-900'>Explore More</button>
          </div>
      </div>

      <div id='testimonials' className='py-27'>
        <div className='text-center py-7'>
          <h1 className='poppins-bold text-4xl'>Our Clients</h1>
          <p className='poppins-light py-3 max-w-xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsam et dolore provident aliquam quidem quae.</p>
        </div>

        {/* Logo Loop */}
        <div className="overflow-hidden py-3 bg-transparent border">
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Client Logo"
                className="h-12 w-auto"
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center px-24 py-16 bg-red-100">
          <div
            className={`py-12 px-10 max-w-lg text-center transition-all duration-500
              ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            <h4 className='poppins-semibold text-xl mb-4'>
              "{testimonials[current].tagline}"
            </h4>

            <p className='poppins-regular text-md text-gray-600 mb-8'>
              {testimonials[current].desc}
            </p>

            <img 
              src={testimonials[current].avatar} 
              alt="Client Avatar"  
              className='w-18 h-18 rounded-full mx-auto mb-4'
            />

            <div>
              <h5 className='poppins-semibold'>
                {testimonials[current].name}
              </h5>
              <p className='poppins-light text-xs text-gray-500'>
                {testimonials[current].position}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id='about' className='py-30'>
        <div className='text-center'>
          <h1 className='poppins-bold text-4xl'>The People Behind Our Success</h1>
          <p className='poppins-light py-3 max-w-xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsam et dolore provident aliquam quidem quae.</p>
        </div>

        <div className='flex flex-wrap justify-center gap-10 px-24 py-7 text-center'>
          {team.map((member, index) => (
            <div key={index} className='py-10'>
              <img src={member.avatar} alt="Team Member" className='w-80 h-80 mx-auto'/>
              <h5 className='poppins-semibold mt-5'>{member.name}</h5>
              <p className='poppins-regular text-sm'>{member.position}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
