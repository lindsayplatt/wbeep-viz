export default {
    pageContents: {
        title: "Got Questions? We're Here to Provide Answers. ",
        introText: "So you have a question about the National Integrated Water Availability Assessments (IWAAs) application, but you don't see it listed here? No problem!",
        accordionSections: [
            {
                "sectionTitle": "About the Map",
                "questionsAndAnswers": [
                    {
                        "question": "What does this map show me?",
                        "answer": "The " + process.env.VUE_APP_TITLE + " shows the latest available daily estimates of natural water storage for approximately 110,000 regions across the lower forty-eight states. Map shading indicates the current natural water storage relative to historical conditions for this time of year."
                    },
                    {
                       "question": "What is the meaning of \"natural water storage\"?",
                       "answer": "Natural water storage shown here includes water present on the landscape such as standing water and water on trees, snowpack, soil water, and shallow groundwater. It does not include water in rivers or deep groundwater."
                    },
                    {
                        "question": "Why is the \"latest available\" map not for today?",
                        "answer": "The latest model run requires a summary of the weather (precipitation and temperature) for a complete day. A sequence of operations begins at midnight starting with collecting observed weather data and ending several hours later with estimates of natural water storage and an updated map. For this reason, depending on the time of day relative to the latest update, the date at the top of the map will be yesterday or the day before yesterday. If the date is more than two days ago, that is an indication that some part of the update operations did not run successfully and the team is working to bring the system back online."
                    },
                    {
                        "question": "What is being highlighted when I move my mouse on the map?",
                        "answer": "Highlighted modeling units or regions are called Hydrologic Response Units (HRU). Each watershed is broken up into these regions in order to model the daily natural water storage. The boundaries are based on the area that flows to the left or right side of a river between an upstream and downstream location."
                    },
                    {
                        "question": "I live in Hawaii, why do I not see any natural water storage data there?",
                        "answer": "The model used currently only has the data it needs in order to calculate the daily natural water storage for the coterminous US. In the future we are aiming to expand the model to include Hawaii, Alaska and Puerto Rico."
                    },
                    {
                        "question": "How can I print or save this map?",
                        "answer": "No specific features are built into this web site to print or save images at this time, but you can use those available in your web browser to save the image locally (In the Menu, look for Save As, which may give you options to save the HTML or PDF). Alternatively, you can use your computer’s screen capture capabilities to grab a screenshot of the map image and paste it into a local image editor to save it (for example, paste it into Microsoft Paint on a Windows computer)."
                    },
                    {
                        "question": "Will there be improvements to this map in the future?",
                        "answer": "Yes! This is the first iteration of a USGS product that displays a near real-time indicator of water availability across the continental US. Future plans include additional indicators of near real-time water availability (beyond natural water storage), as well as, predictions of water availability. If you’re interested in contributing ideas or learning more, please reach out to       <a\n" +
                                "v-ga=\"$ga.commands.trackName.bind(this, 'feedback email-prefooter', 'click', 'user selected feedback prefooter email link')\"\n" +
                                "href=\"'mailto:'" + process.env.VUE_APP_FEEDBACK_EMAIL_ADDRESS + "\"\n" +
                                ">" + process.env.VUE_APP_FEEDBACK_EMAIL_ADDRESS + "</a>"
                    }
                ]
            },
            {
                "sectionTitle": "Deep in the Science",
                "questionsAndAnswers": [
                    {
                        "question": "Where does the " + process.env.VUE_APP_TITLE + " map get the data it is representing?",
                        "answer": "<p>\n" +
                                "Estimates of natural water storage are calculated using the National Hydrologic Model (NHM) Infrastructure (Regan et al. 2019)\n" +
                                "configured with the <a\n" +
                                "href=\"https://www.usgs.gov/software/precipitation-runoff-modeling-system-prms\"\n" +
                                "target=\"_blank\"\n" +
                                "@click=\"runGoogleAnalytics('about page', 'click', 'clicked text link for precipitation-runoff-modeling-system-prms')\"\n" +
                                ">Precipitation Runoff Modeling\n" +
                                "System</a> (PRMS; Markstrom et al., 2015). The <a\n" +
                                "href=\"http://www.climatologylab.org/gridmet.html\"\n" +
                                "target=\"_blank\"\n" +
                                "@click=\"runGoogleAnalytics('about page', 'click', 'clicked text link for gridMET')\"\n" +
                                ">gridMET</a> daily weather dataset is used to force both historical and latest-available model runs (Abatzoglou, 2013). The PRMS is a modular, deterministic, distributed-parameter, physical process-based hydrologic simulation code that can be used to evaluate the effects of various combinations of climate and landscape on hydrologic response at the watershed scale  (Regan et al., 2018).The PRMS application of the NHM (NHM-PRMS) is used here to represent the daily water balance across the diverse range of landscapes of the conterminous U.S. Further information on the NHM Infrastructure, the PRMS model, and the NHM-PRMS application can be found in the references below.\n" +
                                "</p>"
                    },
                    {
                        "question": "Why was \"natural water storage\" used as an indicator of water availability?",
                        "answer": "<p style=\"color:red\">Still need to answer: Why is \"natural water storage\" important? Why do I need to know this information? How does it relate to water in streams, reservoirs and aquifers --- which is what most will think about when thinking of water availability?</p>"
                    },
                    {
                        "question": "Why would a region with a wetland or water body have a lower daily natural water storage than one without?",
                        "answer": "Even if a lake or wetland is in a region, the natural water storage could be considered low for those regions compared to their historic norms."
                    },
                    {
                        "question": "How are the categories for availability determined?",
                        "answer": "Over 30 years of data were used to calculate percentiles for natural water storage for each modeling unit. When looking at today’s value for a region compared to over 30 years of data for that region: \n" +
                                "<ul>\n" +
                                "<li>\"Very High\" means that today’s value is greater than 90% of all historic values for that region,\n\"High\" means that the value is greater than 75% of all historic values,</li>\n" +
                                "<li>\"Normal\" means that the value is greater than 25% but less than 75% of all historic values,</li>\n" +
                                "<li>\"Low\" means that the value is lower than 75% of all historic values for the region, and</li>\n" +
                                "<li>\"Very Low\" means that the value is lower than 90% of all historic values for the region.</li></ul>"
                    },
                    {
                        "question": "What are IWAAs?",
                        "answer": "<p>\n" +
                                "      The <a\n" +
                                "        href=\"https://www.usgs.gov/mission-areas/water-resources/science/integrated-water-availability-assessments-iwaas\"\n" +
                                "        target=\"_blank\"\n" +
                                "        @click=\"runGoogleAnalytics('about page', 'click', 'clicked text link for IWAAs')\"\n" +
                                "      >USGS Integrated Water Availability Assessments (IWAAs)</a>\n" +
                                "      are a multi-extent, stakeholder driven, near real-time census and seasonal\n" +
                                "      prediction of water availability for both human and ecological uses at\n" +
                                "      regional and national extents.\n" +
                                "    </p>\n" +
                                "\n" +
                                "    <p>\n" +
                                "      The USGS IWAAs combine resources and knowledge gained from previous and\n" +
                                "      ongoing USGS efforts such as <a\n" +
                                "        href=\"https://water.usgs.gov/watercensus/focusarea.html\"\n" +
                                "        target=\"_blank\"\n" +
                                "        @click=\"runGoogleAnalytics('about page', 'click', 'clicked text link for Focus Area Studies')\"\n" +
                                "      >Focus Area Studies</a>,\n" +
                                "      <a\n" +
                                "        href=\"https://water.usgs.gov/watercensus/groundwater.html\"\n" +
                                "        target=\"_blank\"\n" +
                                "        @click=\"runGoogleAnalytics('about page', 'click', 'clicked text link for Regional Groundwater Availability Studies')\"\n" +
                                "      >Regional Groundwater Availability Studies</a>,\n" +
                                "      <a\n" +
                                "        href=\"https://water.usgs.gov/watercensus/water-use.html\"\n" +
                                "        target=\"_blank\"\n" +
                                "        @click=\"runGoogleAnalytics('about page', 'click', 'clicked text link for Water Use Estimation')\"\n" +
                                "      >Water Use estimation</a>,\n" +
                                "      <a\n" +
                                "        href=\"https://water.usgs.gov/watercensus/ecowater.html\"\n" +
                                "        target=\"_blank\"\n" +
                                "        @click=\"runGoogleAnalytics('about page', 'click', 'clicked text link for Ecological Water Needs')\"\n" +
                                "      >Ecological Water Needs</a>,\n" +
                                "      and <a\n" +
                                "        href=\"https://water.usgs.gov/watercensus/streamflow.html\"\n" +
                                "        target=\"_blank\"\n" +
                                "        @click=\"runGoogleAnalytics('about page', 'click', 'clicked text link for Streamflow estimation')\"\n" +
                                "      >Streamflow estimation</a>,\n" +
                                "      in addition to utilizing and providing feedback to the\n" +
                                "      <a\n" +
                                "        href=\"http://water.noaa.gov/about/nwm\"\n" +
                                "        target=\"_blank\"\n" +
                                "        @click=\"runGoogleAnalytics('about page', 'click', 'clicked text link for National Water Model')\"\n" +
                                "      >National Water Model</a>. The IWAAs\n" +
                                "      are designed to provide information to meet the goals of the\n" +
                                "      <a\n" +
                                "        href=\"https://water.usgs.gov/watercensus/index.html\"\n" +
                                "        target=\"_blank\"\n" +
                                "        @click=\"runGoogleAnalytics('about page', 'click', 'clicked text link for National Water Census')\"\n" +
                                "      >National Water Census</a> as established through the SECURE Water Act.\n" +
                                "    </p>"
                    }

                ]
            }
        ]
    }
}
