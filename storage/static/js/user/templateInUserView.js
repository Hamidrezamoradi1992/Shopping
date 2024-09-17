
        const DATA_SET_VERTICAL_BAR_CHART_1 = [68.106, 26.762, 94.255, 72.021, 74.082, 64.923, 85.565, 32.432, 54.664, 87.654, 43.013, 91.443];

        const labels_vertical_bar_chart = ['January', 'February', 'Mart', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'];

        const dataVerticalBarChart = {
            labels: labels_vertical_bar_chart,
            datasets: [
                {
                    label: 'Revenue',
                    data: DATA_SET_VERTICAL_BAR_CHART_1,
                    borderColor: 'rgb(54, 162, 235)',
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                }
            ]
        };
        const configVerticalBarChart = {
            type: 'bar',
            data: dataVerticalBarChart,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Last 12 Months'
                    }
                }
            },
        };

