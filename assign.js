
class AncestralStories {                  //created a class oralstories and its attributes
    constructor(moralLesson, ageGroup, length) {
        this.moralLesson = moralLesson;
        this.ageGroup = ageGroup;
        this.length = length;
    }

    findLength() {
        return this.moralLesson.length;  // method find length to know how long each story takes
    }
}

class Story extends AncestralStories {        //class story for diferent stories that was narrated
    constructor(ageGroup, moralLesson) {
        super(ageGroup, moralLesson);
        this.moralLesson = moralLesson;
        this.ageGroup = ageGroup
    }
}

class StoryTeller {                          //class storyteller for the person who was narrating the stories
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

class Translator {                                       //class translator for the language that was being used
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

class Recipe{                    //create class recipe with is constractors
    constructor(uniqueIngredients, preparationTime, cookingMethod, nutritionalInformation){
        this.uniqueIngredients = uniqueIngredients;
        this.preparationTime = preparationTime;
        this.cookingMethod = cookingMethod;
        this.nutritionalInformation = nutritionalInformation;
    }
}
      
class MoroccanRecipe extends Recipe{             //created class morocan recipe that inherits from class recipe

    constructor (preparationTime, cookingMethod,spice_level){
            ("Moroccos food recipes", ingredients, preparationTime, cookingMethod, nutritionalInfo)
            this.spice_level = spice_level
    }
        displayRecipe(){              //created a method display recipe to get all the details about morocan food
            console.log("Moroccan food has a long cooking mehod and more ingredients");
        }
}    
    
class EthiopianRecipe extends Recipe{      
    constructor (preparationTime, cookingMethod,spice_level){
            ("Ethiopia food recipes", ingredients, preparationTime, cookingMethod, nutritionalInfo)
            this.spice_level = spice_level
    }
        displayRecipe(){                            //created a method display recipe to get all the details about ethiopian food      
            console.log("Ethiopian staple food is Injera has a long cooking methodis bitter");
        }
    }    
        
class NigerianRecipe extends Recipe{           //created a method display recipe to get all the details about nigerian food
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
    super.getInformation()
}
console.log("Preditors hunting techniques");

class Prey extends AnimalSpecies{
    constructor(typicalLifespan, migrationPattern){
        this.migrationPattern = migrationPattern;
        this.typicalLifespan = typicalLifespan;
    }
}

getInformation(){
    super.getInformation()
}
console.log("Changes in migration pattern");
