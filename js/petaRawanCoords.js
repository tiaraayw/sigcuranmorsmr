const coordinate = [
    {
        kecamatan: "Samarinda Ulu",
        coords: "243,151,171,179,169,189,179,197,188,214,200,231,215,243,228,248,234,263,243,263,250,265,249,277,264,277,271,259,280,254,276,243,290,232,289,227,276,219,264,209,258,190,250,169"
    },
    {
        kecamatan: "Sungai Kunjang",
        coords: "163,185,167,191,176,190,178,199,182,202,184,211,191,215,195,222,203,237,219,246,228,249,227,261,237,262,249,264,246,277,236,293,235,313,226,327,199,326,190,334,187,376,177,397,167,398,170,386,164,378,157,361,148,341,159,333,162,318,152,312,146,294,155,270,158,246,155,230,151,220,155,210"
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