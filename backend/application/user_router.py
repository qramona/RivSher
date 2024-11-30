from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from uuid import UUID, uuid4
from typing import Dict, List

router = APIRouter()


class User(BaseModel):
    id: UUID = uuid4()
    phone: str
    role: str


users: Dict[UUID, User] = {}


@router.post("/user", response_model=User)
async def create_user(phone: str, role: str):
    new_user = User(phone=phone, role=role)
    users[new_user.id] = new_user
    return new_user


@router.get("/user/{user_id}", response_model=User)
async def get_user(user_id: UUID):
    if user_id in users:
        return users[user_id]
    raise HTTPException(status_code=404, detail="User not found")


@router.get("/users", response_model=List[User])
async def get_all_users():
    return list(users.values())


@router.put("/user/{user_id}", response_model=User)
async def update_user(user_id: UUID, phone: str| None = None, role: str |None = None):
    if user_id not in users:
        raise HTTPException(status_code=404, detail="User not found")
    user = users[user_id]
    if phone is not None:
        user.phone = phone
    if role is not None:
        user.role = role
    return user


@router.delete("/user/{user_id}", response_model=User)
async def delete_user(user_id: UUID):
    if user_id not in users:
        raise HTTPException(status_code=404, detail="User not found")
    deleted_user = users.pop(user_id)
    return deleted_user
