
/* ICON TOGGLE NAV */
document.getElementById('btn-nav').addEventListener('click', function () {
    var icon = document.getElementById('btn-icon');
    var sidebarText = document.querySelectorAll('.nav-text');

    if (icon.classList.contains('bi-arrow-bar-left')) {
        icon.classList.remove('bi-arrow-bar-left');
        icon.classList.add('bi-arrow-bar-right');
        sidebarText.forEach(function (text) {
            text.style.display = 'none';
        });
    } else {
        icon.classList.remove('bi-arrow-bar-right');
        icon.classList.add('bi-arrow-bar-left');
        sidebarText.forEach(function (text) {
            text.style.display = 'inline';
        });
    }
});


/* BODY */
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

