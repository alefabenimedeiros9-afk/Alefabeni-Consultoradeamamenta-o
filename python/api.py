"""Exemplo opcional de API Python com FastAPI.
Instalação: pip install fastapi uvicorn
Execução: uvicorn api:app --reload --port 8000
"""
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

app = FastAPI(title="API Consultoria em Amamentação", version="1.0.0")

class ContactRequest(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    phone: str = Field(min_length=8, max_length=25)
    topic: str = Field(min_length=2, max_length=160)
    message: str = Field(default="", max_length=3000)

@app.get("/api/health")
def health():
    return {"status": "ok"}

@app.post("/api/contact", status_code=202)
def create_contact(contact: ContactRequest):
    # TODO: persistir com segurança somente se necessário e autorizado.
    if not contact.name.strip() or not contact.phone.strip():
        raise HTTPException(status_code=400, detail="Dados inválidos")
    return {"received": True, "message": "Contato recebido para processamento."}
