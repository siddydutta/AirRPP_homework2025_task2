import React, { useState } from "react";
import Card from "./components/Card";
import Dropdown from "./components/Dropdown";
import SalaryChart from "./components/SalaryChart";
import { COUNTRIES } from "./constants/countries";
import { PROGRAMMING_LANGUAGES } from "./constants/programmingLanguages";

function App() {
  const [selectedCountry, setSelectedCountry] = useState<string>(COUNTRIES[0]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    PROGRAMMING_LANGUAGES[0]
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Image in top right */}
      <div className="absolute top-4 right-4">
        <img
          src="/Spirital-03.png"
          alt="Spirital"
          className="w-auto h-auto"
        />
      </div>

      {/* Main content with margins */}
      <div className="px-8 md:px-16 lg:px-24 pt-32">
        <div className="max-w-3xl">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            IT Salary Calculator
          </h1>

          {/* Description paragraph */}
          <p className="text-xl md:text-2xl leading-relaxed mb-8">
            Each year, our extensive surveys reach out to over 30,000 developers
            across over 180 countries, representing a diverse range of
            specialties. With data collected over multiple years, we are able to
            present a comprehensive analysis of tech trends using the
            methodology described here.
          </p>

          {/* Call to action paragraph */}
          <p className="text-2xl md:text-3xl leading-relaxed">
            Use our calculator to estimate your income potential based on
            software developer skills, programming language, location, and
            experience.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 px-8 md:px-16 lg:px-24 mt-12">
        <div className="md:w-1/3">
          <Card
            number="1"
            text="Enter your programming language, and country."
          >
            <div className="p-6 bg-[#19191C]">
              <Dropdown
                label="Programming Language"
                value={selectedLanguage}
                options={PROGRAMMING_LANGUAGES}
                onChange={setSelectedLanguage}
              />
              <Dropdown
                label="Country"
                value={selectedCountry}
                options={COUNTRIES}
                onChange={setSelectedCountry}
              />
            </div>
          </Card>
        </div>

        <div className="md:w-2/3">
          <Card
            number="2"
            text="Calculate the salary range based on your parameters."
          >
            <div className="p-6 bg-white text-black rounded-lg">
              {/* Top text */}
              <p className="text-lg mb-6">
                Coding specialists from <span className="text-[#6B57FF]">{selectedCountry}</span> who use{" "}
                <span className="text-[#6B57FF]">{selectedLanguage}</span> reported to have the following gross annual
                salaries (in USD including bonuses) in 2024.
              </p>

              {/* Chart component */}
              <div className="mb-6">
                <SalaryChart country={selectedCountry} language={selectedLanguage} />
              </div>

              {/* Bottom text */}
              <p className="text-sm mb-4">
                The graph shows salary distribution among users of the selected technology
                in the specified region, based on responses from Developer Ecosystem Survey 2024
              </p>

              {/* Info box */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="mr-2">ℹ</span>
                  <strong>Note:</strong> Experience levels refer to total years of professional
                  coding, not years using the selected technology.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
    );
}

export default App;