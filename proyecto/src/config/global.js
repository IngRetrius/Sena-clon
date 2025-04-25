export default {
  global: {
    componenteFormativo: 'Fundamentos del análisis financiero',
    descripcionCurso:
      'Este componente introduce a los aprendices en los conceptos fundamentales del análisis financiero, proporcionando una base sólida sobre su importancia en la gestión empresarial. Se explorarán los principios de contabilidad aplicados al análisis financiero y se abordarán técnicas básicas para la lectura e interpretación de estados financieros.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Introducción al análisis financiero y su importancia en las organizaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición y objetivos del análisis financiero',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia del análisis financiero en las organizaciones',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Aplicaciones del análisis financiero en la toma de decisiones',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Usuarios del análisis financiero: internos y externos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Apoyo en la toma de decisiones estratégicas',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Beneficios y limitaciones del análisis financiero',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Principios de contabilidad aplicados al análisis financiero',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Relación entre activos, pasivos, patrimonio, ingresos y gastos',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Técnicas básicas: análisis horizontal y vertical de estados financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Análisis horizontal',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Análisis vertical',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Comparación entre el análisis horizontal y vertical',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        '1. Introducción al análisis financiero y su importancia en las organizaciones',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2023). Análisis financiero en la unidad productiva. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ksTnz02WqTU ',
    },
    {
      tema: '2. Principios de contabilidad aplicados al análisis financiero',
      referencia:
        'Nava Rosillón, M. A. (2009). Análisis financiero: una herramienta clave para una gestión financiera eficiente. Revista Venezolana de Gerencia, 14(48).',
      tipo: 'Artículo',
      link:
        'https://ve.scielo.org/scielo.php?script=sci_arttext&pid=S1315-99842009000400009 ',
    },
  ],
  glosario: [
    {
      termino: 'Análisis financiero',
      significado:
        'proceso de evaluación de la situación económica y financiera de una empresa, mediante el estudio de sus estados financieros.',
    },
    {
      termino: 'Capital de trabajo',
      significado:
        'diferencia entre los activos corrientes y los pasivos corrientes de una empresa, indicando su capacidad para operar a corto plazo.',
    },
    {
      termino: 'Endeudamiento',
      significado:
        'nivel de obligaciones financieras de una empresa, en relación con su patrimonio y activos.',
    },
    {
      termino: 'Liquidez',
      significado:
        'capacidad de una empresa para cumplir con sus obligaciones a corto plazo, utilizando sus activos más líquidos.',
    },
    {
      termino: 'Margen de utilidad',
      significado:
        'indicador financiero que mide la rentabilidad de una empresa, en relación con sus ingresos totales.',
    },
    {
      termino: 'Punto de equilibrio',
      significado:
        'nivel de ventas en el cual los ingresos cubren exactamente los costos totales, sin generar ganancias ni pérdidas.',
    },
    {
      termino: 'Rentabilidad',
      significado:
        'relación entre las ganancias obtenidas y los recursos empleados para generarlas, expresada generalmente como un porcentaje.',
    },
    {
      termino: 'Tasa de interés',
      significado:
        'porcentaje que se cobra o paga por el uso de una cantidad de dinero, durante un tiempo determinado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Coral Delgado, L. C. & Gudiño Dávila, E. L. (2014). Contabilidad universitaria. (7ª Edición). Bogotá, Colombia: Editorial. Mc Graw Hill.',
    },
    {
      referencia:
        'Díaz, H. (2006). Contabilidad general. (2ª Edición). México DF, México: Editorial. Pearson Prentice Hall.',
    },
    {
      referencia:
        'García, O. L. (2009). Administración financiera: Fundamentos y aplicaciones. (4ª Edición). Bogotá, Colombia: Editorial. Desconocida.',
    },
    {
      referencia:
        'Ortiz Anaya, H. (2011). Análisis financiero aplicado y principios de administración financiera. (14ª Edición). Bogotá, Colombia: Editorial. Universidad Externado de Colombia.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>fullstack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>fullstack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
