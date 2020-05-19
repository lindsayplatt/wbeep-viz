<template>
  <div class="usa-prose">
    <h1>
      {{ title }}{{ titleSuffix }} {{ developmentTier }}
      <ul class="router-links">
        <li id="waterStorageLi">
          <router-link
            id="waterStorage"
            class="feature-link"
            :to="{name: 'waterStorage'}"
          >
            {{ waterStorageName }}
          </router-link>
        </li>
        <li id="waterUseLi">
          <router-link
            id="waterUse"
            class="feature-link"
            :to="{name: 'waterUse'}"
          >
            {{ waterUseName }}
          </router-link>
        </li>
        <li id="waterTemperatureLi">
          <router-link
            id="waterTemperature"
            class="feature-link"
            :to="{name: 'waterTemperature'}"
          >
            {{ waterTemperatureName }}
          </router-link>
        </li>
      </ul>
    </h1>
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
            waterTemperatureName: 'water Temperature',
            mobileVersionBelowThisScreenWidth: 980,
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
          if(activeFeatureName !== 'QuestionsAndAnswers') {
            const linkElements = document.querySelectorAll('.feature-link');
            linkElements.forEach(function (link) {
                link.style.borderBottom = 'none';
            });
            const listElementsForMobile = document.querySelectorAll('li')
            listElementsForMobile.forEach(function (listElement) {
                listElement.style.border = 'none';
            });
            if (this.window.width >= this.mobileVersionBelowThisScreenWidth) {
                console.log('bigger')
                const activeLink = document.getElementById(activeFeatureName);
                const mobileLink = document.getElementById(activeFeatureName + 'Li');
                activeLink.style.borderBottom = 'thick solid white';
                mobileLink.style.borderBottom = 'none';
            } else {
                console.log('smaller')
                const activeLink = document.getElementById(activeFeatureName + 'Li');
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
.usa-prose {
  h1 {
    display: flex;
    font-size: 0.9rem;
    padding: 5px 3px 4px 10px;
    border-top: white 1px solid;
    background-color: #00264c;
    color: white;
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      li {
        text-decoration: none;
        color: white;
        display: inline-block;
        padding: 0 7px;
        position: relative;
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
    .router-links {
      margin-left: auto;
      .feature-link {
        text-decoration: none;
        color: white;
        padding: 0 0.5em 0 0.5em;
      }
      .feature-link:focus {
        outline: none;
      }
    }
  }
}

@media only screen and (max-width: 950px ) {
.usa-prose {
  h1 {
    padding: 2px 0 0 0;
    border-bottom: 1px black solid;
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;

    ul {
      display: flex;
      padding: 0 0 3px 0;
      margin: 0;
      list-style: none;

      li {
        flex: 1;
        text-align: center;
        text-decoration: none;
        color: white;
        display: inline-block;
        padding: 0 7px;
        position: relative;
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

      .router-links {
        display: flex;
        margin: 1px 0 0 0;
        background-color: white;

        .feature-link {
          flex: 1;
          margin-top: 2px;
          text-align: center;
          color: black;
          text-decoration: none;
          padding: 0.15em 0 0.2em 0;
        }
      }
    }
  }
}
</style>
