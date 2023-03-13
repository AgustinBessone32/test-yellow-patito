import React from 'react'
import { meses } from '../common/constants'
import { Product } from './Product'

export const Table = ({productos,id,canal}) => {
    return (
        <div>
            <table className="table">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Producto</th>
                        <th scope="col"></th>
                        {
                            meses.map((m,index)=> {
                                return (
                                    <th key={index} style={{paddingLeft:'70px'}} scope="col">{m}</th>  
                                )
                            })
                        }            
                    </tr>
                </thead>
                <tbody>           
                    {
                        productos.map((p)=> {
                            return(
                                    <>
                                        <Product product={p} pais={id} canal={canal}/> 
                                    </>
                                )
                            })
                    }
                </tbody>
            </table>
        </div>
  )
}
