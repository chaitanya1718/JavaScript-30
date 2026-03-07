  const secondHand = document.querySelector('.sec-hand');
        const minuteHand=document.querySelector('.min-hand');
        const hourHand=document.querySelector('.hour-hand');
        function setDate() {
            const now = new Date();
            const seconds = now.getSeconds();
            const secondsDegree = ((seconds / 60) * 360) + 90;
            secondHand.style.transform = `rotate(${secondsDegree}deg)`;

            const mins=now.getMinutes();
            const minDegrees=((mins/60)*360)+90;
            minuteHand.style.transform=`rotate(${minDegrees}deg)`;
            console.log(seconds);
            
            const hours=now.getHours();
            const hourDegrees=((hours/12)*360)+90;
            hourHand.style.transform=`rotate(${hourDegrees}deg)`;

        }
        setInterval(setDate, 1000);