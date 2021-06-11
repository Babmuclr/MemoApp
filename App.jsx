// import { StatusBar } from 'expo-status-bar';
// StatusBarはアプリのヘッダーを変更する
import React from 'react';

// import MemoDetailScreen from './src/screens/MemoDetailScreen';
// import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoListScreen from './src/screens/MemoListScreen';
// import LogInScreen from './src/screens/LogInScreen';
// import SignUpScreen from './src/screens/SignUpScreen';

export default function App() {
  return (
    <MemoListScreen />
    // <MemoDetailScreen />
    // <MemoEditScreen />
    // <LogInScreen />
    // <SignUpScreen />
  );
}
