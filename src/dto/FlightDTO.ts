export interface FlightDTO {
    id: string;
    departure: string;
    arrival: string;
    price: number;
    total_seats: number;
    provider: string;
    booking_url: string;
}