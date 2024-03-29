
const config = {
  birthRate: [
    {minAge: 15, maxAge: 19, value: 18.4},
    {minAge: 20, maxAge: 24, value: 81.2},
    {minAge: 25, maxAge: 29, value: 100.1},
    {minAge: 30, maxAge: 34, value: 77.2},
    {minAge: 35, maxAge: 39, value: 39.2},
    {minAge: 40, maxAge: 44, value: 8.7},
    {minAge: 45, maxAge: 49, value: 0.5},
  ],
  deathRate: [
    {minAge: 15, maxAge: 19, value: 18.4},
    {minAge: 20, maxAge: 24, value: 81.2},
    {minAge: 25, maxAge: 29, value: 100.1},
    {minAge: 30, maxAge: 34, value: 77.2},
    {minAge: 35, maxAge: 39, value: 39.2},
    {minAge: 40, maxAge: 44, value: 8.7},
    {minAge: 45, maxAge: 49, value: 0.5},
  ]
}

let startPopulation = [
  {age: 18, males: 20, females: 10},
  {age: 17, males: 30, females: 20},
  {age: 16, males: 40, females: 25},
  {age: 15, males: 35, females: 50},
]
let maxPopulationByGender = 0;

const dataGenerator = () => {
  startPopulation.forEach(peoples => {
    if (maxPopulationByGender < peoples.males) maxPopulationByGender = peoples.males;
    if (maxPopulationByGender < peoples.females) maxPopulationByGender = peoples.females;
  })
  render();
}

const findBirthRate = (age) => {
  let item = config.birthRate.find(el => {
    console.log('findIndex', el.minAge, age, el.maxAge, el.minAge <= age && el.maxAge >= age);
    el.minAge <= age && el.maxAge >= age
  })
  console.log('findBirthRate', item);
  return item;
}

const lastYearBirthCalculator = () => {
  let result = 0;
  startPopulation.forEach(peoples => {
    result = result + Math.round(findBirthRate(peoples.age) * peoples.females);
  })
  console.log(result);
}

const render = () => {
  const maleParent =  document.getElementById('piramide-males__container');
  const centerParent =  document.querySelector('#piramide-center__container'); 
  const femaleParent =  document.getElementById('piramide-females__container');
  startPopulation.forEach(peoples => {
    let centerElement =  document.createElement('div');
    centerElement.setAttribute('class', 'piramide-center');
    centerElement.innerText  = peoples.age;
    centerParent.appendChild(centerElement);
    let maleElement =  document.createElement('div');
    maleElement.setAttribute('class', 'piramide-bar bar-male');
    maleElement.setAttribute('style', `width: ${100*peoples.males/maxPopulationByGender}%`)
    maleParent.appendChild(maleElement);
    let femaleElement =  document.createElement('div');
    femaleElement.setAttribute('class', 'piramide-bar bar-female');
    femaleElement.setAttribute('style', `width: ${100*peoples.females/maxPopulationByGender}%`)
    femaleParent.appendChild(femaleElement);
  })
}

let buttonStep = document.querySelector('#button-step');
buttonStep.addEventListener('click', () => {
  lastYearBirthCalculator();
})

dataGenerator();



