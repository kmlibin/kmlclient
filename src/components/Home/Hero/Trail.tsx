'use client'
import React from 'react'
//libraries
import { useTrail, a } from '@react-spring/web'


const Trail: React.FC<{ open: boolean; children: React.ReactNode }> = ({ open, children }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
      config: { mass: 12, tension: 2000, friction: 200 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 50 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    })
    return (
      <div>
        {trail.map(({ height, ...style }, index) => (
          <a.div key={index} className="trailsText" style={style}>
            <a.div style={{ height }}>{items[index]} </a.div>
          </a.div>
        ))}
      </div>
    )
  }

  export default Trail