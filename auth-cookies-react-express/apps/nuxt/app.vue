<template>
  <div>
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    async login() {
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: "admin",
            password: "admin",
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    },
  },
};
</script>
