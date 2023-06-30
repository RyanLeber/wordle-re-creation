import Papa from "papaparse";

export async function loadCSV() {
  const response = await fetch("/WordList.csv");
  const csvText = await response.text();
  const { data } = Papa.parse(csvText);
  let csvData = data.map((row) => row[0]);
  let index = Math.floor(Math.random() * csvData.length);
  return data[index][0];
}
