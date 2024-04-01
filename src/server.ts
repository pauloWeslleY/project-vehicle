import admin from 'firebase-admin'
import express from 'express'
import { VehicleUseCase } from './domain/vehicle/usecases';
import { RFID } from './domain/rfid/usecases';
import { VehicleBuilder } from './domain/vehicle/repository';

const rfid = new RFID()
const vehicle = new VehicleBuilder()

// var serviceAccount = require("../firebase/service-account-key.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

const app = express()

app.get('/vehicles', (req, res) => {
  admin.firestore().collection('vehicle').get().then(snapshot => {
    const vehicles = snapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
    }))

    res.json(vehicles);
  })
})

app.post('/create-vehicle', (req, res) => {
  const createVehicle = new VehicleUseCase()

  return createVehicle.create({
    rfid: false,
    plate: 'DMB7594',
    dieselLimit: 0,
    recognized: false,
    currentDiesel: 12,
  })
})

app.listen(3333, () => {

  rfid.RFIDReader(vehicle.buildVehicle({
    rfid: false,
    plate: 'DMB7594',
    dieselLimit: 0,
    recognized: false,
    currentDiesel: 12,
  }))

  console.log('Server is running on port 3333🚀')
})
