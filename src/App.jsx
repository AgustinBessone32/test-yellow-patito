import axios from "axios"
import { useEffect, useState } from "react"
import { Channel } from "./components/Channel"
import { Header } from "./components/Header"
import { useDataContext } from "./context/DataProvider"



function App() {
  const {data} = useDataContext()
  const [resp, setResp] = useState({})
  const [active, setActive] = useState('chile')

  useEffect(() => {
    getData()
  },[active])


  const getData = async () => {
    const {data} = await axios.get('http://18.220.234.192:4000/api/users/64040284d9a91413da049e67')
    setResp(data.response.assumptionData[0])
  }

  const exportData = async () => {
    console.log(data)
  }

  const {paises,canales,productos} = resp

  return (
    <>
      <Header paises={paises} active={active} setActive={setActive} />
      {
        paises && paises.map((p,index) => {
          return(
            <div key={index} id={p.value} className={p.value !== active ? 'visually-hidden' : ''}>
              <Channel canales={canales} productos={productos} pais={p}/>
              <button type="button" class="btn btn-info" onClick={() => exportData()}>Cargar Datos</button>
            </div>
          )
        })
      }
    </>
  )
}

export default App
