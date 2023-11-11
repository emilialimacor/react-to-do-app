import { useState } from 'react'
import styles from './ThemeSwitcher.module.css'
import { XMarkIcon, SunIcon, MoonIcon, SwatchIcon } from '@heroicons/react/24/outline'

export const ThemeSwitcher = () => {
  const [theme, setTheme]  = useState('light')
  const [isColorPicking, setIsColorPicking]  = useState(false)
  const handleThemeBtn = () => setTheme(theme == "light" ? "dark" : "light")

  return(
    <aside className={styles.wrapper}>

      {
        isColorPicking 
        ? (
          <>
          <button >
            a
          </button>
          <input type='range'/>
          </>
        ) :(
          <div className={styles.btns}> 
          <button 
          className='btn'
          aria-label={`Change theme to ${theme == "light" ? "dark" : "light"} mode`}
          role='switch'
          onClick={handleThemeBtn}
          
          >
          {theme == "dark" ? <SunIcon/> : <MoonIcon/>}
          </button>
          <button className='btn'>
            <SwatchIcon/>
            </button>
          </div>
        )
      }
      

    </aside>
  )
}
