function solution(n) {
  var answer = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      answer += 1;
    }
  }
  return answer;
}
