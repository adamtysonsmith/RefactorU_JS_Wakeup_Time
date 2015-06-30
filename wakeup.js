$(document).ready(function() {
    
    var container = $('.container');
    var shell = $('<div class="shell"></div>');
    
    var leftLabelContainer = $('<div class="left-label-container"></div>');
    var screen = $('<div class="screen"></div>');
    var bottomLabelContainer = $('<div class="bottom-label-container"></div>');
    
    var leftLabel = $('<p class="left-label">PM</p>');
    var bottomLabel = $('<p class="bottom-label"></p>');
//    var indicator = $('<div class="indicator"></div>');
    var clockText = $('<p class="clock-text"></p>');

    
    // Append elements inside out
    leftLabelContainer.append(leftLabel);
    bottomLabelContainer.append(bottomLabel);
    screen.append(clockText);
    
    shell.append(leftLabelContainer, screen, bottomLabelContainer);
    container.append(shell);
    
    // Give me the time
    setInterval(function() {
        var now = new Date();
        clockText.text(now.toLocaleTimeString().slice(0, 4));
    }, 1000);
    
}); // End Doc Ready