setInterval(() => {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let hr_dots = document.querySelector('.hr_dots');
    let min_dots = document.querySelector('.min_dots');
    let sec_dots = document.querySelector('.sec_dots');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = h >= 12 ? "PM" : "AM";

    if(h > 12){
        h = h - 12;
    }

    h = (h < 10)? "0" + h : h;
    m = (m < 10)? "0" + m : m;
    s = (s < 10)? "0" + s : s;

    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    seconds.innerHTML = s + "<br><span>Seconds</span>";
    ampm.innerHTML = ap;
    
    hh.style.strokeDashoffset = 314 - (314 * h) / 12;
    mm.style.strokeDashoffset = 314 - (314 * m) / 60;
    ss.style.strokeDashoffset = 314 - (314 * s) / 60;

    hr_dots.style.transform = `rotate(${h * 30}deg)`;
    // 360 / 12 = 30
    min_dots.style.transform = `rotate(${m * 6}deg)`;
    // 360 / 60 = 6
    sec_dots.style.transform = `rotate(${s * 6}deg)`;
    // 360 / 60 = 6

});