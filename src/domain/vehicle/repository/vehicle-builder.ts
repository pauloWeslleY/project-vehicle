import { VehicleRepository } from "./vehicle-repository";

interface IVehicleBuilder {
  buildVehicle(props: VehicleRepository): VehicleRepository
}

export class VehicleBuilder implements IVehicleBuilder {
  buildVehicle(props: VehicleRepository): VehicleRepository {
    return new VehicleRepository(props)
  }
}