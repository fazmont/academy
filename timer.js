setInterval(function() {
  var now = new Date();
  // Устанавливаем дату 13.04.2024 года по UTC
  var targetDateUTC = new Date(Date.UTC(2024, 3, 13, 0, 0, 0)); // Месяцы начинаются с 0, поэтому 3 представляет апрель
  
  // Учитываем разницу во времени между UTC и Украиной (UTC+2)
  var timeDiff = targetDateUTC - now;
  timeDiff += 2 * 60 * 60 * 1000; // Добавляем 2 часа в миллисекундах
  
  // Переводим миллисекунды в дни, часы, минуты и секунды
  var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
  // Форматируем вывод, чтобы добавить ведущие нули, если необходимо
  var formattedDays = days;
  var formattedHours = hours < 10 ? '0' + hours : hours;
  var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  var formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
  
  // Выводим отсчет в HTML-элемент с id "week-countdown"
  jQuery('#week-countdown p').html(formattedDays + 'd : ' + formattedHours + 'h : ' + formattedMinutes + 'm : ' + formattedSeconds + 's');
}, 1000);
