from flask import Flask

app = Flask(__name__)

@app.route("/")

@app.route("/home")
def home():
    return ("fb_testing.html")

if __name__ == '__main__':
    app.run(debug= True,port=5500)