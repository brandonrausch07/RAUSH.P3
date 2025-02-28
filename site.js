const vue_app = Vue.createApp({
    // This automatically imports your movies.json file and puts it into
    //   the variable: movies
    created() {
          fetch('movies.json').then(response => response.json()).then(json => {
                this.movies = json
          })
    },
    data() {
          return {
                // This holds your movies.json data.
                movies: [],
                /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
                title: "IMDB + Brandon's Top 8 Movies",
                owner: "Brandon Rausch",
                github: "https://github.com/brandonrausch07/NJIT-3_StarterFiles-master-20250213T134336Z-001"
          }
    },
    methods: {
          /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
          getMonthText(dateArray) {
                const months = [
                      "January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"
                ];
                const [year, month, day] = dateArray;
                const monthText = months[month - 1];
                return `${monthText} ${day}, ${year}`;
          },
          timeText(minutes) {
                const hours = Math.trunc(minutes / 60)
                const mins = minutes % 60
                return `${hours}h ${mins}m`
          }
    }
})

vue_app.mount("#vue_app")