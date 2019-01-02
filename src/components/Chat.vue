<template>
  <div class="container chat">
    <h2>{{title}} of {{this.name}}</h2>
  </div>
</template>

<script>
export default {
  name: "Chat",
  props: ["name"],
  data() {
    return {
      title: "Chat"
    };
  }
};
</script>

