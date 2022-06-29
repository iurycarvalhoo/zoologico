import sql from './../config/db';

import {Zelador} from '../models/Zelador'
import {Especie} from '../models/Especie'
import {Jaula} from '../models/Jaula'

import Especime, { getEspecime } from '../models/Especime'

export const getEspecimeEspecies = async (especies: string): Promise<Especime[]> => {
  const response = await sql`
    SELECT *
    FROM especime
    INNER JOIN especie 
    ON especime.id_especie = especie.id
    WHERE especie.id = ${especies};
  `;

  const especime = response.map(async (obj) => await getEspecime(obj));

  return await Promise.all(especime);
}

export const getEspecimeZelador = async (zelador: string): Promise<Especime[]> => {
  const response = await sql`
      SELECT * 
      FROM especime
      INNER JOIN jaula_zelador
      ON especime.id_jaula = jaula_zelador.id_jaula
      WHERE jaula_zelador.id_zelador LIKE ${zelador};
  `;

  const especime = response.map(async (obj) => await getEspecime(obj));

  return await Promise.all(especime);
}

export const getEspecimeJaula = async (jaula: string): Promise<Especime[]>=>{
  const response = await sql`
      SELECT *
      FROM especime
      WHERE id_jaula = ${jaula}
  `;

  const espec = response.map(async (obj) => await getEspecime(obj));
  
  return await Promise.all(espec);
}