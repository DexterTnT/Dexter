async function getData() {
    const response = await fetch("raw data.csv");
    const rawData = await response.text();
    document.getElementById("csv").innerHTML = rawData;

    console.log(rawData);
    console.log("rawData type: " + typeof rawData);

}