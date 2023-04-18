import { Request, Response } from 'express';
import status from 'http-status';

import { ReservationFinder } from '../../../aplication/reservation-finder-use-case';
import { ApiResponse } from '../../../../shared/api-response';

export class ReservationFinderGetController{
    constructor( private readonly _reservationFinder: ReservationFinder){}

    // async run() Continuar código. 
}
