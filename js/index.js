// generate current URL in #current-url
document.getElementById("current-url").innerHTML = window.location.href;
//generate current date in current-date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
document.getElementById("current-date").innerHTML = (today);

// Generate year in footer
var currentYear = new Date().getFullYear();      
if (currentYear > 2019) {
    document.getElementById("current-date-ft").innerHTML = " - " + currentYear;
}

$('ul.expandible').each(function(){
    var $ul = $(this),
        $lis = $ul.find('li:gt(4)'),
        isExpanded = $ul.hasClass('expanded');
    $lis[isExpanded ? 'show' : 'hide']();

    if($lis.length > 0){
        $ul
            .append($('<div class="showmore"><p class="expand">' + (isExpanded ? '<i class="fas fa-angle-up"></i> დახურვა' : '<i class="fas fa-angle-down"></i></i> სრულად') + '</p></div>')
            .click(function(event){
                var isExpanded = $ul.hasClass('expanded');
                event.preventDefault();
                $(this).html(isExpanded ? '<i class="fas fa-angle-down"></i></i> სრულად' : '<i class="fas fa-angle-up"></i> დახურვა');
                $ul.toggleClass('expanded');
                $lis.toggle();
            }));
    }
});



// Send link by email
function emailCurrentPage() {
    window.location.href = "mailto:?subject=" + document.title + "&body=" + encodeURI(document.location);
}
// Display success while copying URL
function revealMessage() {
    window.alert('ბმული კოპირებულია');
}
// Function to execute copyToClipboard from ('#current-url') on button click
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();

    revealMessage();
}