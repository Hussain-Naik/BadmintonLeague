import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const Leaderboard = ({ setVisible }) => {
  const [products, setProducts] = useState([]);

  return (
    <div className="col-12 lg:col-6">
      <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
        <DataTable value={products} stripedRows showGridlines size="small">
          <Column field="player" header="Player"></Column>
          <Column field="wins" header="Wins"></Column>
        </DataTable>
        <Button
          className="mt-2"
          label="Session"
          icon="pi pi-plus"
          onClick={() => {
            setVisible(true);
          }}
        />
      </div>
    </div>
  );
};

export default Leaderboard;
