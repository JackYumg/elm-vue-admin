var maskImage = new Image();
maskImage.src = 'src/assets/cn.jpg';
let aimage;
maskImage.onload = (e: any) => {
    aimage = e.path[0];
}
export const worldOption = {
    backgroundColor: '#fff',
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    series: [{
        type: 'wordCloud',
        gridSize: 1,
        // Text size range which the value in data will be mapped to.
        // Default to have minimum 12px and maximum 60px size.
        sizeRange: [12, 55],
        // Text rotation range and step in degree. Text will be rotated randomly in range [-90,                                                                             90] by rotationStep 45

        rotationRange: [-45, 0, 45, 90],
        maskImage: aimage,
        textStyle: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            // Color can be a callback function or a color string
            color: function () {
                // Random color
                return 'rgb(' + [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160)
                ].join(',') + ')';
            }
        },
        left: 'center',
        top: 'center',
        right: null,
        bottom: null,
        width: '90%',
        height: '110%',
        emphasis: {
            focus: 'self',

            textStyle: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: [
            {
                name: '东皇太一',
                value: 10000,
                color: 'red'
            }, {
                name: '智商250',
                value: 6181
            }, {
                name: '护理',
                value: 4386
            }, {
                name: '百里',
                value: 4055
            }, {
                name: '大师兄',
                value: 2467
            }, {
                name: '刮痧',
                value: 2244
            }, {
                name: 'test',
                value: 1898
            }, {
                name: 'Pitch Perfect',
                value: 1484
            }, {
                name: 'Express',
                value: 1112
            }, {
                name: 'Home',
                value: 965
            }, {
                name: 'Johnny Depp',
                value: 847
            }, {
                name: 'Lena Dunham',
                value: 582
            }, {
                name: 'Lewis Hamilton',
                value: 555
            }, {
                name: 'KXAN',
                value: 550
            }, {
                name: 'Point Break',
                value: 265
            }]
    }]
};