import sql, { clearData, createTables, loadInitialData } from './config/db'
import { getEspecieHabitat, getEspecieNomeCientifico } from './controllers/EspecieController';
import {getEspecimeEspecies,getEspecimeJaula, getEspecimeZelador} from './controllers/EspecimeController';
import {getJaulaZelador } from './controllers/jaulaController';


const run = async () => {
  await createTables()
  await clearData()
  await loadInitialData()


const especieHabitat= await getEspecieHabitat('floresta')
console.log(especieHabitat);


const especieNomecientifico=await getEspecieNomeCientifico('Leontopithecus rosalia');
console.log(especieNomecientifico);


const especimeEspecies=await getEspecimeEspecies('3')
console.log(especimeEspecies);
  

const especimeJaula=await getEspecimeJaula('00005')
console.log(especimeJaula);
  


const especimeZelador=await getEspecimeZelador('12001')
console.log(especimeZelador);
 

const jaulaZelador=await getJaulaZelador('12001')
console.log(jaulaZelador);
 
  

  await sql.end()
  console.log('Mal feito desfeito')
}



run()
