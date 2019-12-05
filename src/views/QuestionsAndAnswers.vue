<template>
  <div
    id="container-questions-answers"
    class="usa-prose"
  >
    <h1>{{ pageContents.title }} {{ developmentTier }}</h1>
    <p>
      {{ pageContents.introText }}
    </p>
    <p>
      Contact Us:
      <a
        v-ga="$ga.commands.trackName.bind(this, 'feedback email-answer page', 'click', 'user selected feedback email link on answers page')"
        :href="'mailto:' + feedbackEmailAddress"
      >
        {{ feedbackEmailAddress }}
      </a>
    </p>

    <hr>

    <div
      v-for="section in pageContents.accordionSections"
      :key="section"
    >
      <h6>{{ section.sectionTitle }}</h6>

      <div class="usa-accordion usa-accordion--bordered">
        <div
          v-for="question in section.questionsAndAnswers"
          :key="question"
        >
          <h2 class="usa-accordion__heading">
            <button
              class="usa-accordion__button"
              aria-expanded="true"
              :aria-controls="question.question"
            >
              {{ question.question }}
            </button>
          </h2>
          <div
            :id="question.question"
            class="usa-accordion__content usa-prose"
          >
            <p><span v-html="question.answer"></span></p>
          </div>
        </div>
      </div>
    </div>
    <h2 v-html="test">test</h2>
    <div>
      <h2>References</h2>

      <p class="about-ref">
        Abatzoglou, J.T., 2013. Development of gridded surface meteorological data for ecological applications and modelling. Int. J. Climatol. 33, 121–131.
        <a
            href="https://doi.org/10.1002/joc.3413"
            target="_blank"
        >https://doi.org/10.1002/joc.3413</a>
      </p>

      <p class="about-ref">
        Hay, L., 2019. Application of the National Hydrologic Model Infrastructure with the Precipitation-Runoff Modeling System (NHM-PRMS), by HRU Calibrated Version.
        <a
            href="https://doi.org/10.5066/P9NM8K8W"
            target="_blank"
        >https://doi.org/10.5066/P9NM8K8W</a>
      </p>

      <p class="about-ref">
        Regan, R.S., Juracek, K.E., Hay, L.E., Markstrom, S.L., Viger, R.J., Driscoll, J.M., LaFontaine, J.H., Norton, P.A., 2019. The U. S. Geological Survey National Hydrologic Model infrastructure: Rationale, description, and application of a watershed-scale model for the conterminous United States. Environ. Model. Softw. 111, 192–203.
        <a
            href="https://doi.org/10.1016/j.envsoft.2018.09.023"
            target="_blank"
        >https://doi.org/10.1016/j.envsoft.2018.09.023</a>
      </p>

      <p class="about-ref">
        Regan, R.S., Markstrom, S.L., Hay, L.E., Viger, R.J., Norton, P.A., Driscoll, J.M., LaFontaine, J.H., 2018. Description of the National Hydrologic Model for use with the Precipitation-Runoff Modeling System (PRMS), in: U.S. Geological Survey Techniques and Methods, Book 6. U.S. Geological Survey, p. 38.
        <a
            href="https://doi.org/10.3133/tm6B9"
            target="_blank"
        >https://doi.org/10.3133/tm6B9</a>
      </p>

      <p class="about-ref">
        Viger, R.J., Bock, A., 2014. GIS Features of the Geospatial Fabric for National Hydrologic Modeling.
        <a
            href="https://doi.org/doi:10.5066/F7542KMD"
            target="_blank"
        >https://doi.org/doi:10.5066/F7542KMD</a>
      </p>

      <p class="about-ref">
        Markstrom, S.L., Regan, R.S., Hay, L.E., Viger, R.J., Webb, R.M.T., Payn, R.A., LaFontaine, J.H., 2015. PRMS-IV, the precipitation-runoff modeling system, version 4, in: U.S. Geological Survey Techniques and Methods, Book 6. U.S. Geological Survey, p. 158.
        <a
            href="https://doi.org/10.3133/tm6B7"
            target="_blank"
        >https://doi.org/10.3133/tm6B7</a>
      </p>
    </div>


  </div>
</template>

<script>
    import questionsAndAnswers from "../assets/questionsAndAnswers/questionsAndAnswers";

    export default {
        name: "QuestionsAndAnswers",
        props: {
            title: {
                type: String,
                default: process.env.VUE_APP_TITLE
            },
            developmentTier: {
                type: String,
                default: process.env.VUE_APP_TIER
            }
        },
        data() {
            return {
                feedbackEmailAddress: process.env.VUE_APP_FEEDBACK_EMAIL_ADDRESS,
                pageContents: questionsAndAnswers.pageContents
            };
        },
        methods: {
            runGoogleAnalytics(eventName, action, label) {
                this.$ga.event(eventName, action, label)
            }
        }
    }
</script>

<style scoped lang="scss">
  #container-questions-answers {
    background: white;
    margin: 0em auto;
    padding: 3em 2em 2em 2em;
    width: 85%;
    max-width: 50em;

    hr {
      margin-top: 5px;
    }

    .usa-button--inverse {
      float: right;
    }
  }
</style>