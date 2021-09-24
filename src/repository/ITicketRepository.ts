import { TicketDTO } from "../dto/TicketDTO";

export interface ITicketRepository {
    bookTicket(ticket: TicketDTO): boolean | Promise<boolean>;
}