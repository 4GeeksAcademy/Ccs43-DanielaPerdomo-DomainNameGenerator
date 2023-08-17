console.log("Hello Rigo from the console!");

const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];
const ext = [".com", ".net", ".es", ".gov", ".ve"];

function domainNameGenerator(pronouns, adjs, nouns, exts) {
  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let ext of exts) {
          console.log(pronoun + adj + noun + ext);
        }
      }
    }
  } 
}

domainNameGenerator(pronoun, adj, noun, ext);