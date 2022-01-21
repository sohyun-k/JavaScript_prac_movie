// 영화의 제목, 평점, 줄거리를 추출하는 코드 작성
let response = document.body.innerHTML;

let elements = response.split("<div>");
elements.splice(0,1); // 첫번째배열 자름

let result = elements.map(function(item){
    let _name = item.split("제목: ")[1].split("</h2>")[0];
    let _rate = item.split("평점: ")[1].split("</p>")[0];
    let _summary = item.split("줄거리: ")[1].split("</p>")[0];

    return {
        name: _name,
        rate: _rate,
        summary: _summary,
    };
});

console.log(result);