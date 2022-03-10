const addIngrediendtsArea = document.getElementById("addIngredientsArea");
const addIngrediendtsBtn = document.getElementById("addIngredients");

const INGRE_KEY = "ingredients";
let ingres = [];

addIngrediendtsBtn.addEventListener("click", addIngrediendts);

function addIngrediendts() {
    let ingredientsInput = document.createElement('input');
    ingredientsInput.placeholder = "재료명을 입력하세요"
    addIngrediendtsArea.appendChild(ingredientsInput);

    let ingredientsWeightInput = document.createElement('input');
    ingredientsWeightInput.placeholder = "재료의 양을 입력하세요(g)"
    addIngrediendtsArea.appendChild(ingredientsWeightInput);

    let submitIngredientsBtn = document.createElement('button');
    submitIngredientsBtn.innerText = "추가";
    addIngrediendtsArea.appendChild(submitIngredientsBtn);
    submitIngredientsBtn.addEventListener("click", submitIngredients);
}

let ingreObj = new Object();

function saveIngre() {
    localStorage.setItem(INGRE_KEY, JSON.stringify())
}

function submitIngredients() {
    const newIngre = ingredientsInput.value;
    const newIngreWeight = ingredientsWeightInput.value;
    const newIngreObj = {
        name: newIngre,
        weight: newIngreWeight,
    };
    ingres.push(newIngreObj);
    saveIngre();
}

const savedIngre = localStorage.getItem(INGRE_KEY);

if (savedIngre !== null) {
    const parsedIngre = JSON.parse(savedIngre);
    ingres = parsedIngre;
}