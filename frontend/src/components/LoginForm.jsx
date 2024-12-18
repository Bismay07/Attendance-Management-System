import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Icons } from "./ui/icons";

function LoginForm({ logedIn, setAttendanceData }) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8080/attendance/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        logedIn(true);
        // Fetch attendance data after successful login
        fetchAttendanceData();
      } else {
        logedIn(false);
      }
    } catch (err) {
      console.log(err);
      logedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAttendanceData = async () => {
    try {
      const attendanceInfo = await fetch("http://localhost:8080/attendance/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
  
      if (!attendanceInfo.ok) {
        throw new Error("Network response was not ok");
      }
  
      const result = await attendanceInfo.json();
      console.log("This is the result: ", result);
  
      // Check if result is an array and has data
      if (Array.isArray(result) && result.length > 0) {
        setAttendanceData(result);
      } else {
        console.error("Result is not a valid array or is empty");
        setAttendanceData([]); // Set to empty array if no valid data
      }
    } catch (error) {
      console.error("Error fetching attendance data: ", error);
      setAttendanceData([]); // Handle error by setting to empty array
    }
  };

  return (
    <Card>
      <form onSubmit={onSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              value={email}
              onChange={setEmail}
              id="email"
              type="email"
              placeholder="name@example.com"
              className="text-black"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              value={password}
              onChange={setPassword}
              id="password"
              type="password"
              className="text-black"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default LoginForm;