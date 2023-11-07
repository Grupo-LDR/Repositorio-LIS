function closeAndReload() {
    window.close();
    if (window.opener && !window.opener.closed) {
        window.opener.location.reload();
    }
}
function closeOnly() {
    window.close();
}