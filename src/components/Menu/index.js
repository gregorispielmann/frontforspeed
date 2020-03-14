import React from "react";

import { FaWindows } from "react-icons/fa";
import { Button, List, ListItem, Divider } from "react95";

export default function Menu() {
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {open && (
        <List
          horizontalAlign="left"
          verticalAlign="bottom"
          open={open}
          onClick={handleClose}
        >
          <ListItem as="a" href="https://linkedin.com/in/gregorispielmann">
            <span>👨‍💻</span> Who is the dev?
          </ListItem>
          <ListItem as="a" href="https://github.com/gregorispielmann">
            <span>📁</span> My Github
          </ListItem>
          <Divider />
          <ListItem disabled>
            <span>🔙</span> Logout
          </ListItem>
        </List>
      )}
      <Button
        onClick={handleClick}
        active={open}
        style={{ fontWeight: "bold" }}
      >
        <FaWindows style={{ marginRight: "5px" }}></FaWindows>
        Start
      </Button>
    </div>
  );
}
