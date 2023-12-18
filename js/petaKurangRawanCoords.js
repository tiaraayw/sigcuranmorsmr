const coordinate = [
    {
        kecamatan: "Samarinda Seberang",
        coords: "309,330,314,319,321,309,328,301,326,293,332,293,341,283,346,293,342,300,346,308,341,313,341,321,345,320,346,311,357,311,361,308,355,295,357,283,346,275,329,267,318,271,312,277,305,305,300,313,302,325"
    },
    {
        kecamatan: "Sungai Pinang",
        coords: "381,168,386,175,401,179,398,185,403,193,402,204,416,209,434,226,463,224,454,238,455,248,443,251,428,245,403,253,398,259,387,261,381,252,367,248,362,239,353,251,347,236,359,223,375,219,381,210,383,204,375,195,379,182,374,173"
    },
    {
        kecamatan: "Sambutan",
        coords: "462,224,477,224,489,227,513,223,504,234,508,247,505,253,503,273,503,277,496,284,496,296,513,299,511,307,503,305,507,317,507,334,512,333,511,345,499,337,489,333,481,342,471,341,468,365,459,368,443,362,423,352,399,345,383,330,362,307,371,292,367,287,371,269,379,265,386,269,390,261,402,257,410,251,427,246,444,252,451,247,458,236"
    },
    {
        kecamatan: "Loa Janan Ilir",
        coords: "341,320,345,304,345,292,341,283,333,293,324,293,328,303,320,311,318,317,310,330,302,322,300,312,271,316,260,333,260,368,273,373,272,386,284,395,289,403,301,399,306,382,317,376,316,360,326,342"
    },
    {
        kecamatan: "Palaran",
        coords: "359,307,377,321,391,340,433,357,461,367,469,367,479,364,521,378,522,385,531,394,528,399,516,396,516,408,510,418,500,428,488,429,476,445,466,450,458,452,460,457,463,466,463,475,456,488,439,496,423,498,412,510,406,514,404,527,397,540,399,547,398,555,392,558,375,556,368,558,354,535,346,522,343,502,334,502,326,494,318,488,320,474,332,469,335,452,336,444,344,436,343,428,333,422,318,416,310,402,300,393,314,374,316,356,329,333,342,322,347,324,347,314,354,315"
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