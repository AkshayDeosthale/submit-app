import React from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const Tasks = ({ items }) => {
  return (
    <Paper sx={{ width: 300, height: 550, overflow: "auto" }} className="p-6 ">
      <List dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Cards />
                </Grid>
              </Box>
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );
};

export default Tasks;
