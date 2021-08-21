import { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";

import Login from "./Pages/Login";
import { auth } from "./Firebase";
import SafeRoute from "./Component/SafeRoute";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="app">
      <Container style={{ display: `${loading ? "none" : "block"}` }}>
        {!loading && (
          <>
            {user === null && (
              <Route path="*">
                <Redirect to="/login" />
              </Route>
            )}
          </>
        )}
        {user ? (
          <SafeRoute user={user} />
        ) : (
          <Route path="/login">
            <Login user={user} />
          </Route>
        )}
      </Container>
    </div>
  );
}

export default App;
