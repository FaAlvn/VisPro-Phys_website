# Seeing Through the Feet

A static research project page for GitHub Pages. No build step or dependencies.

## Add the project files

Copy the supplied PDF to `assets/paper.pdf` and the supplied MP4 to `assets/video.mp4`. For broad browser support, use an MP4 encoded with H.264 video and AAC audio. If the file is too large for your repository, host it as a directly accessible MP4 and change the video URL and fallback link in `index.html`.

Paste your arXiv, code, and data URLs into `project.js` as they become available. An empty value leaves that resource visible and inactive.

To preview, run `python3 -m http.server 8000` in the folder and open `http://localhost:8000`.

## Publish on GitHub Pages

Copy the contents of this folder to the root of your repository and push them. Configure GitHub Pages in your repository settings to publish from the root of that branch. The page uses relative paths so the media and styles also work under a repository subpath.
