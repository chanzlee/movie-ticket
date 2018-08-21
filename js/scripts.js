var movies = {
  movie1: "Avengers: Infinity War",
  movie2: "Mission Impossible",
  movie3: "Coco",
  movie4: "Mama Mia! 2"
};

var times = {
  time1: "Morning",
  time2: "Afternoon",
  time3: "Late Night"
}

var ages = {
  age1: "Senior",
  age2: "Kid",
  age3: "Not Applicable"
}

var Ticket = function (movie,date,time,age){
  this.movie= movie;
  this.date= date;
  this.time= time;
  this.age= age;
  this.price= 10;
}

Ticket.prototype.calculatePrice = function(time, age){
  if (time !== times.time2){
    this.price *= 0.7;
  }
  if (age !== ages.age3) {
    this.price -= 3;
  }
}
// Back-End ////////////////////////////////////
$(document).ready(function(){
  $("#buy-ticket").submit(function(event){
    event.preventDefault();
    var movieInput = $("#select-movie").val();
    var dateInput = $("#select-date").val();
    var timeInput = $("#select-time").val();
    var ageInput = $("#select-age").val();
    
    var ticketInstance = new Ticket(movies.movieInput)

  });

});
