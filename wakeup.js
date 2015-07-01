$(document).ready(function() {
    
    var container = $('.container');
    var shell = $('<div class="shell"></div>');
    
    var rightLabelContainer = $('<div class="right-label-container"></div>');
    var screen = $('<div class="screen"></div>');
    var bottomLabelContainer = $('<div class="bottom-label-container"></div>');
    
    var rightLabel = $('<p class="right-label"></p>');
    var bottomLabel = $(
        '<ul class="day-labels">' +
            '<li class="bottom-label" data-id="1">MON</li>' +
            '<li class="bottom-label" data-id="2">TUE</li>' +
            '<li class="bottom-label" data-id="3">WED</li>' +
            '<li class="bottom-label" data-id="4">THURS</li>' +
            '<li class="bottom-label" data-id="5">FRI</li>' +
            '<li class="bottom-label" data-id="6">SAT</li>' +
            '<li class="bottom-label" data-id="7">SUN</li>' +
        '</ul>'
    );
    var clockText = $('<p class="clock-text"></p>');
    
    // Is the current time AM or PM?
    var am_pm = new Date().getHours() >= 12 ? 'PM' : 'AM';

    // Append elements inside out
    rightLabelContainer.append(rightLabel.text(am_pm));
    bottomLabelContainer.append(bottomLabel);
    screen.append(clockText);
    
    shell.append(rightLabelContainer, screen, bottomLabelContainer);
    container.append(shell);
    
    // Update the current day
    var updateDay = function() {
        var day = new Date().getDay();
        $('.bottom-label[data-id="' + day + '"]').css('border-bottom', '5px solid white');
    }
    updateDay();
    
    // Give me the time every second!
    setInterval(function() {
        var now = new Date();
        var time = now.toLocaleTimeString();
        if (time[2] === ':') {
            clockText.text(time.slice(0, 5));
        } else {
            clockText.text(time.slice(0, 4));
        }
    }, 1000);
    
    
}); // End Doc Ready