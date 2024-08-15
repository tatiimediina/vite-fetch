export const fetchData = async(req,res)=>{
    try {
    const response = await fetch('http://localhost:3000/tasks');
    const data = await response.json();

    // Limpiar la tabla antes de agregar nuevos datos
    bodyTable.innerHTML = '';

    data.forEach(task => {
      const row = document.createElement('tr');
      const id = document.createElement('td');
      const title = document.createElement('td');
      const description = document.createElement('td');
      const isComplete= document.createElement('td');

      id.textContent = task.id;
      title.textContent = task.title;
      description.textContent = task.description;
      isComplete.textContent = task.isComplete;

      row.appendChild(id);
      row.appendChild(title);
      row.appendChild(description);
      row.appendChild(isComplete);

      bodyTable.appendChild(row);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    
    bodyTable.innerHTML = 'Error al cargar los datos.';
  }
}

// Llama a la función fetchData cuando la página se cargue
window.onload = fetchData;