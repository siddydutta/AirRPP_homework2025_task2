export const COUNTRIES = [
    "Brazil",
    "Canada",
    "China Mainland",
    "France", 
    "Germany",
    "India",
    "Italy",
    "Japan",
    "Korea, Republic of (South Korea)",
    "Mexico",
    "Netherlands",
    "Poland",
    "Spain",
    "United Kingdom",
    "United States"
] as const;

export type Country = typeof COUNTRIES[number];