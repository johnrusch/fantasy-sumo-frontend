import React from "react";
import { FirebaseDatabaseProvider } from "@react-firebase/database";

const Draft = () => {
  return (
    <FirebaseDatabaseProvider>
      <div>The Draft</div>
    </FirebaseDatabaseProvider>
  );
};

export default Draft;
