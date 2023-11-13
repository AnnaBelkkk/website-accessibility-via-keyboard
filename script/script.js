
//4-5
let deadline = '30 november 2023 9:45:00';
let a;
let atimer_hours = document.querySelector('.timer-hours')
let atimer_minutes  =document.querySelector('.timer-minutes')
let atimer_seconds = document.querySelector('.timer-seconds')

const one = (deadline) => {
    const timeDays = document.getElementById('timer-hours');
    const timeHours = document.getElementById('timer-minutes');
    const timeMinutes = document.getElementById('timer-seconds');
    // let deadline = '14 april 2023';
    const countTime = () => {
        clearInterval(a)
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRema = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRema / 60 / 60 / 24);
        let hours = Math.floor((timeRema / 60 / 60) % 24);
        let min = Math.floor((timeRema / 60) % 60);
        let sec = Math.floor(timeRema % 60);

        return{timeRema, days, hours, min, sec,}
    }
    const updateClock= () =>{
        const getTime = countTime()
        console.log(getTime)
        timeDays.textContent = getTime.days < 10 ? '0' + getTime.days : getTime.days;
        atimer_hours.ariaLabel = timeDays.textContent;
        timeHours.textContent = getTime.hours < 10 ? '0' + getTime.hours : getTime.hours;
        atimer_minutes.ariaLabel = timeHours.textContent;
        timeMinutes.textContent = getTime.min < 10 ? '0' + getTime.min : getTime.min;
        atimer_seconds.ariaLabel = timeMinutes.textContent;
        // timeSecond.textContent = getTime.sec < 10 ? '0' + getTime.sec : getTime.sec;
        let d = Number(timeDays.textContent);
        let h = Number(timeHours.textContent);
        let m = Number(timeMinutes.textContent);
        console.log('fagf')
        if (getTime.timeRema > 0) {
            a = setInterval(updateClock, 1000)
            return a;
        } else if (getTime.timeRema < 0) {
            timeDays.textContent = '00';
            timeHours.textContent = '00';
            timeMinutes.textContent = '00';
            // timeSecond.textContent = '00';
        }
        // } else if(getTime.timeRema < 2 ) {
        //   timeHours.textContent =  '0';
        // }
        //setTimeout(updateClock, 1000)
    }
    updateClock()
    // setInterval(countTime, 1000, '14 april 2023')
}
one(deadline);

