let day = new Date().getDay();
let hour = new Date().getHours();

function Time(req, res, next) {
  if (hour > 8 && hour < 18 && day > 0 && day < 5) {
    next();
  } else {
    res.send(
      '<h1 style="text-align:center; margin-top:70px"> Sorry we are closed </h1> <h3> Our working hours: from Monday to Friday, 9am to 17pm </h3>'
    );
  }
}

module.exports = Time;
