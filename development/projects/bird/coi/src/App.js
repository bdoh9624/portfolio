import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
 
const App = () => {

  const [value, setValue] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setValue((v) => (v >= 100 ? 0 : v + 10));
      }, 500);

      return () => clearInterval(interval);
    }, []);
 
    return (
        <div
            style={{
                marginLeft: "40%",
            }}
        >
            <CircularProgress
      aria-label="Loading..."
      size="lg"
      value={value}
      color="warning"
      showValueLabel={true}
    />
        </div>
    );
};
 
export default App;
