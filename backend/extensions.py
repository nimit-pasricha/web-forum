from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy

# Initialize extensions here
db = SQLAlchemy()
jwt = JWTManager()
