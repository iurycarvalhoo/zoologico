import sql, { clearData, createTables, loadInitialData } from './config/db'
import { getZeladorCodigo,getZeladorJaula} from './controllers/ZeladorController';
import {getZeladorbyJaulaID,getJaulaByZeladorMatricula} from './controllers/JaulaController';
import {getEspeciebyHabitat,getEspeciebyScientificName} from './controllers/EspecieController';
import {getEspecimeEspecies,getEspecimeJaula} from './controllers/EspecimeController';

const run = async () => {
  await createTables()
  await clearData()
  await loadInitialData()

  let HenriqueJuniorLopes = await getJaulaByZeladorMatricula('12004'); 
  const especieEuropeia = await getEspeciebyHabitat('Mata atlântica brasileira');
  const especieNomeC = await getEspeciebyScientificName('Leontopithecus rosalia');
  const MicoEspecie = await getEspecimeEspecies(MicoEspec);
  const especimeZelador = await getEspecimeJaula(008);
  const zeladorHenrique = await getZeladorbyJaulaID('HenriqueJuniorLopes');
  const zeladorEspecie = await getJaulaByZeladorMatricula(especieNomeC);

  await sql.end()
  console.log('Mal feito desfeito')
}

run()
