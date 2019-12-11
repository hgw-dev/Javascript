require("flot");

var options = {
    series: {
        bars: {
            show: true,
            lineWidth: 0,
            fillColor: "#4E6577"
        }
    },
    grid: {
        borderWidth: 2,
        borderColor: "#D9D9D9"
    },
    yaxis: {
        tickColor: "#d9d9d9",
        font: {
            color: "#666",
            size: 10
        }
    },
    xaxis: {
        tickColor: "#d9d9d9",
        font: {
            color: "#666",
            size: 10
        }
    }
};

function GenerateSeries(added = 100) {
    var data = [];

    for (i = 1; i <= added; i++) {
        var d = Math.floor(Math.random() * 100);
        data.push([i, d]);
    }
    return data;
}

function bubble_sort(array) {
    let n = array.length;
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                console.log(array);
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array
}

$(function() {  

    var x = GenerateSeries();

    $("#Jeet").click(function() {
        console.log(x);
        x = GenerateSeries(2);
    });

    $("#temp").click(function() {
        x = bubble_sort(x);
    });
});
