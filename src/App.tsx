import Header from './components/Header'


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
              width="24" height="24"  
              fill="#E63946" viewBox="0 0 24 24" >
              <path d="M5 21h14c1.1 0 2-.9 2-2v-7h-2v7H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2"></path>
              <path d="M7 13v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l9-9a.996.996 0 0 0 0-1.41l-3-3a.996.996 0 0 0-1.41 0l-9.01 8.99A1 1 0 0 0 7 13m10-7.59L18.59 7 17.5 8.09 15.91 6.5zm-8 8 5.5-5.5 1.59 1.59-5.5 5.5H9z"></path>
            </svg>,
      title: "Web & App Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet quam fringilla libero rutrum lobortis. Nam id vulputate odio."
    },
    {
      icon: <svg  
              xmlns="http://www.w3.org/2000/svg" 
              width="24" height="24"  
              fill="#E63946" viewBox="0 0 24 24" >
              <path d="M5 21h14c1.1 0 2-.9 2-2v-7h-2v7H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2"></path>
              <path d="M7 13v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l9-9a.996.996 0 0 0 0-1.41l-3-3a.996.996 0 0 0-1.41 0l-9.01 8.99A1 1 0 0 0 7 13m10-7.59L18.59 7 17.5 8.09 15.91 6.5zm-8 8 5.5-5.5 1.59 1.59-5.5 5.5H9z"></path>
            </svg>,
      title: "Digital Marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet quam fringilla libero rutrum lobortis. Nam id vulputate odio."
    },
  ];

  return (
    <div>
      <div id='hero' className='bg-[url(src/assets/hero.png)] bg-cover min-h-screen bg-blend-multiply bg-neutral-400'>
        <Header />

        <div className='flex-col py-45 px-20'>
          <div className='text-white mb-10'>
            <h4 className='poppins-bold'>Fast, secure, and creative digital solutions.</h4>
            <h1 className='poppins-black text-6xl max-w-240 py-2.5'>Build Powerful & Creative Digital Solutions</h1>
            <p className='poppins-light max-w-200'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam provident deleniti unde? Ullam, vero voluptate, architecto deserunt obcaecati dicta magnam repellendus vel blanditiis laudantium magni qui? Repellendus recusandae nobis id!</p>
          </div>

          <div className='bg-red-800 py-2 px-8 text-white w-40 rounded-full border hover:bg-red-900 poppins-medium'>
            <button>Get Started</button>
          </div>
        </div>
      </div>

      <div id='services' className='bg-red-100 py-15'>
        <div className='py-10 text-center'>
          <h1 className='poppins-bold text-4xl'>Ready to grow your business?</h1>
          <p className='poppins-light py-3 max-w-2xl mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero at beatae sunt est minus atque quae eaque maiores enim facere, excepturi dolorem.</p>
          <button className='py-2 px-4 bg-red-800 rounded-full text-white poppins-medium text-sm'>Let's Connect</button>
        </div>

        <div className='grid grid-cols-3 gap-5 px-20'>
          {services.map((service, index) => (
            <div key={index} className='bg-white py-10 px-10'>
              {service.icon}
              <h5 className='poppins-semibold py-2'>{service.title}</h5>
              <p className='poppins-regular text-sm'>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
