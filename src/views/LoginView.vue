<script setup>
import { ref } from 'vue'

let contenido = ref(false)

let usuariosLog = [
    {
        nombre: "Amanda",
        apellido: "Huerta",
        edad: 18,
        email: "example@gmail.com",
        password: "1234",
        intereses:{},
        esAdmin:true
    },
    {
        nombre: "Ricardo",
        apellido: "Tomas",
        edad: 23,
        email: "example2@gmail.com",
        password: "2345",
        intereses:{},
        esAdmin:true
    },
    {
        nombre: "Miguel",
        apellido: "Cabrera",
        edad: 20,
        email: "example3@gmail.com",
        password: "3456",
        intereses:{},
        esAdmin:true
    },
    {
        nombre: "Jackeline",
        apellido: "Ramirez",
        edad: 24,
        email: "example4@gmail.com",
        password: "4567",
        intereses:{},
        esAdmin:true
    },
    {
        nombre: "Maria",
        apellido: "Diaz",
        edad: 19,
        email: "example5@gmail.com",
        password: "5678",
        intereses:{},
        esAdmin:true
    },
    {
        nombre: "Lupita",
        apellido: "Martinez",
        edad: 43,
        email: "example6@gmail.com",
        password: "6789",
        intereses:{},
        esAdmin:true
    },
    {
        nombre: "Mayer",
        apellido: "Bautista",
        edad: 44,
        email: "example7@gmail.com",
        password: "1011",
        intereses:{},
        esAdmin:true
    },
    {
        nombre: "Sara",
        apellido: "Guzman",
        edad: 20,
        email: "example8@gmail.com",
        password: "1213",
        intereses:{},
        esAdmin:true
    },
    {
        nombre: "Rocio",
        apellido: "Estrella",
        edad: 65,
        email: "example9@gmail.com",
        password: "1415",
        intereses:{},
        esAdmin:true
    }
        
]



const log = ref({
    email: "",
    password: "",
})




function login(event) {
    event.preventDefault()
    if (usuariosLog.value.email == log.email && usuariosLog.value.password == log.password) {
        contenido.value = true
    } else {
        alert('Usuario o contraseña invalidos')
    }
    }
</script>

<template >
<main>
    <section>
        <div >
            <form>
            <div class="mb-3">
                <label for="formUser" class="form-label">Correo</label>
                <input type="text" class="form-control" id="formUser" placeholder="Example input placeholder" v-model="log.email">
            </div>
            <div class="mb-3">
                <label for="formpass" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="formpass"  v-model="
                log.password">
            </div>
            <input type="submit" value="Guardar" @click="login" class="boton btn-principal btn btn-outline-success ">
            </form>
        </div>
    </section>
</main>

</template>