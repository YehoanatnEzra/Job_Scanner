from flask import Flask, request, jsonify
from job_scanner import job_scanner
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/search', methods=['POST'])
def search_jobs():
    data = request.get_json()
    print("Received data:", data)
    roles = data.get('roles', [])
    levels = data.get('levels', [])
    locations = data.get('locations', [])
    sort_by = data.get('sort_by', 'location')
    limit = data.get('limit', 100)
    try:
        jobs = job_scanner(roles, levels, locations, sort_by, limit)
        print("Jobs found:", jobs)
        return jsonify({'success': True, 'results': jobs})
    except Exception as e:
        print("Error:", e)
        return jsonify({'success': False, 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
