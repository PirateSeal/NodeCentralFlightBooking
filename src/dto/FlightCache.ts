import { FlightOnDateDTO } from "./FlightOnDate";

export interface FlightCache {
  id: string;
  departure: string;
  arrival: string;
  price: number;
  total_seats: number;
  provider: string;
  booking_url: string;
  instances: FlightOnDateDTO[];
}
