const coordinate = [
    {
        kecamatan: "Samarinda Utara",
        coords: "337,50,338,67,319,81,310,149,322,191,331,205,355,236,373,217,368,202,368,173,395,184,399,212,429,231,508,229,502,205,500,184,507,164,531,149,543,134,546,98,537,83,511,75,495,83,460,71,462,45,448,28,456,22,449,14,422,23,409,20,392,25,364,16,347,25,332,21,325,46,331,60"
    },
    {
        kecamatan: "Samarinda Ilir",
        coords: "371,258,378,268,363,283,358,293,363,298,354,313,343,308,348,290,352,276,354,265,346,255,355,247,360,253"
    },
    {
        kecamatan: "Samarinda Kota",
        coords: "341,270,13"
    },
    {
        kecamatan: "Samarinda Ulu",
        coords: "317,173,304,147,255,167,233,173,228,186,244,193,245,208,254,210,270,238,293,246,297,259,314,259,312,272,328,275,335,256,334,251,339,242,349,230,348,220,334,215,336,208,324,204,323,191"
    },
    {
        kecamatan: "Samarinda Seberang",
        coords: "307,323,318,308,326,296,333,290,339,305,333,325,353,315,348,303,348,288,324,275,310,277,304,282,299,301,291,320,298,340"
    },
    {
        kecamatan: "Sungai Kunjang",
        coords: "293,319,269,321,251,329,250,374,235,403,229,372,210,337,228,318,216,305,208,284,224,242,215,213,229,178,242,190,245,208,277,242,291,244,301,259,312,260,311,273,301,284"
    },
    {
        kecamatan: "Sungai Pinang",
        coords: "348,255,339,242,351,230,360,233,375,216,269,202,368,182,375,172,393,182,396,194,396,205,401,215,411,216,421,228,430,231,454,231,445,252,434,255,418,250,388,266,377,268,371,255,360,255,356,244"
    },
    {
        kecamatan: "Sambutan",
        coords: "379,267,370,274,359,296,358,307,352,314,364,322,385,348,423,362,453,377,460,373,464,349,475,349,484,345,503,351,501,338,499,324,498,312,507,306,493,303,490,289,499,284,496,276,503,250,498,239,507,228,495,228,480,232,455,228,447,252,433,257,420,249"
    },
    {
        kecamatan: "Loa Janan Ilir",
        coords: "334,287,325,295,320,307,310,319,299,335,291,320,277,321,264,321,254,330,250,351,250,373,264,396,279,413,291,403,300,387,305,380,309,355,332,326,338,311,341,301"
    },
    {
        kecamatan: "Palaran",
        coords: "458,378,406,355,381,343,352,312,325,337,315,345,307,363,306,382,290,402,302,413,309,424,329,431,334,438,332,443,324,453,323,476,310,485,310,498,323,510,338,536,359,572,371,565,387,570,391,550,398,536,397,523,417,506,437,506,450,488,459,479,451,460,475,452,481,440,497,432,506,420,508,405,522,405,514,392,512,383,471,370"
    },
]

//ganti coords disini buat yang responsif
const responsiveCoordinate = [
    {
        kecamatan: "Samarinda Utara",
        coords: "responsiveCoordinate"
    },
    {
        kecamatan: "Samarinda Ilir",
        coords: "responsiveCoordinate"
    },
    {
        kecamatan: "Samarinda Kota",
        coords: "responsiveCoordinate"
    },
    {
        kecamatan: "Samarinda Ulu",
        coords: "responsiveCoordinate"
    },
    {
        kecamatan: "Samarinda Seberang",
        coords: "responsiveCoordinate"
    },
    {
        kecamatan: "Sungai Kunjang",
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