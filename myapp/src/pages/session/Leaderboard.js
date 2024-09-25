import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Skeleton } from "primereact/skeleton";
import { useSessionContext } from "../../context/SessionContext";

const Leaderboard = (props) => {
  const emptyData = [{player: 'Hussain', leaderboard: 2}]
  const { sessionContext, setSessionContext } = useSessionContext();

  return (
    <div className="col-12 lg:col-6">
      <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
        <span className="block text-500 font-medium mb-3">
          {sessionContext?.name}
        </span>
        {props?.data === undefined ? (
          <DataTable value={emptyData} stripedRows showGridlines size="small">
            <Column field="player" header="Player" body={<Skeleton />}></Column>
            <Column field="leaderboard" header="Wins" body={<Skeleton />}></Column>
          </DataTable>
        ) : (
          <DataTable value={props?.data} stripedRows showGridlines size="small">
            <Column field="player" header="Player"></Column>
            <Column field="leaderboard" header="Wins"></Column>
          </DataTable>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
