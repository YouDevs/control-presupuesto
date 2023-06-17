export const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
}

export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)

    // Configuras un objeto de opciones
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    // con toLocaleDateString proporcionas el idioma y las opciones
    return fechaNueva.toLocaleDateString('es-ES', opciones)

}