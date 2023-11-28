const coordinate = [
    {
        kecamatan: "Samarinda Seberang",
        coords: "235,346,229,324,242,286,258,278,280,289,285,297,286,306,290,318,282,319,271,331,273,321,274,310,268,294,251,317"
    },
    {
        kecamatan: "Sungai Pinang",
        coords: "332,189,332,199,335,219,349,221,362,238,391,234,383,257,372,260,359,255,332,265,325,270,315,272,309,265,297,259,289,250,284,258,278,247,290,235,301,234,311,218,306,206,305,178"
    },
    {
        kecamatan: "Sambutan",
        coords: "289,318,297,312,296,300,308,276,316,278,321,269,331,267,358,254,370,259,384,259,384,248,390,236,423,240,444,233,436,243,440,256,432,280,434,289,426,295,428,309,444,309,442,319,435,318,435,329,442,344,441,358,428,348,418,349,411,355,401,354,396,379,386,380,355,364,327,358"
    },
    {
        kecamatan: "Loa Janan Ilir",
        coords: "187,379,189,341,199,328,228,325,231,340,239,342,243,326,257,315,268,297,273,309,273,333,259,342,245,364,242,387,227,409,217,415,201,403,201,387"
    },
    {
        kecamatan: "Palaran",
        coords: "289,317,284,323,277,325,273,331,247,357,244,386,228,406,235,419,247,431,268,436,271,447,263,456,260,481,248,490,248,504,261,516,272,514,274,538,297,576,309,572,322,572,328,560,335,540,335,527,355,512,379,506,397,484,385,464,410,462,414,447,431,440,446,423,446,410,458,409,454,398,451,389,416,377,390,383,346,361,322,352"
    },
]

//ganti coords disini buat yang responsif
const responsiveCoordinate = [
    {
        kecamatan: "Samarinda Seberang",
        coords: "responsiveCoordinate"
    },
    {
        kecamatan: "Sungai Pinang",
        coords: "responsiveCoordinate"
    },
    {
        kecamatan: "Sambutan",
        coords: "responsiveCoordinate"
    },
    {
        kecamatan: "Loa Janan Ilir",
        coords: "responsiveCoordinate"
    },
    {
        kecamatan: "Palaran",
        coords: "responsiveCoordinate"
    },
]

if (mediaQueryResponsive.matches) {
    responsiveCoordinate.map((item) => {
        const areaElement = document.getElementById(item.kecamatan)
        areaElement.coords = item.coords

        console.log("responsiveCoordinate coords", areaElement.coords)
    })
} else {
    coordinate.map((item) => {
        const areaElement = document.getElementById(item.kecamatan)
        areaElement.coords = item.coords

        console.log("coordinate coords", areaElement.coords)
    })
}