<template>
  <h1>Blog!</h1>
  <div>
    <router-link :to="{ name: 'home' }">home</router-link>
    <router-link :to="categoryView('tech')">Tech</router-link>
    <router-link :to="categoryView('carreira')">Carreira</router-link>
  </div>

  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Introdução ao Vue 3 e sua Reatividade',
          slug: 'introducao-vue3-reatividade',
          category: 'tech',
          content:
            'O Vue 3 trouxe mudanças significativas na forma como lidamos com reatividade...',
        },
        {
          id: 2,
          title: 'Como Organizar seu Plano de Carreira em TI',
          slug: 'organizando-plano-carreira-ti',
          category: 'carreira',
          content: 'Construir uma carreira sólida em TI exige um caminho bem pensado...',
        },
        {
          id: 3,
          title: 'Por que Single Page Applications são Populares?',
          slug: 'por-que-spas-populares',
          category: 'tech',
          content: 'As SPAs mudaram a experiência do usuário ao trazer mais fluidez...',
        },
        {
          id: 4,
          title: 'Trabalhando com Rotas no Vue Router',
          slug: 'trabalhando-com-vue-router',
          category: 'tech',
          content: 'O Vue Router oferece uma API simples para criar sistemas de navegação...',
        },
        {
          id: 5,
          title: 'Melhores Práticas para Estudar Programação',
          slug: 'melhores-praticas-estudo-programacao',
          category: 'carreira',
          content: 'Programar bem é tanto sobre técnica quanto sobre disciplina...',
        },
        {
          id: 6,
          title: 'Refatoração: Quando e por que Fazer?',
          slug: 'refatoracao-quando-por-que',
          category: 'tech',
          content:
            'Refatoração é o processo de melhorar código sem alterar seu comportamento externo...',
        },
        {
          id: 7,
          title: 'Portfólio de Desenvolvedor: Como Construir?',
          slug: 'portfolio-desenvolvedor-como-construir',
          category: 'carreira',
          content: 'Um portfólio pode ser mais importante que um currículo para devs iniciantes...',
        },
        {
          id: 8,
          title: 'Entendendo o Lifecycle do Vue',
          slug: 'entendendo-lifecycle-vue',
          category: 'tech',
          content: 'Cada componente Vue passa por etapas de criação, atualização e destruição...',
        },
        {
          id: 9,
          title: 'Como se Destacar em Entrevistas Técnicas',
          slug: 'como-se-destacar-entrevista-tecnica',
          category: 'carreira',
          content:
            'Entrevistas técnicas avaliam raciocínio, comunicação e clareza além do código...',
        },
        {
          id: 10,
          title: 'O Futuro do Desenvolvimento Front-End',
          slug: 'futuro-do-desenvolvimento-frontend',
          category: 'tech',
          content:
            'Ferramentas como Vite, WebAssembly e novos frameworks estão moldando o futuro...',
        },
      ],
    }
  },
  methods: {
    categoryView(category) {
      return {
        name: 'category-view',
        params: { categoryName: category },
      }
    },
  },
  provide() {
    return {
      posts: this.posts,
    }
  },
}
</script>
