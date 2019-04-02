<template>
  <div>
    <h3 class="flex flex-center q-pa-sm">People</h3>

    <div class="flex flex-center q-pa-sm">
     <q-btn @click.native="getListOfPeople">Load people</q-btn>
    </div>

    <div class="flex flex-center q-pa-sm">
      <q-list highlight inset-separator>
      <div v-for="person in listOfPeople" :key="person.id">
        <q-item multiline @click.native="removePerson(person.id)">
          <q-item-side>
            <span class="text-red">
              <q-item-tile icon="remove_circle" />
            </span>
          </q-item-side>
          <q-item-main
            :label="person.name">
            <p>
              Age: {{person.age}}
              <br>
              Gender: {{person.gender}}
              <br>
              Company: {{person.company}}
              <br>
              Phone: {{person.phone}}
              <br>
              Email: {{person.email}}
              <br>
              Address: {{person.address}}
              <br>
              Favorite Fruit: {{person.favoriteFruit}}
            </p>
          </q-item-main>
        </q-item>
      </div>
    </q-list>

    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions('people', {
      getListOfPeople: 'getListOfPeople',
      removePerson: 'removePerson'
    }),
  },
  computed: {
    ...mapState({
      listOfPeople: state => state.people.listOfPeople
    })
  }
}
</script>

<style>
</style>
