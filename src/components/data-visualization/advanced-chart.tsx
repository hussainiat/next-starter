"use client"

import { useState } from 'react';
import { 
  BarChart, Bar, 
  LineChart, Line,
  AreaChart, Area,
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const monthlyData = [
  { name: 'Jan', value: 400, users: 240, revenue: 2400 },
  { name: 'Feb', value: 300, users: 139, revenue: 1800 },
  { name: 'Mar', value: 600, users: 380, revenue: 3600 },
  { name: 'Apr', value: 800, users: 500, revenue: 4800 },
  { name: 'May', value: 500, users: 320, revenue: 3000 },
  { name: 'Jun', value: 900, users: 600, revenue: 5400 },
];

const pieData = [
  { name: 'Desktop', value: 400 },
  { name: 'Mobile', value: 300 },
  { name: 'Tablet', value: 200 },
  { name: 'Other', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export function AdvancedChart() {
  const [chartType, setChartType] = useState('bar');
  const [dataType, setDataType] = useState('value');

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Advanced Data Visualization</CardTitle>
        <CardDescription>
          Interactive charts with multiple visualization options
        </CardDescription>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Tabs defaultValue="bar" value={chartType} onValueChange={setChartType} className="w-full">
            <TabsList className="grid grid-cols-4">
              <TabsTrigger value="bar">Bar</TabsTrigger>
              <TabsTrigger value="line">Line</TabsTrigger>
              <TabsTrigger value="area">Area</TabsTrigger>
              <TabsTrigger value="pie">Pie</TabsTrigger>
            </TabsList>
          </Tabs>
          
          {chartType !== 'pie' && (
            <Tabs defaultValue="value" value={dataType} onValueChange={setDataType} className="w-full">
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="value">Visitors</TabsTrigger>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="revenue">Revenue</TabsTrigger>
              </TabsList>
            </Tabs>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === 'bar' && (
              <BarChart
                data={monthlyData}
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
                data={monthlyData}
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
                data={monthlyData}
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
                  outerRadius={120}
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
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}