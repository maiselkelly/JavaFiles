let cCal;
let cPro;
let cFat;
let cCarbs;
let mCal;
let mPro;
let mFat;
let mCarbs;
let bCal;
let bPro;
let bFat;
let bCarbs;
let weight;

function cuttingCals(){
    cCal = getWeight() * 11;
    return cCal;
}

function cuttingProtein(){
    cPro = getWeight() * 1.1;
    return cPro;
}

function cuttingFat(){
    cFat = getWeight() * 0.3;
    return cFat;
}

function cuttingCarbs(){
    cCarbs = (cCal - cPro*4 - cFat*9) /4;
    return cCarbs;
}

function maintainCals(){
    mCal = getWeight() * 14;
    return mCal;
}

function maintainProtein(){
    mPro = getWeight() * 1;
    return mPro;
}

function maintainFat(){
    mFat = getWeight() * 0.35;
    return mFat;
}

function maintainCarbs(){
    mCarbs = (mCal - mPro*4 - mFat*9) /4;
    return mCarbs;
}

function bulkCals(){
    bCal = getWeight() * 16;
    return bCal;
}

function bulkProtein(){
    bPro = getWeight() * 1.1;
    return bPro;
}

function bulkFat(){
    bFat = getWeight() * 0.4;
    return bFat;
}

function bulkCarbs(){
    bCarbs = (bCal - bPro*4 - bFat*9) /4;
    return bCarbs;
}



function getWeight(){
    weight = 120;
    return weight;
}


function cutReturnMacros(){
    console.log("Calories is " + cuttingCals());
    console.log("Protein is " + cuttingProtein());
    console.log("Fat is: " + cuttingFat());
    console.log("Carbs is: " + cuttingCarbs());
}

function maintainReturnMacros(){
    console.log("Calories is " + maintainCals());
    console.log("Protein is " + maintainProtein());
    console.log("Fat is: " + maintainFat());
    console.log("Carbs is: " + maintainCarbs());
}

function bulkReturnMacros() {
    console.log("Calories is " + bulkCals());
    console.log("Protein is " + bulkProtein());
    console.log("Fat is: " + bulkFat());
    console.log("Carbs is: " + bulkCarbs());

}

function marcoCalculator(){
    console.log("Select from one of the following");
    console.log("1. Cutting");
    console.log("2. Maintaining");
    console.log("3. Bulking");
}

function cutMaintainBulk(){
    const choice = //User Input;
    marcoCalculator();
    switch(choice){
        case 1:
            console.log("Cutting");
            getWeight();
            cuttingCals();
            cuttingProtein();
            cuttingFat();
            cuttingCarbs();
            cutReturnMacros();
            break;
        case 2:
            console.log("Maintaining");
            getWeight();
            maintainCals();
            maintainProtein();
            maintainFat();
            maintainCarbs();
            maintainReturnMacros();
        case 3:
            console.log("Bulking");
            getWeight();
            bulkCals();
            bulkProtein();
            bulkFat();
            bulkCarbs();
            bulkReturnMacros();
    }
}


//Running Functions
cutMaintainBulk();