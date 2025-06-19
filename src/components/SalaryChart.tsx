import React, { useState, useMemo, useRef, useEffect } from "react";
import calculatorData from "../calculatorData.json";

interface SalaryChartProps {
  language: string;
  country: string;
}

interface DataEntry {
  value: number;
  category: string;
  metadata: {
    Country: string;
    Language: string;
    Experience: string;
    Salary: string;
  };
}

interface ChartData {
  entries: DataEntry[];
  yGroups: string[];
  xRangeGroups: number[][];
  xRange: string[];
}

const SalaryChart: React.FC<SalaryChartProps> = ({ language, country }) => {
  const [hoveredPoint, setHoveredPoint] = useState<DataEntry | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [containerDimensions, setContainerDimensions] = useState({
    width: 800,
    height: 400,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  // Update container dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        const height = Math.max(350, Math.min(400, width * 0.45)); // Responsive height
        setContainerDimensions({ width: Math.max(600, width - 48), height }); // Account for padding
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Color mapping for experience levels
  const experienceColors = {
    "16+ years": "#8B5CF6", // Purple
    "11–16 years": "#EC4899", // Pink
    "6–10 years": "#3B82F6", // Blue
    "3–5 years": "#6B7280", // Gray
    "1–2 years": "#F97316", // Orange
    "<1 year": "#8B5CF6", // Purple
  };

  // Get data for the selected country and language
  const chartData: ChartData | null = useMemo(() => {
    const countryData = (calculatorData as any)[country];
    if (!countryData) return null;
    return countryData[language] ?? null;
  }, [country, language]);

  // Process data to group by experience level
  const groupedData = useMemo(() => {
    if (!chartData?.entries?.length) return {};
    const groups: { [key: string]: DataEntry[] } = {};
    chartData.entries.forEach((entry) => {
      if (!groups[entry.category]) {
        groups[entry.category] = [];
      }
      groups[entry.category].push(entry);
    });
    return groups;
  }, [chartData]);

  // Chart dimensions and margins - make responsive
  const chartWidth = containerDimensions.width;
  const chartHeight = containerDimensions.height;
  const margin = {
    top: 20,
    right: Math.max(120, chartWidth * 0.15),
    bottom: 50,
    left: 60,
  };
  const plotWidth = chartWidth - margin.left - margin.right;
  const plotHeight = chartHeight - margin.top - margin.bottom;

  if (!chartData?.entries?.length) {
    return (
      <div className="w-full h-96 bg-white rounded-lg flex items-center justify-center border">
        <p className="text-gray-500 text-center">
          No salary data available for {language} developers in {country}
        </p>
      </div>
    );
  }

  // Calculate scales
  const maxSalary = Math.max(...chartData.entries.map((d) => d.value));
  const xScale = (value: number) => (value / maxSalary) * plotWidth;

  // Y-axis positions for experience levels
  const yPositions = chartData.yGroups.reduce((acc, group, index) => {
    acc[group] = (index / (chartData.yGroups.length - 1)) * plotHeight;
    return acc;
  }, {} as { [key: string]: number });

  // Generate x-axis labels (salary ranges) using xRange from data
  const xAxisLabels = chartData.xRange || [];

  const handleMouseMove = (event: React.MouseEvent, entry: DataEntry) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setHoveredPoint(entry);
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredPoint(null);
  };

  return (
    <div ref={containerRef} className="w-full bg-white rounded-lg border p-6">
      <div className="relative w-full overflow-hidden">
        <svg
          width="100%"
          height={chartHeight}
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className="w-full h-auto"
        >
          {/* Grid lines - only for x and y axis labels */}
          {/* Vertical grid lines for x-axis labels */}
          {xAxisLabels.map((label, index) => {
            const x =
              margin.left + (index / (xAxisLabels.length - 1)) * plotWidth;
            return (
              <line
                key={`vgrid-${label}`}
                x1={x}
                y1={margin.top}
                x2={x}
                y2={margin.top + plotHeight}
                stroke="#f0f0f0"
                strokeWidth="1"
              />
            );
          })}

          {/* Horizontal grid lines for y-axis labels */}
          {chartData.yGroups.map((group) => {
            const y = margin.top + plotHeight - yPositions[group];
            return (
              <line
                key={`hgrid-${group}`}
                x1={margin.left}
                y1={y}
                x2={margin.left + plotWidth}
                y2={y}
                stroke="#f0f0f0"
                strokeWidth="1"
              />
            );
          })}

          {/* X-axis */}
          <line
            x1={margin.left}
            y1={margin.top + plotHeight}
            x2={margin.left + plotWidth}
            y2={margin.top + plotHeight}
            stroke="#d1d5db"
            strokeWidth="1"
          />

          {/* Y-axis */}
          <line
            x1={margin.left}
            y1={margin.top}
            x2={margin.left}
            y2={margin.top + plotHeight}
            stroke="#d1d5db"
            strokeWidth="1"
          />

          {/* X-axis labels */}
          {xAxisLabels.map((label, index) => {
            const x =
              margin.left + (index / (xAxisLabels.length - 1)) * plotWidth;
            return (
              <text
                key={label}
                x={x}
                y={margin.top + plotHeight + 20}
                textAnchor="middle"
                className="text-xs fill-gray-600"
              >
                {label}
              </text>
            );
          })}

          {/* Y-axis labels */}
          {chartData.yGroups.map((group) => {
            const y = margin.top + plotHeight - yPositions[group];
            return (
              <text
                key={group}
                x={margin.left + plotWidth + 20}
                y={y + 4}
                className="text-sm fill-gray-800"
                textAnchor="start"
              >
                {group}
              </text>
            );
          })}

          {/* Data lines and points */}
          {Object.entries(groupedData).map(([experience, entries]) => {
            const color =
              experienceColors[experience as keyof typeof experienceColors] ??
              "#6B7280";
            const y = margin.top + plotHeight - yPositions[experience];

            // Sort entries by salary value for line drawing
            const sortedEntries = [...entries].sort(
              (a, b) => a.value - b.value
            );

            return (
              <g key={experience}>
                {/* Draw line connecting points */}
                {sortedEntries.length > 1 && (
                  <path
                    d={sortedEntries
                      .map((entry, index) => {
                        const x = margin.left + xScale(entry.value);
                        return `${index === 0 ? "M" : "L"} ${x} ${y}`;
                      })
                      .join(" ")}
                    stroke={color}
                    strokeWidth="2"
                    fill="none"
                  />
                )}

                {/* Draw data points */}
                {entries.map((entry, index) => {
                  const x = margin.left + xScale(entry.value);
                  return (
                    <circle
                      key={`${experience}-${index}`}
                      cx={x}
                      cy={y}
                      r="6"
                      fill={color}
                      stroke="white"
                      strokeWidth="2"
                      className="cursor-pointer hover:r-8 transition-all"
                      onMouseMove={(e) => handleMouseMove(e, entry)}
                      onMouseLeave={handleMouseLeave}
                    />
                  );
                })}
              </g>
            );
          })}
        </svg>

        {/* Tooltip */}
        {hoveredPoint && (
          <div
            className="absolute bg-gray-900 text-white p-4 rounded-lg shadow-xl pointer-events-none text-sm min-w-[200px] border border-gray-700"
            style={{
              left: mousePosition.x + 10,
              top: mousePosition.y - 100,
              zIndex: 999,
            }}
          >
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Country:</span>
                <span className="font-semibold text-white">
                  {hoveredPoint.metadata.Country}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Language:</span>
                <span className="font-semibold text-white">
                  {hoveredPoint.metadata.Language}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Experience:</span>
                <span className="font-semibold text-white">
                  {hoveredPoint.metadata.Experience}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Salary:</span>
                <span className="font-bold text-white text-base">
                  {hoveredPoint.metadata.Salary}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalaryChart;
