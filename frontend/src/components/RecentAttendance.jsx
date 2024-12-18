import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

const RecentAttendance = () => {
  // This data would typically come from an API
  const recentAttendance = [
    { date: '2023-05-10', status: 'Present', subject: 'Mathematics' },
    { date: '2023-05-09', status: 'Absent', subject: 'Physics' },
    { date: '2023-05-08', status: 'Present', subject: 'Chemistry' },
    { date: '2023-05-07', status: 'Present', subject: 'Biology' },
    { date: '2023-05-06', status: 'Present', subject: 'English' },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Subject</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentAttendance.map((record, index) => (
          <TableRow key={index}>
            <TableCell>{record.date}</TableCell>
            <TableCell>{record.subject}</TableCell>
            <TableCell>{record.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RecentAttendance;

