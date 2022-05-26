axios.get('http://localhost:3000/users/summary').then(res => {
    const sumData = res.data.sumData
    const yValues = [0, 0, 0, 0]
    sumData.forEach(row => {
        if (row.description === 'Very poor') { yValues[0]++ }
        if (row.despcription === "Poor") {yValues[1]++ }
        if (row.description === "Good") {yValues[2]++}
        if (row.description === "Very good") {yValues[3]++}

    })

    var canvas = document.getElementById('myChart').getContext('2d'); // 2d context
    console.log(canvas);


    var barColors = [
        "rgba(0,0,255,1.0)",
        "rgba(0,0,255,0.8)",
        "rgba(0,0,255,0.6)",
        "rgba(0,0,255,0.4)",
        "rgba(0,0,255,0.2)",
    ];
    var xValues = ["Very Poor", "Poor", "Good", "Very Good"];

    new Chart(canvas, {
        type: "doughnut",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "User sentiment frequency summary"
            }
        }
    });
    })


//