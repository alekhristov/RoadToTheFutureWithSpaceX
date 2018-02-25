function changeUrl(page, url) {
    if (typeof (history.pushState) != "undefined") {
        var obj = { Page: page, Url: url };
        history.pushState(obj, obj.Page, obj.Url);
    } else {
        alert("Browser does not support HTML5.");
    }
}
$(function () {
    $("#home, #spaceX").click(function () {
        changeUrl('home', 'home');
    });
    $("#rockets").click(function () {
        changeUrl('rockets', 'rockets');
    });
    $("#upcomingLaunches").click(function () {
        changeUrl('upcomingLaunches', 'upcoming-launches');
    });
    $("#jokes").click(function () {
        changeUrl('random-joke', 'random-jokes');
    });
});