import sql from "../config/db"
import { getJaula, Jaula } from "../models/Jaula"



export const getJaulaZelador = async (zelador: string): Promise<Jaula[]> => {

    const response = await sql`
    SELECT jaula.codigo, jaula.area 
    FROM jaula
    INNER JOIN jaula_zelador ON jaula.codigo = jaula_zelador.id_jaula
    INNER JOIN zelador ON zelador.matricula = jaula_zelador.id_zelador
    WHERE jaula_zelador.id_zelador LIKE ${zelador}
    `
    const jaulas = response.map( async obj => getJaula(obj))
    return await Promise.all(jaulas)
}