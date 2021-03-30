function Content({ activeNote, onUpdateNote }) {

    const onEdit = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastUpdate: Date.now(),
        })
    }

    if (!activeNote)
        return (<div className="no-active-note">Select any note.</div>);

    return (
        <div className="app-content">
            <div className="app-content-note-edit">
                <input type="text" id="title" value={activeNote.title} onChange={(e) => onEdit("title", e.target.value)} autoFocus />
                <textarea name="" id="body" placeholder="Write notes here..." value={activeNote.body} onChange={(e) => onEdit("body", e.target.value)} />
            </div>
            <div className="app-content-note-preview">
                <h1 className="preview-title">{activeNote.title}</h1>
                <div className="markdown-preview">{activeNote.body}</div>
            </div>
        </div>
    )
}


export default Content;