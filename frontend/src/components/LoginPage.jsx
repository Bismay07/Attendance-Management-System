import React from 'react';
import LoginForm from './LoginForm';
import { NotepadText } from 'lucide-react';


function LoginPage({ logedIn, setAttendanceData }) {

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-800 px-4 py-5 rounded-3xl shadow-xl">
        <div className="text-center flex flex-col items-center">
          <NotepadText size={150} color='white'/>
          <h2 className="mt-6 text-3xl font-extrabold text-white">
            Attendance Management System
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <LoginForm setAttendanceData={setAttendanceData} logedIn={logedIn}/>
      </div>
    </div>
  );
}

export default LoginPage;

