'use strict';

const game = {
    isRunning: false,
    loopDuration: null,
    totalTime: null,
    timeRemaining: null,
    intervalId: null,
    //requestAnimationFrame: null,
    
    //METHODS

    //resets time remaining equal to total time property
    resetTimer: function() {
        timeRemaining = this.totalTime;
        //return this.totalTime;
    },
    startTimer: function() {
        isRunning = true;
        //update visual display to indicate timer is active 
        //initiate timer loop that invokes a callback function every 100 milliseconds
    },
    pauseTimer: function() {
        isRunning = false;
        //remove visual indication that timer is active
        //clear interval timing loop
    },
    updateVisualMeter: function() {
        //update width of the visual meter to reflect % of totalTime remaining
        if (this.timeRemaining > 50% this.totalTime) {
            // set color to green
        } 
        else if (this.timeRemaining <= 50% this.totalTime) {
            //set color to orange/yellow
        }
        else if (this.timeRemaining <= 25% this.totalTime) {
            //set color to red
        }
    },
    updateClock: function() {
        //read time remaining property
        //parse out minutes, seconds, tenths
        //update numeric display accordingly
    },
    runTimerLoop: function () {
        //decrement time remaining by loop duration
        //check if time remaining is less than loop duration
        if (this.timeRemaining < this.loopDuration) {
            //stop the loop
            //deactivate visual meter
            //set numeric display to --:--.-
        }
    }
}