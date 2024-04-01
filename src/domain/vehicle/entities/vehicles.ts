import admin from 'firebase-admin'
import { VehicleBuilder, VehicleRepository } from '../repository'

export class Vehicle {
  protected vehicle = new VehicleBuilder()

  add(props: VehicleRepository) {
    const vehicle = this.vehicle.buildVehicle({
      plate: props.plate,
      dieselLimit: props.dieselLimit,
      rfid: props.rfid,
      recognized: props.recognized,
      currentDiesel: props.currentDiesel,
    })

    admin.firestore().collection('vehicles').add({
      dieselLimit: vehicle.dieselLimit,
      plate: vehicle.plate,
      rfid: vehicle.rfid,
      recognized: vehicle.recognized,
      currentDiesel: vehicle.currentDiesel,
    })
  }
}