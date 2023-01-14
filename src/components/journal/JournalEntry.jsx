import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Note title</p>
        <p className="journal__entry-content">
          ssldkfjsaldjfl asjdlf jfasldj lsaj ljsdadlkj lksaj ksdf sd s fsdaf as
        </p>
      </div>

      <div className="journal__date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
