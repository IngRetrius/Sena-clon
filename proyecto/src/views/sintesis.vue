<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo Fundamentos del análisis financiero introduce las bases esenciales para interpretar la información financiera de una empresa. Se estudian los principios contables y su impacto en los estados financieros, así como la relación entre activos, pasivos, patrimonio, ingresos y gastos.
    p También se analizan los principales estados financieros y las técnicas básicas de análisis, como la lectura horizontal y vertical, facilitando la evaluación del desempeño empresarial.
    p Además, se destacan los beneficios y limitaciones del análisis financiero en la toma de decisiones estratégicas.
    p Este componente fortalece la capacidad de interpretar datos financieros con criterio analítico, proporcionando herramientas clave para evaluar la estabilidad y viabilidad económica de una organización.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis del componente formativo Fundamentos del análisis financiero, se define lo que tienen que ver con el análisis financiero y se explican cuáles son su objetivos dentro del proceso organizacional; además, de relacionan los principios contables y el impacto que estos causan, a partir de la interpretación y la ecuación contable; de igual manera, se hace mención sobre el balance general, los resultados y el flujo de efectivo que está presente en los estados financieros; y se finaliza, con la explicación del análisis vertical y horizontal que se lleva a cabo dentro de las técnicas del análisis financiero.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
