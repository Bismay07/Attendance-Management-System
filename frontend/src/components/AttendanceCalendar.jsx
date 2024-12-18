import React, { useState } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AttendanceCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // This would typically come from an API
  const attendanceDates = [
    new Date(2023, 4, 1),
    new Date(2023, 4, 3),
    new Date(2023, 4, 5),
    new Date(2023, 4, 8),
    new Date(2023, 4, 10),
    // ... more dates
  ];

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const isAttendanceDate = (date) => {
    return attendanceDates.some(attendanceDate => 
      attendanceDate.getDate() === date &&
      attendanceDate.getMonth() === currentDate.getMonth() &&
      attendanceDate.getFullYear() === currentDate.getFullYear()
    );
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="flex justify-between items-center mb-4">
        <Button onClick={prevMonth} variant="outline" size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-lg font-semibold">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <Button onClick={nextMonth} variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-medium text-sm py-1">
            {day}
          </div>
        ))}
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="text-center py-1"></div>
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const date = index + 1;
          const isAttendance = isAttendanceDate(date);
          return (
            <div
              key={date}
              className={`text-center py-1 text-sm ${
                isAttendance ? 'bg-green-500 text-white rounded-full' : ''
              }`}
            >
              {date}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AttendanceCalendar;

