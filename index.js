
let startPopulation = [
  {age: 4, males: 20, females: 10},
  {age: 3, males: 30, females: 20},
  {age: 2, males: 40, females: 25},
  {age: 1, males: 35, females: 50},
]
let maxPopulationByGender = 0;

const dataGenerator = () => {
  startPopulation.forEach(peoples => {
    if (maxPopulationByGender < peoples.males) maxPopulationByGender = peoples.males;
    if (maxPopulationByGender < peoples.females) maxPopulationByGender = peoples.females;
  })
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

dataGenerator();
render();


