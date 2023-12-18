const coordinate = [
    {
        kecamatan: "Samarinda Ulu",
        coords: "215,210,210,201,202,195,190,177,223,165,269,147,279,169,287,184,287,195,294,209,303,209,303,218,316,222,312,235,302,242,304,252,293,259,293,273,277,273,273,261,259,258,254,246,234,236,223,223"

    },
    {
        kecamatan: "Sungai Kunjang",
        coords: "184,322,189,314,172,290,189,237,181,212,192,176,200,192,211,199,212,209,220,215,230,229,241,242,257,246,260,266,274,262,274,273,264,282,262,305,256,317,229,319,217,330,215,375,211,389,194,401,198,377,179,341,174,331,184,329,184,322,189,314"
    },
]

//ganti coords disini buat yang responsif
const responsiveCoordinate = [
    {
        kecamatan: "Samarinda Ulu",
        coords: "responsiveCoordinate"
    },
    {
        kecamatan: "Sungai Kunjang",
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