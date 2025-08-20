function agregarCuadroEstratificacion() {
    // Verificar si el sidebar ya existe
    if (!document.getElementById('infoSidebar')) {
        // Crear el contenedor de la barra lateral
        var sidebar = document.createElement('div');
        sidebar.id = 'infoSidebar';
        
        // Crear el botón de cierre de la barra lateral
        var closeButton = document.createElement('button');
        closeButton.classList.add('close-btn');
        closeButton.textContent = '×';
        closeButton.style.float = 'right';  // Alinear el botón a la derecha
        closeButton.style.backgroundColor = '#f1f1f1';
        closeButton.style.border = 'none';
        closeButton.style.fontSize = '20px';
        closeButton.onclick = function() {
            toggleSidebar(); // Alternar para abrir/cerrar la barra lateral
        };

        // Crear el título de la barra lateral
        var title = document.createElement('h2');
        title.textContent = 'Estratificación de las Tipologías Territoriales de las Prestaciones Sociales';
        title.style.textAlign = 'center';  // Centrar el título
        title.style.fontSize = '14px';

        // Crear la tabla para los niveles
        var table = document.createElement('table');
        table.style.width = '100%';
        table.style.border = '1px solid #ddd';
        table.style.textAlign = 'justify';  // Alinear el texto a la izquierda

        // Crear el encabezado de la tabla
        var thead = document.createElement('thead');
        var headerRow = document.createElement('tr');
        var headerCell1 = document.createElement('th');
        
        headerCell1.textContent = 'Tipo';
        headerCell1.style.backgroundColor = '#2a7bf4'; // Color de fondo del encabezado
        headerCell1.style.color = '#ffffff'; // Color del texto del encabezado
        headerCell1.style.textAlign = 'center'; // Centrar el texto del encabezado
        headerCell1.style.fontWeight = 'normal'; // Eliminar la negrita
        headerCell1.style.fontSize = '12px'; // Ajustar el tamaño de la fuente
        
        var headerCell2 = document.createElement('th');
        headerCell2.textContent = 'Descripción';
        headerCell2.style.backgroundColor = '#2a7bf4'; // Color de fondo del encabezado
        headerCell2.style.color = '#ffffff'; // Color del texto del encabezado
        headerCell2.style.textAlign = 'center'; // Centrar el texto del encabezado
        headerCell2.style.fontWeight = 'normal'; // Eliminar la negrita
        headerCell2.style.fontSize = '12px'; // Ajustar el tamaño de la fuente

        // Agregar las celdas del encabezado a la fila del encabezado
        headerRow.appendChild(headerCell1);
        headerRow.appendChild(headerCell2);
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Crear el cuerpo de la tabla con las filas de los niveles
        var tbody = document.createElement('tbody');
        var levels = [
            { nivel: 'Tipología Territorial 1', descripcion: 'Concentración Muy Alta de Programas y densidad de usuarios. Mas de 500 personas con PE, concentración de 5 a más centros educativos, de 500 m de distancia al acceso vial. Pendientes de 25° a más o llanos, susceptibilidad muy alta a inundaciones, temperaturas mínimas históricas de -17 a -9°C.',color: 'rgba(230,0,0,1.0)' },
            { nivel: 'Tipología Territorial 2', descripcion: 'Concentración Alta de Programas y densidad de usuarios. De 50 a 500 personas con PE, concentración de 3 a 5 centros educativos, de 500 a 1 km de distancia al acceso vial. Pendientes menores a 1.5°, susceptibilidad alta a inundaciones, temperaturas mínimas históricas de -9 a 1°C.', color: 'rgba(255,170,0,1.0)' },
            { nivel: 'Tipología Territorial 3', descripcion: 'Concentración Media de Programas y densidad de usuarios. De 10 a 50 personas con PE, concentración de 2 a 3 centros educativos, de 1 a 2 km de distancia al acceso vial. Pendientes de 15 a 25°, susceptibilidad media a inundaciones, temperaturas mínimas históricas de 1 a 13°C.', color: 'rgba(122,182,245,1.0)' },
            { nivel: 'Tipología Territorial 4', descripcion: 'Concentración Baja de Programas y densidad de usuarios. Menos de 10 personas con PE, concentración de 2 centros educativos, de 2 a 3 km de distancia al acceso vial. Pendientes de 5 a 15°, susceptibilidad baja a inundaciones, temperaturas mínimas históricas de 13 a 15°C.', color:'rgba(250,250,138,1.0)' },
            { nivel: 'Tipología Territorial 5', descripcion: 'Concentración Muy Baja de Programas y densidad de usuarios. Personas dispersas con PE, centros educativos dispersos, de 3 a más de distancia al acceso vial. Pendientes de 1.5° a 5°, susceptibilidad muy baja a inundaciones, temperaturas mínimas históricas de 15°C a más.', color:'rgba(211,255,190,1.0)' },
        ];

        levels.forEach(function(level) {
            var row = document.createElement('tr');
            var cell1 = document.createElement('td');
            cell1.textContent = level.nivel;
            cell1.style.backgroundColor = level.color; // Color de fondo de la celda según la tipología
            cell1.style.color = '#000000ff'; // Color del texto para mejor contraste
            var cell2 = document.createElement('td');   
            cell2.textContent = level.descripcion;
            row.appendChild(cell1);
            row.appendChild(cell2);
            tbody.appendChild(row);
        });

        // Agregar el cuerpo de la tabla al elemento de la tabla
        table.appendChild(tbody);

        // Agregar todos los elementos al sidebar
        sidebar.appendChild(closeButton);
        sidebar.appendChild(title);
        sidebar.appendChild(table);

        // Añadir el sidebar al cuerpo de la página
        document.body.appendChild(sidebar);

        // Crear y aplicar los estilos sin usar innerHTML
        var style = document.createElement('style');
        document.head.appendChild(style);

        style.textContent = `
            #infoSidebar {
                width: 350px;
                height: 100%;
                position: absolute;
                bottom: 0;
                left: -300px;  /* Oculto inicialmente */
                background-color: rgba(255, 255, 255, 0.9);
                padding: 20px;
                z-index: 999;
                box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
                transition: left 0.3s ease-in-out;
                overflow-y: auto; /* Agregar scroll si el contenido es largo */
            }
            #infoSidebar h2 {
                margin-top: 0;
                font-size: 18px;
                font-weight: bold;
            }
            #infoSidebar .close-btn {
                background-color: #f1f1f1;
                padding: 5px;
                border: none;
                font-size: 18px;
                cursor: pointer;
                text-align: right;
            }
            table {
                width: 100%;
                border-collapse: collapse;
            }
        `;
    }



// Crear el botón para mostrar/ocultar el sidebar
    var sidebarToggleButton = document.createElement('button');
    sidebarToggleButton.textContent = 'Estratificación';
    sidebarToggleButton.style.position = 'absolute';
    sidebarToggleButton.style.top = '10px';
    sidebarToggleButton.style.right = '10px';
    sidebarToggleButton.style.padding = '10px';
    sidebarToggleButton.style.backgroundColor = '#007bff';
    sidebarToggleButton.style.color = '#fff';
    sidebarToggleButton.style.border = 'none';
    sidebarToggleButton.style.fontSize = '14px';
    sidebarToggleButton.style.cursor = 'pointer';
    sidebarToggleButton.onclick = function() {
        toggleSidebar();  // Alterna la visibilidad del sidebar
    };

    // Añadir el botón al cuerpo de la página
    document.body.appendChild(sidebarToggleButton);
}

// Función para alternar la visibilidad del sidebar (toggle)
function toggleSidebar() {
    const sidebar = document.getElementById('infoSidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-350px'; // Ocultar el sidebar
    } else {
        sidebar.style.left = '0'; // Mostrar el sidebar
    }
}

// Llamar a la función para agregar el cuadro de estratificación cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    agregarCuadroEstratificacion(); // Agrega el cuadro al cargar la página
});