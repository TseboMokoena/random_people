<template>
  <q-page>
    <listPeople></listPeople>
  </q-page>
</template>

<script>
import listPeople from "../components/listPeople.vue"

export default {
  name: 'listPeoplePage',
  components:{
    listPeople:listPeople
  }
}
</script>

<style>
</style>
