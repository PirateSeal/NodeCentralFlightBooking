import { TicketDTO } from "../../dto/TicketDTO";
import { ITicketRepository } from "../ITicketRepository";
import FlightRepository from "./FlightRepository";
import axios from "axios";

export default new class TicketRepository implements ITicketRepository {
    async bookTicket(ticket: TicketDTO): Promise<boolean> {
        let flights = FlightRepository.getFlightCache();
        //get ticket flight from flights
        let flight = flights.find(f => f.id === ticket.flight_id);
        if (flight) {
            let response = await axios.post(
                flight.booking_url,
                ticket
            );
            if(response.status >= 200 && response.status < 300) {
                return true;
            } else return false;
        }

        return false;
    }
    
}