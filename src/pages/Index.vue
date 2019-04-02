<template>
  <q-page class="flex flex-center">
    <q-btn label="View people list" @click="goToListPeoplePage"></q-btn>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  methods: {
    goToListPeoplePage() {
      this.$router.push({name: 'app.listPeople'})
    },
  },
}
</script>

