import { useState } from "react";
import LoginPage from "./components/LoginPage";
import StudentDashboard from "./components/StudentDashboard";

function App() {
  const [isLogedIn, setIsLogdIn] = useState(false);
  const [attendanceData, setAttendanceData] = useState([]);

  return (
    <>
      {console.log("App.jsx ", attendanceData)}
      {!isLogedIn ? (
        <LoginPage
          setAttendanceData={setAttendanceData}
          logedIn={setIsLogdIn}
        />
      ) : (
        <StudentDashboard attendanceData={attendanceData} />
      )}
    </>
  );
}

export default App;
