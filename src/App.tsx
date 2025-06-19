import { useState } from "react";
import GradientCard from "./components/GradientCard";
import SalaryChart from "./components/SalaryChart";
import { COUNTRIES } from "./constants/countries";
import { PROGRAMMING_LANGUAGES } from "./constants/languages";

function App() {
  const [programmingLanguage, setProgrammingLanguage] = useState<string>(
    PROGRAMMING_LANGUAGES[0]
  );
  const [country, setCountry] = useState<string>(COUNTRIES[0]);

  return (
    <div className="min-h-screen bg-dark text-white pb-8">
      <img
        src="/Spirital-03.png"
        alt="Spirital Design"
        className="absolute top-0 right-0 w-auto h-auto max-w-2xl object-contain"
      />
      <div className="max-w-5xl mx-auto px-8 pt-32">
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          IT Salary Calculator
        </h1>

        <div className="mb-6 text-lg leading-relaxed opacity-90 max-w-2xl">
          <p className="mb-4">
            Each year, our extensive surveys reach out to over 30,000 developers
            across over 180 countries, representing a diverse range of
            specialties. With data collected over multiple years, we are able to
            present a comprehensive analysis of tech trends using the
            methodology described{" "}
            <span className="underline cursor-pointer">here</span>.
          </p>
        </div>

        <p className="text-2xl leading-relaxed max-w-2xl">
          Use our calculator to estimate your income potential based on software
          developer skills, programming language, location, and experience.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <GradientCard
          number="1"
          headerContent="Enter your programming language, and country."
          className="lg:col-span-1"
        >
          <div className="bg-[#19191C] ">
            <div className="bg-[#19191C] rounded-lg p-6 space-y-4">
              <div>
                <label
                  htmlFor="programming-language"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Programming Language
                </label>
                <select
                  id="programming-language"
                  value={programmingLanguage}
                  onChange={(e) => setProgrammingLanguage(e.target.value)}
                  className="w-full bg-[#303033] border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a language</option>
                  {PROGRAMMING_LANGUAGES.map((language) => (
                    <option key={language} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Country
                </label>
                <select
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full bg-[#303033] border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a country</option>
                  {COUNTRIES.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </GradientCard>

        <GradientCard
          number="2"
          headerContent="Calculate the salary range based on your parameters."
          className="md:col-span-2"
        >
          <div className="p-6 space-y-6">
            {programmingLanguage && country ? (
              <>
                <div className="space-y-2">
                  <h3 className="text-lg lg:text-xl text-black font-light">
                    Coding specialists from{" "}
                    <span className="text-[#6B57FF]">{country}</span> who use{" "}
                    <span className="text-[#6B57FF]">
                      {programmingLanguage}
                    </span>{" "}
                    reported to have the following gross annual salaries (in USD
                    including bonuses) in 2024:
                  </h3>
                </div>
                <div className="w-full min-h-[350px]">
                  <SalaryChart language={programmingLanguage} country={country} />
                </div>
                <div className="text-sm text-black space-y-2">
                  <p>
                    The graph shows salary distribution among users of the
                    selected technology in the specified region, based on
                    responses from Developer Ecosystem Survey 2024
                  </p>
                  <div className="flex items-start space-x-2 bg-gray-100 p-4 rounded-lg">
                    <span className="text-black mt-1">ℹ️</span>
                    <p>
                      <strong>Note:</strong> Experience levels refer to total
                      years of professional coding, not years using the selected
                      technology.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <p className="text-gray-600">
                Select a programming language and country to see salary
                estimates.
              </p>
            )}
          </div>
        </GradientCard>
      </div>
    </div>
  );
}

export default App;
