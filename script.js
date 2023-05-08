// Define the class schedule
var classSchedule = [
  {
    date: "2023-05-01",
    time: "10:00 AM",
    topic: "Introduction to Gender and Race Issues"
  },
  {
    date: "2023-05-03",
    time: "10:00 AM",
    topic: "Gender Identity"
  },
  {
    date: "2023-05-05",
    time: "10:00 AM",
    topic: "Racial Identity"
  },
  {
    date: "2023-05-08",
    time: "10:00 AM",
    topic: "Gender and Race in the Media"
  },
  {
    date: "2023-05-10",
    time: "10:00 AM",
    topic: "Gender and Race in Education"
  },
  {
    date: "2023-05-12",
    time: "10:00 AM",
    topic: "Gender and Race in Politics"
  }
];

// Display the class schedule in a table
function displaySchedule() {
  var calendar = document.getElementById("calendar");

  // Create table header row
  var headerRow = document.createElement("tr");
  var dateHeader = document.createElement("th");
  var timeHeader = document.createElement("th");
  var topicHeader = document.createElement("th");
  dateHeader.innerText = "Date";
  timeHeader.innerText = "Time";
  topicHeader.innerText = "Topic";
  headerRow.appendChild(dateHeader);
  headerRow.appendChild(timeHeader);
  headerRow.appendChild(topicHeader);
  calendar.appendChild(headerRow);

  // Create table rows for each class
  for (var i = 0; i < classSchedule.length; i++) {
    var classRow = document.createElement("tr");
    var dateCell = document.createElement("td");
    var timeCell = document.createElement("td");
    var topicCell = document.createElement("td");
    dateCell.innerText = classSchedule[i].date;
