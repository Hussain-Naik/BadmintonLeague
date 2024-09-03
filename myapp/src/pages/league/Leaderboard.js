import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useLeagueContext } from "../../context/LeagueContext";

const Leaderboard = () => {
  const data = [{player: 'Hussain', wins: 1}, {player: 'Tauseef', wins: 0}]
  const { leagueContext, setLeagueContext } = useLeagueContext();

  return (
    <div className="col-12 lg:col-6">
      <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
      <span className="block text-500 font-medium mb-3">{leagueContext?.name}</span>
        <DataTable value={data} stripedRows showGridlines size="small">
          <Column field="player" header="Player"></Column>
          <Column field="wins" header="Wins"></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default Leaderboard;
