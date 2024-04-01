import { Vehicle } from "../entities";
import { VehicleRepository } from "../repository";

export class VehicleUseCase {
  protected vehicle = new Vehicle()

  create(props: VehicleRepository) {
    this.vehicle.add(props)
  }
}