
// Create the grid of boxes
const boxGrid = $('#boxGrid');
for (let i = 0; i < 4; i++) { // First for loop represents each row in grid
    for (let j = 0; j < 4; j++) { // Second for loop represents each column in grid
        const box = $('<div class="box"></div>'); //store wrapper in var for easier use
        boxGrid.append(box);
    }
    boxGrid.append('<br>'); // Add line break after each row (couldn't figure out best way to do this)
}
$('body').append(boxGrid);

// Add click event handler to the boxes to update color
$('.box').click(function () {
    $(this).toggleClass('light-box');
});
