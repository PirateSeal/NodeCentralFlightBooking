import moment, { Moment } from "moment";
import { FlightDTO } from "./FlightDTO";

export interface FlightOnDateDTO extends FlightDTO {
    date: Date;
    seats_available: number;
}