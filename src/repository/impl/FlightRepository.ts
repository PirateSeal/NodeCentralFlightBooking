import moment from "moment";
import { FlightCache } from "../../dto/FlightCache";
import { FlightDTO } from "../../dto/FlightDTO";
import { FlightOnDateDTO } from "../../dto/FlightOnDate";
import { IFlightRepository } from "../IFlightRepository";

export default new class FlightRepository implements IFlightRepository {

    private flightCache: FlightCache[] = [];

    getFlightCache(): FlightCache[] {
        return this.flightCache;
    }

    getAllFlights(date: Date, providers_to_hide: string[]): FlightOnDateDTO[] {
        //browse flightcache, if no instance for date then add it
        this.flightCache.forEach(f => {
            if (f.instances.find(i => moment(i.date).isSame(moment(date))) === undefined) {
                f.instances.push({
                    id: f.id,
                    departure: f.departure,
                    arrival: f.arrival,
                    price: f.price,
                    total_seats: f.total_seats,
                    provider: f.provider.toUpperCase(),
                    date: moment(date).toDate(),
                    seats_available: f.total_seats,
                    booking_url: f.booking_url
                });
            }
        });
        
        return this.flightCache.filter(f => !providers_to_hide.includes(f.provider.toUpperCase())).map(f => f.instances).flat().filter(f => moment(f.date).isSame(date));
    }

    createRawFlight(flight: FlightDTO): boolean {
        
        if(this.flightCache.find(f => f.id === flight.id && f.provider === flight.provider)) {
            throw new Error("Flight already exists");
        }

        this.flightCache.push({
            id: flight.id,
            departure: flight.departure,
            arrival: flight.arrival,
            price: flight.price,
            total_seats: flight.total_seats,
            provider: flight.provider,
            instances: [],
            booking_url: flight.booking_url
        });

        return true;
    }


    updateFlightOnDate(flight: FlightOnDateDTO): boolean {
        let flightCacheIndex = this.flightCache.findIndex(f => f.id === flight.id && f.provider === flight.provider);

        if(flightCacheIndex === -1) {
            throw new Error("Flight does not exist");
        }

        let instance = this.flightCache[flightCacheIndex].instances.find(f => moment(f.date).isSame(moment(flight.date)));
        if(!instance) {
            this.flightCache[flightCacheIndex].instances.push({...flight, date: moment(flight.date).toDate()});
        } else {
            instance.seats_available = flight.seats_available;     
        }   

        return true;
    }
}