import React from "react";
import { ProgressBar } from "primereact/progressbar";

const CardItem = (props) => {
  const { title, name, count, id, progress, max } = props;
  const progress_display = progress / max;

  const valueTemplate = (value) => {
    return (
      <React.Fragment>
        {progress}/<b>{max}</b>
      </React.Fragment>
    );
  };
  return (
    <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
      <div className="flex justify-content-between mb-2">
        <div>
          <span className="block text-500 font-medium mb-2">{title}</span>
          <div className="text-900 font-medium text-xl">{name}</div>
        </div>
        <div
          className="flex align-items-center justify-content-center bg-blue-100 border-round"
          style={{ width: "2.5rem", height: "2.5rem" }}
        >
          {title === "League" ? (
            <i className="pi pi-trophy text-blue-500 text-xl"></i>
          ) : (
            <i className="pi pi-calendar text-blue-500 text-xl"></i>
          )}
        </div>
      </div>
      {title === "League" ? (
        <>
          <span className="text-green-500 font-medium">{count} </span>
          <span className="text-500">Sessions</span>
        </>
      ) : (
        <>
          <span className="text-green-500 font-medium">{count} </span>
          <span className="text-500">Players</span>
        </>
      )}
      {progress &&
        (progress_display >= 1 ? (
          <ProgressBar className="mt-2" value={100}></ProgressBar>
        ) : (
          <ProgressBar className="mt-2" value={progress_display * 100} displayValueTemplate={valueTemplate}></ProgressBar>
        ))}
    </div>
  );
};

export default CardItem;
