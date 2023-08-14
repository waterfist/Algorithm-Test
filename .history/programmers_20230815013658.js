function solution(n) {
  // 합을 담을 answer 선언
  let answer = 0;
  // 반복문 돌려가며 짝수일 때만 answer에 추가
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      answer += i;
    }
  }
  // answer 값 리턴
  return answer;
}
