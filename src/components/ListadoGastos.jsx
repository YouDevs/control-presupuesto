import Gasto from "./Gasto"

const ListadoGastos = ({gastos, setGastoEditar, EliminarGasto}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{gastos.length ? 'Gastos': 'No hay gastos aun'}</h2>
        { gastos.map( gasto => (
            <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                EliminarGasto={EliminarGasto}
            />
        )) }
    </div>
  )
}

export default ListadoGastos