const timer = $("#current-day");
const timeblockContainer = $(".container");

// when the page loads

// show the timer
setInterval(function(){
    timer.text(moment().format("YYYY-MM-DD HH:mm:ss"));
}, 1000);

function createRow(time) {
    // contain the following structure
    //  <!-- rows -->
    //   <div class="row">
    //     <article class="col-2">
    //       <!-- time -->
    //       <span>9am</span>
    //     </article>
    //     <article class="col-8">
    //       <!-- textarea -->
    //       <textarea  ></textarea>
    //     </article>
    //     <article class="col-2">
    //       <!-- button -->
    //       <button class="btn btn-primary">Save</button>
    //     </article>
    //   </div>

    const row = $("<div>").attr("class", "row");

    const timeCol = $("<article>").attr("class", "col-2");
    const timeSpan = $("<span>").text(time + ":00");
    timeCol.append(timeSpan);

    row.append(timeCol);

    // if the row belongs to time past
    // give it grey bg color (.past)
    const timeNow = moment(); // 11.54

    const isPast = time < Number(timeNow.format("H"));

    const isCurrent = time >= Number(timeNow.format("H")) && time <= ( Number(timeNow.format("H")) + 1);

    const isFuture = time > Number(timeNow.format('H'));

    let colorClass;

    if(isPast){
        colorClass = 'past'
    }
    if(isCurrent){
        colorClass = 'present'
    }
    if(isFuture){
        colorClass = 'future';
    }


    // if the row belongs to time present
    // give it (.present)

    // if the row belongs to time future
    // give it (.future)
    const textareaCol = $("<article>").attr("class", "col-8 " + colorClass );
    const textarea = $("<textarea>");

    // attempt to find existing val in LS
    // if exist then load content into textarea
    const existingNote = localStorage.getItem(time + ":00");

    if (existingNote) {
        textarea.val(existingNote);
    }

    textareaCol.append(textarea);

    row.append(textareaCol);

    const buttonCol = $("<article>").attr("class", "col-2");

    const button = $("<button>").attr("class", "btn btn-primary save-button");
    button.text("Save");
    buttonCol.append(button);
    row.append(buttonCol);

    return row;
}




const times = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// generate all the timeblock rows



// each row
for (let index = 0; index < times.length; index++) {
    const time = times[index];
    const row = createRow(time);
    timeblockContainer.append(row);

}





// when the user click on the save button for a row
$(document).on("click", ".save-button", function (event) {
    console.log("aaaaa");
    // we want to save the content in the current row textarea to LS
    // 1. grab the content of textarea
    console.log(event.target);
    const jButton = $(event.target);
    const jButtonCol = jButton.parent();

    const textarea = jButtonCol.prev().children();

    const userInput = textarea.val()


    // 2. use the time as the LS key
    const timeSpan = jButtonCol.prev().prev().children();
    const timeOfRow = timeSpan.text();


    // 3. save
    localStorage.setItem(timeOfRow, userInput);


});



