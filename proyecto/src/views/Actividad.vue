<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos del análisis financiero',
      titulo: 'Descubriendo los fundamentos del análisis financiero',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos básicos del análisis financiero, permitiendo a los participantes diferenciar sobre los fundamentos de la disciplina.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'El análisis financiero es una herramienta exclusiva para grandes empresas y no es útil para pequeñas y medianas empresas.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre análisis financiero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'El estado de resultados muestra la situación financiera de una empresa en un momento determinado',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre análisis financiero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'El balance general refleja los activos, pasivos y el patrimonio de una empresa',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre análisis financiero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'La liquidez de una empresa mide su capacidad para cumplir con sus obligaciones a corto plazo.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre análisis financiero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'La rentabilidad se refiere a la capacidad de una empresa para generar utilidades en relación con sus recursos.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre análisis financiero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'El análisis horizontal compara los estados financieros de una empresa en diferentes periodos.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre análisis financiero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'El análisis vertical examina la estructura de los estados financieros en un solo periodo.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre análisis financiero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Los indicadores financieros son herramientas utilizadas para evaluar el desempeño de una empresa.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre análisis financiero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'La rotación de inventarios mide el tiempo promedio en el que una empresa renueva sus existencias.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre análisis financiero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'El apalancamiento financiero mide la proporción de deuda utilizada para financiar los activos de una empresa.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre análisis financiero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'Un alto nivel de endeudamiento siempre es positivo, ya que significa que la empresa está creciendo.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre análisis financiero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'La razón corriente mide la capacidad de la empresa para cubrir sus pasivos con sus activos corrientes.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre análisis financiero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'Un flujo de caja positivo significa que la empresa tiene suficiente efectivo para cubrir sus gastos operativos.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre análisis financiero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'El EBITDA es un indicador que mide la rentabilidad de una empresa antes de impuestos, intereses, depreciaciones y amortizaciones.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre análisis financiero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'Un margen de utilidad neta bajo indica que la empresa está generando pocas ganancias en relación con sus ingresos totales.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre análisis financiero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'La diversificación del portafolio de productos reduce el riesgo financiero de la empresa.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre análisis financiero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'Un análisis financiero adecuado ayuda a la toma de decisiones estratégicas dentro de la empresa.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre análisis financiero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'La depreciación es un gasto que afecta el flujo de caja de manera directa.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre análisis financiero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'Una empresa con un índice de endeudamiento del 90% tiene mayor riesgo financiero que una con un 40 %.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre análisis financiero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'La planificación financiera es opcional y no influye en el éxito de una empresa.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre análisis financiero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Felicitaciones, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
