import { VehicleRepository } from "../../vehicle/repository";

interface IRFID {
  RFIDReader(data: VehicleRepository): void
  dispenseDiesel(vehicleData: VehicleRepository): void
  isVehicleRecognized(vehicleData: VehicleRepository): boolean
  rfidVerifyReader(vehicleData: VehicleRepository): void
}

export class RFID implements IRFID {
  dispenseDiesel(vehicleData: VehicleRepository): void {
    const limitData = vehicleData.dieselLimit
    const limit = 250

    while (vehicleData.currentDiesel < limit) {
      vehicleData.currentDiesel += 1
      console.log(vehicleData.currentDiesel)
    }

    console.log("Diesel dispensing stopped")
  }

  isVehicleRecognized(vehicleData: VehicleRepository): boolean {
    if (vehicleData) {
      return true
    }

    return false
  }

  rfidVerifyReader(vehicleData: VehicleRepository): void {
    if (this.isVehicleRecognized(vehicleData)) {
      vehicleData.recognized = true;

      // Dispense diesel up to the predefined limit
      this.dispenseDiesel(vehicleData)

    } else {
      console.log("Vehicle not recognized.");
    }
  }

  RFIDReader(data: VehicleRepository): void {
    setInterval(() => {
      this.rfidVerifyReader(data)
    }, 1000);
  }
}