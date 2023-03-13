import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { getInflacion } from '../common/constants'
import { useDataContext } from '../context/DataProvider'


export const Product = ({product,pais,canal}) => {
    const {dispatch} = useDataContext()
    const [state, setState] = useState({
        value: 0,
        inf: 0
    })
    const [data, setData] = useState([])
    const [expor, setExpor] = useState({
        id: uuidv4(),
        pais: pais.label,
        canal: canal.name,
        producto: product.name,
        value: 0,
        inflacion: 0,
        data
    })
    
    const changeState = () => {
        dispatch({
            type: 'ADD_DATA',
            value: expor
        })
    }

    useEffect(() => {
        setData(getInflacion(state.value,state.inf))
        changeState()
    }, [state])

    useEffect(() => {
        expor.value = state.value
        expor.inflacion = state.inf
        expor.data = data
        setExpor(expor) 
        changeState()
    }, [data])


    return (
        <tr>
            <th scope="row">{product.id}</th>
            <td>{product.name}</td>
            <td style={{width:'40px'}}>
                <Formik
                    initialValues={{ value: 0, inf: 0 }}
                    onSubmit={(values) => {
                        setState(values)
                    }}
                >
                    {({
                    values,
                    handleChange,
                    handleSubmit,
                    }) => (
                    <form onSubmit={handleSubmit} style={{maxWidth:'40px'}}>
                        <input
                            style={{width:'60px'}}
                            type="text"
                            name="value"
                            onChange={handleChange}
                            onBlur={handleSubmit}
                            value={values.value}
                        />
                        <input
                            style={{width:'60px'}}
                            type="text"
                            name="inf"
                            onChange={handleChange}
                            onBlur={handleSubmit}
                            value={values.inf}
                        />
                    </form>
                    )}
                </Formik>
            </td>
            {
                data.map((v,index) => {
                    return(
                        <td key={index} style={{paddingLeft:'80px'}}>{v}</td> 
                    )
                })
            } 
        </tr>
  )
}
