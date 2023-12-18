const coordinate = [
    {
        kecamatan: "Samarinda Utara",
        coords: "404,22,411,16,419,17,412,28,429,48,421,55,422,72,453,87,474,75,504,86,511,123,492,150,460,172,467,203,468,227,453,232,424,229,390,230,375,215,361,212,359,195,334,169,332,203,337,219,319,229,302,213,307,207,291,207,288,193,273,159,266,149,278,142,279,79,303,69,298,53,290,43,296,24,312,28,327,17,346,24,361,26,368,21,383,28,390,22,383,28,361,26"
    },
    {
        kecamatan: "Samarinda Ilir",
        coords: "307,254,317,257,315,272,309,282,313,291,311,301,315,309,326,303,325,289,328,273,340,270,336,256,322,256,318,244"
    },
    {
        kecamatan: "Samarinda Kota",
        coords: "311,284,318,273,317,257,306,253,291,260,293,274"
    },
    {
        kecamatan: "Samarinda Ulu",
        coords: "215,210,210,201,202,195,190,177,223,165,269,147,279,169,287,184,287,195,294,209,303,209,303,218,316,222,312,235,302,242,304,252,293,259,293,273,277,273,273,261,259,258,254,246,234,236,223,223"
    },
    {
        kecamatan: "Samarinda Seberang",
        coords: "264,336,268,326,274,317,287,303,290,293,298,286,303,298,299,307,298,318,298,325,303,317,312,317,314,310,312,296,310,283,299,277,286,274,273,273,266,285,261,308,255,318"
    },
    {
        kecamatan: "Sungai Kunjang",
        coords: "184,322,189,314,172,290,189,237,181,212,192,176,200,192,211,199,212,209,220,215,230,229,241,242,257,246,260,266,274,262,274,273,264,282,262,305,256,317,229,319,217,330,215,375,211,389,194,401,198,377,179,341,174,331,184,329,184,322,189,314"
    },
    {
        kecamatan: "Sungai Pinang",
        coords: "388,232,377,220,364,211,356,209,358,199,357,185,330,171,334,201,336,217,322,229,314,228,302,242,309,254,321,245,325,256,332,257,343,265,359,261,375,252,383,248,396,254,407,249,411,244,419,228,411,231,400,231"
    },
    {
        kecamatan: "Sambutan",
        coords: "416,229,414,240,410,244,408,250,400,258,383,248,352,263,339,265,343,272,336,280,327,279,326,285,323,293,327,301,315,309,331,325,346,341,354,349,381,357,404,368,412,371,421,371,426,345,436,346,443,337,447,341,452,337,456,341,463,348,467,339,462,333,459,323,460,309,466,309,466,301,453,301,452,285,459,281,458,271,462,252,461,237,469,227,448,233,433,233"
    },
    {
        kecamatan: "Loa Janan Ilir",
        coords: "296,326,295,317,300,310,298,301,300,295,295,286,286,295,279,295,282,304,276,314,268,322,265,334,257,327,255,317,233,317,224,322,216,333,213,352,213,370,226,375,229,383,226,394,236,398,245,405,256,402,258,393,268,377,275,349"
    },
    {
        kecamatan: "Palaran",
        coords: "315,310,302,315,301,323,294,326,279,342,272,355,269,376,261,387,254,396,257,403,265,408,273,420,293,427,298,433,295,441,289,446,290,460,286,473,274,480,272,490,278,493,289,505,298,502,301,522,310,542,322,564,330,559,346,562,352,555,352,543,356,534,362,519,374,506,380,501,389,501,404,495,413,486,421,472,412,457,417,449,429,449,434,440,448,433,461,423,470,403,481,400,481,392,473,388,473,379,438,370,416,374,384,358,354,350"
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
} //kondsi bwt ambil coords