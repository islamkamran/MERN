// StopWatch in JS
function StopWatch(){
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if(running){
            throw new Error("Stopwatch has already started.");
        }
        running = true;
        startTime = new Date();
    };

    this.stop = function(){
        if(!running){
            throw new Error("Stopwatch has already stopped.");
        }
        running=false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function(){
        if (startTime==null && endTime==null && running == false && duration==0){
            throw new Error("Already reset.");
        }

        startTime=null;
        endTime=null; 
        running=false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration',{
        get: function(){
            return duration;
        }
    });
}

// const stopWatchObj = new StopWatch();
// stopWatchObj.start();
// I am doing this from console in browser.