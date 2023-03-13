import React from 'react'
import { Table } from './Table'

export const Channel = ({canales,productos,pais,active}) => {
  return (
    <div>
        {
            canales && canales.map((c,index) => {
                return(
                    <div key={index}>
                        <span className="badge bg-warning text-dark my-3 p-2 d-flex justify-content-center">{c.name}</span>
                        <Table productos={productos} id={pais} canal={c} active={active}/>
                    </div>
                )
            })
        }

    </div>
  )
}
