import { AgGridReact } from "ag-grid-react";
import { getData } from "./data";

import {
  CellValueChangedEvent,
  GridApi,
  GridOptions,
  ICellRendererParams,
  RowEditingStartedEvent,
  RowEditingStoppedEvent,
} from "ag-grid-community";
import ActionRerender from "./ActionRender";
import { useCallback, useRef, useState } from "react";
import { Button } from "@mui/material";

function AgTable() {
  const gridRef = useRef<AgGridReact>(null);

  const handleEditBtnClick = (params: ICellRendererParams) => {
    console.log(params);
    gridOptions.api!.setDefaultColDef({ editable: true });
    gridOptions.api!.setFocusedCell(params.rowIndex, "country");
    gridOptions.api!.startEditingCell({
      rowIndex: params.rowIndex,
      colKey: "country",
      // set to 'top', 'bottom' or undefined
    });
  };
  const handleSaveBtnClick = (params: ICellRendererParams) => {
    gridOptions.api!.setDefaultColDef({ editable: false });
    gridOptions.api!.stopEditing();
  };
  const handleDeleteBtnClick = (params: ICellRendererParams, key?: string) => {
    gridOptions.api!.setDefaultColDef({ editable: true });
    gridOptions.api!.setFocusedCell(params.rowIndex, "country");
    gridOptions.api!.startEditingCell({
      rowIndex: params.rowIndex,
      colKey: "country",
      key: key,
    });
  };
  const handleCancelActionClick = (params: ICellRendererParams) => {
    gridOptions.api!.setDefaultColDef({ editable: false });
    gridOptions.api!.stopEditing();
  };

  const gridOptions: GridOptions = {
    columnDefs: [
      { field: "firstName", editable: false },
      { field: "lastName", editable: false },
      { field: "gender", editable: false },
      { field: "age" },
      { field: "mood" },
      { field: "country" },
      { field: "address", editable: false },
      {
        field: "action",
        editable: false,
        cellRenderer: (params: ICellRendererParams) => {
          return (
            <ActionRerender
              gridApi={params.api}
              handleEditBtnClick={() => handleEditBtnClick(params)}
              handleSaveBtnClick={() => handleSaveBtnClick(params)}
              handleDeleteBtnClick={() =>
                handleDeleteBtnClick(params, "Delete")
              }
              handleCancelActionClick={() => handleCancelActionClick(params)}
            ></ActionRerender>
          );
        },
      },
    ],
    defaultColDef: {
      flex: 1,
      //   editable: true,
      resizable: true,
    },
    editType: "fullRow",
    suppressClickEdit: true,

    rowData: getData(),
    onRowEditingStarted: (event: RowEditingStartedEvent) => {
      console.log("rowEdittingStarted", event);
    },
    onRowEditingStopped: (event: RowEditingStoppedEvent) => {
      console.log("rowEdittingStopped", event);
    },
    onCellValueChanged: useCallback((event: CellValueChangedEvent) => {
      console.log("Data after change is", event.data);
    }, []),
  };

  return (
    <div className="ag-theme-alpine" style={{ height: "100vh" }}>
      <AgGridReact ref={gridRef} gridOptions={gridOptions} />
    </div>
  );
}

export default AgTable;
