import "./NoteFound.scss"
import noteFoundImg from "../../assets/images/note-found/note-found.jpg"


const NoteFound = () => {
    return (
        <>
            <section className="note-found">
                <div className="note-found__wrapper">
                    <h1>404</h1>
                    <img src={noteFoundImg} alt="" />
                </div>
            </section>
        </>
    )
}

export default NoteFound