function solution(N, K) {
  // write your code in JavaScript (Node.js 14)

  const arr = Array.from(String(N), (i) => Number(i));
  const result = [];
  let remaning = K;
  arr.map((i) => {
    if (i + remaning > 10) {
      const tobeDeleted = 9 - i;
      remaning -= tobeDeleted;
      result.push(9);
    } else {
      result.push(i + remaning);
      remaning = 0;
    }
  });

  const finalNumber = result.join('');
  console.log(finalNumber);
}

solution(512, 10);
