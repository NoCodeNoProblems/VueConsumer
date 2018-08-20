<template>
    <div>
        <h1>Tabela</h1>
        <b-table striped hover  :items="items"></b-table>
    </div>
</template>
<script>
import Http from '@/services/http';

export default {
  props: ['item'],
  data () {
    return {
      items: []
    }
  },
  created() {
    this.loadData();
  },

  methods:{
    loadData(){
      Http.get('tarefas/search?id=1')
        .then(({ data }) => {
          this.items = data;
        });

    }
  }
};
</script>

<style>

</style>
