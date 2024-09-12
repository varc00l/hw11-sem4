let totalMinutes = 60; 
        let timer1Display = document.getElementById('timer1');
        let message = document.getElementById('message');

        function startHourTimer() {
            let timerInterval = setInterval(() => {
                totalMinutes--;

                let minutes = totalMinutes % 60;
                let hours = Math.floor(totalMinutes / 60);
                let displayTime = (hours > 0 ? hours + ':' : '') + (minutes < 10 ? '0' + minutes : minutes) + ':00';

                timer1Display.innerHTML = displayTime;

                if (totalMinutes === 30) {
                    message.innerHTML = 'Залишилось менше половини часу!';
                }

                if (totalMinutes <= 0) {
                    clearInterval(timerInterval);
                }
            }, 60000);
        }

        startHourTimer();


        let totalMilliseconds = 30000;
        let timer2Display = document.getElementById('timer2');
        let animation = document.getElementById('animation');
        let startButton = document.getElementById('startButton');

        function startMillisecondTimer() {
            let timerInterval = setInterval(() => {
                totalMilliseconds--;

                let seconds = (totalMilliseconds / 1000).toFixed(3);
                timer2Display.innerHTML = seconds;

                if (totalMilliseconds <= 10000) {
                    animation.style.display = 'block';
                }

                if (totalMilliseconds <= 0) {
                    clearInterval(timerInterval);
                    animation.style.display = 'none';
                    startButton.disabled = false;
                    timer2Display.innerHTML = '0.000';
                }
            }, 1);
        }

        startMillisecondTimer();

        