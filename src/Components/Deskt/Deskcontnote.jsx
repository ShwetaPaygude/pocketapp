import React from "react";
import "./Deskstyle.css";
const Deskcontnote= ({ note }) => {
	return (
		<div className="desk_notes_content_note">
			<div className="desk_notes_content_date_time_details">
				<div className="desk_notes_content_date">{note.date}</div>
				<div className="desk_notes_content_time">{note.time}</div>
			</div>
			<div className="desk_notes_content_details">
				<p>{note.content}</p>
			</div>
		</div>
	);
};

export default Deskcontnote;
