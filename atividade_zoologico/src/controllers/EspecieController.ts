import sql from "../config/db"
import { Especie, getEspecie } from "../models/Especie"

export const getEspecieHabitat = async (habitat: string) => {

    const habitatEsp = '%' + habitat + '%'
    const response = await sql`
        SELECT * 
        FROM especie 
        WHERE habitat ILIKE ${habitatEsp}
    `

    const especies = response.map((obj) => getEspecie(obj));

    //console.log(especies)
    return especies[0];
}

export const getEspecieNomeCientifico = async (NomeCient: string) : Promise<Especie>=> {


    const nomeCienti = '%' + NomeCient+ '%'

    const response = await sql`
        SELECT * 
        FROM especie 
        WHERE nome_cientifico ILIKE ${nomeCienti}
    `

    const especies = response.map( obj=> getEspecie(obj))

    return especies[0]
}