from http.server import BaseHTTPRequestHandler, HTTPServer
import urllib.request
import json

APP_ID = "1642150"

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path.startswith("/bandsintown"):
            url = (
                "https://rest.bandsintown.com/v3/events/search"
                "?location=Denver,CO"
                "&radius=50"
                f"&app_id={APP_ID}"
            )

            with urllib.request.urlopen(url) as response:
                data = response.read()

            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(data)
        else:
            self.send_response(404)
            self.end_headers()

HTTPServer(("0.0.0.0", 8081), Handler).serve_forever()
