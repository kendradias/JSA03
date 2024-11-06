'use strict';

const game = {
    isRunning: false,
    loopDuration: 100,
    totalTime: 30000,
    timeRemaining: 3000,
    intervalId: null,
    $timeDisplay: $('#time-display'),
    $progressBar: $('#progress-bar'),
    //requestAnimationFrame: null,
    
    //METHODS

    //resets time remaining equal to total time property
    resetTimer() {
        this.timeRemaining = this.totalTime;
        this.updateClock();
    },
    startTimer() {
        //update visual display to indicate timer is active 
        //initiate timer loop that invokes a callback function every 100 milliseconds
        if (!this.isRunning) {
            this.isRunning = true;
            this.updateVisualMeter();
            this.intervalId = setInterval(() => this.runTimerLoop(), this.loopDuration);
        }
    },
    pauseTimer() {
        //toggle game state
        this.isRunning = !this.isRunning;
        //clear interval timing loop
        clearInterval(this.intervalId);
        //call update method to remove visual indication that timer is active
        this.updateVisualMeter();
    },
    updateVisualMeter() {
        //initialize progress variable and update progress bar 
        const progress = (this.timeRemaining / this.totalTime) * 100;
        this.$progressBar.css('width', `${progress}%`);

        //update width of the visual meter to reflect % of totalTime remaining
        if (progress <= 25) {
            //set color to red
            this.$progressBar.removeClass('bg-success bg-warning').addClass('bg-danger');
        }
        else if (progress <= 50) {
            //set color to orange/yellow
            this.$progressBar.removeClass('bg-success bg-danger').addClass('bg-warning');
        }
        else {
            //set color to green
            this.$progressBar.removeClass('bg-warning bg-danger').addClass('bg-success');
        } 

    },
    updateClock() {
        //read time remaining property, parse out minutes, seconds, tenths
        const minutes = Math.floor(this.timeRemaining / 60000);
        const seconds = Math.floor((this.timeRemaining % 60000) / 1000);
        const tenths = Math.floor((this.timeRemaining % 1000) / 100);
        //display time 
        this.$timeDisplay.text(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${tenths}`);
    },
    runTimerLoop() {
        //decrement time remaining by loop duration
        this.timeRemaining -= this.loopDuration;
        //check if time remaining is less than loop duration
        if (this.timeRemaining < this.loopDuration) {
            //stop the loop
            clearInterval(this.intervalId);
            this.isrunning = false;
            //deactivate visual meter, set numeric display to --:--.-
            this.$progressBar.css('width', '0%');
            this.$timeDisplay.text('--:--:-');
        } else {
            this.updateVisualMeter();
            this.updateClock();
        }
    }
};

// EVENT LISTENERS

//start button
$('#start-btn').on('click', () => {
    game.totalTime = parseInt($('#duration-select').val());
    game.resetTimer();
    game.startTimer();
});

//pause button
$('#pause-btn').on('click', () => {
    game.pauseTimer();
});

//reset button
$('#reset-btn').on('click', () => {
    game.resetTimer();
});