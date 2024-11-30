from fastapi import APIRouter, HTTPException
from uuid import UUID
from fixtures.moscow_docks import moscow_docks

router = APIRouter()

@router.get("/dock")
async def get_dock(name: str):
    substring = name.lower()
    matching_docks = {}

    for dock_name, dock_info in moscow_docks.items():
        if substring in dock_name.lower():
            matching_docks[dock_name] = dock_info

    if not matching_docks:
        raise HTTPException(status_code=404, detail="No matching docks found")

    return matching_docks

@router.get("/dock/{dock_id}")
async def get_dock_by_id(dock_id: UUID):
    for dock_name, dock_info in moscow_docks.items():
        if dock_info["id"] == str(dock_id):
            return {dock_name: dock_info}
    raise HTTPException(status_code=404, detail="Dock not found")
