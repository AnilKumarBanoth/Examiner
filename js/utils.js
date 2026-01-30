function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
function getQuestionsByTopic(topic) {
  return QUESTIONS.filter(q => q.topic === topic);
}
function percent(score, total) {
  return Math.round((score / total) * 100);
} 