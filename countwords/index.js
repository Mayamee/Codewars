function wordCount(s) {
  const stopLetters = ["a", "the", "on", "at", "of", "upon", "in", "as"];
  return s
    .toLowerCase()
    .match(/[a-z]+/g)
    .filter((e) => !stopLetters.includes(e)).length;
}
console.log(
  wordCount(
    "Hello there, little user5453 374 ())$. I’d been using my sphere as a stool. Slow-moving target 839342 was hit by OMGd-63 or K4mp"
  )
);
