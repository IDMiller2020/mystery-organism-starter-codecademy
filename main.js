// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, dnaArr) => {
  return {
    specimenNum: num,
    specimenDna: dnaArr,
    mutate() {
      const randBase = Math.floor(Math.random() * 15)
      let newBase = ''
      do {
        newBase = returnRandBase()
      } while (dnaArr[randBase] === newBase)
      dnaArr[randBase] = newBase
      return dnaArr
    }
  }
}


// Testing section:

// console.log(pAequorFactory(101, ['A','A','A','A','A','A','A','A','A','A','A','A','A','A','A']))
let testSpecimen1 = pAequorFactory(101, ['A','A','A','A','A','A','A','A','A','A','A','A','A','A','A'])
let testSpecimen2 = pAequorFactory(102, mockUpStrand())
console.log(`testSpecimen1.specimenNum: ${testSpecimen1.specimenNum}`)
console.log(`testSpecimen1.specimenDna: ${testSpecimen1.specimenDna}`)
console.log(`testSpecimen1.mutate: ${testSpecimen1.mutate()}`)
console.log(`testSpecimen1 mutated DNA: ${testSpecimen1.specimenDna}`)
console.log(`testSpecimen2.specimenNum: ${testSpecimen2.specimenNum}`)
console.log(`testSpecimen2.specimenDna: ${testSpecimen2.specimenDna}`)
console.log(`testSpecimen2.mutate: ${testSpecimen2.mutate()}`)



