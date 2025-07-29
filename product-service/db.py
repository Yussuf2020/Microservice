import psycopg2

def get_connection():
    return psycopg2.connect(
        host="postgres",
        database="microdemo",
        user="user",
        password="password"
    )

def init_db():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL
        )
    """)
    cur.execute("INSERT INTO products (name) VALUES ('Laptop'), ('Phone') ON CONFLICT DO NOTHING")
    conn.commit()
    cur.close()
    conn.close()
