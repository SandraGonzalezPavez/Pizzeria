let carrito = []; 

function asignarEventos() {
    const items = [
        { id: 'martini', nombre: 'Martini', precio: 2550 },
        { id: 'cappuccino', nombre: 'Cappuccino', precio: 1370 },
        { id: 'latte', nombre: 'Latte', precio: 1350 },
        { id: 'mojito', nombre: 'Mojito', precio: 2290 },
        { id: 'ensaladaRiso', nombre: 'Insalata de riso', precio: 6750 },
        { id: 'ensaladaCipollotti', nombre: 'Insalata ai cipollotti', precio: 5990 },
        { id: 'ensaladaCaprese', nombre: 'Insalata caprese', precio: 8250 }
    ];

    
    items.forEach(item => {
        const checkbox = document.getElementById(item.id);
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                carrito.push(item); 
            } else {
                carrito = carrito.filter(i => i.id !== item.id); 
            }
            actualizarCarrito(); 
        });
    });
}

function actualizarCarrito() {
    const tabla = document.getElementById("finalizarCompra");
    let total = 0;

    
    tabla.innerHTML = `
      <tr>
        <th>Item</th>
        <th>Precio</th>
      </tr>
    `;

    
    carrito.forEach(item => {
        const row = tabla.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = item.nombre;
        cell2.textContent = `$${item.precio.toLocaleString('es-CL')}`;
        total += item.precio;
    });

    
    const rowTotal = tabla.insertRow();
    const cellTotal1 = rowTotal.insertCell(0);
    const cellTotal2 = rowTotal.insertCell(1);
    cellTotal1.innerHTML = '<strong>Total</strong>';
    cellTotal2.innerHTML = `$${total.toLocaleString('es-CL')}`;
}
