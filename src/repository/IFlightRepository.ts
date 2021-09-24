import { FlightDTO } from "../dto/FlightDTO";
import { FlightOnDateDTO } from "../dto/FlightOnDate";

export interface IFlightRepository {
    getAllFlights(date: Date, providers_to_hide: string[]): FlightOnDateDTO[];

    createRawFlight(flight: FlightDTO): boolean;

    updateFlightOnDate(flight: FlightOnDateDTO): boolean;

    // deleteRawFlight(id: string): Promise<void>;

    // deleteRawFlightOnDate(id: string): Promise<void>;
}
