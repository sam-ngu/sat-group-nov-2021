const router = require("express").Router();
const path = require("path");
const fs = require('fs');
const uuid = require('uuid');

const dbPath = path.join(__dirname, "..", "db", "db.json");

/**
 * 
 * @returns {Array}
 */
function getNotes(){

    return JSON.parse(fs.readFileSync(dbPath, "utf-8") || "[]");
}


function saveNotes(notes){
    fs.writeFileSync(dbPath, JSON.stringify(notes), "utf-8");
}

router.get("/notes", (req, res) => {
    
    // get the content of db.json

    const notes = getNotes();;

    console.log(notes);


    // send them back
    res.json(notes);
    
});


router.post('/notes', (req, res) => {

    // get the req body
    const {title, text} = req.body;


    console.log(title, text);

    // create a new note in db json
    const newNote = {
        id: uuid.v4(),
        title,
        text,
    }

    // get all the existing notes in db json
    const existingNotes = getNotes();

    // add this new note to the existing
    existingNotes.push(newNote);

    // resave 
    saveNotes(existingNotes);

    // send back response to client, with the new note in the res body
    res.json(newNote);

});


// update
router.put('/notes/:id', (req, res) => {

    // get all the notes
    const notes = getNotes();

    // find the note
    const indexFound = notes.findIndex((note) => note.id === req.params.id);

    if(indexFound === -1){
        return res.status(400).json({
            error: 'NOT FOUND !!!!!'
        });
    }
    
    // update it
    const noteFound = notes[indexFound]
    notes[indexFound].title = req.body.title || noteFound.title;
    notes[indexFound].text = req.body.text || noteFound.text;

    // resave
    saveNotes(notes);

    res.json(noteFound);

});


// getting a specific note
router.get('/notes/:id', (req, res) => {

    // get all the notes
    const notes = getNotes();

    // find the note with matching id
    const found = notes.find((note) => note.id === req.params.id);

    if(!found){
        res.status(400).json({
            error: 'not found!!'
        })
    }else{
        // send back the note
        res.json(found);
    }



});


router.delete('/notes/:id', (req, res) => {

    // get all the existing notes
    const notes = getNotes();

    // get rid of the target note with the given id
    const filtered = notes.filter((note) => note.id !== req.params.id);


    // resave
    saveNotes(filtered);


    // send back res
    res.json({
        data: "ok",
    })


});

module.exports = router;
