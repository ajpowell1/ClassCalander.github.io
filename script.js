// Define the class schedule as an object
var classSchedule = {
    "May 8th": ["Introductions", "Fill in the calendar, profile picture, and participate in a current events discussion"],
    "May 11th": ["Syllabus Quiz"],
    "May 12th": ["Library Quiz"],
    "May 15th": ["Snowy Day DB", "Yo Yes DB", "CCBC and publisher data", "McNair article on Scholastic", "Young Dreamers article (Myers)", "Winkler article", "Woodson NYT article"],
    "May 19th": ["Bronx Response", "Bronx Quiz", "Cornrows DB", "Bronx Masquerade", "Banks article ('An Introduction...')", "10 Quick Ways article", "McIntosh article", "Grace Lin Ted Talk", "Bishop articles ('Reflections...')"],
    "May 24th": ["Global literature DB", "Addams Book Project", "Articles and notes on Asian-American Literature and Latino Literature", "Native American Literature Websites", "Selected Jane Addams book"],
    "May 30th": ["Frankie Quiz", "Frankie Response", "Disreputable History of Frankie Landau-Banks", "Selected Bloomer/RISE Book", "Rubinstein-Avila article", "Hamilton article", "Heine chart"],
    "June 1st": ["Picture Book Essay Prep", "Final Exam", "Nino Wrestles the World", "Locomotive", "Blog posts on Nino and Locomotive", "McNair article on Classics", "Aronson and Pin"],
    "June 2nd": ["Final Quiz & Essay"]
};

// Function to display the class schedule in a table
function displaySchedule() {
    var calendarTable = document.getElementById("calendar");

    // Create the header row with the days of the week
    headerRow.style.backgroundColor = "#ddd";
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for (var i = 0; i < daysOfWeek.length; i++) {
        var headerCell = headerRow.insertCell();
        headerCell.innerHTML = daysOfWeek[i];
    }

    // Get the start and end dates for the class
    var startDate = new Date("May 8, 2023");
    var endDate = new Date("June 2, 2023");

    // Loop through each day and add it to the table
    for (var date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
        var dateStr = date.toDateString();
        var scheduleItems = classSchedule[dateStr];

        // Create a new row for the current date
        var dateRow = calendarTable.insertRow();
        dateRow.style.backgroundColor = "#eee";
        var dateCell = dateRow.insertCell();
        dateCell.innerHTML = dateStr;

        // Add the schedule items to the row
        if (scheduleItems) {
            var scheduleCell = dateRow.insertCell();
            scheduleCell.innerHTML = scheduleItems.join("<br>");
        }
    }
}

// Call the displaySchedule function when the page loads
window.onload = displaySchedule;
