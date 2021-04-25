import React from 'react';
import NotesTable from '../notes-table/notes-table.comp';
import StudentNotes from '../student-notes/student-notes.comp';
import './granding-table.css';
const GrandingTable = () => {
return (
<div className ="granding-table-container">
<StudentNotes/>
<NotesTable/>
</div>
);
}
export default GrandingTable;