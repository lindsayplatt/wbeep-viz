<template>
  <div
    id="container-questions-answers"
    class="usa-prose"
  >
    <h1>Got Questions? We're Here to Provide Answers. {{ developmentTier }}</h1>
    <h6>
      General
      <router-link
        to="/"
      >
        <button
          v-ga="$ga.commands.trackName.bind(this, 'button - back', 'click', 'user went from about page to map')"
          class="usa-button--inverse"
        >
          <font-awesome-icon icon="backward" />
          map
        </button>
      </router-link>
    </h6>

    <div class="usa-accordion usa-accordion--bordered">
      <!-- Use the accurate heading level to maintain the document outline -->
      <h2 class="usa-accordion__heading">
        <button
          class="usa-accordion__button"
          aria-expanded="true"
          aria-controls="a1"
        >
          But, what if my question is not in this list?
        </button>
      </h2>
      <div
        id="a1"
        class="usa-accordion__content usa-prose"
      >
        <p>
          So you have a burning question about the {{ title }} application, but you don't see it listed here?
        </p>
        <p>
          No problem! Take a scroll on down to the bottom of the page and just above the footer you will see a link that will allow
          you to send us an email. And yes, we really will get back to you.
        </p>
        <p>
          Scrolling finger too tired? Here is a shortcut to
          <a
            v-ga="$ga.commands.trackName.bind(this, 'feedback email-answer page', 'click', 'user selected feedback email link on answers page')"
            :href="feedbackEmailAddress"
          >
            ask us a question
          </a>.
        </p>
      </div>

      <!-- Use the accurate heading level to maintain the document outline -->
      <h2 class="usa-accordion__heading">
        <button
          class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="a2"
        >
          Another user question
        </button>
      </h2>
      <div
        id="a2"
        class="usa-accordion__content usa-prose"
      >
        <p>An insanely clear and informative response</p>
      </div>

      <!-- Use the accurate heading level to maintain the document outline -->
      <h2 class="usa-accordion__heading">
        <button
          class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="a3"
        >
          Another user question
        </button>
      </h2>
      <div
        id="a3"
        class="usa-accordion__content usa-prose"
      >
        <p>An insanely clear and informative response</p>
      </div>

      <!-- Use the accurate heading level to maintain the document outline -->
      <h2 class="usa-accordion__heading">
        <button
          class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="a4"
        >
          Another user question
        </button>
      </h2>
      <div
        id="a4"
        class="usa-accordion__content usa-prose"
      >
        <p>An insanely clear and informative response</p>
      </div>

      <!-- Use the accurate heading level to maintain the document outline -->
      <h2 class="usa-accordion__heading">
        <button
          class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="a5"
        >
          Another user question
        </button>
      </h2>
      <div
        id="a5"
        class="usa-accordion__content usa-prose"
      >
        <p>An insanely clear and informative response</p>
      </div>
    </div>

    <h6>
      About the {{ title }} Map
      <router-link
        to="/"
      >
        <button
          v-ga="$ga.commands.trackName.bind(this, 'button - back', 'click', 'user went from about page to map')"
          class="usa-button--inverse"
        >
          <font-awesome-icon icon="backward" />
          map
        </button>
      </router-link>
    </h6>

    <div class="usa-accordion usa-accordion--bordered">
      <!-- Use the accurate heading level to maintain the document outline -->
      <h2 class="usa-accordion__heading">
        <button
          class="usa-accordion__button"
          aria-expanded="true"
          aria-controls="b-a1"
        >
          What the heck is this map showing me?
        </button>
      </h2>
      <div
        id="b-a1"
        class="usa-accordion__content usa-prose"
      >
        <p>
          The {{ title }}  map shows the latest available daily estimates of natural
          water storage for approximately 110,000 regions across the lower forty-eight states.  Natural water storage shown
          includes water present on the landscape such as standing water and water on trees, snowpack, soil water, and
          shallow groundwater. It does not include water in rivers or deep groundwater. Map shading indicates the current
          natural water storage relative to historical conditions for this time of year.
        </p>
      </div>

      <!-- Use the accurate heading level to maintain the document outline -->
      <h2 class="usa-accordion__heading">
        <button
          class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="b-a2"
        >
          What is natural water storage?
        </button>
      </h2>
      <div
        id="b-a2"
        class="usa-accordion__content usa-prose"
      >
        <p>
          Natural water storage shown here includes water present on the landscape such as standing water and water on
          trees, snowpack, soil water, and shallow groundwater. It does not include water in rivers or deep groundwater.
        </p>
      </div>

      <!-- Use the accurate heading level to maintain the document outline -->
      <h2 class="usa-accordion__heading">
        <button
          class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="b-a3"
        >
          Why is the &quot;latest available&quot; map not for today?
        </button>
      </h2>
      <div
        id="b-a3"
        class="usa-accordion__content usa-prose"
      >
        <p>
          The latest model run requires a summary of the weather (precipitation and temperature) for a complete day.
          A sequence of operations begins at midnight starting with collecting observed weather data and ending several
          hours later with estimates of natural water storage and an updated map. For this reason, depending on the time
          of day relative to the latest update, the date at the top of the map will be yesterday or the day before
          yesterday. If the date is more than two days ago, that is an indication that some part of the update
          operations did not run successfully and the team is working to bring the system back online.
        </p>
      </div>

      <!-- Use the accurate heading level to maintain the document outline -->
      <h2 class="usa-accordion__heading">
        <button
          class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="b-a4"
        >
          What is being highlighted when I move my mouse on the map?
        </button>
      </h2>
      <div
        id="b-a4"
        class="usa-accordion__content usa-prose"
      >
        <p>
          It's a modeling unit or region called a National Hydrologic Model (NHM) Hydrologic Response Unit (HRU).
          Each watershed is broken up into these regions in order to assess the daily natural water storage.
          The boundaries are based on the area that flows to the left or right side of a river between an upstream
          and downstream location.
        </p>
      </div>

      <!-- Use the accurate heading level to maintain the document outline -->
      <h2 class="usa-accordion__heading">
        <button
          class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="b-a5"
        >
          Why would a region with a wetland or water body have a lower daily natural water storage than one without?
        </button>
      </h2>
      <div
        id="b-a5"
        class="usa-accordion__content usa-prose"
      >
        <p>
          Even if a lake or wetland is in a region, the natural water storage could be considered low for those regions compared to their historic norms.
        </p>
      </div>

      <!-- Use the accurate heading level to maintain the document outline -->
      <h2 class="usa-accordion__heading">
        <button
          class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="b-a6"
        >
          How can I see a previous day’s natural water storage value for my region?
        </button>
      </h2>
      <div
        id="b-a6"
        class="usa-accordion__content usa-prose"
      >
        <p>
          We do not currently provide a way for users to go back in time. In the future we may provide this capability.
        </p>
      </div>

      <!-- Use the accurate heading level to maintain the document outline -->
      <h2 class="usa-accordion__heading">
        <button
          class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="b-a7"
        >
          I live in Hawaii, why don't I see any natural water storage data there?
        </button>
      </h2>
      <div
        id="b-a7"
        class="usa-accordion__content usa-prose"
      >
        <p>
          The model used currently only has the data it needs in order to calculate the daily natural water storage
          for the lower forty-eight states. In the future we are aiming to expand the areas to include Hawaii, Alaska and Puerto Rico.
        </p>
      </div>
    </div>



    <h6>
      Deep in the Science
      <router-link
        to="/"
      >
        <button
          v-ga="$ga.commands.trackName.bind(this, 'button - back', 'click', 'user went from about page to map')"
          class="usa-button--inverse"
        >
          <font-awesome-icon icon="backward" />
          map
        </button>
      </router-link>
    </h6>

    <div class="usa-accordion usa-accordion--bordered">
      <!-- Use the accurate heading level to maintain the document outline -->
      <h2 class="usa-accordion__heading">
        <button
          class="usa-accordion__button"
          aria-expanded="true"
          aria-controls="c-a1"
        >
          Where does the {{ title }} map get the data it is representing?
        </button>
      </h2>
      <div
        id="c-a1"
        class="usa-accordion__content usa-prose"
      >
        <p>
          Estimates of natural water storage are calculated using the National Hydrologic Model (NHM) Infrastructure (Regan et al. 2019)
          configured with the <a
            href="https://www.usgs.gov/software/precipitation-runoff-modeling-system-prms"
            target="_blank"
            @click="runGoogleAnalytics('about page', 'click', 'clicked text link for precipitation-runoff-modeling-system-prms')"
          >Precipitation Runoff Modeling
            System</a> (PRMS; Markstrom et al., 2015). The <a
            href="http://www.climatologylab.org/gridmet.html"
            target="_blank"
            @click="runGoogleAnalytics('about page', 'click', 'clicked text link for gridMET')"
          >gridMET</a> daily weather dataset is used to force both historical and latest-available model runs (Abatzoglou, 2013). The PRMS is a modular, deterministic, distributed-parameter, physical process-based hydrologic simulation code that can be used to evaluate the effects of various combinations of climate and landscape on hydrologic response at the watershed scale  (Regan et al., 2018).The PRMS application of the NHM (NHM-PRMS) is used here to represent the daily water balance across the diverse range of landscapes of the conterminous U.S. Further information on the NHM Infrastructure, the PRMS model, and the NHM-PRMS application can be found in the references below.
        </p>
      </div>

      <!-- Use the accurate heading level to maintain the document outline -->
      <h2 class="usa-accordion__heading">
        <button
          class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="c-a2"
        >
          What is IWASS?
        </button>
      </h2>
      <div
        id="c-a2"
        class="usa-accordion__content usa-prose"
      >
        <p>
          The <a
            href="https://www.usgs.gov/mission-areas/water-resources/science/integrated-water-availability-assessments-iwaas"
            target="_blank"
            @click="runGoogleAnalytics('about page', 'click', 'clicked text link for IWAAs')"
          >USGS Integrated Water Availability Assessments (IWAAs)</a>
          are a multi-extent, stakeholder driven, near real-time census and seasonal
          prediction of water availability for both human and ecological uses at
          regional and national extents.
        </p>

        <p>
          The USGS IWAAs combine resources and knowledge gained from previous and
          ongoing USGS efforts such as <a
            href="https://water.usgs.gov/watercensus/focusarea.html"
            target="_blank"
            @click="runGoogleAnalytics('about page', 'click', 'clicked text link for Focus Area Studies')"
          >Focus Area Studies</a>,
          <a
            href="https://water.usgs.gov/watercensus/groundwater.html"
            target="_blank"
            @click="runGoogleAnalytics('about page', 'click', 'clicked text link for Regional Groundwater Availability Studies')"
          >Regional Groundwater Availability Studies</a>,
          <a
            href="https://water.usgs.gov/watercensus/water-use.html"
            target="_blank"
            @click="runGoogleAnalytics('about page', 'click', 'clicked text link for Water Use Estimation')"
          >Water Use estimation</a>,
          <a
            href="https://water.usgs.gov/watercensus/ecowater.html"
            target="_blank"
            @click="runGoogleAnalytics('about page', 'click', 'clicked text link for Ecological Water Needs')"
          >Ecological Water Needs</a>,
          and <a
            href="https://water.usgs.gov/watercensus/streamflow.html"
            target="_blank"
            @click="runGoogleAnalytics('about page', 'click', 'clicked text link for Streamflow estimation')"
          >Streamflow estimation</a>,
          in addition to utilizing and providing feedback to the
          <a
            href="http://water.noaa.gov/about/nwm"
            target="_blank"
            @click="runGoogleAnalytics('about page', 'click', 'clicked text link for National Water Model')"
          >National Water Model</a>. The IWAAs
          are designed to provide information to meet the goals of the
          <a
            href="https://water.usgs.gov/watercensus/index.html"
            target="_blank"
            @click="runGoogleAnalytics('about page', 'click', 'clicked text link for National Water Census')"
          >National Water Census</a> as established through the SECURE Water Act.
        </p>
      </div>

      <!-- Use the accurate heading level to maintain the document outline -->
      <h2 class="usa-accordion__heading">
        <button
          class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="c-a3"
        >
          Got References?
        </button>
      </h2>
      <div
        id="c-a3"
        class="usa-accordion__content usa-prose"
      >
        <p>Sure do.</p>
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

      <!-- Use the accurate heading level to maintain the document outline -->
      <h2 class="usa-accordion__heading">
        <button
          class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="c-a4"
        >
          Another water scientist question
        </button>
      </h2>
      <div
        id="c-a4"
        class="usa-accordion__content usa-prose"
      >
        <p>The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.</p>
      </div>

      <!-- Use the accurate heading level to maintain the document outline -->
      <h2 class="usa-accordion__heading">
        <button
          class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="c-a5"
        >
          Another water scientist question
        </button>
      </h2>
      <div
        id="c-a5"
        class="usa-accordion__content usa-prose"
      >
        <p>No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or public danger; nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb; nor shall be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law; nor shall private property be taken for public use, without just compensation.</p>
      </div>
    </div>
  </div>
</template>

<script>
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
                feedbackEmailAddress: process.env.VUE_APP_FEEDBACK_EMAIL_ADDRESS
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
    max-width: 1200px;

    .usa-button--inverse {
      float: right;
    }
  }
</style>