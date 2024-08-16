// Referencia al elemento de la tabla
const bodyTable = document.getElementById("tableTask");

// Función para obtener y mostrar las tareas
async function getTasks() {
  try {
    const response = await fetch("http://localhost:3000/tasks");
    const data = await response.json();

    // Limpiar la tabla
    bodyTable.innerHTML = "";

    // Crear filas para cada tarea
    data.forEach((task) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${task.id}</td>
        <td>${task.title}</td>
        <td>${task.description}</td>
        <td>${task.isComplete}</td>
        <td><button class="btn btn-success btnDelete" data-id="${task.id}">Eliminar</button>
        <button class="btn btn-primary" >Editar</button></td>
      `;
      bodyTable.appendChild(row);
      deleteTask();
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    bodyTable.innerHTML = "Error al cargar los datos.";
  }
}
// Añadir event listeners para los botones de eliminar}
async function deleteTask(req, res) {
  const deleteButtons = document.querySelectorAll(".btnDelete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const taskId = button.dataset.id; // Obtén el ID de la tarea

      try {
        const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
          method: "DELETE",
        });
        getTasks();
      } catch (error) {
        console.error("Error en la solicitud DELETE:", error);
      }
    });
  });
}

//Función para agregar una nueva tarea
async function addTask(event) {
  event.preventDefault(); // Evita el comportamiento por defecto del formulario

  const title = document.getElementById("nameTask").value;
  const description = document.getElementById("desTask").value;
  console.log(title, description);
  try {
    const response = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });

    if (response.ok) {
      console.log("Tarea agregada correctamente");
      // Actualizar la lista de tareas (opcional)
      getTasks();
    } else {
      console.error("Error al agregar la tarea:", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// Obtener las tareas al cargar la página
getTasks();

// Escuchar el evento de envío del formulario
const form = document.getElementById("FormCrear");
form.addEventListener("submit", addTask);
