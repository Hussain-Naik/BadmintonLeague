import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Skeleton } from "primereact/skeleton";
import { useSessionContext } from "../../context/SessionContext";
import { Button } from "primereact/button";

const Leaderboard = ({leaderboard, visibleRight, setVisibleRight}) => {
  const emptyData = [{ player: "Hussain", leaderboard: 2 }];
  const { sessionContext, setSessionContext } = useSessionContext();

  return (
    <>
      <div className="col-12 lg:col-6">
        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
          <div className="flex justify-content-between align-items-center flex-wrap mb-1">
            <div className="block text-500 font-medium">
              {sessionContext?.name}
            </div>
            <Button
              icon="pi pi-bookmark"
              size="small"
              rounded
              text
              severity="secondary"
              aria-label="Bookmark"
              onClick={() => setVisibleRight(!visibleRight)}
            />
          </div>
          {leaderboard?.data === undefined ? (
            <DataTable value={emptyData} stripedRows showGridlines size="small">
              <Column
                field="player"
                header="Player"
                body={<Skeleton />}
              ></Column>
              <Column
                field="leaderboard"
                header="Wins"
                body={<Skeleton />}
              ></Column>
            </DataTable>
          ) : (
            <DataTable
              value={leaderboard?.data}
              stripedRows
              showGridlines
              size="small"
            >
              <Column field="player" header="Player"></Column>
              <Column field="leaderboard" header="Wins"></Column>
            </DataTable>
          )}
        </div>
      </div>
      
    </>
  );
};

export default Leaderboard;
