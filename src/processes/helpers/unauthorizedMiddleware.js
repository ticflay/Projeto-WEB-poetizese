export default function UnauthorizedMiddleware(request) {
  request.on("error", function error(err) {
    if (err.response.unauthorized) {
      localStorage.removeItem("session");
      if (window.location.pathname !== "/signin")
        window.location.replace("/signin");
    }
  });
}
