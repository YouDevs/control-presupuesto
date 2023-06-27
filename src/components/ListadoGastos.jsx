import Gasto from "./Gasto"

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  EliminarGasto,
  filtro,
  gastosFiltro
}) => {
  return (
    <div className='listado-gastos contenedor'>

        {/* Si hay algo en filtro entonces itera sobre el array de gastosFiltro */}
        {filtro ? (
          <>
            <h2>{gastosFiltro.length ? 'Gastos': 'No hay gastos aun'}</h2>
            {gastosFiltro.map( gasto => (
              <Gasto
                  key={gasto.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  EliminarGasto={EliminarGasto}
              />
            ))}
          </>
        ): (
          <>
          <h2>{gastos.length ? 'Gastos': 'No hay gastos aun'}</h2>
          {
            gastos.map( gasto => (
              <Gasto
                  key={gasto.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  EliminarGasto={EliminarGasto}
              />
            ))
          }
          </>
        )}

    </div>
  )
}

export default ListadoGastos