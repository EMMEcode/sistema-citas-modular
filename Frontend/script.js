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
      const res = await fetch('/reservar', {
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
      console.error(err);
    }
  });
  