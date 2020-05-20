<template>
  <div class="navbar-header">
    <h1>
      {{ title }}{{ titleSuffix }} {{ developmentTier }}
    </h1>
    <ul>
      <li>
        <router-link class="navbar-router-link" :to="{name: 'waterStorage'}">
          <span id="waterStorage" class="router-link-name">{{ waterStorageName }}</span>
        </router-link>
      </li>
      <li>
        <router-link class="navbar-router-link" :to="{name: 'waterUse'}">
          <span id="waterUse" class="router-link-name">{{ waterUseName }}</span>
        </router-link>
      </li>
      <li>
        <router-link class="navbar-router-link" :to="{name: 'waterTemperature'}">
          <span id="waterTemperature" class="router-link-name">{{ waterTemperatureName }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ApplicationFeatureSelection',
    data() {
        return {
            title: process.env.VUE_APP_TITLE,
            titleSuffix: process.env.VUE_APP_TITLE_SUFFIX,
            developmentTier: process.env.VUE_APP_TIER,
            waterStorageName: 'water storage',
            waterUseName: 'water use',
            waterTemperatureName: 'water temperature',
            mobileVersionBelowThisScreenWidth: 950,
            window: {
                width: 0,
                height: 0
            }
        }
    },
    computed: {
        currentRouteName: function() {
            return this.$route.name;
        }
    },
    watch: {
        currentRouteName: function (newValue, oldValue) {
            this.changeActiveFeatureTab(newValue);
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize() {
          this.window.width = window.innerWidth;
          this.window.height = window.innerHeight;
          this.changeNameBasedOnScreenSize(this.window.width);
      },
      changeActiveFeatureTab(activeFeatureName) { // this highlights the correct application feature link
          if (activeFeatureName !== 'QuestionsAndAnswers') {
            const linkElements = document.querySelectorAll('.router-link-name');
            linkElements.forEach(function (link) {
                link.style.borderBottom = 'none';
            });
            if (this.window.width >= this.mobileVersionBelowThisScreenWidth) {
                console.log('bigger')
                const activeLink = document.getElementById(activeFeatureName);
                activeLink.style.borderBottom = 'thick solid white';
            } else {
                console.log('smaller')
                const activeLink = document.getElementById(activeFeatureName);
                activeLink.style.borderBottom = 'thin solid #00264c';
            }
        }
      },
      changeNameBasedOnScreenSize() {
        if (this.window.width >= this.mobileVersionBelowThisScreenWidth) {
            this.waterUseName = 'water use';
            this.waterStorageName = 'water storage';
            this.waterTemperatureName = 'water temperature';
        }
        else {
            this.waterUseName = 'use';
            this.waterStorageName = 'storage';
            this.waterTemperatureName = 'temperature';
        }
      }
    }
  }
</script>

<style scoped lang="scss">

.navbar-header {
  float: none;
  display: flex;
  flex-direction: column;
  border-top: 1px solid white;
  background-color: #00264c;

  h1 {
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;
    font-size: 0.8em;
    color: white;
    margin: 0;
    padding: 2px 10px 1px 10px;
  }
  ul {
    display: flex;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 0.8rem;
    background-color: white;
    padding: 2px 0 2px 0;
    margin: 0;
    list-style: none;
    li {
      flex: 1;
      text-align: center;
      padding: 0 7px;
      position: relative;
      .navbar-router-link {
        text-decoration: none;
        color: black;
      }
      .navbar-router-link:focus {
        outline: none;
      }
    }
    li:not(:last-child)::after {
      content: "";
      border: 1px solid #a0aec4;
      border-width: 1px 1px 0 0;
      position: absolute;
      right: -3px;
      top: 0;
      height: 100%;
    }
  }
}
@media only screen and (min-width: 950px ) {
  .navbar-header {
    flex-direction: row;
    padding-bottom: 2px;
    ul {
      margin-left: auto;
      background-color: #00264c;
      li {
        .navbar-router-link {
          white-space: nowrap;
          font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;
          font-weight: bold;
          font-size: 0.8rem;
          color: white;
          padding-right: 3px;
        }
      }
    }
  }
}
</style>
