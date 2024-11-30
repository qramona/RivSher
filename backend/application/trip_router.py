from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from uuid import UUID, uuid4
from datetime import datetime
from typing import Dict, List

router = APIRouter()

orders: Dict[UUID, dict] = {}


class TripRequest(BaseModel):
    departure_point: str
    arrival_point: str
    transport_type: str
    passengers_count: int
    date: datetime


class TripResponse(TripRequest):
    id: UUID


class TripUpdate(BaseModel):
    departure_point: str | None = None
    arrival_point: str | None = None
    transport_type: str | None = None
    passengers_count: int | None = None
    date: datetime | None = None


@router.post("/trip", response_model=TripResponse)
async def create_trip(trip: TripRequest):
    trip_id = uuid4()
    new_trip = trip.model_dump()
    new_trip["id"] = trip_id
    orders[trip_id] = new_trip
    return TripResponse(**new_trip)


@router.get("/trips", response_model=List[TripResponse])
async def list_trips():
    return [TripResponse(**trip) for trip in orders.values()]


@router.get("/trip/{trip_id}", response_model=TripResponse)
async def get_trip(trip_id: UUID):
    if trip_id not in orders:
        raise HTTPException(status_code=404, detail="Trip not found")
    return TripResponse(**orders[trip_id])


@router.put("/trip/{trip_id}", response_model=TripResponse)
async def update_trip(trip_id: UUID, trip_update: TripUpdate):
    if trip_id not in orders:
        raise HTTPException(status_code=404, detail="Trip not found")

    current_trip = orders[trip_id]
    update_data = trip_update.model_dump(exclude_unset=True)
    updated_trip = {**current_trip, **update_data}
    orders[trip_id] = updated_trip
    return TripResponse(**updated_trip)


@router.delete("/trip/{trip_id}")
async def delete_trip(trip_id: UUID):
    if trip_id not in orders:
        raise HTTPException(status_code=404, detail="Trip not found")
    del orders[trip_id]
    return {"message": "Trip deleted successfully"}
