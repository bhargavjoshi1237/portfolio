"use client"
import { useEffect, useRef } from 'react'

export function LineChart({ className }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Sample data
    const data = [20, 40, 30, 70, 50, 60, 80]
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    // Draw line
    ctx.beginPath()
    ctx.strokeStyle = 'hsl(var(--primary))'
    ctx.lineWidth = 2
    
    const step = canvas.width / (data.length - 1)
    const scale = canvas.height / Math.max(...data)
    
    data.forEach((value, index) => {
      const x = index * step
      const y = canvas.height - (value * scale)
      if (index === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    })
    
    ctx.stroke()
  }, [])

  return <canvas ref={canvasRef} className={className} />
}
