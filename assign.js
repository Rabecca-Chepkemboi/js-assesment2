
class AncestralStories {                  //created a main cla ss oralStories
    constructor(moralLesson, ageGroup, length) {
        this.moralLesson = moralLesson;
        this.ageGroup = ageGroup;
        this.length = length;
    }

    findLength() {
        return this.moralLesson.length;  //Iorder to know how long does one story take
    }
}

class Story extends AncestralStories {
    constructor(ageGroup, moralLesson) {
        super(ageGroup, moralLesson);
        this.moralLesson = moralLesson;
        this.ageGroup = ageGroup
    }
}

class StoryTeller {
    constructor(tellersName) {
        this.tellersName = tellersName
    }

    tellStory(OralStories) {
        const OralStories = 4
        if (OralStories <= 4){
            console.log("The storyteller gave less stoties");
        }
        else{
            console.log("The storyteller gave more stories");
        }
        
    }
}

class Translator {
    constructor(targetLanguage) {
        this.targetLanguage = targetLanguage;
    }
}
const targetLanguage = "lusungu";

    if (targetLanguage = targetLanguage){
        console.log("The language used was understood");
    }
    else{
        console.log("The language used was not understood");
    }



//OUESTION2

class Recipe{
    constructor(uniqueIngredients, preparationTime, cookingMethod, nutritionalInformation){
        this.uniqueIngredients = uniqueIngredients;
        this.preparationTime = preparationTime;
        this.cookingMethod = cookingMethod;
        this.nutritionalInformation = nutritionalInformation;
    }
}
      
class MoroccanRecipe extends Recipe{

    constructor (preparationTime, cookingMethod,spice_level){
            ("Moroccos food recipes", ingredients, preparationTime, cookingMethod, nutritionalInfo)
            this.spice_level = spice_level
    }
        displayRecipe(){
            console.log("Moroccan food has a long cooking mehod and more ingredients");
        }
}    
    
class EthiopianRecipe extends Recipe{
    constructor (preparationTime, cookingMethod,spice_level){
            ("Ethiopia food recipes", ingredients, preparationTime, cookingMethod, nutritionalInfo)
            this.spice_level = spice_level
    }
        displayRecipe(){
            console.log("Ethiopian staple food is Injera has a long cooking methodis bitter");
        }
    }    
        
class NigerianRecipe extends Recipe{
      constructor (preparationTime, cookingMethod,spice_level){
            ("Nigeria food recipe", ingredients, preparationTime, cookingMethod, nutritionalInfo)
            this.spice_level = spice_level
    }
        displayRecipe(){
            console.log("Nigerian food has a short cooking method and less recipe");
        }
    }   


//QUESTION3    

class AnimalSpecies{
    constructor(diet, typicalLifespan, migrationPattern){
        this.diet = diet;
        this.typicalLifespan = typicalLifespan;
        this.migrationPattern = migrationPattern
    }
}

class Predator extends AnimalSpecies{
    constructor(migrationPattern, typicalLifespan, huntinhMethod){
        this.migrationPattern = migrationPattern;
        this.typicalLifespan = typicalLifespan;
        this.huntinhMethod = huntinhMethod;
    }
}
getInformation(){
    console.log("Preditors hunting techniques: {self.hunting_method}");
}

class Prey extends AnimalSpecies{
    constructor(typicalLifespan, migrationPattern){
        this.migrationPattern = migrationPattern;
        this.typicalLifespan = typicalLifespan;
    }
}

