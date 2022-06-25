import sql from "../config/db"
import { getEspecie } from "../models/Especie"

export const getEspeciebyHabitat = async (habitat: string) => {

    const habitatEsp = '%' + habitat + '%'
    const response = await sql`
        SELECT * FROM especie WHERE habitat LIKE ${habitatEsp}
    `

    const especies = response.map((jsonObject) => getEspecie(jsonObject));

    console.log(especies)
    return especies;
}

export const getEspeciebyScientificName = async (NomeCient: string) => {


    const scientificName = '%' + NomeCient+ '%'

    const response = await sql`
        select * from especie where nome_cientifico ilike ${scientificName}
    `

    const especies = response.map( jsonObject=> getEspecie(jsonObject))

    console.log(especies)
    return especies
}