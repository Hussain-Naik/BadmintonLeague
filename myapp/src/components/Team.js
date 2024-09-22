import React, { useState } from "react";
import WinDisplay from "./WinDisplay";
import { winPosition } from "../utils/utils";

const Team = (props) => {
  const {team} = props
  return (
    <>
    {team[0][0].team === 1 ? <WinDisplay result={team[0][0].win} /> : <WinDisplay result={0} />}
    <div className="flex-grow-1">
      <div className="block text-500 text-center font-medium m-1">{team[0][0].player}</div>
      <span className="block text-500 text-center font-medium m-1">
      {team[0][1].player}
      </span>
    </div>
    {team[0][0].team === 2 ? <WinDisplay result={team[0][0].win} /> : <WinDisplay result={0} />}
    </>
  );
  // const align = winPosition(index);
  // return align ? (
  //   <>
  //     <WinDisplay result={win} />
  // <div className="flex-grow-1">
  //   <div className="block text-500 text-center font-medium m-1">Team</div>
  //   <span className="block text-500 text-center font-medium m-1">
  //     {index}
  //   </span>
  // </div>
  //   </>
  // ) : (
  //   <>
  //     <div className="flex-grow-1">
  //       <div className="block text-500 text-center font-medium m-1">Team</div>
  //       <span className="block text-500 text-center font-medium m-1">
  //         {index}
  //       </span>
  //     </div>
  //     <WinDisplay result={win} />
  //   </>
  // );
};

export default Team;
