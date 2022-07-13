<template>
	<div class="front-page">
		<VideoBG/>
		<TextLayer/>
		<JobPosition/>
	</div>
</template>

<script>
import TextLayer from "../components/TextLayer.vue";
import JobPosition from "../components/JobPosition.vue";
import VideoBG from "../components/VideoBG";
export default {
  name: "IndexPage",
  layout: "default",
  mounted() {
    this.setupIndex();
  },
  methods: {
    setupIndex() {
      console.log("SetupIndex");
    }
  },
  components: { TextLayer, JobPosition, VideoBG }
};
</script>
