<template>
  <div id="about">
    <div class="header-container">
      <div class="usa-prose">
        <h1 class="title-text">
          {{ pageTitle }} {{ title }} {{ developmentTier }}
        </h1>
      </div>
    </div>

    <p>
      The National Integrated Water Availability Assessments map shows the latest available daily estimates of natural
      water storage for approximately 110,000 regions across the conterminous U.S.  Natural water storage shown here
      includes water present on the landscape such as standing water and water on trees, snowpack, soil water, and
      shallow groundwater. It does not include water in rivers or deep groundwater. Map shading indicates the current
      natural water storage relative to historical conditions for this time of year.
    </p>

    <h2>About IWAAs</h2>
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
    <button
      v-ga="$ga.commands.trackName.bind(this, 'Button - close about text', 'click', 'user closed the box for About text')"
      class="usa-button--inverse"
      @click="toggleHiddenAttribute('.sometimes-hidden')"
    >
      close
    </button>
  </div>
</template>

<script>
    export default {
        name: 'About',
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
                pageTitle: 'About'
            };
        },
        methods: {
            runGoogleAnalytics(eventName, action, label) {
                this.$ga.event(eventName, action, label)
            },
            toggleHiddenAttribute(cssClassName) {
                let targetElement = document.querySelector(cssClassName);
                targetElement.hidden ? targetElement.hidden = false : targetElement.hidden = true;
            },
        }
    }
</script>

<style scoped lang="scss">
  body { background-color: gray }
  h1 {
    font-size: 1.2rem;
  }
  h2 {
    font-size: 1rem;
  }
  #about {
    background: white;
    margin: 0em auto;
    padding: 3em 2em 2em 2em;
    width: 85%;
    max-width: 1200px;
  }
  button{
    margin: 0 0 10px 0;
    background: #003366;
    color: #ffffff;
    border: none;
    outline: none;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: .9em;
    font-weight: bold;
  }
  .about-ref {
    font-size: 0.85rem;
    font-style: italic;
    margin-left: 1.5em;
    text-indent: -1.5em;
  }
</style>
