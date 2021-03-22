<template>
  <div class="about-me about-section">
    <div class="row">
      <div class="section-title">
        <h1>About me</h1>
      </div>
    </div>
    <div class="about-detail">
      <div class="about-img">
        <div class="img-box inner-shadow">
          <img
            src="https://lh3.googleusercontent.com/ZIiaWF9GREsYOgVbB7ztCUoUrlt5P2JI7PWuo-6uJepU3N0TsQDdnB3KBNCaBFTxr5j8KgLNfjAYxjb-MUZ3-FQek4rp7n-mlUJc0rl8J69LByFQZTwGAAiAWPZf9lw51s0YPShSihKA-lFt2_659SxMzTcz31n6JETwVzsZKNr2byvS3RscEtI66-GvhwVGNgTJ5G_lGbX_dofbEt84XwQ6SuU8XrgCcWrWnsgHbhUJEuZNTwlA2cpnVG2N5vE3hKqGI5zgsKTqFURrT9YbhgpUttTiSUa0M1-7oPcKlbMPxYsr7Rn1bQPSUCTSpeWm04VxM5rgtzAmwLPK19kC4564CsXRCHYvNACud4uLJ6UbUtiaq3wfxhmxLtjQZ_XDWDBvxCUmERmOxWHNCLGPgmOREy63rCrV2RXQB8Dvyx5gwhFbZ5oS-BzNRwiTEdGI6tMdES2-YodEC2LUZAjCnJJBLJvYxmyvmJFwi3UJSYC2RXIjDS0oOqn_BnEyQv0_DgPjrjVCS91Mqtmav0NmE-DOBtOeiuqJ5jiCyt4jn7mwQDNjG-ozmvsOx_hykRv2hInnfymah-UarjhKNeIaHi8U7k1wNbR7cyzGzyVR4BznDakB8aRdFnnDdkCrhwcA5AENYo2RIgAakdkFFYT4cbI7irdDCkOQviR4Q8Ao8TS5ypX7RAXwZvDkGlWOKfEoiy05Aqz8_hYtUMjeN9J95F4=s400-no?authuser=0"
            class="outer-shadow"
            alt="profile-pic"
          />
        </div>
        <!-- social links start -->
        <div class="social-links">
          <a href="#" class="outer-shadow hover-in-shadow"
            ><font-awesome-icon
              class="font-awesome-icon"
              :icon="['fab', 'github']"
          /></a>
          <a href="#" class="outer-shadow hover-in-shadow"
            ><font-awesome-icon
              class="font-awesome-icon"
              :icon="['fab', 'medium']"
          /></a>
          <a href="#" class="outer-shadow hover-in-shadow"
            ><font-awesome-icon
              class="font-awesome-icon"
              :icon="['fab', 'codepen']"
          /></a>
        </div>
        <!-- social links end -->
      </div>
      <div class="about-info">
        <div class="about-info-eng" v-if="this.language">
          <p>
            <span>Hi! My name is TSAI CHUNG WEI. I am a Web Developer.</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse
          </p>
          <p>
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </p>
        </div>
        <div class="about-info-chi" v-else>
          <p>
            <span
              >你好！ 我的名字叫蔡仲維，是一位立志成為前端工程師的學習者!</span
            >
            我是個喜歡追求挑戰的人，在學時期參與過許多競賽，大學時期大多是球類運動，研究所時期則參與過三個商業競賽，對我來說，花一段不算非常長也不算非常短的時間，例如半年到一年來準備一個目標，除了喜歡獲得成果後的成就感，也享受著挫敗後能夠使自己更加的成長。
          </p>
          <p>
            會開始學習程式也是這個契機，在一次商業競賽出局後，發現一份企劃書幾使花了在長的時間，沒有技術就沒辦法實作，從那次開始就下定決心想要學技術。
          </p>
        </div>

        <a
          href="https://www.cakeresume.com/pdf/s--684gAvPgWOlCDm5_jbijXA--/ay78V.pdf"
          download="resume.pdf"
          class="btn outer-shadow hover-in-shadow"
          >Download CV</a
        >
        <a
          v-on:click="languageChange"
          href="#contact"
          class="link-item btn outer-shadow hover-in-shadow"
          >{{ this.language ? "中文" : "English" }}</a
        >
      </div>
    </div>
    <!-- about tabs start -->
    <div class="row">
      <div class="about-tabs">
        <span
          v-on:click="changeShowSkill"
          v-bind:class="{ 'outer-shadow': showSkill }"
          class="tab-item"
          >skills</span
        >
        <span
          v-on:click="changeShowExp"
          v-bind:class="{ 'outer-shadow': showExp }"
          class="tab-item"
          >experience</span
        >
      </div>
    </div>
    <!-- about tabs end -->
    <!-- skills start -->
    <div class="row" v-if="this.showSkill">
      <div class="skills tab-content">
        <div class="row">
          <!-- skill item start -->
          <div class="skill-item">
            <p>Html</p>

            <div class="progress inner-shadow">
              <div class="progress-bar" style="width: calc(80% - 14px)">
                <span>80%</span>
              </div>
            </div>
          </div>
          <!-- skill item end -->
          <!-- skill item start -->
          <div class="skill-item">
            <p>CSS</p>
            <div class="progress inner-shadow">
              <div class="progress-bar" style="width: calc(80% - 14px)">
                <span>80%</span>
              </div>
            </div>
          </div>
          <!-- skill item end -->
          <!-- skill item start -->
          <div class="skill-item">
            <p>javascript</p>
            <div class="progress inner-shadow">
              <div class="progress-bar" style="width: calc(60% - 14px)">
                <span>60%</span>
              </div>
            </div>
          </div>
          <!-- skill item end -->
          <!-- skill item start -->
          <div class="skill-item">
            <p>Vue.js</p>
            <div class="progress inner-shadow">
              <div class="progress-bar" style="width: calc(70% - 14px)">
                <span>70%</span>
              </div>
            </div>
          </div>
          <!-- skill item end -->
        </div>
      </div>
    </div>
    <!-- skills end -->
    <!-- experience start -->
    <div class="row" v-else>
      <div class="experience tab-content">
        <div class="row">
          <div class="timeline">
            <div class="row">
              <!-- timeline item start -->
              <div class="timeline-item">
                <div class="timeline-item-inner outer-shadow">
                  <div class="icon">
                    <font-awesome-icon
                      class="font-awesome-icon"
                      :icon="['fas', 'archway']"
                    />
                  </div>

                  <span>Nov, 2020 - Jan, 2021</span>
                  <h3>實習助教</h3>
                  <h4>AlphaCamp</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <!-- timeline item end -->
              <!-- timeline item start -->
              <div class="timeline-item">
                <div class="timeline-item-inner outer-shadow">
                  <div class="icon">
                    <font-awesome-icon
                      class="font-awesome-icon"
                      :icon="['fas', 'archway']"
                    />
                  </div>
                  <span>Aug, 2019 - Nov, 2020</span>
                  <h3>銷售業務</h3>
                  <h4>禮依藝行銷有限公司</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <!-- timeline item end -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- experience end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSkill: true,
      showExp: false,
      language: true,
    };
  },
  methods: {
    changeShowSkill() {
      this.showSkill = true;
      this.showExp = false;
    },
    changeShowExp() {
      this.showSkill = false;
      this.showExp = true;
    },
    languageChange() {
      if (this.language) {
        this.language = false;
      } else {
        this.language = true;
      }
    },
  },
};
</script>

<style scoped>
.about-detail {
  display: flex;
  flex-direction: row;
}
.about-me {
  margin: auto;
  max-width: 1000px;
}
.about-me .about-img {
  padding: 0 15px;
}
.about-me .about-img .img-box {
  margin-right: 2rem;
  width: 400px;
  height: 400px;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.about-me .about-img .img-box img {
  width: 95%;
  height: 95%;
  border: 10px solid transparent;
  border-radius: 5px;
}

.about-section .about-info p {
  text-align: left;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 15px;
}
.about-section .about-info span {
  font-weight: 600;
}

.hover-in-shadow {
  position: relative;
  z-index: 1;
}
.hover-in-shadow:hover {
  box-shadow: 0 0 0 #d0d0d0, 0 0 0 #f8f8f8;
}
.hover-in-shadow:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  z-index: -1;
}
.hover-in-shadow:hover:after {
  box-shadow: inset 3px 3px 3px #d0d0d0, inset -3px -3px 3px #f8f8f8;
}

.btn {
  padding: 10px 25px;
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;
  line-height: 1.5;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.3s ease;
  display: inline-block;
  border: none;
  margin-right: 1rem;
}
.btn:after {
  border-radius: 30px;
}

.about-section .about-img .social-links {
  margin-top: 20px;
}
.about-section .about-img .social-links a {
  display: inline-block;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  transition: all 0.3s ease;
  margin-right: 1rem;

  line-height: 40px;
}

.about-section .about-img .social-links a .font-awesome-icon {
  color: black;
  font-size: 1rem;
}
.about-section .about-img .social-links a:after {
  border-radius: 50%;
}

.about-section .about-tabs {
  padding: 60px 15px 50px;
  flex: 0 0 100%;
  max-width: 100%;
  text-align: center;
}
.about-section .about-tabs .tab-item {
  display: inline-block;
  margin: 0 5px 10px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 30px;
  transition: all 0.3s ease;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
}
.about-section .about-tabs .tab-item:hover:not(.active) {
  opacity: 0.6;
}

.about-section .tab-content {
  flex: 0 0 100%;
  max-width: 100%;
}
.about-section .skills {
  min-height: 300px;
}
.about-section .skills .skill-item {
  margin: auto;
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 15px;
  margin-bottom: 40px;
}
.about-section .skills .skill-item p {
  text-align: left;
  font-size: 16px;
  text-transform: capitalize;
  margin: 0 0 10px;
}
.about-section .skills .skill-item .progress {
  height: 20px;
  border-radius: 10px;
  position: relative;
}
.about-section .skills .skill-item .progress-bar {
  background-color: black;
  height: 6px;
  left: 7px;
  top: 7px;
  position: absolute;
  border-radius: 10px;
}
.about-section .skills .skill-item .progress-bar span {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 16px;
  font-weight: 500;
  margin-top: -40px;
}
.about-section .experience {
  padding-bottom: 80px;
}
.about-section .timeline {
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
}
.about-section .timeline:before {
  content: "";
  width: 1px;
  height: 100%;
  left: 50%;
  top: 0;
  background-color: black;
  position: absolute;
}
.about-section .timeline .timeline-item:nth-child(odd) {
  padding-right: calc(50% + 50px);
  text-align: right;
}
.about-section .timeline .timeline-item:nth-child(even) {
  padding-left: calc(50% + 50px);
  text-align: left;
}
.about-section .timeline .timeline-item-inner {
  padding: 30px;
  border-radius: 5px;
  position: relative;
}
.about-section .timeline .timeline-item-inner:before {
  content: "";
  position: absolute;
  width: 30px;
  height: 1px;
  background-color: black;
  top: 37px;
  z-index: -1;
}
.about-section
  .timeline
  .timeline-item:nth-child(odd)
  .timeline-item-inner:before {
  right: -30px;
}
.about-section
  .timeline
  .timeline-item:nth-child(even)
  .timeline-item-inner:before {
  left: -30px;
}
.about-section .timeline .timeline-item-inner .icon {
  height: 40px;
  width: 40px;
  background-color: white;
  text-align: center;
  border: 1px solid #dddddd;
  border-radius: 50%;
  line-height: 40px;
  color: #1fc586;
  position: absolute;
  top: 18px;
}
.about-section .timeline .timeline-item-inner .font-awesome-icon {
  font-size: 1rem;
}

.about-section .timeline .timeline-item:nth-child(odd) .icon {
  right: -70px;
}
.about-section .timeline .timeline-item:nth-child(even) .icon {
  left: -70px;
}
</style>