const Hero = () => {
  return (
    <>
      <section className="h-screen p-11 bg-gray-400 flex flex-col justify-center items-center" id="hero">
        <div className="flex flex-col items-center justify-center h-full p-56 space-y-8">
          <h1 className="text-center text-sky-600 font-bold">Drive your dreams, Redefined</h1>
          <h2 className="text-center text-3xl text-white">Discover premium cars built for performance, comfort and style. Your perfect ride awaits expore now!</h2>
          <form action="#" className="flex space-x-4">
            <input type="text" className="w-[600px] py-4 p-6 rounded-full" />
            <button className="bg-blue-600 text-white rounded-full px-9 py-4">Search Inventory</button>
          </form>
        </div>
        <div className="w-full">
          <img src="sedan.png" className="w-20 h-20" alt="" />
        </div>
      </section>
    </>
  )
}

export default Hero;