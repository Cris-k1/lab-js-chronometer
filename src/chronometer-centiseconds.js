class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{
      this.currentTime++;
      if (printTimeCallback){
        printTimeCallback()
      }
    }, 1000*100 )
  }

  getMinutes() {
    if (this.currentTime === 0){
      return 0;
     } else {
       
       return Math.floor(this.currentTime / 60)
     }
  }

  getSeconds() {
    if (this.currentTime === 0){
      return 0;
   
    }else{
      return Math.floor(this.currentTime %60)
    }
  }

  getCentiseconds() {
    if (this.currentTime === 0){
      return 0;
   
    }else{
      return Math.floor(this.currentTime %60)
    }
  }

  computeTwoDigitNumber(value) {
    if (value < 10){
      return `0${value}`
      } else{
       return `${value}`
        }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let centiSeconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds};${centiSeconds}`
  }
}
