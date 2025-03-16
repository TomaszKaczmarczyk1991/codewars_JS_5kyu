function catchTheBus(busTimes, boyTimes) {
    function timeToMinutes(timeStr) {
        let [time, period] = timeStr.split(" ");
        let [hours, minutes] = time.split(":").map(Number);
      
        if (period === "PM" && hours !== 12) {
          hours += 12;
        }
        if (period === "AM" && hours === 12) {
          hours = 0;
        }
        return hours * 60 + minutes;
      }
      
      const busStart = timeToMinutes(busTimes[0]);
      const busEnd = timeToMinutes(busTimes[1]);
      const boyStart = timeToMinutes(boyTimes[0]);
      const boyEnd = timeToMinutes(boyTimes[1]);

      const busRange = busEnd - busStart;
      const boyRange = boyEnd - boyStart;

      const results = []; // 1 - spoznienie, 0 - brak spoznienia

      for(let i = 0; i < 100000000; i++) {
        let busTime = busStart + Math.random() * (busEnd - busStart);
        let boyTime = boyStart + Math.random() * (boyEnd - boyStart);
        (boyTime > busTime) ? results.push(1) : results.push(0);
      }

      const latesCount = results.filter(x => x === 1).length;
      const percentageOfLates = (latesCount / results.length) * 100;

    return percentageOfLates;
  }

  console.log(catchTheBus(["7:58 AM", "8:02 AM"], ["7:55 AM", "8:01 AM"]));