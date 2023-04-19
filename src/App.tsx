import { useState } from "react";
import TableUi from "./components/UserTable/UserTable";
import Profile from "./components/ProfileCard/ProfileCard";

function App() {
  return (
    <div className="container mx-auto flex justify-center items-center max-[1000px]:flex-col">
      <div className="flex min justify-center items-center max-[955px]:flex-col">
        <TableUi />
        <div className={`mt-8 w-[22rem] min-[950px]:ml-8`}>
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default App;
