document.getElementById('dedicatoriaForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = encodeURIComponent(this.nombre.value);
  const mensaje = encodeURIComponent(this.mensaje.value);
  window.location.href = `dedicatoria.html?nombre=${nombre}&mensaje=${mensaje}`;
});
