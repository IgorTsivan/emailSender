<template>
  <div class="home">
    <input v-model="message" type="text">
    <input v-model="email" type="email">
    <button @click="sendEmail">send</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data: () => ({
    message: '',
    email: ''
  }),
  methods:{
    async sendEmail(){
      try {
        const response = await fetch('http://localhost:5000/sendEmail', {
          method: 'POST',
          body: JSON.stringify({message: this.message, email: this.email}),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        console.log(await response)
      }catch (e){
        console.log(e)
      }
    }
  }
}
</script>
