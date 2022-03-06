import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import React, { useState } from "react";
import Cards from "./Cards";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import Button from "@mui/material/Button";

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

const Grids = () => {
  const [checked, setChecked] = useState([]);
  const [left, setLeft] = useState([0]);
  const [right, setRight] = useState([4]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => (e) => {
    e.preventDefault();
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    console.log(currentIndex);

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customListLeft = (items) => (
    <Paper sx={{ width: 300, height: 550, overflow: "auto" }} className="p-6">
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
                  <Cards text="Client 1" transfer={handleCheckedRight} />
                </Grid>
              </Box>
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  const customListLeftTwo = (items) => (
    <Paper sx={{ width: 300, height: 550, overflow: "auto" }} className="p-6">
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
                  <Cards text="Client 2" transfer={handleCheckedRight} />
                </Grid>
              </Box>
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  const customListRight = (items) => (
    <Paper sx={{ width: 300, height: 550, overflow: "auto" }} className="p-6">
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
                  <Cards text="Rainbow" transfer={handleCheckedLeft} />
                </Grid>
              </Box>
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );
  const customListRightTwo = (items) => (
    <Paper sx={{ width: 300, height: 550, overflow: "auto" }} className="p-6">
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
                  <Cards text="Indigo" transfer={handleCheckedLeft} />
                </Grid>
              </Box>
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );
  const customListRightThree = (items) => (
    <Paper sx={{ width: 300, height: 550, overflow: "auto" }} className="p-6">
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
                  <Cards text="Indigo" transfer={handleCheckedLeft} />
                </Grid>
              </Box>
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  return (
    <div className="h-auto">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <Grid item>{customListLeft(left)}</Grid>
        </Grid>
        <Grid item>
          <Grid item>{customListLeftTwo(left)}</Grid>
        </Grid>

        <Button sx={{ my: 0.5 }} variant="text" size="small">
          &lt;
        </Button>

        <Grid item>
          <Grid container direction="column" alignItems="center"></Grid>
        </Grid>
        <Grid item>
          <Grid item>{customListRight(right)}</Grid>
        </Grid>
        <Grid item>
          <Grid item>{customListRightTwo(right)}</Grid>
        </Grid>
        <Grid item>{customListRightThree(right)}</Grid>
        <Button sx={{ my: 0.5 }} variant="text" size="small">
          &lt;
        </Button>
      </Grid>
    </div>
  );
};

export default Grids;
