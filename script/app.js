let todo = document.getElementById('contenido');
        let spin = document.getElementById('load');
        let muestra = document.getElementById('loadTerminado');
        const urlApi = 'https://restcountries.eu/rest/v2/all'
        fetch(urlApi)
            .then(resp => resp.json())
            .then(datos => {
                console.log(datos)
                tabla(datos)
            })
        function tabla(data) {
            console.log(data[0].name)
            contenido.innerHTML = ''
            for (let item of data) {

                contenido.innerHTML += `
                        <tr>
                            <td>${item.name}</td>
                            <td>${item.region}</td>
                            <td>${item.population}</td>
                            <td> <img src="${item.flag}" alt="..." class="img-thumbnail" width="40" height="40" ></td>
                         </tr>
                        
                        `
            }
            //carga estilos de tabla
            $('#table_id').DataTable();
            //loder
            spin.style='display:none';
            muestra.style='display:block';
        } 