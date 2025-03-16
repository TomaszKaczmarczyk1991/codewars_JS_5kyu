function catchTheBus(busTimes, boyTimes) {
    const a = time(busTimes[0]);
    const b = time(busTimes[1]);
    const p = time(boyTimes[0]);
    const q = time(boyTimes[1]);
  
    if (p > b) return 100.0;
    if (a > q) return 0.0;
  
    const r = Math.max(0, (q - b)) / (q - p);
    const l = Math.max(0, (a - p)) / (q - p);
    const h = Math.max(0, (p - a)) / (b - a);
    const m = 1 - r - l;
    const k = (Math.min(q, b) - Math.max(p, a)) / (b - a);
  
    return 100 * (r + m * (k / 2 + h));
  }
  
  function time(s) {
    const [timePart, ampm] = s.split(' ');
    let [h, m] = timePart.split(':').map(Number);
    let t = 60 * h + m;
    if (ampm === 'PM' && h !== 12) t += 12 * 60;
    return t;
  }
  
  console.log(catchTheBus(["7:58 AM", "8:02 AM"], ["7:55 AM", "8:01 AM"]));