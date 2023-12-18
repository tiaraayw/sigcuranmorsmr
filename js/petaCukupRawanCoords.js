const coordinate = [
    {
        kecamatan: "Samarinda Kota",
        coords: "311,284,318,273,317,257,306,253,291,260,293,274"
    },
    {
        kecamatan: "Samarinda Ilir",
        coords: "307,254,317,257,315,272,309,282,313,291,311,301,315,309,326,303,325,289,328,273,340,270,336,256,322,256,318,244"
    },
    {
        kecamatan: "Samarinda Utara",
        coords: "404,22,411,16,419,17,412,28,429,48,421,55,422,72,453,87,474,75,504,86,511,123,492,150,460,172,467,203,468,227,453,232,424,229,390,230,375,215,361,212,359,195,334,169,332,203,337,219,319,229,302,213,307,207,291,207,288,193,273,159,266,149,278,142,279,79,303,69,298,53,290,43,296,24,312,28,327,17,346,24,361,26,368,21,383,28,390,22,383,28,361,26"
    }
]

//ganti coords disini buat yang responsif
const responsiveCoordinate = [
    {
        kecamatan: "Samarinda Kota",
        coords: "responsiveCoordinate"
    },
    {
        kecamatan: "Samarinda Ilir",
        coords: "responsiveCoordinate"
    },
    {
        kecamatan: "Samarinda Utara",
        coords: "responsiveCoordinate"
    }
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