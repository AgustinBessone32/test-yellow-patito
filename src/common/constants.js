export const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

export const rta =  {"assumptionData": [
    {
        "_id": "64040bf5339d85b950eb247f",
        "canales": [
            {
                "name": "B2B",
                "sameClient": "si",
                "items": [
                    {
                        "prodId": 1,
                        "volumen": "324"
                    },
                    {
                        "prodId": 2,
                        "volumen": "234"
                    },
                    {
                        "prodId": 3,
                        "volumen": "324"
                    }
                ]
            },
            {
                "name": "B2C",
                "sameClient": "no",
                "items": [
                    {
                        "prodId": 1,
                        "volumen": "4324"
                    },
                    {
                        "prodId": 2,
                        "volumen": "324"
                    },
                    {
                        "prodId": 3,
                        "volumen": "234"
                    }
                ]
            }
        ],
        "churns": [
            {
                "channel": "B2B",
                "items": [
                    {
                        "prodId": 1,
                        "porcentajeChurn": "23"
                    },
                    {
                        "prodId": 2,
                        "porcentajeChurn": "32"
                    },
                    {
                        "prodId": 3,
                        "porcentajeChurn": "3"
                    }
                ]
            },
            {
                "channel": "B2C",
                "items": [
                    {
                        "prodId": 1,
                        "porcentajeChurn": "4"
                    },
                    {
                        "prodId": 2,
                        "porcentajeChurn": "34"
                    },
                    {
                        "prodId": 3,
                        "porcentajeChurn": "12"
                    }
                ]
            }
        ],
        "paises": [
            {
                "value": "chile",
                "label": "Chile"
            },
            {
                "value": "argentina",
                "label": "Argentina"
            }
        ],
        "productos": [
            {
                "id": 1,
                "name": "celular",
                "model": "oneShot",
                "type": "producto"
            },
            {
                "id": 2,
                "name": "tablet",
                "model": "mensual",
                "type": "producto"
            },
            {
                "id": 3,
                "name": "prueba",
                "model": "mensual",
                "type": "servicio"
            }
        ],
        "idUser": [
            "64040284d9a91413da049e67"
        ],
        "__v": 0
    }
]}

export const getInflacion = (val=0, ifl=0) => {
    let total = val
    let valores = [0,0,0,0,0,0,0,0,0,0,0,0]

    for(let i = 0; i < meses.length; i++){
        let infActual
        if(i === 0){
            infActual = parseInt(total)
        }else{
            infActual = parseInt(total) + (parseInt(total) * (parseInt(ifl)/100))
        }
        valores[i] = infActual
        total = infActual
    }

    return valores
}