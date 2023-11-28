const coordinate = [
    {
        kecamatan: "Samarinda Kota",
        coords: "277,271,13"
    },
    {
        kecamatan: "Samarinda Ilir",
        coords: "281,262,290,249,295,260,307,263,314,272,305,276,294,299,295,307,286,316,284,302,284,293,283,288,289,277,290,264,295,260"
    },
    {
        kecamatan: "Samarinda Utara",
        coords: "293,234,288,224,271,220,275,210,264,210,258,193,241,147,247,144,254,106,253,85,275,68,268,59,262,53,266,25,277,24,282,31,293,22,308,22,336,27,341,22,355,28,368,22,376,24,381,15,391,25,383,33,399,48,392,66,396,75,432,86,447,76,473,88,481,99,478,141,465,150,454,163,440,167,433,187,438,196,434,206,441,211,440,220,443,230,419,236,375,235,357,232,344,218,333,214,333,203,324,186,304,176,307,192,306,205,312,213,306,225"
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