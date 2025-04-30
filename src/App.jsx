import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/ui/button'
import Index from './Index'
import { GridPattern } from './components/magicui/grid-pattern'
function App() {
 

  return (
    <>
      <GridPattern className='z-[-99]'/>
      <Index/>
    </>
  )
}

export default App
