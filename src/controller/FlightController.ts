import express from "express";
import FlightRepository from "../repository/impl/FlightRepository";
const ENDPOINT = "/flight";


const router = express.Router();


//Get all flights
router.get(ENDPOINT, async (req, res) => {
    let date = new Date(req.query.date as string);
    let flights = await FlightRepository.getAllFlights(date, req.query.providersToHide ? (req.query.providersToHide as string).split(",") : []);
    res.send(flights);
});

//Create raw flight
router.post(ENDPOINT, async (req, res) => {
    let flight = req.body;
    let result = await FlightRepository.createRawFlight(flight);
    res.send(result);
});

//Update flight on date
router.put(ENDPOINT, async (req, res) => {
    let flight = req.body;
    let result = await FlightRepository.updateFlightOnDate(flight);
    res.send(result);
});

    



export {router as FlightController};


