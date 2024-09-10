import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useSessionContext } from "../../context/SessionContext";

const Leaderboard = () => {
  const data = [{player: 'Hussain', wins: 2}, {player: 'Tauseef', wins: 1}]
  const { sessionContext, setSessionContext } = useSessionContext();

  return (
    <div className="col-12 lg:col-6">
      <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
      <span className="block text-500 font-medium mb-3">{sessionContext?.name}</span>
        <DataTable value={data} stripedRows showGridlines size="small">
          <Column field="player" header="Player"></Column>
          <Column field="wins" header="Wins"></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default Leaderboard;
