"use client";
import React, { useEffect } from 'react'

const Seo = ({ title }) => {
  useEffect(() => {
    document.title = `Crypto Presale - ${title}`
  }, [])
  
  return (
    <>
    </>
  )
}

export default Seo;