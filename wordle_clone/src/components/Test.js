/* eslint-disable prettier/prettier */
import Papa from 'papaparse';
let csvData = Array;
function selectAnswer() {
  let index = Math.floor(Math.random() * csvData)
  return csvData[index]
}

onMounted(async () => {
  const response = await fetch('/WordList.csv');
  const csvText = await response.text();
  const { data } = Papa.parse(csvText);
  csvData = data.map(row => row[0]);
  selectAnswer();
});