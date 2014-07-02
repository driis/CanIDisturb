
function disturbTimer(update)
{
  // Configuration variables
  var interval = 1000;
  var freeTimeHourBegin = 50;

  function callback()
  {
    var now = getCurrentTime();
    update(now);
  }

  function getCurrentTime()
  {
    var date = new Date();
    var minutes = date.getMinutes();
    var allowDisturb = minutes >= freeTimeHourBegin;
    var remaining = allowDisturb ? 60 - minutes : freeTimeHourBegin - minutes;
    return {
      hour: date.getHours(),
      minute: minutes,
      second: date.getSeconds(),
      allowDisturb: allowDisturb,
      remaining: remaining + " minutes."
    }
  }

  return {
    begin: function() {
      setInterval(callback, interval);
      callback();
    }

  }
}
