<template>
  <div class="usa-prose">
    <h1>
      {{ title }}{{ titleSuffix }} {{ developmentTier }}
      <span class="router-links">
        <router-link
          id="waterStorage"
          class="feature-link"
          :to="{name: 'waterStorage'}"
        >
          water storage
        </router-link>
        <span> | </span>
        <router-link
          id="waterUse"
          class="feature-link"
          :to="{name: 'waterUse'}"
        >
          water use
        </router-link>
        <span> | </span>
        <router-link
          id="waterTemperature"
          class="feature-link"
          :to="{name: 'waterTemperature'}"
        >
          water temperature
        </router-link>
      </span>
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
    methods: {
      changeActiveFeatureTab(activeFeatureName) { // this highlights the correct application feature link
          if(activeFeatureName !== 'QuestionsAndAnswers') {
            const linkElements = document.querySelectorAll('.feature-link');
            linkElements.forEach(function (link) {
                link.style.borderBottom = 'none';
            });
            const activeLink = document.getElementById(activeFeatureName);
            activeLink.style.borderBottom = 'thick solid white';
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
    padding: 5px 5px 4px 10px;
    border-top: white 1px solid;
    background-color: #00264c;
    color: white;
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
      display: flex;
      flex-direction: column;
      font-size: 0.8rem;

      border-top: white 1px solid;
      background-color: #00264c;
      color: white;

      .router-links {
        display: flex;
        margin: 1px 0 0 0;
        background-color: white;
        .feature-link {
          flex: 1;
          text-align: center;
          color: black;
          text-decoration: none;
          border: 1px solid black;
        }
        .feature-link:focus {
          outline: none;
        }
      }
    }
  }
}
</style>
