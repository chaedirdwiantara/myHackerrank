// function vowelsAndConsonants (s) {

// }

vowelsAndConsonants = (s) => {
  const vowelFilter = 'aeiou';
  let vowels = [];
  let consonants = [];
  for (let i = 0; i < s.length; i++) {
    if (vowelFilter.includes(s[i])) {
      vowels += s[i] + '\n';
    } else {
      consonants += s[i] + '\n';
    }
  }
  console.log(vowels + consonants);
};
vowelsAndConsonants('miamo');
