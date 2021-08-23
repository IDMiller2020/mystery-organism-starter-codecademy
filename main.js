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
    },
    willLikelySurvive() {
      let countCG = 0
      let percentCG = 0
      this.specimenDNA.forEach(b => {
        if (b === 'C' || b === 'G') {
          countCG ++
        }
      })
      percentCG = Math.round((countCG / 15) * 100)
      return percentCG >= 60
    }
  }
}

const willSurviveArr = num => {
  let surviveArr = []
  let id = 101
  let index = 1
  do {
    let currentSpecimen = pAequorFactory(id, mockUpStrand())
    if (currentSpecimen.willLikelySurvive()) {
      surviveArr.push(currentSpecimen)
      index ++
      id ++
    }
  } while (index <= num)
  return surviveArr
}



// Testing section:

// console.log(pAequorFactory(101, ['A','A','A','A','A','A','A','A','A','A','A','A','A','A','A']))
// let testSpecimen1 = pAequorFactory(101, ['A','A','A','A','A','A','A','A','A','A','A','A','A','A','A'])
// let testSpecimen2 = pAequorFactory(102, mockUpStrand())
// let testSpecimen3 = pAequorFactory(103, ['C','C','C','C','C','C','C','C','C','A','A','A','A','A','A'])
// let testSpecimen4 = pAequorFactory(104, ['G','G','G','G','G','G','G','G','G','A','A','A','A','A','A'])
// let testSpecimen5 = pAequorFactory(105, ['G','C','G','C','G','C','G','C','G','A','A','A','A','A','A'])
// let testSpecimen6 = pAequorFactory(106, ['G','C','G','C','G','C','G','C','A','A','A','A','A','A','A'])
// console.log(`testSpecimen1.specimenNum: ${testSpecimen1.specimenNum}`)
// console.log(`testSpecimen1.specimenDNA: ${testSpecimen1.specimenDNA}`)
// console.log(`testSpecimen1.mutate: ${testSpecimen1.mutate()}`)
// console.log(`testSpecimen1.specimenDNA: ${testSpecimen1.specimenDNA}`)
// console.log(`testSpecimen2.specimenNum: ${testSpecimen2.specimenNum}`)
// console.log(`testSpecimen2.specimenDNA: ${testSpecimen2.specimenDNA}`)
// console.log(`testSpecimen2.mutate: ${testSpecimen2.mutate()}`)
// testSpecimen1.compareDNA(testSpecimen2)
// console.log(`Specimen 106 will likely survive: ${testSpecimen6.willLikelySurvive()}`)
// console.log(`Specimen 105 will likely survive: ${testSpecimen5.willLikelySurvive()}`)
// console.log(`Specimen 104 will likely survive: ${testSpecimen4.willLikelySurvive()}`)
// console.log(`Specimen 103 will likely survive: ${testSpecimen3.willLikelySurvive()}`)
// console.log(`Specimen 102 will likely survive: ${testSpecimen2.willLikelySurvive()}`)
// console.log(`Specimen 101 will likely survive: ${testSpecimen1.willLikelySurvive()}`)

console.log('Instances of pAequor which are likely to survive:')
let arr = willSurviveArr(30)
arr.forEach((o, i) => {
  console.log('*************************************************************')
  console.log(`Specimine Number: ${o.specimenNum}`)
  console.log(`Specimine DNA: ${o.specimenDNA}`)
  console.log(`Likely To Survive: ${o.willLikelySurvive()}`)
})

