import React, { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import calculatorData from '../calculatorData.json';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface SalaryChartProps {
  country: string;
  language: string;
}

interface SalaryEntry {
  value: number;
  category: string;
  metadata: {
    Country: string;
    Language: string;
    Experience: string;
    Salary: string;
  };
}

const SalaryChart: React.FC<SalaryChartProps> = ({ country, language }) => {
  const chartData = useMemo(() => {
    // Get data for the selected country and language
    const countryData = calculatorData[country as keyof typeof calculatorData];
    if (!countryData) return null;

    const languageData = countryData[language as keyof typeof countryData] as { entries: SalaryEntry[] };
    if (!languageData) return null;

    // Experience levels and their corresponding y-axis positions
    const experienceOrder = ['<1 year', '1–2 years', '3–5 years', '6–10 years', '11–16 years', '16+ years'];
    const experienceColors = ['#8B5CF6', '#FB923C', '#6B7280', '#3B82F6', '#EC4899', '#8B5CF6']; // purple, orange, gray, blue, pink, purple

    // Group data by experience level
    const experienceGroups: { [key: string]: SalaryEntry[] } = {};
    languageData.entries.forEach((entry: SalaryEntry) => {
      if (!experienceGroups[entry.category]) {
        experienceGroups[entry.category] = [];
      }
      experienceGroups[entry.category].push(entry);
    });

    // Create datasets for each experience level
    const datasets = experienceOrder
      .filter(exp => experienceGroups[exp])
      .map((exp, index) => {
        const entries = experienceGroups[exp];
        const color = experienceColors[index];

        // Create scatter points - align to exact y-axis grid line
        const scatterData = entries.map(entry => ({
          x: entry.value,
          y: index, // This aligns points to the grid line
          metadata: entry.metadata
        }));

        return {
          label: exp,
          data: scatterData,
          backgroundColor: color,
          borderColor: color,
          pointRadius: 6,
          pointHoverRadius: 8,
          showLine: false,
        };
      });

    // Create horizontal line datasets for each experience level
    const horizontalLines = experienceOrder
      .filter(exp => experienceGroups[exp])
      .map((exp, index) => {
        const entries = experienceGroups[exp];
        const color = experienceColors[index];
        const salaries = entries.map(e => e.value).sort((a, b) => a - b);

        // Get min and max salary for this experience level
        const minSalary = Math.min(...salaries);
        const maxSalary = Math.max(...salaries);

        return {
          label: `${exp} Line`,
          data: [
            { x: minSalary, y: index },
            { x: maxSalary, y: index }
          ],
          backgroundColor: 'transparent',
          borderColor: color,
          borderWidth: 2,
          borderDash: [],
          pointRadius: 0,
          showLine: true,
          tension: 0,
          fill: false,
        };
      });

    return {
      datasets: [
        ...datasets,
        ...horizontalLines
      ]
    };
  }, [country, language]);

  if (!chartData) {
    return (
      <div className="w-full h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
        <div className="text-center text-gray-600">
          <div className="text-lg font-semibold mb-2">No Data Available</div>
          <div className="text-sm">
            No salary data found for {language} developers in {country}
          </div>
        </div>
      </div>
    );
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        filter: (tooltipItem: any) => {
          // Only show tooltips for data points, not horizontal lines
          return !tooltipItem.dataset.label.includes('Line');
        },
        callbacks: {
          title: () => '',
          label: (context: TooltipItem<'scatter'>) => {
            const point = context.raw as any;
            if (point.metadata) {
              return [
                `Country: ${point.metadata.Country}`,
                `Language: ${point.metadata.Language}`,
                `Experience: ${point.metadata.Experience}`,
                `Salary: ${point.metadata.Salary}`
              ];
            }
            return '';
          }
        },
        displayColors: false
      }
    },
    scales: {
      x: {
        type: 'linear' as const,
        position: 'bottom' as const,
        min: 0,
        max: 300,
        ticks: {
          stepSize: 25,
          callback: (value: any) => `${value}k`
        },
        grid: {
          display: true,
          color: '#E5E7EB'
        },
        title: {
          display: false,
          text: 'Salary (USD in thousands)'
        }
      },
      y: {
        type: 'linear' as const,
        position: 'right' as const,
        min: -0.5,
        max: 5.5,
        ticks: {
          stepSize: 1,
          callback: (value: any) => {
            const labels = ['<1 year', '1-2 years', '3-5 years', '6-10 years', '11-16 years', '16+ years'];
            return labels[Math.round(value)] || '';
          }
        },
        grid: {
          display: true,
          color: '#E5E7EB',
          drawOnChartArea: true,
          drawTicks: true
        },
        title: {
          display: false,
          text: 'Experience Level'
        }
      }
    },
    interaction: {
      intersect: false
    }
  };

  return (
    <div className="w-full">

      <div className="h-96 w-full">
        <Scatter data={chartData} options={options} />
      </div>
    </div>
  );
};

export default SalaryChart;