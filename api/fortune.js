export default async function handler(req, res) {
  const score = Math.floor(Math.random() * 100) + 1;
  let message = '';

  if (score >= 90) {
    message = "오늘은 행운이 가득한 날이에요! 어떤 일을 해도 잘 풀릴 거예요 ✨";
  } else if (score >= 75) {
    message = "기분 좋은 일이 생길 수 있어요. 자신감을 가져보세요 😄";
  } else if (score >= 60) {
    message = "무난한 하루! 너무 큰 걱정은 안 해도 괜찮아요 👍";
  } else if (score >= 40) {
    message = "약간의 스트레스가 있을 수 있어요. 마음을 다잡아보세요 💪";
  } else if (score >= 20) {
    message = "오늘은 조심조심! 실수나 말실수에 유의하세요 ⚠️";
  } else {
    message = "컨디션이 살짝 떨어질 수 있어요. 푹 쉬는 하루를 보내보는 건 어때요? 💤";
  }

  res.status(200).json({
    score,
    fortune: message
  });
}