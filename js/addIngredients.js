const addIngrediendtsArea = document.getElementById("addIngredientsArea");
const addIngrediendtsBtn = document.getElementById("addIngredients");

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
}

function submitIngredients() {
    const newIngredient = ingredientsInput.value;
    ingredientsInput.value = "재료명을 입력하세요";


}