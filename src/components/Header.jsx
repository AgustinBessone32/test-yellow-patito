import React from 'react'

export const Header = ({paises,setActive,active}) => {
  return (
    <ul className="nav nav-tabs">
    {
      paises && paises.map((p,index) => {
        return (
          <div key={index} style={{cursor:'pointer'}}>
            <li key={p.label}>
              <a className={p.value === active ? "nav-link active" : "nav-link"} data-toggle='tab' onClick={() => setActive(p.value)}>{p.label} </a>
            </li>
          </div>
        ) 
      })
    } 
  </ul>
  )
}
