import { getZeladorbyJaulaID } from "../controllers/ZeladorController"
import { Zelador } from "./Zelador"

export type Jaula = {
    codigo: string
    area: string
    zeladoresResponsaveis?: Zelador[]
}

export const getJaula = async (obj: any): Promise<Jaula> => {
    const {codigo, area } = obj
    
const zeladoresResponsaveis = await getZeladorbyJaulaID(codigo)

    const jaula: Jaula = {
        codigo,
        area,
        zeladoresResponsaveis
    }

    return jaula
}