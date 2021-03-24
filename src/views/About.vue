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
            src="https://github.com/james556674/My-Profile-Web-Vue/blob/master/assets/projectPics/selfImg.jpeg?raw=true"
            class="outer-shadow"
            alt="profile-pic"
          />
        </div>
        <!-- social links start -->
        <div class="social-links">
          <a
            href="https://github.com/james556674"
            class="outer-shadow hover-in-shadow"
            target="_blank"
            ><font-awesome-icon
              class="font-awesome-icon"
              :icon="['fab', 'github']"
          /></a>
          <a
            href="https://medium.com/@james556674"
            class="outer-shadow hover-in-shadow"
            target="_blank"
            ><font-awesome-icon
              class="font-awesome-icon"
              :icon="['fab', 'medium']"
          /></a>
          <a
            href="https://codepen.io/James556674"
            class="outer-shadow hover-in-shadow"
            target="_blank"
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
            <span
              >Hi! My name is TSAI CHUNG WEI. I am learner for becoming a
              front-end-engineer.</span
            >
            I like challenges. I join lots of competitions in my student's life.
            There are some ball games in college and three commercial
            competitions in graduate school. To me, I like to spend a long time
            finishing a goal, like a year or half year. The reason is that I
            like the beautiful outcome, and every growth I got when I failed.
          </p>
          <p>
            I decided to learn code after a failure in commercial competition. I
            know that I have to learn some skills, or my proposal is nothing
            more than a proposal.
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
                    為前端網頁開發班的學生批改作業，並針對程式品質、邏輯思考的方式給予建議。
                    課程內容以基礎JavaScript、HTML、CSS為主，包含迴圈應用、條件式應用、基礎切版...等
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
                    個人主要負責與客戶接洽，編排客戶字稿，追蹤物流，以及陌生開發外
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
  text-align: left;
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