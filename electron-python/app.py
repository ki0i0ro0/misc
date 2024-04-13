from flask import Flask, render_template

app = Flask(__name__, instance_relative_config=True)

@app.route("/", methods=("GET", "POST"))
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000)
