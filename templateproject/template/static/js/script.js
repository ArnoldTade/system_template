document.getElementById('btn-nav').addEventListener('click', function () {
    document.body.classList.toggle('no-padding');
});

document.getElementById('btn-chat').addEventListener('click', function () {
    document.body.classList.toggle('no-padding');
});

/* CHART JS */
let ctx = document.getElementById("chart").getContext("2d");
let chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["2020/Q1", "2020/Q2", "2020/Q3", "2020/Q4"],
        datasets: [
            {
                label: "Number",
                backgroundColor: "#79AEC8",
                borderColor: "#417690",
                data: [26900, 28700, 27300, 29200]
            }
        ]
    },
    options: {
        title: {
            responsive: true,
            text: "Gross Volume in 2020",
            display: true
        }
    }
});


