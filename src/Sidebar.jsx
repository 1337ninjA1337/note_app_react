function Sidebar({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote, }) {

    const sortedNotes = notes.sort((a, b)=>b.lastUpdate - a.lastUpdate)

    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>Notes</h1>
                <button onClick={onAddNote}> Add note</button>
            </div>
            <div className="app-sidebar-notes">
                {sortedNotes.map((note) => (
                    <div className={`app-sidebar-note ${note.id===activeNote && "active"}`} onClick={()=>setActiveNote(note.id)}>
                        <div className="sidebar-note-title">
                            <strong>{note.title}</strong>
                            <button onClick={() =>onDeleteNote(note.id)}>Delete</button>
                        </div>
                        <p>{note.body && note.body.substr(0, 75)+"..."}</p>
                        <small className="note-meta">
                            Last updated: {new Date(note.lastUpdate).toLocaleDateString("en-GB", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                </small>
                    </div>

                ))}

            </div>
        </div>
    )

}


export default Sidebar;