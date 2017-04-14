// <!-- - When the page loads, your program should hide all but the first 10 students in the list.
// Look at the HTML in the example-meets.html on lines 119-137 -- this is an example of the markup 
// you'll need to add dynamically to the index.html page to create pagination links.
// 
//Since only 10 students should be shown at a time, your programming needs to calculate the number
//  of pages needed and add the appropriate number of links to the bottom of the page.
//
// When a user clicks on “2” in the pagination, students 11 through 20 are shown. When a user clicks
//  “3”, students 21 through 30 are shown. And so on. When “6” is clicked 51 through 55 should be shown.
// 
//Your program should work for any number of students. There are 54 students in index.html, but you 
// can test your code by adding the JavaScript file your write to the other lists of students
// we’ve provided in the student-list-examples folder.

//  -->

//PROGRESSIVE ENHANCEMENT
var pagination = $('<div class="pagination"><ul></ul></div>');
var searchbox = $('<div class="student-search"><input name="search" id="search" placeholder="Search for students...">  <button class="sbutton">Search</button> </div> ');
//INCLUDES CURRENT PAGES ELEMENTS
var current = [];
//INSERTING STUDENTS TO AN ARRAY
var students = $('.student-list li').toArray();
$(students).hide().slice(0, 10).show(); // fist hide then show first 10

//PUTTING SEARCHBOX AND PAGINATION BOXES INTO THE BODY
$(".page").append(pagination);
$(".page-header").append(searchbox);

//CALCULATING HOW MANY BOX NEED TO SHOW DATAS
function pagenumber (arraybox) {
$(".pagination ul li").remove();
var dataperpage = 10;
var datanumber = arraybox.length;
var pagenumberneeded =  Math.ceil(datanumber/dataperpage);
for(var i = 0; i < pagenumberneeded; i++) {
var box = '<li id="' + (i + 1) + '"><a href="#"> ' + (i + 1) + '</a></li>';
$('.pagination ul').append(box);
}
 $('.pagination').find('a').first().addClass('active');

}

pagenumber(students);

$(".pagination li").click(function() {
    var num = this.id; 
    var perpage = 10;
    var start = num * perpage - perpage;
    var stop = num * perpage;
    current = students.slice(start, stop);
    $(students).hide();
    $(current).fadeToggle(300);
 	$('.pagination').removeClass('active');
        $('.pagination').find('a').addClass('active');
})

//SEARCH - CAN NOT CPMPLETED

