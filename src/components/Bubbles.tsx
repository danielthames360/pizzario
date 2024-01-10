'use client'

import React, { useEffect, useState } from 'react'

// BubbleProps ahora solo necesita un color ya que los estilos se generan dentro del componente
interface BubbleProps {
  color: string
}

const Bubble: React.FC<BubbleProps> = ({ color }) => {
  const [style, setStyle] = useState<React.CSSProperties>({})

  useEffect(() => {
    const size = Math.random() * (15 - 5) + 10 // Tamaño entre 10px y 30px
    const animationDuration = `${Math.random() * 2 + 10}s` // Duración entre 20s y 40s
    const animationDelay = `${Math.random() * 10}s` // Retraso entre 0s y 5s
    const leftPosition = `${Math.random() * 100}vw`

    const newStyle: React.CSSProperties = {
      width: `${size}px`,
      height: `${size}px`,
      left: leftPosition,
      animationDuration,
      animationDelay,
      backgroundColor: color
    }

    const hasZigzag = Math.random() < 0.5 // 50% de las burbujas tendrán zigzag
    if (hasZigzag) {
      newStyle.animationName = 'zigzag, moveUpwards' // Aplica ambas animaciones
    } else {
      newStyle.animationName = 'moveUpwards' // Solo movimiento hacia arriba
    }

    setStyle(newStyle) // Aplica los estilos generados al estado
  }, [color])

  return <div className='bubble' style={style} />
}

export const Bubbles: React.FC = () => {
  const colors = ['#fde256', '#85482e', '#f87171', '#ef0000']

  return (
    <div className='bubbles-container'>
      {colors.map((color, index) => (
        // Usa index como key porque el color y la posición de las burbujas se generan de forma aleatoria en el Bubble
        <Bubble key={index} color={color} />
      ))}
      {colors.map((color, index) => (
        // Usa index como key porque el color y la posición de las burbujas se generan de forma aleatoria en el Bubble
        <Bubble key={index} color={color} />
      ))}
    </div>
  )
}
