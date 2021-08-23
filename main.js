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
    specimenDNA: dnaArr,
    mutate() {
      const randBase = Math.floor(Math.random() * 15)
      let newBase = ''
      do {
        newBase = returnRandBase()
      } while (dnaArr[randBase] === newBase)
      this.specimenDNA[randBase] = newBase
      return this.specimenDNA
    },
    compareDNA(pAequorObj) {
      const thisSpecimenDNA = this.specimenDNA
      const specimen2DNA = pAequorObj.specimenDNA
      let matches = 0
      let commonDNA
      thisSpecimenDNA.forEach((b, i) => {
        if (b === specimen2DNA[i]) {
          matches ++
        }
      })
      commonDNA = (matches / 15) * 100
      console.log(`This specimen (${this.specimenNum}) and speciment #2 (${pAequorObj.specimenNum}) have ${commonDNA.toFixed(2)}% DNA in common.`)
    }
  }
}


// Testing section:

// console.log(pAequorFactory(101, ['A','A','A','A','A','A','A','A','A','A','A','A','A','A','A']))
let testSpecimen1 = pAequorFactory(101, ['A','A','A','A','A','A','A','A','A','A','A','A','A','A','A'])
let testSpecimen2 = pAequorFactory(102, mockUpStrand())
console.log(`testSpecimen1.specimenNum: ${testSpecimen1.specimenNum}`)
console.log(`testSpecimen1.specimenDNA: ${testSpecimen1.specimenDNA}`)
// console.log(`testSpecimen1.mutate: ${testSpecimen1.mutate()}`)
// console.log(`testSpecimen1.specimenDNA: ${testSpecimen1.specimenDNA}`)
console.log(`testSpecimen2.specimenNum: ${testSpecimen2.specimenNum}`)
console.log(`testSpecimen2.specimenDNA: ${testSpecimen2.specimenDNA}`)
// console.log(`testSpecimen2.mutate: ${testSpecimen2.mutate()}`)
testSpecimen1.compareDNA(testSpecimen2)



