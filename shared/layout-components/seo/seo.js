"use client";
import React, { useEffect } from 'react'

const Seo = ({ title }) => {
  useEffect(() => {
    document.title = `Spruha - ${title}`
  }, [])
  
  return (
    <>
    </>
  )
}

export default Seo;