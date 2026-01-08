"use client"

import { useEffect, useState } from "react"

export function Progress({ value = 0 }: { value?: number }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let start = displayValue
    let end = Math.max(0, Math.min(value, 100))
    if (start === end) return

    const duration = 600
    const startTime = performance.now()

    function animate(now: number) {
      const progress = Math.min((now - startTime) / duration, 1)
      const current = Math.round(start + (end - start) * progress)
      setDisplayValue(current)
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <div
      style={{
        width: "100%",
        height: "56px",
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: "16px",
        padding: "6px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Fill */}
      <div
        style={{
          height: "100%",
          width: `${displayValue}%`,
          backgroundColor: "#34d399",
          borderRadius: "12px",
          boxShadow: "0 0 30px rgba(52,211,153,0.9)",
          transition: "width 0.6s ease-out",
        }}
      />

      {/* Percentage text */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          fontWeight: 700,
          color: "white",
          textShadow: "0 0 8px rgba(0,0,0,0.8)",
          pointerEvents: "none",
        }}
      >
        {displayValue}%
      </div>
    </div>
  )
}
