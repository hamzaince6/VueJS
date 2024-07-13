<template>
  <section>
    <h1>Contact</h1>
    <div v-for="contact in contacts" :key="contact.id">
      <router-link :to="`/contact/${contact.id}`">{{ contact.email }}</router-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        { id: 1, name: "John", email: "john@example.com" },
        { id: 2, name: "Ely", email: "ely@example.com" },
        { id: 3, name: "Carl", email: "carl@example.com" }
      ]
    }
  }
}
</script>

<style scoped>

</style>