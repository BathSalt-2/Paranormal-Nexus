import React from 'react';
import MonitoringPanel from '../components/MonitoringPanel';
import EventLog from '../components/events/EventLog';
import MetricsGrid from '../components/metrics/MetricsGrid';
import AnalysisPanel from '../components/analysis/AnalysisPanel';
import { useApp } from '../context/AppContext';

export default function Dashboard() {
  const { investigation } = useApp();

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">
          {investigation ? investigation.name : 'Dashboard'}
        </h1>
        {investigation && (
          <span className="text-sm text-gray-500">
            Location: {investigation.location}
          </span>
        )}
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MonitoringPanel />
        <MetricsGrid />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EventLog />
        <AnalysisPanel />
      </div>
    </div>
  );
}