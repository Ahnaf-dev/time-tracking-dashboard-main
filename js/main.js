
  async function loadData() {
    const response = await fetch('data.json');
    const timeFrames = await response.json();
    return timeFrames;
  }

  document.addEventListener('DOMContentLoaded', async () => {

      let timeFrames = await loadData();
      let currentTime = document.querySelectorAll('.card__body__text--lg')
      let previousTime = document.querySelectorAll('span.card__body__text')
      let toggle = document.querySelector('.avatar-card__time-text')
      let toggleUpdate = Array.from(toggle.children);
    
      toggleUpdate.forEach((toggle) => {
        if (toggle.classList.contains('active') && toggle.textContent === "Weekly" || toggle.textContent === "Weekly" ) {
          updateWeekly();
            toggle.addEventListener('click', updateWeekly);
        }
        else if (toggle.textContent === "Daily") {
          toggle.addEventListener('click', updateDaily);

        }

       else if (toggle.textContent === "Monthly") {
          toggle.addEventListener('click', updateMonthly);

        }
      })
      
      function toggleActive() {
          toggleUpdate[0].addEventListener('click', function () {
           document.querySelector('.active').classList.remove('active');
            this.classList.add('active');
          } )
          toggleUpdate[1].addEventListener('click', function () {
           document.querySelector('.active').classList.remove('active');
            this.classList.add('active');
          } )
          toggleUpdate[2].addEventListener('click', function () {
           document.querySelector('.active').classList.remove('active');
            this.classList.add('active');
          } )
      }

      toggleActive();

      function updateWeekly() {

        for (let i = 0; i < timeFrames.length; i++) {
          currentTime[i].textContent = timeFrames[i].timeframes.weekly.current + "hrs";
          previousTime[i].textContent = timeFrames[i].timeframes.weekly.previous + "hrs";
        }

      }
      function updateDaily() {
        for (let i = 0; i < timeFrames.length; i++) {
          currentTime[i].textContent = timeFrames[i].timeframes.daily.current + "hrs";
          previousTime[i].textContent = timeFrames[i].timeframes.daily.previous + "hrs";
        }
      }
      function updateMonthly() {
        for (let i = 0; i < timeFrames.length; i++) {
          currentTime[i].textContent = timeFrames[i].timeframes.monthly.current + "hrs";
          previousTime[i].textContent = timeFrames[i].timeframes.monthly.previous + "hrs";
        }
      }

  });

 