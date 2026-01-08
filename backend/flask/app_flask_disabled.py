from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

DB_NAME = "engagement.db"

def get_db():
    return sqlite3.connect(DB_NAME)

def init_db():
    conn = get_db()
    cur = conn.cursor()

    cur.execute("""
        CREATE TABLE IF NOT EXISTS events (
            event TEXT,
            label TEXT,
            count INTEGER NOT NULL,
            PRIMARY KEY (event, label)
        )
    """)

    conn.commit()
    conn.close()

init_db()

# ---------- TRACK ANY EVENT ----------
@app.route("/track", methods=["POST"])
def track():
    data = request.get_json()
    event = data.get("event")
    label = data.get("label")

    if not event or not label:
        return jsonify({"error": "missing event or label"}), 400

    conn = get_db()
    cur = conn.cursor()

    cur.execute("""
        INSERT INTO events (event, label, count)
        VALUES (?, ?, 1)
        ON CONFLICT(event, label)
        DO UPDATE SET count = count + 1
    """, (event, label))

    conn.commit()
    conn.close()

    return "", 204

# ---------- READ STATS ----------
@app.route("/stats")
def stats():
    conn = get_db()
    cur = conn.cursor()

    cur.execute("SELECT event, label, count FROM events")
    rows = cur.fetchall()
    conn.close()

    return jsonify([
        {"event": e, "label": l, "count": c}
        for e, l, c in rows
    ])
