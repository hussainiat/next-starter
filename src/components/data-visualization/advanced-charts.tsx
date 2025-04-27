"use client"

import { useState } from 'react';
import { 
  BarChart, Bar, 
  LineChart, Line,
  AreaChart, Area,
  PieChart, Pie, Cell,
  ScatterChart, Scatter,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ComposedChart, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const monthlyData = [
  { name: 'Jan', value: 400, users: 240, revenue: 2400, conversion: 40 },
  { name: 'Feb', value: 300, users: 139, revenue: 1800, conversion: 30 },
  { name: 'Mar', value: 600, users: 380, revenue: 3600, conversion: 60 },
  { name: 'Apr', value: 800, users: 500, revenue: 4800, conversion: 80 },
  { name: 'May', value: 500, users: 320, revenue: 3000, conversion: 50 },
  { name: 'Jun', value: 900, users: 600, revenue: 5400, conversion: 90 },
  { name: 'Jul', value: 700, users: 450, revenue: 4200, conversion: 70 },
  { name: 'Aug', value: 850, users: 520, revenue: 5100, conversion: 85 },
];

const pieData = [
  { name: 'Desktop', value: 400 },
  { name: 'Mobile', value: 300 },
  { name: 'Tablet', value: 200 },
  { name: 'Other', value: 100 },
];

const scatterData = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const radarData = [
  {
    subject: 'Performance',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Reliability',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Usability',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Functionality',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Accessibility',
    A: 85,
    B: 90,
    fullMark: 150,
  },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

export function AdvancedDataVisualization() {
  const [chartType, setChartType] = useState('bar');
  const [dataType, setDataType] = useState('value');
  const [timeRange, setTimeRange] = useState('6m');

  // Filter data based on time range
  const filteredData = timeRange === '3m' 
    ? monthlyData.slice(0, 3) 
    : timeRange === '6m' 
      ? monthlyData.slice(0, 6) 
      : monthlyData;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Advanced Data Visualization</CardTitle>
        <CardDescription>
          Interactive charts with multiple visualization options and data filtering
        </CardDescription>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Tabs defaultValue="bar" value={chartType} onValueChange={setChartType} className="w-full">
            <TabsList className="grid grid-cols-6">
              <TabsTrigger value="bar">Bar</TabsTrigger>
              <TabsTrigger value="line">Line</TabsTrigger>
              <TabsTrigger value="area">Area</TabsTrigger>
              <TabsTrigger value="pie">Pie</TabsTrigger>
              <TabsTrigger value="scatter">Scatter</TabsTrigger>
              <TabsTrigger value="radar">Radar</TabsTrigger>
            </TabsList>
          </Tabs>
          
          {chartType !== 'pie' && chartType !== 'scatter' && chartType !== 'radar' && (
            <Tabs defaultValue="value" value={dataType} onValueChange={setDataType} className="w-full">
              <TabsList className="grid grid-cols-4">
                <TabsTrigger value="value">Visitors</TabsTrigger>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="revenue">Revenue</TabsTrigger>
                <TabsTrigger value="conversion">Conversion</TabsTrigger>
              </TabsList>
            </Tabs>
          )}
        </div>
        
        <div className="flex justify-end mt-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3m">Last 3 months</SelectItem>
              <SelectItem value="6m">Last 6 months</SelectItem>
              <SelectItem value="all">All time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === 'bar' && (
              <BarChart
                data={filteredData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                  }}
                />
                <Legend />
                <Bar dataKey={dataType} fill="var(--primary)" />
              </BarChart>
            )}
            
            {chartType === 'line' && (
              <LineChart
                data={filteredData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey={dataType} stroke="var(--primary)" activeDot={{ r: 8 }} />
              </LineChart>
            )}
            
            {chartType === 'area' && (
              <AreaChart
                data={filteredData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                  }}
                />
                <Legend />
                <Area type="monotone" dataKey={dataType} fill="var(--primary)" stroke="var(--primary)" />
              </AreaChart>
            )}
            
            {chartType === 'pie' && (
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                  }}
                />
                <Legend />
              </PieChart>
            )}
            
            {chartType === 'scatter' && (
              <ScatterChart
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                  }}
                  cursor={{ strokeDasharray: '3 3' }}
                />
                <Legend />
                <Scatter name="Data Points" data={scatterData} fill="var(--primary)" />
              </ScatterChart>
            )}
            
            {chartType === 'radar' && (
              <RadarChart cx="50%" cy="50%" outerRadius={150} data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Product A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Product B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                  }}
                />
              </RadarChart>
            )}
          </ResponsiveContainer>
        </div>
        
        <div className="mt-6 text-sm text-muted-foreground">
          <p>This component demonstrates advanced data visualization capabilities with multiple chart types, data filtering, and interactive elements.</p>
          <p className="mt-2">Use the tabs above to switch between different chart types and data metrics. The time range selector allows filtering data by different time periods.</p>
        </div>
      </CardContent>
    </Card>
  );
}