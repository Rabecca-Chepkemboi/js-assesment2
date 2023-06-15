
class Ancestral_stories:                                  #created a class oralstories
    def __init__(self, length, moral_lesson, age_group):
        self.length = length
        self.moral_lesson = moral_lesson
        self.age_group = age_group

    def find_length(self):
        return len(self.moral_lessson)

class Fable(Ancestral_stories):
    def __init__(self, length, moral_lesson, age_group):
        super().__init__(length, moral_lesson, age_group)
        self.moral_lesson = moral_lesson

class StoryTeller:
    def __init__(self, tellers_name):
        self.tellers_name = tellers_name

    def tell_story(self, stories):
        stories = 4

        if stories <= 4:
            return"The storyteller gave less stoties"
        
        else:
            return "The storyteller gave more stories"
            
        
    
class Translator:
    def __init__(self, target_language):
        self.target_language = target_language
        target_language = "lusungu"

        if target_language != target_language:
            return"The language used was understood"
        
        else:
            return "The language used was not understood"



#QUESTION2

class Recipe:
     def __init__(self, unique_ingredients, preparation_time, cooking_method, nutritional_information):
            self.unique_ingredients = unique_ingredients
            self.preparation_time = preparation_time
            self.cooking_method = cooking_method
            self.nutritional_information = nutritional_information
    
        
class MoroccanRecipe(Recipe):
        def __init__(self, ingredients, preparation_time, cooking_method, nutritional_info, spice_level):
            super().__init__("Moroccos food recipes", ingredients, preparation_time, cooking_method, nutritional_info)
            self.spice_level = spice_level
    
        def display_recipe(self):
            super().display_recipe()
            return "Moroccan food has a long cooking mehod and more ingredients"
    
    
class EthiopianRecipe(Recipe):
    def __init__(self,ingredients, preparation_time, cooking_method, nutritional_info, injera_required):
            super().__init__("Ethiopia food recipes", ingredients, preparation_time, cooking_method, nutritional_info)
            self.injera_required = injera_required
    
    def display_recipe(self):
            super().display_recipe()
            return "Ethiopian staple food is Injera has a long cooking methodis bitter"
    
    
        
class NigerianRecipe(Recipe):
    def __init__(self,ingredients, preparation_time, cooking_method, nutritional_info, palm_oil_required):
            super().__init__("Nigeria food recipe", ingredients, preparation_time, cooking_method, nutritional_info)
            self.palm_oil_required = palm_oil_required
    
    def display_recipe(self):
            super().display_recipe()
            return " Nigerian food has a short cooking method and less recipe"


#QUESTION3

class Animal_Species:
    def __init__(self, name, migration_pattren, typical_lifespan):
        self.name = name
        self.migration_pattren = migration_pattren
        self.typicla_lifespan = typical_lifespan


class Predator(Animal_Species):
    def __init__(self, name, migration_pattren, hunting_method):
        super().__init__(name, migration_pattren)
        self.hunting_method = hunting_method


    def get_details(self):
        super().get_details()
        print(f"Preditors hunting techniques: {self.hunting_method}")


class Prey(Animal_Species):
    def __init__(self, name, migration_pattren, typical_lifespan, migration_pattern):
        super().__init__(name, migration_pattren, typical_lifespan)
        self.migration_pattern = migration_pattern

    def get_details(self):
        super().get_details()
        print(f"Changes in migration pattern: {self.migration_pattern}")
