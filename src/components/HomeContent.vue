<template>
    <div class="hello">
    <!-- <h1 @click="broadcast">{{ msg }}</h1> -->
    <h1 @click="broadcast">{{ msg }}</h1>
    <h2>{{ fromParent }}</h2>
  </div>
</template>

<script>
export default {
  name: "HomeContent",
  props: {
    msg: String,
  },
  data() {
    return {
      fromParent: null,
    };
  },
  mounted() {
    window.addEventListener(
      "message",
      (event) => {
        // console.log("in VUE", event);
        this.fromParent = event.data.data;
        // console.log(this.fromParent);
        // if (event.origin !== "http://example.org:8080")
        //   return;

        // ...
      },
      false
    );
  },
  methods: {
    broadcast: function () {
      let jwt =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
      let data = {
        timestamp: Date.now(),
        name: "from VUE",
        type: "message",
        stuff: ["thing", "thing"],
      };
      window.parent.postMessage({ jwt, data }, "*");
    },
  },
};
</script>
