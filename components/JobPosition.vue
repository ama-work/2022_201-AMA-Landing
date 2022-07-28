<!-- Please remove this file from your project -->
<template>
	<div class="job_position" id="mydiv" :class="{'active': isAccActive === true}">
		<div class="job_position_header" id="mydivheader" @click="toggleJobPositonAcc">
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
						<li>3 projects you have worked on that you love</li>
						<li>3 latest projects you have worked on</li>
						<li>3 favorite websites and why you like them (excluding own work)</li>
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
    top: 25%;
    right: 20%;
    bottom: unset;
    left: unset;
  }
}
.job_position_header {
  cursor: pointer;
}
.job_position_content_header {
  border-top: 0.1rem solid black;
  border-bottom: 0.1rem solid black;
}
.job_position_header,
.job_position_content_header {
  font-size: 1.8rem;
  line-height: 1.35;
  padding: 1.2rem 2rem 1.3rem;

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
        height: 60vh;
      }
    }
  }
}
.job_position_content {
  height: 0vh;
  overflow: hidden;
  transition: all $transition-duration ease-in-out;
  border-top: 0;
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
      isAccActive: false,
      canOpen: true,
      pos1: 0,
      pos2: 0,
      pos3: 0,
      pos4: 0,
      elmnt: ""
    };
  },
  methods: {
    setupJP() {
      this.dragElement(document.getElementById("mydiv"));
      if (this.$route.query.job === "yes") {
        setTimeout(() => {
          this.toggleJobPositonAcc();
        }, 1000);
      }
    },
    toggleJobPositonAcc() {
      if (this.canOpen) this.isAccActive = !this.isAccActive;
    },

    dragElement(elmnt) {
      this.elmnt = elmnt;
      if (document.getElementById(this.elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(
          this.elmnt.id + "header"
        ).onmousedown = this.dragMouseDown;
      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        this.elmnt.onmousedown = this.dragMouseDown;
      }
    },
    dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      this.pos3 = e.clientX;
      this.pos4 = e.clientY;
      document.onmouseup = this.closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = this.elementDrag;
    },

    elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      this.pos1 = this.pos3 - e.clientX;
      this.pos2 = this.pos4 - e.clientY;
      this.pos3 = e.clientX;
      this.pos4 = e.clientY;
      // set the element's new position:
      this.elmnt.style.top = this.elmnt.offsetTop - this.pos2 + "px";
      this.elmnt.style.left = this.elmnt.offsetLeft - this.pos1 + "px";
      this.canOpen = false;
    },

    closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
      setTimeout(() => {
        this.canOpen = true;
      }, 200);
    }
  }
};
</script>
