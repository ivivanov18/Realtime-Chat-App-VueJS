<template>
  <div class="container welcome">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">{{title}}</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name:</label>
          <input type="text" name="name" v-model="name">
          <div v-if="feedback" class="red-text">{{feedback}}</div>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      title: "Real Time Chat App",
      name: null,
      feedback: null
    };
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({ name: "Chat", params: { name: this.name } });
      } else {
        this.feedback = "Enter a name to join the chat";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.welcome {
  max-width: 400px;
  margin-top: 100px;
}

.welcome h2 {
  font-size: 3em;
}

.welcome button {
  margin: 30px;
}
</style>
