function anagrams(word, words) {
  return words.filter(
    (e) => [...word].sort().join("") === [...e].sort().join("")
  );
}
console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));
