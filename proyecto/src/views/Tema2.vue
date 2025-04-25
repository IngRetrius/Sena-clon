<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Principios de contabilidad aplicados al análisis financiero

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema2/img-01.png', alt='')

    p.mb-5(data-aos="fade-down-right")  Para llevar a cabo un análisis financiero preciso, es fundamental comprender los principios contables básicos que rigen la preparación de los estados financieros. Entre ellos se destacan:

    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#F1F8E9")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema2/icono-01.svg' alt='AvatarTop')
        h4.text-center Principio de empresa en marcha
        p.text-center Se asume que la empresa continuará operando en el futuro previsible.
      .col-md-6.col-lg.tarjeta--tabla1.p-4(style="background-color:#E5E9FE")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema2/icono-02.svg' alt='AvatarTop')
        h4.text-center Principio de causación
        p.text-center Los ingresos y gastos se reconocen en el momento en que ocurren, no cuando se recibe o paga efectivo.
      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#F1F8E9")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema2/icono-03.svg' alt='AvatarTop')
        h4.text-center Principio de uniformidad
        p.text-center La empresa debe mantener los mismos criterios contables a lo largo del tiempo para garantizar comparabilidad.
      .col-md-6.col-lg.tarjeta--tabla1.p-4(style="background-color:#E5E9FE")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema2/icono-04.svg' alt='AvatarTop')
        h4.text-center Principio de prudencia
        p.text-center Se debe ser conservador en la estimación de ingresos y gastos para evitar sobrevaloraciones.

    p.mb-5(data-aos="fade-down-right")  Estos principios garantizan que la información contable refleje fielmente la situación financiera de la organización.

    .titulo1.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/temas/icono.svg', alt='Imagen decorativa')
      h4.mb-0 Impacto en la interpretación de los estados financieros

    p.mb-5(data-aos="fade-down-right")  Los principios contables afectan directamente la manera en que se presentan y analizan los estados financieros, determinando la confiabilidad y precisión de los informes. Su impacto puede percibirse en los siguientes aspectos:

    LineaTiempoE.color-acento-contenido(data-aos="flip-up")
      .row.justify-content-center(titulo="01")
        .col-lg-2.col-4.mb-lg-0.mb-4
          img(src='@/assets/curso/temas/tema2/icono-05.svg' alt="Imagen decorativa")
        .col-lg-10
          .h4 Comparabilidad
          p.mb-0 La aplicación uniforme de los principios contables, permite comparar la información financiera de diferentes períodos y entre distintas empresas.
      .row.justify-content-center(titulo="02")
        .col-lg-2.col-4.mb-lg-0.mb-4
          img(src='@/assets/curso/temas/tema2/icono-06.svg' alt="Imagen decorativa")
        .col-lg-10
          .h4 Transparencia
          p.mb-0 Garantizan que la información financiera refleje fielmente la situación económica de la empresa, evitando manipulaciones contables.
      .row.justify-content-center(titulo="03")
        .col-lg-2.col-4.mb-lg-0.mb-4
          img(src='@/assets/curso/temas/tema2/icono-07.svg' alt="Imagen decorativa")
        .col-lg-10
          .h4 Toma de decisiones
          p.mb-0 Facilitan la evaluación de la rentabilidad, liquidez y solvencia de la empresa, brindando información clave para inversionistas, acreedores y directivos.
      .row.justify-content-center(titulo="04")
        .col-lg-2.col-4.mb-lg-0.mb-4
          img(src='@/assets/curso/temas/tema2/icono-08.svg' alt="Imagen decorativa")
        .col-lg-10
          .h4 Cumplimiento normativo
          p.mb-0 Aseguran que la empresa cumpla con los estándares contables exigidos por las normativas nacionales e internacionales.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1  Relación entre activos, pasivos, patrimonio, ingresos y gastos

    p.mb-4(data-aos="fade-down-right")  Los elementos fundamentales de la contabilidad: activos, pasivos, patrimonio, ingresos y gastos, están interconectados y forman la estructura de los estados financieros. Comprender su relación es vital para interpretar la situación económica y financiera de una empresa y evaluar su desempeño en el corto y largo plazo. Su explicación es la siguiente:

    .row.fondo2-t2.justify-content-center.align-items-center.py-3.px-lg-5.px-4.ordenar_tarjeta.mb-4(data-aos="zoom-in")
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        ul.lista-ul.mb-0
          li(style="margin-bottom: 2px")
            i.fas.fa-angle-right
            p Los #[b activos] representan los bienes y derechos que posee la empresa y que le generan beneficios económicos futuros. Se clasifican en activos corrientes, aquellos de rápida conversión en efectivo y activos no corrientes, que tienen un uso a largo plazo.

          li(style="margin-bottom: 2px")
            i.fas.fa-angle-right
            p Los #[b pasivos], por su parte, corresponden a las obligaciones financieras adquiridas por la empresa, como deudas y compromisos de pago. Estos pueden ser de corto o largo plazo y reflejan el nivel de apalancamiento financiero.
          
          li(style="margin-bottom: 2px")
            i.fas.fa-angle-right
            p El #[b patrimonio] es la diferencia entre los activos y los pasivos, representando la inversión de los propietarios en la empresa. Es un indicador clave de la estabilidad financiera y del valor neto de la organización.
          
          li(style="margin-bottom: 2px")
            i.fas.fa-angle-right
            p Los #[b ingresos] reflejan los recursos obtenidos por la empresa a través de sus operaciones principales, como la venta de bienes o la prestación de servicios. Su correcto reconocimiento y medición influyen en la rentabilidad del negocio.

          li(style="margin-bottom: 2px")
            i.fas.fa-angle-right
            p Por otro lado, los #[b gastos] representan las erogaciones necesarias para la operación de la empresa, como costos de producción, pago de salarios y servicios. Su adecuada gestión permite mantener un equilibrio financiero y maximizar la utilidad.

      .col-lg-4.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img-02.svg' alt="Imagen decorativa")

    p.text-center.mb-4(data-aos="fade-down-right") La interacción entre estos elementos se evidencia en la ecuación contable fundamental:

    .row.justify-content-center.p-4.mb-4(data-aos="fade-right")
      .col-md-6.tarjeta.color-primario.p-4(style="background-color:#F1F8E9")
        p.text-bold.text-center.mb-0 #[b Activos = Pasivos + Patrimonio]

    .row.justify-content-center.mb-5(data-aos="fade-down-right") 
      .col-10
        p.mb-4 Esta ecuación refleja que los activos de una empresa son financiados a través de recursos propios (patrimonio) o de terceros (pasivos). Además, los ingresos y gastos impactan directamente en la estructura patrimonial, ya que los beneficios generados aumentan el patrimonio, mientras que las pérdidas lo reducen.
        .cajon.color-secundario.p-4
          p.mb-0 En consecuencia, un adecuado análisis de estos elementos, permite comprender la estabilidad financiera, la capacidad de endeudamiento, la rentabilidad y el crecimiento sostenible de la empresa.
    
    .titulo1.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/temas/icono.svg', alt='Imagen decorativa')
      h4.mb-0 Relación entre los elementos contables

    p.mb-5(data-aos="fade-down-right") Se da por medio de los siguientes procesos:

    .row.justify-content-center.ali.mb-3(data-aos="flip-up")
      .tarjeta--container.row.mb-5
        .col-xl.col-md-6.tarjeta.color-primario.p-5(data-aos="fade-right")
          .row.justify-content-center.mb-3
            .col-lg-4.col-6
              figure
                img(src='@/assets/curso/temas/tema2/icono-09.svg' alt="Imagen decorativa")
          .h4.text-center La ecuación contable fundamental
          p La interconexión entre estos elementos se expresa en la ecuación contable básica:
          p.text-center #[b Activo = Pasivo + Patrimonio]
          p Esto significa que todos los recursos (activos) son financiados, ya sea por terceros (pasivos) o por los dueños del negocio (patrimonio).
        
        .col-xl.col-md-6.tarjeta.color-secundario.p-5(data-aos="fade-left")
          .row.justify-content-center.mb-3
            .col-lg-4.col-6
              figure
                img(src='@/assets/curso/temas/tema2/icono-10.svg' alt="Imagen decorativa")
          .h4.text-center Impacto de los ingresos y gastos en la ecuación contable
          p Cuando la empresa genera ingresos y obtiene ganancias, su patrimonio aumenta. Por el contrario, si incurre en más gastos que ingresos, su patrimonio se reduce.
          p.text-center #[b Utilidad Neta = Ingresos - Gastos]
          p Las utilidades netas pueden ser reinvertidas en la empresa (aumentando el patrimonio) o distribuidas entre los socios como dividendos.
    
    .titulo1.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/temas/icono.svg', alt='Imagen decorativa')
      h4.mb-0 Relación en los estados financieros

    p(data-aos="fade-down-right")  El #[b balance general] muestra la relación entre activos, pasivos y patrimonio en un momento determinado.
    p.mb-5(data-aos="fade-down-right")  El #[b estado de resultados] refleja los ingresos y gastos en un período de tiempo, determinando la utilidad o pérdida.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-8.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img-02.png', alt='Texto que describa la imagen')
      .col-lg-6
        p.mb-0 #[b Ejemplo práctico]
        p Una empresa inicia con un capital de $50,000 y obtiene un préstamo de $20,000. Con estos recursos adquiere maquinaria por $40,000 y mantiene $30,000 en caja. Su ecuación contable sería:
        p #[b Activos (40,000+30,000) = Pasivos (20,000) + Patrimonio (50,000)]
        p Si durante el año la empresa genera $10,000 en ingresos y tiene $6,000 en gastos, su utilidad neta será de $4,000, lo que aumentará el patrimonio.
        p #[b Nuevo patrimonio = 50,000 + 4,000 = 54,000]
    
    .titulo1.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/temas/icono.svg', alt='Imagen decorativa')
      h4.mb-0 Definición de los estados financieros principales

    p.mb-5(data-aos="fade-down-right")  Los estados financieros son informes contables fundamentales que permiten evaluar la situación económica y el desempeño de una empresa. Proporcionan información clave para la toma de decisiones y se elaboran con base en principios contables generalmente aceptados. A continuación, se describen los tres estados financieros principales:   

    .h4.tcvo.mb-4(data-aos="fade-down-right") ● A) Estado de situación financiera (balance general)
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-8.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img-03.png', alt='Texto que describa la imagen')
      .col-lg-6
        p.mb-0 #[b Definición]
        p El estado de situación financiera, también conocido como balance general, presenta la posición económica de la empresa en un momento determinado, mostrando lo que posee (activos), lo que debe (pasivos) y el valor que corresponde a los propietarios (patrimonio).
        p #[b Estructura]
        p Se basa en la ecuación contable fundamental:
        p #[b Activos = Pasivos + Patrimonio]
    
    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/icono-11.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E5E9FE")
            h4.text-center.mt-5.mb-0 Activos
            p.text-center.mt-4.mb-0 Recursos controlados por la empresa, como efectivo, cuentas por cobrar, inventarios y propiedades.

      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/icono-12.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E5E9FE")
            h4.text-center.mt-5.mb-0 Pasivos
            p.text-center.mt-4.mb-0 Obligaciones financieras con terceros, como préstamos y cuentas por pagar.

      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/icono-13.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E5E9FE")
            h4.text-center.mt-5.mb-0 Patrimonio
            p.text-center.mt-4.mb-0 Aportes de los socios y utilidades retenidas.

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.bgA10.p-5.mb-3(data-aos="fade-down-right") 
        .row.justify-content-center.align-items-center.mb-4
          .col-auto
            img(src='@/assets/curso/temas/tema3/icono-01.svg', style="max-width: 82px", alt='').m-auto
          .col
            p.mb-0 Permite conocer la estabilidad financiera de la empresa.
         
      .col-md.tarjeta.bgA10.p-5.mb-3(data-aos="fade-down-right") 
        .row.justify-content-center.align-items-center.mb-4
          .col-auto
            img(src='@/assets/curso/temas/tema3/icono-02.svg', style="max-width: 82px", alt='').m-auto
          .col
            p.mb-0 Indica la capacidad de pago a corto y largo plazo.

      .col-md.tarjeta.bgA10.p-5.mb-3(data-aos="fade-down-right") 
        .row.justify-content-center.align-items-center.mb-4
          .col-auto
            img(src='@/assets/curso/temas/tema3/icono-03.svg', style="max-width: 82px", alt='').m-auto
          .col
            p.mb-0 Es utilizado por inversionistas y bancos para evaluar la solidez económica.

    .h4.tcvo.mb-4(data-aos="fade-down-right")  ● B) Estado de resultados (estado de pérdidas y ganancias)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-8.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img-04.png', alt='Texto que describa la imagen')
      .col-lg-6
        p.mb-0 #[b Definición]
        p El estado de resultados muestra el desempeño financiero de la empresa durante un período específico, reflejando sus ingresos, costos, gastos y la utilidad o pérdida neta.
        p #[b Estructura]
        p Se basa en la ecuación contable fundamental:
        p #[b Utilidad neta = Ingresos - (Costos + Gastos)]
    
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad_2(data-aos="flip-left")
          .bottomCircle_2.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/icono-14.svg", alt="alt").img90.m-auto
          h4.text-center.mt-5.mb-0 Ingresos
          p.mb-0 Ventas de bienes o servicios.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad_2(data-aos="flip-left")
          .bottomCircle_2.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/icono-15.svg", alt="alt").img90.m-auto
          h4.text-center.mt-5.mb-0 Costos
          p.mb-0 Gastos directamente relacionados con la producción o adquisición de bienes y servicios vendidos.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad_2(data-aos="flip-left")
          .bottomCircle_2.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/icono-16.svg", alt="alt").img90.m-auto
          h4.text-center.mt-5.mb-0 Gastos
          p.mb-0 Desembolsos operativos como sueldos, alquileres y publicidad.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad_2(data-aos="flip-left")
          .bottomCircle_2.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/icono-17.svg", alt="alt").img90.m-auto
          h4.text-center.mt-5.mb-0 Utilidad o pérdida
          p.mb-0 Resultado final tras restar costos y gastos de los ingresos.

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.bgA10.p-5.mb-3
        .row.justify-content-center.align-items-center.mb-4
          .col-auto
            img(src='@/assets/curso/temas/tema3/icono-04.svg', style="max-width: 82px", alt='').m-auto
          .col
            p.mb-0 Permite evaluar la rentabilidad del negocio.
         
      .col-md.tarjeta.bgA10.p-5.mb-3
        .row.justify-content-center.align-items-center.mb-4
          .col-auto
            img(src='@/assets/curso/temas/tema3/icono-05.svg', style="max-width: 82px", alt='').m-auto
          .col
            p.mb-0 Ayuda a identificar áreas donde se pueden reducir costos o aumentar ingresos.

      .col-md.tarjeta.bgA10.p-5.mb-3
        .row.justify-content-center.align-items-center.mb-4
          .col-auto
            img(src='@/assets/curso/temas/tema3/icono-06.svg', style="max-width: 82px", alt='').m-auto
          .col
            p.mb-0 Es clave para determinar el pago de impuestos y dividendos.
    
    .h4.tcvo.mb-4(data-aos="fade-down-right") ● C) Estado de flujo de efectivo

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-8.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img-05.png', alt='Texto que describa la imagen')
      .col-lg-7
        p.mb-0 #[b Definición]
        p El estado de flujo de efectivo muestra cómo la empresa genera y utiliza el efectivo en un período determinado.
        p.mb-0 #[b Estructura]
        p Se tienen las siguientes actividades:
        ul.lista-ul
          li(style="margin-bottom: 2px")
            i.fas.fa-angle-right
            p.mb-0 #[b Actividades de operación:] flujo de efectivo derivado de la actividad principal de la empresa, como cobros a clientes y pagos a proveedores.

          li(style="margin-bottom: 2px")
            i.fas.fa-angle-right
            p.mb-0 #[b Actividades de inversión:] movimientos relacionados con la compra o venta de activos a largo plazo, como propiedades o equipos.

          li(style="margin-bottom: 2px")
            i.fas.fa-angle-right
            p.mb-0 #[b Actividades de financiamiento:] incluye la obtención y pago de préstamos, emisión de acciones y distribución de dividendos.

    .tarjeta--container.row.mb-5(data-aos="fade-down-right") 
      .col-md.tarjeta.bgA10.p-5.mb-3
        .row.justify-content-center.align-items-center.mb-4
          .col-auto
            img(src='@/assets/curso/temas/tema3/icono-07.svg', style="max-width: 82px", alt='').m-auto
          .col
            p.mb-0 Indica la liquidez real de la empresa.
         
      .col-md.tarjeta.bgA10.p-5.mb-3
        .row.justify-content-center.align-items-center.mb-4
          .col-auto
            img(src='@/assets/curso/temas/tema3/icono-08.svg', style="max-width: 82px", alt='').m-auto
          .col
            p.mb-0 Ayuda a prever problemas de flujo de caja.

      .col-md.tarjeta.bgA10.p-5.mb-3
        .row.justify-content-center.align-items-center.mb-4
          .col-auto
            img(src='@/assets/curso/temas/tema3/icono-09.svg', style="max-width: 82px", alt='').m-auto
          .col
            p.mb-0 Es clave para evaluar la capacidad de pago de deudas y la sostenibilidad del negocio.
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //- .cronologia.mb-5
    //-   .contenedor
    //-     .tarjeta-evento.tarjeta-evento--paso1(data-aos="fade-left")
    //-       .tarjeta-titulo
    //-         .cajon-numero
    //-           span 01
    //-         h2.p-2.text-white Subtitle
    //-       .tarjeta-cuerpo.p-4
    //-         p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.
    //-         figure
    //-           img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-           figcaption Leyenda de la imagen 
    //-     .tarjeta-evento.tarjeta-evento--paso2(data-aos="fade-right")
    //-       .tarjeta-titulo
    //-         .cajon-numero
    //-           span 02
    //-         h2 Subtitle
    //-       .tarjeta-cuerpo
    //-         p.mb-0 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.
    //-     .tarjeta-evento.tarjeta-evento--paso3(data-aos="fade-left")
    //-       .tarjeta-titulo
    //-         .cajon-numero
    //-           span 03
    //-         h2 Subtitle
    //-       .tarjeta-cuerpo
    //-         p.mb-0 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.
    //-     .tarjeta-evento.tarjeta-evento--paso4(data-aos="fade-right")
    //-       .tarjeta-titulo
    //-         .cajon-numero
    //-           span 04
    //-         h2 Subtitle
    //-       .tarjeta-cuerpo
    //-         p.mb-0 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.
    //-     .tarjeta-evento.tarjeta-evento--paso5(data-aos="fade-left")
    //-       .tarjeta-titulo
    //-         .cajon-numero
    //-           span 05
    //-         h2 Subtitle
    //-       .tarjeta-cuerpo
    //-         p.mb-0 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis

</template>

<script>
export default {
  name: 'Tema2',
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
