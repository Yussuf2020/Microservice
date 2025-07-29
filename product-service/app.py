from flask import Flask, jsonify
from db import get_connection, init_db

app = Flask(__name__)

@app.route('/products')
def products():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM products")
    rows = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify([{'id': row[0], 'name': row[1]} for row in rows])

if __name__ == '__main__':
    init_db()
    app.run(host='0.0.0.0', port=3002)
