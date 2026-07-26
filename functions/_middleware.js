export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.pathname.includes(".")) {
    return context.next();
  }
  return context.env.ASSETS.fetch(new URL("/index.html", url));
}
