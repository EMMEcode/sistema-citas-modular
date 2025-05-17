document.getElementById('formulario').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const datos = {
      nombre: document.getElementById('nombre').value,
      apellidos: document.getElementById('apellido').value,
      telefono: document.getElementById('telefono').value,
      doctor: document.getElementById('doctor').value,
      fecha: document.getElementById('fecha').value,
      hora: document.getElementById('hora').value
    };
  
    try {
      const res = await fetch('https://sistema-citas-modular.up.railway.app/reservar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });
  
      const mensaje = document.getElementById('mensaje');
      if (res.ok) {
        mensaje.textContent = '✅ Cita agendada con éxito';
        mensaje.style.color = 'green';
      } else {
        mensaje.textContent = '❌ Error al agendar la cita';
        mensaje.style.color = 'red';
      }
    } catch (err) {
      const mensaje = document.getElementById('mensaje');
      mensaje.textContent = '❌ Error de conexión';
      mensaje.style.color = 'red';
      console.error(err);
    }
  });
  