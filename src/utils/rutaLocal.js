export const rutaLocal = (url) => {
    if (!url) return "";
    const limpia = url.trim();
    if (limpia.startsWith("/images/")) return limpia;
    const nombre = limpia.split("/").pop().trim();
    return `/images/${nombre}`;
};