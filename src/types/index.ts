export interface Investigation {
  id: string;
  name: string;
  location: string;
  timestamp: Date;
  status: 'active' | 'completed' | 'pending';
}

export interface SensorData {
  id: string;
  investigationId: string;
  type: 'EMF' | 'temperature' | 'audio' | 'quantum';
  reading: number;
  timestamp: Date;
}

export interface AnalysisResult {
  id: string;
  investigationId: string;
  type: string;
  confidence: number;
  details: Record<string, unknown>;
  timestamp: Date;
}

export interface UserData {
  id: string;
  name: string;
  role: 'investigator' | 'analyst' | 'admin';
  team: string;
}