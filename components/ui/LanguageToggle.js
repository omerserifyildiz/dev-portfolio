'use client'

import trFlag from '../icons/TR.svg'
import enFlag from '../icons/EN.png'

const LanguageToggle = ({ currentLang, onToggle }) => {
  const isTr = currentLang === 'tr'

  return (
    <button
      onClick={() => onToggle(isTr ? 'en' : 'tr')}
      className={`toggle-track ${!isTr ? 'toggle-active' : ''}`}
      aria-label="Dil Değiştir"
    >
      <div className="toggle-knob">
        <img
          src={isTr ? trFlag.src : enFlag.src}
          alt={isTr ? "Türkçe" : "English"}
          className="flag-img"
        />
      </div>
    </button>
  )
}

export default LanguageToggle