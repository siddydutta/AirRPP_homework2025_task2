# IT Salary Calculator

A modern React application that helps developers estimate their income potential based on programming language, location, and other factors. The calculator uses comprehensive survey data from over 30,000 developers across 180+ countries to provide accurate salary insights.

## Features

- 🌍 **Global Coverage**: Salary data from 180+ countries
- 💻 **Multiple Languages**: Support for various programming languages
- 📊 **Interactive Charts**: Visual salary distribution charts
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎨 **Modern UI**: Built with Tailwind CSS for a beautiful interface

## Tech Stack

- **React 19** - Modern React with TypeScript
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Create React App** - Development environment

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version 16.0 or higher)
- **npm** (usually comes with Node.js)

You can check if you have Node.js and npm installed by running:

```bash
node --version
npm --version
```

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd task-2
```

### 2. Install Dependencies

```bash
npm install
```

This will install all the necessary dependencies including React, TypeScript, Tailwind CSS, and other required packages.

### 3. Start the Development Server

```bash
npm start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000).

The page will automatically reload when you make changes to the code, and you'll see any lint errors in the console.

## Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. The build is optimized and minified for the best performance.

### `npm run eject`
⚠️ **Note: This is a one-way operation. Once you eject, you can't go back!**

Removes the single build dependency and copies all configuration files into your project.

## Project Structure

```
task-2/
├── public/
│   ├── index.html          # Main HTML template
│   ├── manifest.json       # Web app manifest
│   ├── robots.txt         # Search engine instructions
│   └── Spirital-03.png    # Logo/branding image
├── src/
│   ├── components/
│   │   ├── GradientCard.tsx    # Reusable card component
│   │   └── SalaryChart.tsx     # Salary visualization component
│   ├── constants/
│   │   ├── countries.ts        # List of supported countries
│   │   └── languages.ts        # List of programming languages
│   ├── App.tsx                 # Main application component
│   ├── index.tsx              # Application entry point
│   ├── index.css              # Global styles
│   └── calculatorData.json    # Salary data
├── package.json               # Project dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── README.md                 # This file
```

## How to Use

1. **Select Programming Language**: Choose from the dropdown list of supported programming languages
2. **Select Country**: Choose your country from the extensive list of supported locations
3. **View Results**: The application will display salary distribution charts and statistics based on your selections

## Data Source

The salary data is based on the Developer Ecosystem Survey 2024, which collected responses from over 30,000 developers across more than 180 countries. The data represents gross annual salaries in USD, including bonuses.

## Development

### Adding New Countries or Languages

- **Countries**: Edit `src/constants/countries.ts`
- **Languages**: Edit `src/constants/languages.ts`

### Styling

The project uses Tailwind CSS for styling. The main configuration is in `tailwind.config.js`.

### Components

- **GradientCard**: Reusable card component with gradient styling
- **SalaryChart**: Component for displaying salary distribution charts

## Building for Production

To create a production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## Deployment

The built files in the `build` folder can be deployed to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any web server

## Browser Support

This project supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.
