function cerrarYRecargar() {
    window.close();
    if (window.opener && !window.opener.closed) {
        window.opener.location.reload();
    }
}