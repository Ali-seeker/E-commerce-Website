from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.user import UserCreate, Token, GoogleToken
from app.db.database import SessionLocal
from app.auth.jwt_handler import create_access_token, verify_password
from app.crud.users import get_user_by_email, create_user, create_google_user
from app.auth.google_oauth import verify_google_token

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/signup", response_model=Token)
def signup(user: UserCreate, db: Session = Depends(get_db)):
    db_user = get_user_by_email(db, user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    new_user = create_user(db, user)
    token = create_access_token({"sub": new_user.email})
    return {"access_token": token}

@router.post("/login", response_model=Token)
def login(user: UserCreate, db: Session = Depends(get_db)):
    db_user = get_user_by_email(db, user.email)
    if not db_user or not verify_password(user.password, db_user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = create_access_token({"sub": db_user.email})
    return {"access_token": token}

@router.post("/auth/google", response_model=Token)
def google_auth(payload: GoogleToken, db: Session = Depends(get_db)):
    user_info = verify_google_token(payload.token)
    if not user_info:
        raise HTTPException(status_code=400, detail="Invalid Google token")
    email = user_info["email"]
    name = user_info.get("name", "Google User")
    db_user = get_user_by_email(db, email)
    if not db_user:
        db_user = create_google_user(db, email, name)
    token = create_access_token({"sub": db_user.email})
    return {"access_token": token}
