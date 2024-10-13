'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, ShoppingCart, ChevronDown, ChevronUp, Facebook, Instagram, Twitter, Sun, Moon } from 'lucide-react'
import { Dialog } from '@headlessui/react'

// Mock data for ceramics pieces with real images
const ceramicsPieces = [
  { id: 1, name: 'Blue Vase', type: 'Vase', price: 120, image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZSUyMHZhc2V8ZW58MHx8MHx8fDA%3D', description: 'Elegant blue vase with a sleek, modern design. Perfect for showcasing your favorite flowers or as a standalone decorative piece.' },
  { id: 2, name: 'Earthen Bowl', type: 'Bowl', price: 80, image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFydGhlbiUyMGJvd2x8ZW58MHx8MHx8fDA%3D', description: 'Rustic earthen bowl with a natural, organic feel. Ideal for serving salads or as a decorative centerpiece.' },
  { id: 3, name: 'Abstract Sculpture', type: 'Sculpture', price: 250, image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBzY3VscHR1cmV8ZW58MHx8MHx8fDA%3D', description: 'Striking abstract sculpture that adds a touch of sophistication to any space. A true conversation starter.' },
  { id: 4, name: 'Ceramic Plate Set', type: 'Plate', price: 150, image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VyYW1pYyUyMHBsYXRlfGVufDB8fDB8fHww', description: 'Set of four beautifully crafted ceramic plates. Each piece is unique, making every meal a special occasion.' },
  { id: 5, name: 'Minimalist Mug', type: 'Mug', price: 40, image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbGlzdCUyMG11Z3xlbnwwfHwwfHx8MA%3D%3D', description: 'Sleek and simple minimalist mug. Perfect for your morning coffee or afternoon tea.' },
  { id: 6, name: 'Textured Planter', type: 'Planter', price: 90, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGV4dHVyZWQlMjBwbGFudGVyfGVufDB8fDB8fHww', description: 'Beautifully textured planter that adds depth and interest to your indoor garden. Suitable for a variety of plants.' },
]

// Mock data for blog posts
const blogPosts = [
  { id: 1, title: 'The Art of Glazing', excerpt: 'Explore the various techniques...', image: '/placeholder.svg?height=200&width=300' },
  { id: 2, title: 'Inspiration from Nature', excerpt: 'How the natural world shapes...', image: '/placeholder.svg?height=200&width=300' },
  { id: 3, title: 'Ceramic Art Through History', excerpt: 'A journey through time...', image: '/placeholder.svg?height=200&width=300' },
]

export function CeramicsArtistWebsiteComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [cart, setCart] = useState([])
  const [expandedFAQs, setExpandedFAQs] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [language, setLanguage] = useState('en')
  const [selectedPiece, setSelectedPiece] = useState(null)

  useEffect(() => {
    // Check for OS theme preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true)
    }

    // Listen for changes in OS theme preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      setIsDarkMode(e.matches)
    })
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const navigateTo = (section) => {
    setActiveSection(section)
    closeMenu()
  }

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId))
  }

  const toggleFAQ = (index) => {
    setExpandedFAQs(expandedFAQs.includes(index)
      ? expandedFAQs.filter(i => i !== index)
      : [...expandedFAQs, index]
    )
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  const openModal = (piece) => {
    setSelectedPiece(piece)
  }

  const closeModal = () => {
    setSelectedPiece(null)
  }

  const translate = (en, es) => {
    return language === 'en' ? en : es
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} font-sans`}>
      {/* Header */}
      <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold">{'Eva Carmona Navarro'}</div>
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => navigateTo('home')} className="hover:text-gray-600">{translate('Home', 'Inicio')}</button>
            <button onClick={() => navigateTo('portfolio')} className="hover:text-gray-600">{translate('Portfolio', 'Portafolio')}</button>
            <button onClick={() => navigateTo('shop')} className="hover:text-gray-600">{translate('Shop', 'Tienda')}</button>
            <button onClick={() => navigateTo('about')} className="hover:text-gray-600">{translate('About', 'Sobre mí')}</button>
            <button onClick={() => navigateTo('contact')} className="hover:text-gray-600">{translate('Contact', 'Contacto')}</button>
            <button onClick={() => navigateTo('faq')} className="hover:text-gray-600">FAQ</button>
            <button onClick={() => navigateTo('blog')} className="hover:text-gray-600">Blog</button>
          </nav>
          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="hover:text-gray-600">
              {isDarkMode ? <Sun /> : <Moon />}
            </button>
            <button onClick={toggleLanguage} className="hover:text-gray-600">
              {language === 'en' ? '🇪🇸' : '🇬🇧'}
            </button>
            <button onClick={() => navigateTo('cart')} className="hover:text-gray-600">
              <ShoppingCart />
              <span className="ml-1">{cart.length}</span>
            </button>
            <button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
          <nav className="container mx-auto px-4 py-2 flex flex-col">
            <button onClick={() => navigateTo('home')} className="py-2 hover:bg-gray-100">{translate('Home', 'Inicio')}</button>
            <button onClick={() => navigateTo('portfolio')} className="py-2 hover:bg-gray-100">{translate('Portfolio', 'Portafolio')}</button>
            <button onClick={() => navigateTo('shop')} className="py-2 hover:bg-gray-100">{translate('Shop', 'Tienda')}</button>
            <button onClick={() => navigateTo('about')} className="py-2 hover:bg-gray-100">{translate('About', 'Sobre mí')}</button>
            <button onClick={() => navigateTo('contact')} className="py-2 hover:bg-gray-100">{translate('Contact', 'Contacto')}</button>
            <button onClick={() => navigateTo('faq')} className="py-2 hover:bg-gray-100">FAQ</button>
            <button onClick={() => navigateTo('blog')} className="py-2 hover:bg-gray-100">Blog</button>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div>
            {/* Hero Section */}
            <section className="mb-16">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt={translate("Featured Ceramic Art", "Arte Cerámico Destacado")}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">{translate("Eva Carmona Navarro", "Artesanía Cerámica")}</h1>
                    <button
                      onClick={() => navigateTo('portfolio')}
                      className="bg-white text-gray-800 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300"
                    >
                      {translate("View Portfolio", "Ver Portafolio")}
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-serif mb-4">{translate("About the Artist", "Sobre el Artista")}</h2>
              <p className="mb-4">
                {translate(
                  "Welcome to my world of ceramic artistry. I'm passionate about creating unique pieces that blend form and function, inspired by the beauty of nature and the rich history of pottery.",
                  "Bienvenido a mi mundo de artesanía cerámica. Me apasiona crear piezas únicas que combinan forma y función, inspiradas en la belleza de la naturaleza y la rica historia de la alfarería."
                )}
              </p>
              <button
                onClick={() => navigateTo('about')}
                className="text-blue-600 hover:underline"
              >
                {translate("Learn more about my journey", "Conoce más sobre mi trayectoria")}
              </button>
            </section>

            {/* Featured Collection */}
            <section>
              <h2 className="text-3xl font-serif mb-4">{translate("Featured Collection", "Colección Destacada")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ceramicsPieces.slice(0, 3).map(piece => (
                  <div key={piece.id} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden`}>
                    <Image
                      src={piece.image}
                      alt={piece.name}
                      width={300}
                      height={300}
                      layout="responsive"
                      onClick={() => openModal(piece)}
                      className="cursor-pointer"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{translate(piece.name, piece.name)}</h3>
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{piece.price.toFixed(2)} €</p>
                      <button
                        onClick={() => addToCart(piece)}
                        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                      >
                        {translate("Add to Cart", "Añadir al Carrito")}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        
        )}

        {activeSection === 'portfolio' && (
          <div>
            <h2 className="text-3xl font-serif mb-8">{translate("Portfolio", "Portafolio")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ceramicsPieces.map(piece => (
                <div key={piece.id} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden`}>
                  <Image
                    src={piece.image}
                    alt={piece.name}
                    width={300}
                    height={300}
                    layout="responsive"
                    onClick={() => openModal(piece)}
                    className="cursor-pointer"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{translate(piece.name, piece.name)}</h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>{translate(piece.type, piece.type)}</p>
                    <p className="font-semibold">{piece.price.toFixed(2)} €</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'shop' && (
          <div>
            <h2 className="text-3xl font-serif mb-8">{translate("Shop", "Tienda")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ceramicsPieces.map(piece => (
                <div key={piece.id} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden`}>
                  <Image
                    src={piece.image}
                    alt={piece.name}
                    width={300}
                    height={300}
                    layout="responsive"
                    onClick={() => openModal(piece)}
                    className="cursor-pointer"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{translate(piece.name, piece.name)}</h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>{translate(piece.type, piece.type)}</p>
                    <p className="font-semibold mb-2">{piece.price.toFixed(2)} €</p>
                    <button
                      onClick={() => addToCart(piece)}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                    >
                      {translate("Add to Cart", "Añadir al Carrito")}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'about' && (
          <div>
            <h2 className="text-3xl font-serif mb-8">{translate("About the Artist", "Sobre el Artista")}</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt={translate("Artist in Studio", "Artista en el Estudio")}
                  width={600}
                  height={400}
                  layout="responsive"
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-1/2">
                <p className="mb-4">
                  {translate(
                    "As a ceramics artist with over 15 years of experience, I've dedicated my life to exploring the boundless possibilities of clay. My journey began in a small studio in the countryside, where I first fell in love with the tactile nature of pottery.",
                    "Como artista ceramista con más de 15 años de experiencia, he dedicado mi vida a explorar las infinitas posibilidades de la arcilla. Mi viaje comenzó en un pequeño estudio en el campo, donde me enamoré por primera vez de la naturaleza táctil de la alfarería."
                  )}
                </p>
                <p className="mb-4">
                  {translate(
                    "Inspired by the organic forms found in nature and the rich traditions of ceramic art from around the world, I strive to create pieces that are both functional and beautiful. Each piece is handcrafted with care, reflecting my commitment to quality and artistic expression.",
                    "Inspirado por las formas orgánicas encontradas en la naturaleza y las ricas tradiciones del arte cerámico de todo el mundo, me esfuerzo por crear piezas que sean tanto funcionales como hermosas. Cada pieza está hecha a mano con cuidado, reflejando mi compromiso con la calidad y la expresión artística."
                  )}
                </p>
                <p>
                  {translate(
                    "In my work, you'll find a blend of traditional techniques and contemporary designs. I'm particularly drawn to exploring textures and glazes that evoke the natural world, from the smoothness of river stones to the rough bark of ancient trees.",
                    "En mi trabajo, encontrarás una mezcla de técnicas tradicionales y diseños contemporáneos. Me atrae particularmente explorar texturas y esmaltes que evoquen el mundo natural, desde la suavidad de las piedras de río hasta la corteza rugosa de los árboles antiguos."
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'contact' && (
          <div>
            <h2 className="text-3xl font-serif mb-8">{translate("Contact", "Contacto")}</h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">{translate("Name", "Nombre")}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full px-3 py-2 border rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">{translate("Email", "Correo Electrónico")}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full px-3 py-2 border rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-1">{translate("Subject", "Asunto")}</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className={`w-full px-3 py-2 border rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">{translate("Message", "Mensaje")}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={`w-full px-3 py-2 border rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  {translate("Send Message", "Enviar Mensaje")}
                </button>
              </form>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">{translate("Connect with me", "Conéctate conmigo")}</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    <Facebook />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-pink-600">
                    <Instagram />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-400">
                    <Twitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'faq' && (
          <div>
            <h2 className="text-3xl font-serif mb-8">{translate("Frequently Asked Questions", "Preguntas Frecuentes")}</h2>
            <div className="space-y-4">
              {[
                {
                  question: translate("How do I care for my ceramic pieces?", "¿Cómo cuido mis piezas de cerámica?"),
                  answer: translate("To care for your ceramic pieces, hand wash them with mild soap and warm water. Avoid sudden temperature changes and harsh cleaning agents.", "Para cuidar tus piezas de cerámica, lávalas a mano con jabón suave y agua tibia. Evita cambios bruscos de temperatura y agentes de limpieza agresivos.")
                },
                {
                  question: translate("Do you offer custom orders?", "¿Ofreces pedidos personalizados?"),
                  answer: translate("Yes, I offer custom orders for special occasions or specific design requirements. Please contact me to discuss your needs.", "Sí, ofrezco pedidos personalizados para ocasiones especiales o requisitos de diseño específicos. Por favor, contáctame para discutir tus necesidades.")
                },
                {
                  question: translate("What is your return policy?", "¿Cuál es tu política de devoluciones?"),
                  answer: translate("I offer a 30-day return policy for unused items in their original packaging. Custom orders are non-refundable.", "Ofrezco una política de devolución de 30 días para artículos no utilizados en su embalaje original. Los pedidos personalizados no son reembolsables.")
                },
                {
                  question: translate("How long does shipping take?", "¿Cuánto tarda el envío?"),
                  answer: translate("Shipping typically takes 3-5 business days for domestic orders and 7-14 days for international orders.", "El envío generalmente tarda de 3 a 5 días hábiles para pedidos nacionales y de 7 a 14 días para pedidos internacionales.")
                },
                {
                  question: translate("What are the shipping costs?", "¿Cuáles son los costos de envío?"),
                  answer: translate("Shipping within Spain costs an average of 8€. For international shipping, the cost varies but typically ranges from 15€ to 30€ depending on the destination and package weight.", "El envío dentro de España cuesta un promedio de 8€. Para envíos internacionales, el costo varía pero generalmente oscila entre 15€ y 30€ dependiendo del destino y el peso del paquete.")
                },
              ].map((faq, index) => (
                <div key={index} className="border-b pb-4">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left font-semibold"
                  >
                    {faq.question}
                    {expandedFAQs.includes(index) ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  {expandedFAQs.includes(index) && (
                    <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'blog' && (
          <div>
            <h2 className="text-3xl font-serif mb-8">{translate("Blog", "Blog")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map(post => (
                <div key={post.id} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden`}>
                  <Image
                    src={post.image}
                    alt={translate(post.title, post.title)}
                    width={300}
                    height={200}
                    layout="responsive"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{translate(post.title, post.title)}</h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{translate(post.excerpt, post.excerpt)}</p>
                    <button className="text-blue-600 hover:underline">{translate("Read more", "Leer más")}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'cart' && (
          <div>
            <h2 className="text-3xl font-serif mb-8">{translate("Shopping Cart", "Carrito de Compras")}</h2>
            {cart.length === 0 ? (
              <p>{translate("Your cart is empty.", "Tu carrito está vacío.")}</p>
            ) : (
              <div>
                {cart.map(item => (
                  <div key={item.id} className="flex items-center justify-between border-b py-4">
                    <div className="flex items-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-md"
                      />
                      <div className="ml-4">
                        <h3 className="font-semibold">{translate(item.name, item.name)}</h3>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.price.toFixed(2)} €</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      {translate("Remove", "Eliminar")}
                    </button>
                  </div>
                ))}
                <div className="mt-8">
                  <p className="text-xl font-semibold">
                    {translate("Total", "Total")}: {cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)} €
                  </p>
                  <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                    {translate("Proceed to Checkout", "Proceder al Pago")}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-900'} text-white py-8`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">{translate("Eva Carmona Navarro", "Artesanía Cerámica")}</h3>
              <p>{translate("Handcrafted ceramics for your home and life.", "Cerámicas hechas a mano para tu hogar y tu vida.")}</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">{translate("Quick Links", "Enlaces Rápidos")}</h3>
              <ul className="space-y-2">
                <li><button onClick={() => navigateTo('home')} className="hover:text-gray-300">{translate("Home", "Inicio")}</button></li>
                <li><button onClick={() => navigateTo('portfolio')} className="hover:text-gray-300">{translate("Portfolio", "Portafolio")}</button></li>
                <li><button onClick={() => navigateTo('shop')} className="hover:text-gray-300">{translate("Shop", "Tienda")}</button></li>
                <li><button onClick={() => navigateTo('about')} className="hover:text-gray-300">{translate("About", "Sobre mí")}</button></li>
                <li><button onClick={() => navigateTo('contact')} className="hover:text-gray-300">{translate("Contact", "Contacto")}</button></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-4">{translate("Stay Connected", "Mantente Conectado")}</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300"><Facebook /></a>
                <a href="#" className="hover:text-gray-300"><Instagram /></a>
                <a href="#" className="hover:text-gray-300"><Twitter /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © 2023 {translate("Eva Carmona Navarro", "Artesanía Cerámica")}. {translate("All rights reserved.", "Todos los derechos reservados.")}
          </div>
        </div>
      </footer>

      {/* Modal for product details */}
      <Dialog open={selectedPiece !== null} onClose={closeModal}>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className={`mx-auto max-w-sm rounded ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
            {selectedPiece && (
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <Image
                    src={selectedPiece.image}
                    alt={selectedPiece.name}
                    width={300}
                    height={300}
                    layout="responsive"
                  />
                </div>
                <div className="md:w-1/2 p-4">
                  <Dialog.Title className="text-lg font-medium">{translate(selectedPiece.name, selectedPiece.name)}</Dialog.Title>
                  <Dialog.Description className="mt-2 text-sm text-gray-500">
                    {translate(selectedPiece.description, selectedPiece.description)}
                  </Dialog.Description>
                  <p className="mt-4 font-bold">{selectedPiece.price.toFixed(2)} €</p>
                  <button
                    className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                    onClick={() => {
                      addToCart(selectedPiece)
                      closeModal()
                    }}
                  >
                    {translate("Add to Cart", "Añadir al Carrito")}
                  </button>
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
}