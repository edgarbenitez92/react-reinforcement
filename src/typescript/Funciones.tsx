import React from 'react'

export const Funciones = () => {

  const sum = (a: number, b: number): number => {
    return a + b;
  }

  return (
    <>
      <h3>Functiones</h3>
      <span>The results is {sum(2, 2)}</span>
    </>
  )
}
