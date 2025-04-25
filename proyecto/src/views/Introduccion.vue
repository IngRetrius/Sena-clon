<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p En el mundo empresarial, tomar decisiones acertadas requiere información clara y precisa sobre la situación financiera de una organización. ¿Cómo determinar si una empresa es rentable o si enfrenta riesgos económicos? ¿Qué herramientas permiten analizar su desempeño financiero con objetividad?
        p Este componente formativo aborda los fundamentos del análisis financiero, una disciplina esencial para evaluar la salud económica de las empresas. A través de principios contables y técnicas como la lectura horizontal y vertical de los estados financieros, se explorará cómo interpretar cifras y tendencias para facilitar la toma de decisiones estratégicas.
        p Partiendo de lo anterior, se invita a que acceda al siguiente video, el cual relaciona la temática a tratar durante este componente formativo:

      .col-lg-5.col-8.mb-lg-0.mb-4.order-lg-2.order-1(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/introduccion/img-01.png', alt='Texto que describa la imagen')
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/un2fLo4hr0Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
