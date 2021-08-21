import React, { useEffect, useState } from "react";
import { Button, Table, TableHead, TextField } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { insertActivity, getActivities } from "../Utils/dbUtils";

import firebase from "firebase";
import DateConv from "../Component/DateConv";

const Activity = ({ uid }) => {
  const [activityName, setActivityName] = useState();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [activities, setActivities] = useState(null);

  useEffect(() => {
    const unsubscribe = getActivities(uid).then(async (result) => {
      setActivities(result);
    });

    return () => unsubscribe;
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await insertActivity(
      {
        activityName: activityName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      },
      uid
    );

    setMessage(result);
    setLoading(false);
    setActivityName("");
    getActivities(uid).then((result) => setActivities(result));
  };

  return (
    <div className="activity">
      {message && <div className="alert">{message}</div>}
      <form className="activity-form" onSubmit={submitHandler}>
        <TextField
          className="activity-input"
          label="Enter Activity Name"
          variant="outlined"
          onChange={(e) => setActivityName(e.target.value)}
          value={activityName}
          disabled={loading}
        />
        <Button
          type="submit"
          className="activity-btn"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          Submit
        </Button>
      </form>

      <div className="activity-table-parent">
        <Table className="activity-table">
          <TableHead style={{ backgroundColor: "#ffd6d6" }}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Activity Name</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activities &&
              activities.map((el, i) => (
                <TableRow key={i}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{el.activityName}</TableCell>
                  <TableCell>
                    <DateConv seconds={el.timestamp.seconds} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Activity;
