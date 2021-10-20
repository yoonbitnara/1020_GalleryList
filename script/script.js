$(function() {

    let contentArray = [

    ["img01.jpg", "헤리터 시그니처 칼도마세트 (월넛)",
    "월넛 색상의 헤리터 식과도&도마 세트",
    355000, 298000, 5488],
    
    
    ["img02.jpg", "헤리터 시그니처 칼도마세트 (하드메이플)",
    "하드메이플 색상의 헤리터 식과도&도마 세트",
    355000, 288000, 243],
    
    ["img03.jpg", "헤리터 칼 3종 세트",
    "",
    278000, 228000, 2054],
    
    ["img04.jpg", "헤리터 칼 2종 세트",
    "주방용 식도 + 과도",
    118000, 99000, 3149],
    
    ["img05.jpg", "헤리터 비건 에이프런",
    "자체개발 페브릭 앞치마",
    99000, 69000, 199],
    
    ["img06.png", "STANDARD CHINA 160",
    "헤리터 중식도",
    160000, 139000, 151],
    
    ["img07.png", "헤리터 시그니처 팔각도마",
    "도마 + 도마프레임+ 칼블럭",
    227000, 206000, 1535],
    
    ["img08.jpg", "헤리터 키친 크로스 SET",
    "강화에서 온 소창행주",
    26000, 26000, 388],
    
    ["img09.png", "STANDARD 180(7\")",
    "주방용 식도",
    79000, 79000, 1731],
    
    ["img10.jpg", "STANDARD 106(4\")",
    "주방용 과도",
    39000, 39000, 160],
    
    ["img11.png", "우드그레인 키친트레이",
    "",
    39000, 35000, 2],
    
    ["img12.png", "차콜스톤 워싱바",
    "",
    29700, 26800, 9]

    ]


        let galleryListArea = "";   // 갤러리 리스트 각 table 항목을 저장할 변수

        for (let i = 0; i < contentArray.length; i++) {
            galleryListArea += "<table class='goodsTbl'>";
            galleryListArea += "<tbody>";
    
            for (let j = 0; j < contentArray[i].length; j++) {
    
                if (j != 4)  galleryListArea += "<tr>"; 
    
                if (j == 0) {
                    galleryListArea += "<td><img src='../images/"+ contentArray[i][j] +"' alt='이미지' width='320'></td>";
                } else if (j == 1) {
                    galleryListArea += "<td class='goodsName'>"+contentArray[i][j]+"</td>";
                } else if (j == 2) {
                    galleryListArea += "<td class='goodsDesc'>"+contentArray[i][j]+"</td>";
                } else if (j == 3) {
                    galleryListArea += "<td class='goodsPrice'>";
                    galleryListArea += "<span class='basicPrice numComma'>"+contentArray[i][j]+"</span>";
                } else if (j == 4) {
                    galleryListArea += "<span class='salePrice numComma'>"+contentArray[i][j]+"</span></td>";
                } else if (j == 5) {
                    galleryListArea += "<td><span class='replyCnt numComma'>"+contentArray[i][j]+"</span></td>";
                }
    
                if (j != 3)  galleryListArea += "</tr>";             
            }
    
            galleryListArea += "</tbody></table>";  
            
        }
        console.log(galleryListArea);
        $("#galleryListArea").html(galleryListArea);

        let numDom = document.getElementsByClassName("numComma");
    
        for (let i = 0; i < numDom.length; i++) {
            
            numDom[i].innerText = fnNumComma(numDom[i].innerText);
        }
    
        function fnNumComma(param) {
    
            let num = Number(param);
            return num.toLocaleString();
        }
        
});