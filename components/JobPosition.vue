<!-- Please remove this file from your project -->
<template>
	<div class="job_position" id="job_position" :class="{'active': isAccActive === true}">
		<div class="job_position_header" id="job_position_header" @click="toggleJobPositonAcc">
			<span>Job Position</span>
			<span id="arrow">
				<SVGArrow :rotation="isAccActive" />
			</span>
		</div>
		<div class="job_position_content">
			<div class="job_position_content_header">Web Developer</div>
			<div class="job_position_content_content">
				<p>We are looking for a web developer, based in Barcelona, with design sensibility to build pixel-perfect and performance-optimised experiences to join our team. The candidate will be responsible for both back-end and front-end development, including creating WordPress themes & plugins. The candidate should have a strong understanding of e-commerce, UX and content management systems.</p>
				<p>You're our perfect candidate if you:</p>
				<ul>
					<li>Develop modern high-converting designs that utilise all the best marketing techniques</li>
					<li>Program the front-end layer of our sites in HTML5 and CSS3, SASS taking into account standards, compatibility between browsers and mobile devices</li>
					<li>Work with all aspects of the WordPress Codex</li>
					<li>Design and develop the front-end layer of our own tools</li>
					<li>Test across multiple browsers and devices to ensure maximum compatibility</li>
					<li>Develop code with SEO best practices and design patterns</li>
					<li>Use tools like Google Analytics and HubSpot to make informed decisions on user interactions and improvements to increase website traffic and engagement</li>
					<li>Have an eye for design and pixel-perfection</li>
				</ul>
				<p>Required skills and knowledge:</p>
				<ul>
					<li>Proficient in HTML5, CSS3, Javascript, PHP, and Git</li>
					<li>Extensive experience working with the Wordpress code base (functions, hooks, loops, CPT)</li>
					<li>Used to working with the best known plugins (AMP, Yoast, WPML, ACF, Gutenberg)</li>
					<li>Understand SEO and digital marketing best practices</li>
					<li>Entrepreneurial spirit, inquisitive, analytical, self-driven, and self-motivated</li>
				</ul>
				<p>Plus:</p>
				<ul>
					<li>Deep knowledge of Google tag manager, Google analytics</li>
					<li>Knowledge of Google tag manager, Google analytics</li>
					<li>React/Vue or any other fancy framework that implements headless or decoupled websites</li>
					<li>Able to handle a project on Shopify (Liquid)</li>
				</ul>
				<p>Please send a CV to info@ama.work with:
					<ul>
						<li>Top 3 projects you have worked on that you love</li>
						<li>Last 3 projects you have worked on</li>
						<li>3 Instagram accounts you want to share</li>
					</ul>
				</p>
			</div>
		</div>
	</div>
</template>
<style lang='scss' scoped>
@import "~assets/css/style";
.job_position {
  background-color: white;
  color: black;
  position: fixed;

  right: 0;
  bottom: 0;
  left: 0;

  border: 0.1rem solid black;
  p,
  a {
    color: black;
  }
  @include media-breakpoint-up(md) {
    width: 45rem;
    top: 30%;
    right: 20%;
    bottom: unset;
    left: unset;
  }
}
.job_position_header,
.job_position_content_header {
  font-size: 1.8rem;
  line-height: 1.35;
  padding: 1.2rem 2rem 1.3rem;

  border-bottom: 0.1rem solid black;
  position: relative;
}
.job_position {
  &.active {
    .job_position_header {
      svg {
        transform: rotate(180deg);
      }
    }
    .job_position_content {
      height: calc(100vh - 12.4rem);
      @include media-breakpoint-up(md) {
        height: 40vh;
      }
    }
  }
}
.job_position_content {
  height: 0vh;
  overflow: hidden;
  transition: all $transition-duration ease-in-out;
  .job_position_content_header {
    text-align: center;
  }
  .job_position_content_content {
    font-size: 1.4rem;
    line-height: 1.35;
    height: 100%;
    overflow: scroll;
    padding: 0.6rem 2rem 4em;
  }
}
</style>
<script>
import SVGArrow from "~/components/SVGArrow";

export default {
  name: "JobPosition",
  components: { SVGArrow },
  mounted() {
    this.setupJP();
  },
  data() {
    return {
      isAccActive: false
    };
  },
  methods: {
    setupJP() {
      console.log("JP");
      this.dragElement("job_position");
    },
    toggleJobPositonAcc() {
      this.isAccActive = !this.isAccActive;
    },

    dragElement(elmnt) {
      var dragItem = document.getElementById("job_position");
      var container = document.body;

      var active = false;
      var currentX;
      var currentY;
      var initialX;
      var initialY;
      var xOffset = 0;
      var yOffset = 0;

      container.addEventListener("touchstart", dragStart, false);
      container.addEventListener("touchend", dragEnd, false);
      container.addEventListener("touchmove", drag, false);

      container.addEventListener("mousedown", dragStart, false);
      container.addEventListener("mouseup", dragEnd, false);
      container.addEventListener("mousemove", drag, false);

      function dragStart(e) {
        console.log("drag");
        if (e.type === "touchstart") {
          initialX = e.touches[0].clientX - xOffset;
          initialY = e.touches[0].clientY - yOffset;
        } else {
          initialX = e.clientX - xOffset;
          initialY = e.clientY - yOffset;
        }

        if (e.target === dragItem) {
          console.log("drag ok");
          console.log(dragItem);
          active = true;
        }
      }

      function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;

        active = false;
      }

      function drag(e) {
        if (active) {
          e.preventDefault();

          if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
          } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
          }

          xOffset = currentX;
          yOffset = currentY;

          setTranslate(currentX, currentY, dragItem);
        }
      }

      function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
      }
    }
  }
};
</script>
