document.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    route(e);
  }
  e.preventDefault();
});

const route = (e) => {
  window.history.pushState({}, "", e.target.href);
};

const routers = {
  "/": "index.html",
  "/contacts": "contacts.html",
  "/setings": "settings.html",
};
const handleLocation = async () => {
  const path = window.location.pathname;
  const html = await fetch(routers[path]).then((data) => data.text());
  document.getElementById("app").innerHTML = html;
};

window.route = route;
