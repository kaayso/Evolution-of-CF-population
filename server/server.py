from flask import render_template
from flask_cors import CORS 
import connexion

#Create the app instance
app = connexion.App(__name__, specification_dir='./')
CORS(app.app)

# Read the swagger.yml file to configure the endpoints
app.add_api('swagger.yml')

#create url route in app for "/"
@app.route('/')
def home ():
	"""
	this function responds to url : localhost:5000/
	:return: the rendered template 'home.html'
	"""
	return render_template('home.html')

# If we're running in stand alone mode, run the application
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
