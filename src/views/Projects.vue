<template>
  <div class="project-page">
    <h2>My Projects</h2>
    <div class="div-line"></div>
    <div class="project-wrapper">
      <div class="project-img">
        <img
          src="https://camo.githubusercontent.com/cf8d1b3ed6d02d02f56c9cae1661c56a8604a85711fc38c1124d5eb77aa9099c/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f57486f525448637078596e795872626c63572f67697068792e676966"
          alt=""
        />
      </div>
      <div class="project-name">Simple-twitter</div>
      <div class="project-description">this is a simple twitter</div>
    </div>
  </div>
</template>

<style scoped>
.project-page {
  margin: auto;
  width: 300px;
}
.div-line {
  margin: auto;
  width: 80%;
  border: 1px red solid;
}

.project-wrapper {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.project-img {
  width: 300px;
  height: 200px;
  background: grey;
  cursor: pointer;
}

.project-img:hover {
  transform: translate(-1px, -5px);
  transition: all 0.2s ease-out;
}
.project-img img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
}

.project-name {
  color: grey;
  margin-top: 1rem;
}

.project-description {
  color: black;
}
</style>