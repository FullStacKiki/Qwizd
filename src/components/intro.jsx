import React from 'react'
import { Badge } from "../components/ui/badge"

const Intro = () => {
  return (
    <>
      <div className='mt-10 text-left px-4 md:px-20 lg:px-40 lg:text-center lg:mt-40 lg:mb-40'>
        <Badge className="p-2 rounded-2xl text-yellow-700 bg-yellow-200 font-semibold w-fit">Un nuovo modo di vivere il design</Badge>
        <h1 className='mt-4 font-bold text-4xl md:text-5xl lg:mb-5 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-800'>
          Blossom: Design e Sostenibilità nei Diffusori
        </h1>
        <p className='mt-4 text-gray-800 text-base md:text-lg lg:text-center'>
          Nata nel novembre 2024, Blossom si propone di rivoluzionare il settore dei diffusori con soluzioni eleganti, sostenibili e fuori dal comune.
          Dì addio alla monotonia delle solite boccette e scopri un nuovo modo di profumare e arredare gli spazi.
        </p>
        <button className='mt-6 p-4 px-6 bg-white border-2 border-yellow-600 font-semibold rounded-lg hover:bg-gradient-to-r from-yellow-700 to-yellow-800 hover:text-white transition duration-500'>
          Scopri prodotto
        </button>
      </div>

      <div className='mt-20 bg-slate-100 px-4 md:px-20 lg:px-40 py-20 lg:pt-30 lg:pb-30 lg:mb-20'>
        <h1 className='font-bold text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-800'>
          Perché scegliere Blossom?
        </h1>
        <p className='mt-4 text-gray-800 text-center max-w-3xl mx-auto'>
          Blossom non è solo un diffusore: è un oggetto di design che riflette valori di sostenibilità, originalità e benessere.
          Ogni dettaglio è pensato per distinguersi e per rispettare l’ambiente.
        </p>

        {/* Cards */}
        <div className='grid md:grid-cols-3 gap-6 mt-10'>
          {[
            {
              title: "Design Unico",
              text: "Linee eleganti, materiali naturali e forme mai viste prima: Blossom è la risposta a chi cerca qualcosa di veramente diverso."
            },
            {
              title: "Eco-Friendly",
              text: "Usiamo materiali riciclabili, ricariche naturali e un packaging sostenibile. Blossom è pensato per rispettare l’ambiente, senza rinunciare allo stile."
            },
            {
              title: "Esperienza Sensoriale",
              text: "I nostri diffusori non profumano soltanto: trasformano ogni ambiente in un’esperienza sensoriale completa."
            }
          ].map((item, i) => (
            <div key={i} className='bg-white rounded-2xl p-6 shadow-2xl text-center'>
              <h2 className='font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-800'>
                {item.title}
              </h2>
              <p className='mt-4 text-gray-800 text-sm'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Prodotti */}
      <div className='px-4 md:px-20 lg:px-40'>
        <h1 className='lgmt-10 font-bold text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-800'>
          Prodotti
        </h1>

        {/* Prodotto 1 */}
        <div className='mt-10 md:flex md:gap-10  align-middle items-center'>
          <img src="product.png" alt="Diffusore" className='w-64 mx-auto md:mx-0 rounded-2xl lg:rounded lg:w-128' />
          <div className='mt-6 md:mt-0 '>
            <h2 className='font-bold text-xl mr-15.5 ml-15.5 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-800 lg:text-3xl'>Diffusore</h2>
            <h3 className='mt-1 mr-15.5 ml-15.5 text-lg lg:text-xl'>Descrizione prodotto:</h3>
            <p className='mt-2 mr-15.5 ml-15.5 text-sm max-w-xl lg:text-lg'>
              Profuma gli ambienti con stile e sostenibilità. I nostri diffusori, con base in legno poroso e corda riciclata, uniscono design e funzionalità.
              Zero sprechi, massimo impatto.
            </p>
            <button className='mt-4 mr-15.5 ml-15.5 px-8 py-3 bg-white border-2 border-yellow-600 font-semibold rounded-lg hover:bg-gradient-to-r from-yellow-700 to-yellow-800 hover:text-white transition duration-500 lg:w-64'>
              Acquista
            </button>
          </div>
        </div>

        {/* Prodotto 2 */}
        <div className='mt-20 md:flex md:flex-row-reverse md:gap-10 items-center bg-slate-100 p-6 rounded-2xl'>
          <img src="charge.png" alt="Ricariche" className='w-64 mx-auto md:mx-0 rounded-2xl lg:rounded lg:w-128' />
          <div className='mt-6 md:mt-0 '>
            <h2 className='mr-6.5 ml-6.5 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-800 lg:text-3xl'>Ricariche</h2>
            <h3 className='mr-6.5 ml-6.5 mt-1 text-lg lg:text-xl'>Descrizione prodotto:</h3>
            <p className='mr-6.5 ml-6.5 mt-2 text-sm max-w-xl lg:text-lg'>
              Rinnova il profumo, non il contenitore. Le nostre ricariche ecologiche ti permettono di prolungare la vita del tuo diffusore con stile e responsabilità.
              Meno sprechi, più essenza.
            </p>
            <button className='mr-6.5 ml-6.5 mt-4 px-8 py-3 bg-white border-2 border-yellow-600 font-semibold rounded-lg hover:bg-gradient-to-r from-yellow-700 to-yellow-800 hover:text-white transition duration-500 lg:w-64'>
              Acquista
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className='mt-20 p-6 text-center bg-slate-50 text-gray-600 text-sm'>
        <p>© 2025 Blossom. Tutti i diritti riservati.</p>
      </footer>
    </>
  )
}

export default Intro
