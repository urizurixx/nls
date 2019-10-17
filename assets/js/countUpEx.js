import { CountUp } from '/assets/js/countUp.min.js';

window.onload = function () {
    const CountUpOptions = {
        duration: 2, 
        }
    const countUpOne = new CountUp('countUp1', 900, CountUpOptions);
    const countUpTwo = new CountUp('countUp2', 500, CountUpOptions);
    const countUpThree = new CountUp('countUp3', 100000, CountUpOptions);

    countUpOne.start();
    countUpTwo.start();
    countUpThree.start();

  }
  

