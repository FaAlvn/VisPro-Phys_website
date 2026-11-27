// Paste public URLs between the quotes when each resource is available.
const resourceUrls = {
  arxiv: "",
  code: "",
  data: "",
};

for (const link of document.querySelectorAll("[data-resource]")) {
  const url = resourceUrls[link.dataset.resource].trim();
  if (url) {
    link.href = url;
    link.removeAttribute("aria-disabled");
  }
}

const video = document.querySelector("video");
const videoError = document.querySelector(".video-error");
video.addEventListener("error", () => {
  videoError.hidden = false;
});
videoError.hidden = !video.error;
