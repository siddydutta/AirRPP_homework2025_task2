# Salary Data Visualization App

A React application that visualizes programming salary data by country and programming language. Built with React, TypeScript, Tailwind CSS, and Chart.js.

## Tech Stack

- **React** 19.1.0 - Frontend framework
- **TypeScript** 4.9.5 - Type safety
- **Tailwind CSS** 3.4.17 - Utility-first styling
- **Chart.js** 4.5.0 + react-chartjs-2 5.3.0 - Data visualization
- **Create React App** 5.0.1 - Build tooling

## Prerequisites

Before running this project, ensure you have:

- **Node.js** (v16 or higher recommended)
- **npm** (v7 or higher recommended)

## Installation & Setup

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd task-2
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Address security vulnerabilities** (optional but recommended):
   ```bash
   npm audit fix
   ```
   > Note: There are currently 9 vulnerabilities (3 moderate, 6 high). Run `npm audit` for details.

## Available Scripts

In the project directory, you can run:

### `npm start` - Development Mode

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test` - Run Tests

Launches the test runner in the interactive watch mode.\
Uses Jest and React Testing Library for testing components.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` - Production Build

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Project Structure

```
src/
├── components/
│   ├── Card.tsx          # Reusable card component
│   ├── Dropdown.tsx      # Country/language selection
│   └── SalaryChart.tsx   # Chart visualization
├── constants/
│   ├── countries.ts      # Available countries
│   └── programmingLanguages.ts  # Programming languages
├── calculatorData.json   # Salary data (4.9MB)
├── App.tsx              # Main application component
├── index.tsx            # React entry point
└── index.css            # Tailwind CSS imports
```

## Features

- 📊 Interactive salary data visualization
- 🌍 Filter by country
- 💻 Filter by programming language
- 📱 Responsive design with Tailwind CSS
- 🎨 Modern dark theme UI
- ⚡ Fast performance with React 19

## Tailwind CSS Configuration

The project includes a pre-configured Tailwind setup:
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Tailwind directives imported
- Utility classes available throughout the app

## Troubleshooting

### Common Issues

1. **Dependencies not installed**: Run `npm install`
2. **Port 3000 already in use**: The app will prompt to use a different port
3. **Build failures**: Ensure all dependencies are properly installed
4. **Security warnings**: Run `npm audit fix` to address vulnerabilities

### System Requirements

- Node.js 16+ (tested with v24.1.0)
- npm 7+ (tested with v11.3.0)
- Modern web browser with ES6+ support

## Contributing

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

For more information about Create React App features and configuration, see the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## License

This project is private and not intended for public distribution.
