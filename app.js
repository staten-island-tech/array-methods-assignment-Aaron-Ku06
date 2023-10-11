const people = [
  {
    firstName: "Satoru",
    lastName: "Gojo",
    class: "Special Grade",
    technique: "Limitless",
    episode: []
  },
  {
    firstName: "Suguru",
    lastName: "Geto",
    class: "Special Grade",
    technique: "Curse Spirit Manipulation",
    episode: []
  },
  {
    firstName: "Yuji",
    lastName: "Itadori",
    class: "1st Grade",
    technique: "Cursed Energy",
    episode: []
  },
  {
    firstName: "Megumi",
    lastName: "Fushiguro",
    class: "2nd Grade",
    technique: "Ten Shadows",
    episode: []
  },
  {
    firstName: "Yuta",
    lastName: "Okkotsu",
    class: "Special Grade",
    technique: "Cursed Energy",
    episode: [1]
  },
  {
    firstName: "Toji",
    lastName: "Fushiguro",
    class: "Special Grade",
    technique: "Heavenly Restriction",
    episode: [2,3,4]
  },
];
people.forEach((people) => console.log(people.firstName));