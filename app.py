from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/experience')
def experience():
    return render_template('experience.html')

@app.route('/education')
def education():
    return render_template('education.html')

@app.route('/skills')
def skills():
    return render_template('skills.html')

@app.route('/background')
def background():
    return render_template('background.html')

# 確保 `projects` 路由存在
@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/resume')
def resume():
    return send_from_directory('static', 'resume.pdf', as_attachment=True)



if __name__ == '__main__':
    app.run(debug=True)



