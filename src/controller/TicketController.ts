import express from "express";
import TicketRepository from "../repository/impl/TicketRepository";

const ENDPOINT = "/flight";


const router = express.Router();

// booking a ticket
router.post(ENDPOINT, async (req, res) => {
    const ticket = await TicketRepository.bookTicket(req.body);
    res.send(ticket);
});