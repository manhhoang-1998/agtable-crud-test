import { Box, Button } from "@mui/material";
import { GridApi } from "ag-grid-community";
import { FC, useState } from "react";

interface ActionRerenderProps {
  gridApi: GridApi;
  handleEditBtnClick: () => void;
  handleSaveBtnClick: () => void;
  handleDeleteBtnClick: () => void;
  handleCancelActionClick: () => void;
}

const ActionRerender: FC<ActionRerenderProps> = ({
  gridApi,
  handleEditBtnClick,
  handleSaveBtnClick,
  handleDeleteBtnClick,
  handleCancelActionClick,
}: any) => {
  const [isEditActionRender, setIsEditActionRender] = useState(true);
  //   console.log(isEditActionRender);
  return isEditActionRender ? (
    <Box>
      <Button
        variant="text"
        sx={{ color: "green" }}
        onClick={() => {
          setIsEditActionRender(!isEditActionRender);
          handleEditBtnClick();
        }}
      >
        Sửa
      </Button>
      <Button
        variant="text"
        sx={{ color: "red" }}
        onClick={() => {
          setIsEditActionRender(!isEditActionRender);
          handleDeleteBtnClick();
        }}
      >
        Xóa
      </Button>
    </Box>
  ) : (
    <Box>
      <Button
        variant="text"
        sx={{ color: "green" }}
        onClick={() => {
          setIsEditActionRender(true);
          handleSaveBtnClick();
        }}
      >
        Lưu
      </Button>
      <Button
        variant="text"
        sx={{ color: "red" }}
        onClick={() => {
          setIsEditActionRender(true);
          handleCancelActionClick();
        }}
      >
        Hủy
      </Button>
    </Box>
  );
};
export default ActionRerender;
