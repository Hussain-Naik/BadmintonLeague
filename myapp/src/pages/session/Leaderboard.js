import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Leaderboard = () => {
  const data = [{player: 'Hussain', wins: 2}, {player: 'Tauseef', wins: 1}]

  return (
    <div className="col-12 lg:col-6">
      <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
        <DataTable value={data} stripedRows showGridlines size="small">
          <Column field="player" header="Player"></Column>
          <Column field="wins" header="Wins"></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default Leaderboard;
