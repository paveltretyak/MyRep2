window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab');
    let info = document.querySelector('.info-header');
    let tabContent = document.querySelectorAll('.info-tabcontent');
    let descbtn = document.querySelectorAll('.description-btn');
    
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            descbtn[i-1].addEventListener('click', function() {     // Само окно, открывается по клику на кнопке
                overlay.style.display = 'block';
                this.classList.add('more-splash');
                document.body.style.overflow = 'hidden';    // Блокируем прокрутку страницы при прокрутке окна
            });
        }
    }
    
    hideTabContent(1);

    function showTabContent (b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;              
                }
            }           
        }
    });

    let deadline = '2023-02-10'; // Задаем дату окончания таймера

    function getTimeRemaining(endtime) {    //Функция, отсчитывающая, сколько времени осталось
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t/1000) % 60);
        let minutes = Math.floor((t/1000/60) % 60);
        let hours = Math.floor((t/(1000*60*60)));
        //let hours = Math.floor((t/1000/60/60) % 24);
        //let days = Math.floor((t/(1000*60*60*24)));
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds            
        };
    }

    function setClock(id, endtime) {    //Записываем полученные в предыдущей функции данные в верстку
        let timer = document.getElementById(id);
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(updateClock, 1000); //Срабатывает раз в секунду (1000мс)

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {         //Добавление нулей, если цифры меньше 10
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            };

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
            
            if (t.total <=0) {
                clearInterval(timeInterval);
                // Подставляем нули, когда таймер окончился
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadline);
});
    // Делаем модальное окно
    let more = document.querySelector('.more');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {     // Само окно, открывается по клику на кнопке
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';    // Блокируем прокрутку страницы при прокрутке окна
    });

    close.addEventListener('click', function() {    // Кнопка "крестик" закрытия окна     
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';          // Разблокируем прокрутку
    });