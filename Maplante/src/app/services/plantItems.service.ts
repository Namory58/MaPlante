import { Injectable } from "@angular/core";
import { PlantItem } from "../modules/plantItem";


@Injectable({
    providedIn: 'root'
})

export class PlantItemsService {

    private listPlantes: PlantItem[] = [
        new PlantItem('monstera', 'classique', '1ed', 2, 3, 'assets/monstera.jpg', 15),
        new PlantItem('ficus lyrata', 'classique', '2ab', 3, 1, 'assets/lyrata.jpg', 16),
        new PlantItem('pothos argenté', 'classique', '3sd', 1, 2, 'assets/pothos.jpg', 9),
        new PlantItem('calathea', 'classique', '4kk', 2, 3, 'assets/calathea.jpg', 20),
        new PlantItem('olivier', 'extérieur', '5pl', 3, 1, 'assets/olivier.jpg', 25),
        new PlantItem('cactus', 'plante grasse', '8fp', 2, 1, 'assets/cactus.jpg', 6),
        new PlantItem('basilique', 'extérieur', '7ie', 2, 3, 'assets/basil.jpg', 5),
        new PlantItem('succulente', 'plante grasse', '9vn', 2, 1, 'assets/succulent.jpg', 8),
        new PlantItem('menthe', 'extérieur', '6uo', 2, 2, 'assets/mint.jpg', 4)

    ];

    getPlantItems(): PlantItem[] {
        return this.listPlantes;
    }
    getPlantItemById(id: string): PlantItem | undefined {
        return this.listPlantes.find(plant => plant.id === id);
    }
}