import { Divider, List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Npm from "../Component/Docs/npm";

const options = [
  { text: "cd commands", link: "#cd" },
  { text: "npm commands", link: "#npm" },
  { text: "git commands", link: "#git" },
];

const Docs = () => {
  return (
    <div className="docs_parent">
      <div className="docs_left">
        <List component="nav" aria-label="mailbox folders">
          {options.map((el, i) => (
            <div key={i}>
              <ListItem button>
                <Link to={el.link}>
                  <ListItemText primary={el.text} />
                </Link>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </div>
      <div className="docs_right">
        <Npm />
      </div>
    </div>
  );
};

export default Docs;
