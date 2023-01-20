import React from "react";
import moment from "moment/moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

export const JournalEntry = ({ id, date, title, body, url }) => {
  const dispatch = useDispatch();

  const noteWeekDay = moment(date).format("dddd");
  const noteMonthDay = moment(date).format("DD");

  const handleEntryClick = () => {
    dispatch(activeNote(id, { date, title, body, url }));
  };
  return (
    <div className="journal__entry pointer" onClick={handleEntryClick}>
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}

      <div className="journal__entry-body">
        <p className="journal__entry-title">{title || "Note title"}</p>
        <p className="journal__entry-content">{body || "Note body"}</p>
      </div>

      <div className="journal__date-box">
        <span>{noteWeekDay}</span>
        <h4>{noteMonthDay}</h4>
      </div>
    </div>
  );
};
