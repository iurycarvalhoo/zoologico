import sql from "../config/db"
import { getJaula, Jaula } from "../models/Jaula"
import { getZelador, Zelador } from "../models/Zelador"

export const getZeladorbyJaulaID = async (jaula: string): Promise<Zelador[]> => {
    const response = await sql`
        SELECT zelador.matricula, zelador.nome, zelador.data_nascimento 
        FROM zelador inner join jaula_zelador 
        ON zelador.matricula = jaula_zelador.id_zelador where jaula_zelador.id_jaula LIKE ${jaula} 
    `

    const Zeladores = response.map( async jsonObject => getZelador(jsonObject))

    return await Promise.all(Zeladores)
}

export const getJaulaByZeladorMatricula = async (matricula: string): Promise<Jaula[]> => {


    const response = await sql`
    SELECT jaula.codigo, jaula.area 
    FROM jaula
    INNER JOIN jaula_zelador ON jaula.codigo = jaula_zelador.id_jaula
    INNER JOIN zelador ON zelador.matricula = jaula_zelador.id_zelador
    WHERE matricula LIKE ${matricula}
    `
    const jaulas = response.map( async jsonObject => getJaula(jsonObject))
    console.log((await  Promise.all(jaulas)))
    return await Promise.all(jaulas)
}