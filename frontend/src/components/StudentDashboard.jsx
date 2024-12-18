import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Clock, UserCheck, UserX } from "lucide-react";
import AttendanceCalendar from "./AttendanceCalendar";
import RecentAttendance from "./RecentAttendance";
import { Calendar } from "lucide-react";

const StudentDashboard = ({ attendanceData }) => {
  // Check if attendanceData is empty
  if (!attendanceData || attendanceData.length === 0) {
    return (
      <div className="min-h-screen mx-auto px-4 py-8 bg-gray-950">
        <h1 className="text-3xl font-bold mb-8 text-white">
          No attendance data available.
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen mx-auto px-4 py-8 bg-gray-950">
      <h1 className="text-xl font-bold mb-8 text-white text-center">
        Welcome, {attendanceData[0].name}
      </h1>
      <div className="flex-col mb-8">
        {attendanceData.map((info) => (
          <div className="border border-slate-700 rounded-3xl px-5 py-3 mb-8">
            <h2 className="text-white text-5xl">{info.subjectName}</h2>
            <div className="flex justify-evenly">
              <Card key={info.subjectName} className="w-80">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Classes
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-white" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{info.totalClasses}</div>
                </CardContent>
              </Card>
              <Card key={info.subjectName} className="w-80">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Attended Classes
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-white" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {info.attendedClasses}
                  </div>
                </CardContent>
              </Card>
              <Card key={info.subjectName} className="w-80">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Classes Missed
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-white" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {info.totalClasses - info.attendedClasses}
                  </div>
                </CardContent>
              </Card>
              <Card key={info.subjectName} className="w-80">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Attendance Percentage
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-white" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {((info.attendedClasses / info.totalClasses) * 100).toFixed(
                      2
                    )}
                    %
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Attendance Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <AttendanceCalendar />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentAttendance />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;
