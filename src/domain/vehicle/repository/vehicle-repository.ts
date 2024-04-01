export class VehicleRepository {
  public plate: string
  public dieselLimit: number
  public currentDiesel: number
  public rfid: boolean
  public recognized: boolean

  constructor(props: VehicleRepository) {
    this.plate = props.plate
    this.dieselLimit = props.dieselLimit
    this.rfid = props.rfid;
    this.recognized = props.recognized;
    this.currentDiesel = props.currentDiesel;
  }
}