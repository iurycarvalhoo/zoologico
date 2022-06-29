import { Especie } from "./Especie"
import { Jaula } from "./Jaula"

type Especime = {
    id?: number 
    numeroDeSerie: number 
    apelido?: string 
    especie: Especie
    jaula: Jaula[]
}

export default Especime 

export const getEspecime = (obj: any): Especime => {
    const {
        id, 
        nro_de_serie, 
        apelido, 
        id_especie, 
        id_jaula
    } = obj
    

    const especime: Especime = {
        id,
        numeroDeSerie: nro_de_serie,
        apelido,
        especie: id_especie,
        jaula: id_jaula  
    }

    return especime
}