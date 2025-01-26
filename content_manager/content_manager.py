import uuid
from flask import Flask,  json, jsonify, render_template, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
UPLOAD_FOLDER = "images"
DATA = {}

def loadData():
    global DATA
    with open("./data.json",'r') as file:
        DATA = json.loads(file.read())
    return DATA
    
# ************* Routes ****************
@app.route('/')
def home():
    return render_template('home.html')

@app.route('/content_manager')
def content_manager():
    loadData()
    return render_template('content_manager.html')

# ************* HTTP Handle ***************

#GET_CONTENT
@app.route("/get", methods=['GET'])
def getContent():
    return loadData()

#UPDATE_CONTENT
@app.route("/update", methods=['POST'])
def updateContent():
    loadData()
    if request.method == "POST":        
        try:
            DATA["headline"] = request.form["headline"]
            DATA["about"] = request.form["about"]
            DATA["skills"] = request.form.getlist("skills")
            socials = request.form.getlist("socials")
            social_images = request.form.getlist("social-image")
            DATA["socials"] = list(zip(socials, social_images))

            with open("./data.json",'w') as file:
                json_data = json.dumps(DATA)
                file.write(json_data)  
                return jsonify(status="success", message="content updated"), 200  
        except Exception as e:
            return jsonify(status="error", message=str(e)), 500
        
#ADD_PROJECT
@app.route("/add_project",methods=['POST', 'GET'])
def addProject():
    loadData()
    if request.method == "POST":
        try:
            project = createProject()
            if(DATA.get("projects")):
                DATA["projects"].append(project)
            else:
                DATA["projects"] = [project]

            with open("./data.json",'w') as file:
                json_data = json.dumps(DATA)
                file.write(json_data) 

            return jsonify(status="success", message=f"created {project["title"]}"), 200
        except Exception as e:
            return jsonify(status="error",message=str(e)), 500

#DELETE_PROJECT
@app.route("/delete_project", methods=['POST', 'GET'])
def deleteProject():
    loadData()
    if request.method == "POST":
        try:
            id = request.form['project-name']
            project = removeProject(id)
            
            with open("./data.json",'w') as file:       
                json_data = json.dumps(DATA)                
                file.write(json_data) 

            return jsonify(status="success", message=f"deleted {project["title"]}"), 200
        except Exception as e:
            return jsonify(status="error",message=str(e)), 500


#UPDATE_PROJECT
@app.route("/update_project", methods=['POST', 'GET'])
def updateProject():
      loadData()
      if request.method == "POST":
        print(request.form)
        try:
            id = request.form['project-name']
            updateProj(id)
            
            with open("./data.json",'w') as file:       
                json_data = json.dumps(DATA)                
                file.write(json_data) 

            return jsonify(status="success", message=f"updated Project"), 200
        except Exception as e:
            print(e)
            return jsonify(status="error",message=str(e)), 500


# *********** Others *****************

def createProject():
    file = request.files["thumbnail"]
    filename = uploadFile(file)
    print("uploaded ",filename)
    project = {
        "id": str(uuid.uuid4())[:8],
        "title": request.form["title"],
        "description": request.form["description"],
        "link": request.form["link"],
        "thumbnail": f"./images/{request.files["thumbnail"].filename}"
        
    }
    return project


def removeProject(id):
    deleted = None
    for project in DATA["projects"]:
        if(project["id"] == id):
            DATA["projects"].remove(project)         
            deleted = project
    return deleted


def updateProj(id):
    for project in DATA["projects"]:
        if(project["id"] == id):
            temp = project
            
            DATA["projects"].remove(project)  
            DATA["projects"].insert(0, temp)
    

def uploadFile(file):
    allowed_extensions = {'jpg','jpeg','png','svg','gif'}
    allowed = file and file.filename.rsplit('.')[1].lower() in allowed_extensions

    if file and allowed:
        file.save(f"{UPLOAD_FOLDER}/{file.filename}")
    return file.filename


# *************** main **********************
if __name__ == "__main__":
    app.run(debug=True)
    app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

    