import React from "react";
import { observer } from "mobx-react";
import { useStore } from "../store";

const Home = observer((props) => {
  const store = useStore();

  return (
    <div>
      {!store.loggedIn ? props.history.push("/login") : null}
      Hello!
    </div>
  );
});

export default Home;
