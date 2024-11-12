import React, { createContext, useContext, useState, useCallback } from 'react';
import type { Investigation, SensorData, AnalysisResult, UserData } from '../types';

interface AppContextType {
  investigation: Investigation | null;
  sensorData: SensorData[];
  analysisResults: AnalysisResult[];
  user: UserData | null;
  setInvestigation: (investigation: Investigation) => void;
  addSensorData: (data: SensorData) => void;
  addAnalysisResult: (result: AnalysisResult) => void;
  setUser: (user: UserData) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [investigation, setInvestigation] = useState<Investigation | null>(null);
  const [sensorData, setSensorData] = useState<SensorData[]>([]);
  const [analysisResults, setAnalysisResults] = useState<AnalysisResult[]>([]);
  const [user, setUser] = useState<UserData | null>(null);

  const addSensorData = useCallback((data: SensorData) => {
    setSensorData(prev => [...prev, data]);
  }, []);

  const addAnalysisResult = useCallback((result: AnalysisResult) => {
    setAnalysisResults(prev => [...prev, result]);
  }, []);

  return (
    <AppContext.Provider
      value={{
        investigation,
        sensorData,
        analysisResults,
        user,
        setInvestigation,
        addSensorData,
        addAnalysisResult,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}