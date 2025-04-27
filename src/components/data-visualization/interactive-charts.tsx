"use client"

import { useState } from 'react';
import { 
  BarChart, Bar, 
  LineChart, Line,
  AreaChart, Area, Cell,
  ScatterChart, Scatter,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  Treemap, ResponsiveContainer,
  XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, 
  Brush, ReferenceLine
} from 'recharts';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

// Sample data for various chart types
const monthlyData = [
  { name: 'Jan', visitors: 4000, users: 2400, revenue: 2400, conversion: 40 },
  { name: 'Feb', visitors: 3000, users: 1398, revenue: 2210, conversion: 30 },
  { name: 'Mar', visitors: 2000, users: 9800, revenue: 2290, conversion: 20 },
  { name: 'Apr', visitors: 2780, users: 3908, revenue: 2000, conversion: 27.8 },
  { name: 'May', visitors: 1890, users: 4800, revenue: 2181, conversion: 18.9 },
  { name: 'Jun', visitors: 2390, users: 3800, revenue: 2500, conversion: 23.9 },
  { name: 'Jul', visitors: 3490, users: 4300, revenue: 2100, conversion: 34.9 },
  { name: 'Aug', visitors: 4000, users: 2400, revenue: 2400, conversion: 40 },
  { name: 'Sep', visitors: 3000, users: 1398, revenue: 2210, conversion: 30 },
  { name: 'Oct', visitors: 2000, users: 9800, revenue: 2290, conversion: 20 },
  { name: 'Nov', visitors: 2780, users: 3908, revenue: 2000, conversion: 27.8 },
  { name: 'Dec', visitors: 1890, users: 4800, revenue: 2181, conversion: 18.9 },
];

const scatterData = [
  { x: 100, y: 200, z: 200, name: 'Product A' },
  { x: 120, y: 100, z: 260, name: 'Product B' },
  { x: 170, y: 300, z: 400, name: 'Product C' },
  { x: 140, y: 250, z: 280, name: 'Product D' },
  { x: 150, y: 400, z: 500, name: 'Product E' },
  { x: 110, y: 280, z: 200, name: 'Product F' },
  { x: 125, y: 220, z: 310, name: 'Product G' },
  { x: 180, y: 260, z: 420, name: 'Product H' },
  { x: 165, y: 350, z: 380, name: 'Product I' },
  { x: 130, y: 310, z: 250, name: 'Product J' },
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
  {
    subject: 'Maintainability',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const treemapData = [
  {
    name: 'Products',
    children: [
      { name: 'Electronics', size: 1300 },
      { name: 'Clothing', size: 900 },
      { name: 'Home & Kitchen', size: 700 },
      { name: 'Books', size: 500 },
      { name: 'Sports', size: 400 },
      { name: 'Beauty', size: 300 },
      { name: 'Toys', size: 200 },
      { name: 'Automotive', size: 150 },
      { name: 'Health', size: 250 },
      { name: 'Grocery', size: 350 },
    ],
  },
];

const COLORS = [
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D',
  '#FF6B6B', '#4ECDC4', '#C7F464', '#6A0572', '#AB83A1', '#F15BB5'
];

export function InteractiveCharts() {
  const [chartType, setChartType] = useState('bar');
  const [dataType, setDataType] = useState('visitors');
  const [timeRange, setTimeRange] = useState([0, 11]); // 0-11 for all months
  const [showBrush, setShowBrush] = useState(false);
  const [showReferenceLine, setShowReferenceLine] = useState(false);
  const [referenceValue, setReferenceValue] = useState(3000);
  const [animationActive, setAnimationActive] = useState(true);
  
  // Filter data based on time range
  const filteredData = monthlyData.slice(timeRange[0], timeRange[1] + 1);

  // Custom tooltip styles
  const customTooltipStyle = {
    backgroundColor: 'var(--background)',
    borderColor: 'var(--border)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '6px',
    padding: '8px 12px',
    color: 'var(--foreground)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  };

  // Custom tooltip formatter
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={customTooltipStyle}>
          <p className="font-medium">{`${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={`item-${index}`} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value.toLocaleString()}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Interactive Data Visualization</CardTitle>
        <CardDescription>
          Advanced interactive charts with customizable options and filters
        </CardDescription>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Tabs defaultValue="bar" value={chartType} onValueChange={setChartType} className="w-full">
              <TabsList className="grid grid-cols-5">
                <TabsTrigger value="bar">Bar</TabsTrigger>
                <TabsTrigger value="line">Line</TabsTrigger>
                <TabsTrigger value="area">Area</TabsTrigger>
                <TabsTrigger value="scatter">Scatter</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
              </TabsList>
            </Tabs>
            
            {['bar', 'line', 'area'].includes(chartType) && (
              <Select value={dataType} onValueChange={setDataType}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Select data" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="visitors">Visitors</SelectItem>
                  <SelectItem value="users">Users</SelectItem>
                  <SelectItem value="revenue">Revenue</SelectItem>
                  <SelectItem value="conversion">Conversion</SelectItem>
                </SelectContent>
              </Select>
            )}
          </div>
          
          {['bar', 'line', 'area'].includes(chartType) && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Time Range: {monthlyData[timeRange[0]].name} - {monthlyData[timeRange[1]].name}</Label>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="show-brush" className="text-sm">Show Brush</Label>
                  <Switch id="show-brush" checked={showBrush} onCheckedChange={setShowBrush} />
                </div>
              </div>
              <Slider
                defaultValue={[0, 11]}
                value={timeRange}
                onValueChange={setTimeRange as any}
                max={11}
                step={1}
                className="w-full"
              />
            </div>
          )}
          
          {['line', 'area'].includes(chartType) && (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Label htmlFor="show-reference" className="text-sm">Reference Line</Label>
                <Switch id="show-reference" checked={showReferenceLine} onCheckedChange={setShowReferenceLine} />
              </div>
              {showReferenceLine && (
                <div className="flex items-center space-x-2">
                  <Label className="text-sm">Value: {referenceValue}</Label>
                  <Slider
                    defaultValue={[3000]}
                    value={[referenceValue]}
                    onValueChange={(value) => setReferenceValue(value[0])}
                    min={0}
                    max={10000}
                    step={100}
                    className="w-[150px]"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === 'bar' && (
              <BarChart
                data={filteredData}
                margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend verticalAlign="top" height={36} />
                <Bar 
                  dataKey={dataType} 
                  fill="var(--primary)" 
                  animationDuration={animationActive ? 1500 : 0}
                />
                {showBrush && (
                  <Brush 
                    dataKey="name" 
                    height={30} 
                    stroke="var(--primary)" 
                    y={320}
                  />
                )}
              </BarChart>
            )}
            
            {chartType === 'line' && (
              <LineChart
                data={filteredData}
                margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend verticalAlign="top" height={36} />
                <Line 
                  type="monotone" 
                  dataKey={dataType} 
                  stroke="var(--primary)" 
                  activeDot={{ r: 8 }}
                  animationDuration={animationActive ? 1500 : 0}
                />
                {showReferenceLine && (
                  <ReferenceLine 
                    y={referenceValue} 
                    label={`Target: ${referenceValue}`} 
                    stroke="red" 
                    strokeDasharray="3 3" 
                  />
                )}
                {showBrush && (
                  <Brush 
                    dataKey="name" 
                    height={30} 
                    stroke="var(--primary)" 
                    y={320}
                  />
                )}
              </LineChart>
            )}
            
            {chartType === 'area' && (
              <AreaChart
                data={filteredData}
                margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend verticalAlign="top" height={36} />
                <Area 
                  type="monotone" 
                  dataKey={dataType} 
                  stroke="var(--primary)" 
                  fill="var(--primary)" 
                  fillOpacity={0.3}
                  animationDuration={animationActive ? 1500 : 0}
                />
                {showReferenceLine && (
                  <ReferenceLine 
                    y={referenceValue} 
                    label={`Target: ${referenceValue}`} 
                    stroke="red" 
                    strokeDasharray="3 3" 
                  />
                )}
                {showBrush && (
                  <Brush 
                    dataKey="name" 
                    height={30} 
                    stroke="var(--primary)" 
                    y={320}
                  />
                )}
              </AreaChart>
            )}
            
            {chartType === 'scatter' && (
              <ScatterChart
                margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" dataKey="x" name="Price" unit="$" />
                <YAxis type="number" dataKey="y" name="Rating" unit="/500" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
                <Legend verticalAlign="top" height={36} />
                <Scatter 
                  name="Products" 
                  data={scatterData} 
                  fill="var(--primary)"
                  animationDuration={animationActive ? 1500 : 0}
                >
                  {scatterData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Scatter>
              </ScatterChart>
            )}
            
            {chartType === 'advanced' && (
              <Tabs defaultValue="radar" className="w-full">
                <TabsList className="grid grid-cols-2 mb-4">
                  <TabsTrigger value="radar">Radar Chart</TabsTrigger>
                  <TabsTrigger value="treemap">Treemap</TabsTrigger>
                </TabsList>
                <TabsContent value="radar" className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 150]} />
                      <Radar 
                        name="Product A" 
                        dataKey="A" 
                        stroke="#8884d8" 
                        fill="#8884d8" 
                        fillOpacity={0.6}
                        animationDuration={animationActive ? 1500 : 0}
                      />
                      <Radar 
                        name="Product B" 
                        dataKey="B" 
                        stroke="#82ca9d" 
                        fill="#82ca9d" 
                        fillOpacity={0.6}
                        animationDuration={animationActive ? 1500 : 0}
                      />
                      <Legend />
                    </RadarChart>
                  </ResponsiveContainer>
                </TabsContent>
                <TabsContent value="treemap" className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <Treemap
                      data={treemapData}
                      dataKey="size"
                      ratio={4/3}
                      stroke="#fff"
                      fill="var(--primary)"
                      animationDuration={animationActive ? 1500 : 0}
                      content={({ root, depth, x, y, width, height, index, payload, colors, rank, name }) => {
                        return (
                          <g>
                            <rect
                              x={x}
                              y={y}
                              width={width}
                              height={height}
                              style={{
                                fill: depth < 2 ? COLORS[index % COLORS.length] : 'none',
                                stroke: '#fff',
                                strokeWidth: 2 / (depth + 1e-10),
                                strokeOpacity: 1 / (depth + 1e-10),
                              }}
                            />
                            {depth === 1 && (
                              <text
                                x={x + width / 2}
                                y={y + height / 2 + 7}
                                textAnchor="middle"
                                fill="#fff"
                                fontSize={14}
                              >
                                {name}
                              </text>
                            )}
                          </g>
                        );
                      }}
                    />
                  </ResponsiveContainer>
                </TabsContent>
              </Tabs>
            )}
          </ResponsiveContainer>
        </div>
        
        <div className="flex items-center justify-end mt-4 space-x-2">
          <Label htmlFor="animation-toggle" className="text-sm">Animation</Label>
          <Switch id="animation-toggle" checked={animationActive} onCheckedChange={setAnimationActive} />
          
          <Button 
            variant="outline" 
            size="sm" 
            className="ml-4"
            onClick={() => {
              setTimeRange([0, 11]);
              setShowBrush(false);
              setShowReferenceLine(false);
              setReferenceValue(3000);
            }}
          >
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}