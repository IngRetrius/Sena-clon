<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Técnicas básicas: análisis horizontal y vertical de estados financieros

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-right")(style="background-color:#B0BDA0") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El análisis financiero es una herramienta esencial para evaluar la situación económica y financiera de una empresa. Entre las diversas técnicas utilizadas, se destacan el análisis horizontal y el análisis vertical, los cuales permiten interpretar la información contenida en los estados financieros, desde diferentes perspectivas. Estas metodologías facilitan la toma de decisiones estratégicas al proporcionar una visión clara sobre la evolución y estructura financiera de la empresa.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_1 3.1 Análisis horizontal

    p.mb-4(data-aos="fade-down-right") El análisis horizontal es una técnica de evaluación financiera que permite comparar los estados financieros de una empresa en diferentes períodos de tiempo, con el propósito de identificar tendencias, variaciones y patrones de crecimiento o decrecimiento en sus cuentas contables. Se basa en el cálculo de cambios absolutos y porcentuales de los distintos rubros financieros, facilitando la detección de fortalezas y áreas de mejora dentro de la organización.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .tarjeta.tarjeta--gris2.p-2.mb-4
          .row.justify-content-center.align-items-center
            .col-3.d-none.d-lg-block.order-lg-2.order-2.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema3/img-02.svg', alt='Imagen decorativa')
            .col-lg-6.col-12.mb-3.order-lg-1.order-2.mb-lg-0.p-4
              p Esta técnica es especialmente útil para evaluar la evolución de los ingresos, costos, gastos, activos, pasivos y patrimonio, lo que permite medir la estabilidad financiera y el desempeño a lo largo del tiempo. A través del análisis horizontal, los administradores pueden identificar factores que afectan la rentabilidad y liquidez de la empresa, así como prever posibles riesgos financieros.
              p Además, esta herramienta es fundamental en la planificación estratégica, ya que permite realizar proyecciones y tomar decisiones informadas sobre inversión, financiamiento y expansión. Al identificar tendencias positivas o negativas, se pueden ajustar estrategias operativas y financieras para optimizar la gestión empresarial.
              p El análisis horizontal también facilita la comparación con empresas del mismo sector, permitiendo evaluar el crecimiento relativo y el posicionamiento en el mercado.
      
        p Las características del análisis horizontal, se detallan a continuación, donde se explica lo que se realiza en cada una:

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-down")
      .col-10.col-lg-3.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema3/img-02.png' alt="Imagen decorativa")
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              p.text-center #[b Comparación intertemporal]
              p.text-center.mb-0 Se analiza la evolución de los rubros financieros en distintos periodos.

      .col-10.col-lg-3.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema3/img-03.png' alt="Imagen decorativa")
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              p.text-center #[b Cálculo de variaciones absolutas y relativas]
              p.text-center.mb-0 Se mide el cambio en valores absolutos y porcentuales.

      .col-10.col-lg-3.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema3/img-04.png' alt="Imagen decorativa")
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center  
              p.text-center #[b Identificación de tendencias]
              p.text-center.mb-0 Se observan patrones de crecimiento, estabilidad o deterioro financiero.

      .col-10.col-lg-3.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema3/img-05.png' alt="Imagen decorativa")
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              p.text-center #[b Evaluación del impacto de decisiones financieras]
              p.text-center.mb-0 Se determina cómo las estrategias han influido en los resultados.

    .row.fondo3-t3.justify-content-center.align-items-center.py-3.px-lg-5.px-4.ordenar_tarjeta.mb-4(data-aos="zoom-in")
      p(data-aos="fade-down-right") #[b Ejemplo de cálculo del cambio porcentual:]
      p.mb-2(data-aos="fade-down-right") Para calcular la variación en los ingresos de un año a otro, se usa la siguiente fórmula:

    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-right")
        div.formulas.mb-3
          img(src='@/assets/curso/temas/tema3/formula3.svg', alt='')

    p(data-aos="fade-down-right") Igualmente, se obtienen los siguientes datos: 

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-secundario(data-aos="fade-right")
          h5 Tabla 1.
          i Variación porcentual por años
        .tabla-a.color-acento-contenido.mb-5
          table(data-aos="zoom-in"  alt="En la tabla 2, se presentan ejemplos de metas aplicadas a un proyecto turístico en Colombia, destacando su alineación con objetivos estratégicos como sostenibilidad, desarrollo de infraestructura, promoción del destino y beneficio para la comunidad local.")
            thead
              tr(data-aos="fade-right")
                th(style="background-color: #FBE3FF; width: 25%; font-size: 18px;") CONCEPTO
                th(style="background-color: #FBE3FF; width: 25%; font-size: 18px;") AÑO 1
                th(style="background-color: #FBE3FF; width: 25%; font-size: 18px;") AÑO 2
                th(style="background-color: #FBE3FF; width: 25%; font-size: 18px;") VARIACIÓN (%)
            tbody
              tr(data-aos="fade-right")
                td #[b Ingresos]
                td 1000
                td 1200
                td 20 %
              tr(data-aos="fade-right")
                td #[b Costos]
                td 500
                td 650
                td 30 %
              tr(data-aos="fade-right")
                td #[b Utilidad bruta]
                td 500
                td 550
                td 10 %

        p.mb-0 La variación porcentual muestra que los ingresos aumentaron en un 20 %, los costos crecieron en un 30 % y la utilidad bruta subió en un 10 %.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_2 3.2 Análisis vertical

    p.mb-5(data-aos="fade-down-right") El análisis vertical es una técnica de evaluación financiera que permite examinar la composición de los estados financieros en un solo período, expresando cada cuenta como un porcentaje del total del activo, pasivo o patrimonio. Su principal objetivo es facilitar la interpretación de la estructura financiera de la empresa y evaluar la proporción que representa cada rubro dentro del total.

    .row.fondo2-t2.justify-content-center.align-items-center.py-3.px-lg-5.px-4.ordenar_tarjeta.mb-4(data-aos="zoom-in")
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p Este método es ampliamente utilizado en el análisis de balances generales y estados de resultados. En el balance general, cada activo se expresa como un porcentaje del total de activos, mientras que los pasivos y el patrimonio se presentan en función del total de pasivos más patrimonio. En el estado de resultados, cada cuenta se expresa como un porcentaje de los ingresos totales, lo que permite analizar la distribución de costos, gastos y utilidades.
        p El análisis vertical es útil para comparar la estructura financiera de una empresa en distintos períodos o con empresas del mismo sector, ayudando a detectar fortalezas y debilidades. También permite evaluar la eficiencia operativa y la capacidad de generación de valor.
        p Además, este tipo de análisis es una herramienta clave en la toma de decisiones gerenciales, ya que facilita la identificación de áreas donde se pueden optimizar recursos, reducir costos o mejorar la rentabilidad de la empresa.

      .col-lg-4.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema3/img-06.svg' alt="Imagen decorativa")

    p.mb-5(data-aos="fade-down-right") Como características del análisis vertical, se pueden encontrar aspectos como los siguientes, los cuales tiene se explicación:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-13.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Evaluación de la estructura financiera
            h5.t2.mb-2 Evaluación de la estructura financiera
            p.mb-0 Determina la distribución de los activos, pasivos y patrimonio en un periodo específico.

      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-14.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Comparación de la composición financiera
            h5.t2.mb-2 Comparación de la composición financiera
            p.mb-0 Facilita la comparación entre empresas del mismo sector.
      
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-15.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Identificación de áreas de mejora
            h5.t2.mb-2 Identificación de áreas de mejora
            p.mb-0 Permite detectar desequilibrios financieros y oportunidades de optimización.
    
    p.mb-0(data-aos="fade-down-right") #[b Ejemplo de cálculo del análisis vertical:]
    p.mb-5(data-aos="fade-down-right") Cada cuenta se expresa como un porcentaje del total del activo o del pasivo y patrimonio en el estado de situación financiera (balance general) o también puede expresar qué porcentaje representa una cuenta del estado de resultados del total de ingresos, utilizando las siguientes fórmulas:

    p.mb-4(data-aos="fade-down-right") Para el estado de situación financiera (balance general):

    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-right")
        div.formulas.mb-3
          img(src='@/assets/curso/temas/tema3/formula1.svg', alt='')

    p.mb-4(data-aos="fade-down-right") Para el estado de resultados:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-right")
        div.formulas.mb-3
          img(src='@/assets/curso/temas/tema3/formula2.svg', alt='')

    p.mb-4(data-aos="fade-down-right") Lo anterior, se complementa con los siguientes datos:

    .row.justify-content-center.mb-0
      .col-lg-10
        .titulo-sexto.color-secundario(data-aos="fade-right")
          h5 Tabla 2.
          i Variación porcentual del total de activos
        .tabla-a.color-acento-contenido.mb-5
          table(data-aos="zoom-in"  alt="En la tabla 2, se presentan ejemplos de metas aplicadas a un proyecto turístico en Colombia, destacando su alineación con objetivos estratégicos como sostenibilidad, desarrollo de infraestructura, promoción del destino y beneficio para la comunidad local.")
            thead
              tr(data-aos="fade-right")
                th(style="background-color: #FBE3FF; width: 25%; font-size: 18px;") CONCEPTO
                th(style="background-color: #FBE3FF; width: 25%; font-size: 18px;") VALOR
                th(style="background-color: #FBE3FF; width: 25%; font-size: 18px;") % VALOR DEL ACTIVO
            tbody
              tr(data-aos="fade-right")
                td #[b Activos corrientes]
                td 800
                td 40 %
              tr(data-aos="fade-right")
                td #[b Activos no corrientes]
                td 1200
                td 60 %
              tr(data-aos="fade-right")
                td #[b Total activos]
                td 2000
                td 100 %
    
    p.mb-0(data-aos="fade-down-right") Los activos corrientes representan el 40 % del total de activos, mientras que los activos no corrientes constituyen el 60 %.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_3 3.3  Comparación entre el análisis horizontal y vertical

    p.mb-5(data-aos="fade-down-right") El análisis financiero se basa en diversas herramientas que permiten interpretar la información contable de manera efectiva. Entre ellas, el análisis horizontal y el análisis vertical se destacan por su capacidad para evaluar la situación financiera desde diferentes ángulos. 

    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .row.justify-content-center
          .col-lg-4.col-8.mb-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema3/img-07.svg' alt='Imagen decorativa')
          .col-lg-8.col-12.mb-4
            p(data-aos="fade-down-right") Ambas técnicas son complementarias, ya que mientras el análisis horizontal permite estudiar la evolución financiera en el tiempo, el análisis vertical facilita la interpretación de la proporción que representa cada cuenta dentro del total. Juntas, proporcionan una visión integral del desempeño financiero de la empresa y facilitan la toma de decisiones estratégicas.
            p(data-aos="fade-down-right") Al respecto, se relaciona la siguiente tabla, la cual incluye por característica, lo que representa cada análisis:

    .row.justify-content-center.mb-0
      .col-lg-10
        .titulo-sexto.color-secundario(data-aos="fade-right")
          h5 Tabla 3.
          i Características del análisis horizontal y vertical
        .tabla-a.color-acento-contenido.mb-5
          table(data-aos="zoom-in"  alt="En la tabla 2, se presentan ejemplos de metas aplicadas a un proyecto turístico en Colombia, destacando su alineación con objetivos estratégicos como sostenibilidad, desarrollo de infraestructura, promoción del destino y beneficio para la comunidad local.")
            thead
              tr(data-aos="fade-right")
                th(style="background-color: #FBE3FF; width: 25%; font-size: 18px;") Característica
                th(style="background-color: #FBE3FF; width: 25%; font-size: 18px;") Análisis horizontal
                th(style="background-color: #FBE3FF; width: 25%; font-size: 18px;") Análisis vertical
            tbody
              tr(data-aos="fade-right")
                td #[b Enfoque]
                td Comparativo a lo largo del tiempo.
                td Estructura en un solo período.
              tr(data-aos="fade-right")
                td #[b Objetivo]
                td Identificar tendencias y variaciones.
                td Evaluar la composición financiera.
              tr(data-aos="fade-right")
                td #[b Unidad de medida]
                td Porcentajes de variación interanual.
                td Porcentajes de participación en el total.
              tr(data-aos="fade-right")
                td #[b Uso principal]
                td Evaluar crecimiento y estabilidad.
                td Comparar con empresas del sector.

    .titulo1.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/temas/icono.svg', alt='Imagen decorativa')
      h4.mb-0 Importancia del análisis horizontal y vertical en la toma de decisiones

    p.mb-5(data-aos="fade-down-right") El uso combinado de los análisis horizontal y vertical es esencial para una toma de decisiones empresariales informada y estratégica. Estas herramientas analíticas permiten a las organizaciones evaluar en profundidad su rendimiento financiero, optimizar recursos y tomar decisiones fundamentadas que favorezcan el crecimiento y la sostenibilidad a largo plazo. A continuación, se detallan los beneficios clave que su aplicación conjunta ofrece a las empresas:

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Identificación de áreas de mejora y optimización de recursos")
            .col-md-6.mb-4.mb-md-0
              p El análisis horizontal permite identificar tendencias en los estados financieros a lo largo del tiempo, lo que facilita la detección de áreas que necesitan atención, ya sea por un rendimiento inferior al esperado o por ineficiencias operativas. Por otro lado, el análisis vertical ayuda a desglosar la estructura financiera de cada periodo, facilitando la evaluación de la asignación de recursos y el control de los costos. Con estos datos, los empresarios pueden tomar decisiones más precisas sobre la reestructuración, optimización de costos y asignación de recursos.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img-08.png', alt='')
          .row(titulo="Evaluación de la sostenibilidad financiera y el crecimiento de la empresa")
            .col-md-6.mb-4.mb-md-0
              p A través del análisis horizontal, las empresas pueden identificar patrones de crecimiento o declive en sus ingresos, costos y utilidades, lo que permite anticipar posibles problemas financieros y diseñar estrategias para fortalecer su estabilidad. El análisis vertical, por su parte, permite evaluar la proporción de ingresos y gastos en relación con las ventas totales, facilitando la medición de la rentabilidad y la eficiencia operativa. Con estas herramientas, se puede proyectar la sostenibilidad financiera a corto y largo plazo.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img-09.png', alt='')
          .row(titulo="Desempeño con competidores y estándares del sector")
            .col-md-6.mb-4.mb-md-0
              p Mediante el análisis vertical, es posible comparar las métricas internas de una empresa con los promedios del sector o de sus competidores directos; esto no solo ofrece una evaluación objetiva del posicionamiento competitivo de la empresa, sino que también proporciona información relevante sobre las mejores prácticas y las áreas en las que se puede mejorar. El análisis horizontal por su parte, también permite evaluar cómo se posiciona la empresa en relación con su desempeño histórico, ayudando a identificar las brechas que existen entre sus resultados actuales y los de los competidores.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img-10.png', alt='')
          .row(titulo="Toma de decisiones estratégicas basadas en datos financieros confiables")
            .col-md-6.mb-4.mb-md-0
              p La toma de decisiones empresariales requiere de información precisa y actualizada. El análisis horizontal y vertical proveen datos financieros que no solo son históricos (en el caso del análisis horizontal), sino también relativos a un punto de referencia (en el caso del análisis vertical), lo que proporciona una base sólida para decisiones estratégicas. Esto permite a los directivos planificar con mayor confianza, optimizando la asignación de inversiones, la estrategia de precios, las expansiones de mercado, entre otros aspectos.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img-11.png', alt='')
          
    .titulo1.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/temas/icono.svg', alt='Imagen decorativa')
      h4.mb-0 Integración de ambos análisis en el estudio financiero

    p.mb-5(data-aos="fade-down-right") El análisis horizontal y vertical no deben considerarse como herramientas aisladas, sino complementarias. Ya que el análisis horizontal permite observar la evolución temporal de los estados financieros, evidenciando tendencias de crecimiento o decrecimiento, mientras que el análisis vertical proporciona una instantánea clara de la situación financiera de la empresa en un periodo determinado. La integración de ambas metodologías brinda una perspectiva más integral, permitiendo una evaluación precisa de los estados financieros y facilitando la toma de decisiones informadas en todos los niveles de la organización.

    .titulo1.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/temas/icono.svg', alt='Imagen decorativa')
      h4.mb-0 Impacto en la gestión económica y minimización de riesgos

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-right")(style="background-color:#B0BDA0") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La correcta aplicación de estas técnicas analíticas permite a las empresas no solo mejorar su gestión financiera, sino también minimizar riesgos asociados a una mala administración de los recursos. Al identificar áreas de mejora, comparar el rendimiento con el de los competidores y evaluar la sostenibilidad financiera, las empresas pueden tomar decisiones más estratégicas y bien fundamentadas que potencien su competitividad y éxito en el mercado.

    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .row.justify-content-center
          .col-lg-4.col-8.mb-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema3/icono-10.svg' alt='Imagen decorativa')
          .col-lg-8.col-12.mb-4
            p(data-aos="fade-down-right") En resumen, el dominio y la aplicación efectiva del análisis horizontal y vertical, no solo contribuyen al conocimiento profundo de la situación financiera de la empresa, sino que también optimizan el proceso de toma de decisiones, minimizan riesgos y maximizan las oportunidades de crecimiento y expansión sostenible. Este enfoque integral y dinámico es crucial para los empresarios y analistas financieros en su búsqueda de soluciones efectivas a los desafíos del entorno económico.





</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
