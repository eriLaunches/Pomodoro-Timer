const app = new Vue({
  el: '#app',

// Data Object
  data: {
    remainingTime: 60 * 25,
    timer: null,
    name: 'My Pomodoro'
  },

  // Methods
  methods: {
    //start count
    handleStart: function() {
      this.timer = setInterval(() => this.decreaseTimer(), 1000)
    },

    //countdown
    decreaseTimer: function() {
      if (this.remainingTime >= 1) {
        this.remainingTime--;
        console.log(this.remainingTime)
      }
      else {
        this.remainingTime = 0;
        this.handlePause()
        alert("Time's Up!");
      }
    },

    //pause count
    handlePause: function() {
      clearInterval(this.timer)
      this.timer = null
    },

    //reset count
    handleReset: function() {
      this.remainingTime = 60 * 25
      clearInterval(this.timer)
      this.timer = null
    }
  },

  // Computed
  computed: {
    minutes: function() {
      const minutes = Math.floor(this.remainingTime / 60);
      if (minutes > 10) return minutes
      else return '0' + minutes
    },

    seconds: function() {
      const seconds = this.remainingTime - (this.minutes * 60);
      if (seconds > 10) return seconds
      else return '0' + seconds
    }
  }
})
