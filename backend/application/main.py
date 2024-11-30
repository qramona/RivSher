import uvicorn
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
from datetime import datetime
from uuid import UUID, uuid4
from typing import Dict

from fastapi.responses import ORJSONResponse


from trip_router import router as trip_router
from user_router import router as user_router


from dock_router import router as dock_router

app = FastAPI(
    default_response_class=ORJSONResponse,
)
app.include_router(trip_router)
app.include_router(dock_router)
app.include_router(user_router)


if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="localhost",
        port=8001,
        reload=True,
    )
