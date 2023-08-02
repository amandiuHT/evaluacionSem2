    <script setup>
    import { RouterLink, RouterView, routerKey } from 'vue-router'
    import { ref } from 'vue'
    import { useRoute } from 'vue-router';

    const router = useRoute()

    const usuario = ref({
    nombre: '',
    apellido: '',
    edad: 0,
    email: '',
    password: '',
    intereses: [],
    admin: false,
    })


const cambioLog = () => {
    router.push('/login')
}

    function datosForm(event) {
        event.preventDefault()
        console.log(usuario.value);

    }

    </script>

    <template>
    <main>
    <section >
        <div class="container">
    <form class="row g-3" >
    <div class="col-md-6">
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="nombre" v-model="usuario.nombre">
    </div>
    <div class="col-md-6">
        <label for="apellido" class="form-label">Apellido</label>
        <input type="text" class="form-control" id="apellido" v-model="usuario.apellido">
    </div>
    <div class="col-12">
        <label for="edad" class="form-label">Edad</label>
        <input type="number" class="form-control" id="edad" placeholder="16" v-model="usuario.edad">
    </div>
    <div class="col-12">
        <label for="email" class="form-label">Correo</label>
        <input type="email" class="form-control" id="email" placeholder="Example@gmail.com" v-model="usuario.email">
    </div>
    <div class="col-md-6">
        <label for="password" class="form-label">Contraseña</label>
        <input type="password" class="form-control" id="password" v-model="usuario.password">
    </div>
    <div class="col-md-4">
        <label for="conocimientos">
        Intereses
        <br>
        <label for="HTML" class="form-label">
            <input type="checkbox" id="HTML" value="HTML" v-model="usuario.intereses"> HTML
        </label>
        <label for="CSS" class="form-label">
            <input type="checkbox" id="CSS" value="CSS" v-model="usuario.intereses"> CSS
        </label>
        <label for="JS" class="form-label">
            <input type="checkbox" id="JS" value="JS" v-model="usuario.intereses"> JavaScript
        </label>
        <label for="Vue" class="form-label">
            <input type="checkbox" id="Vue" value="Vue" v-model="usuario.intereses"> Vue.js
        </label>
        </label>
    </div>
    <div class="col-12">
        <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck" v-model="usuario.admin">
        <label class="form-check-label" for="gridCheck">
            ¿usuario admin?
        </label>
        </div>
    </div>
    <div class="d-grid gap-2 col-6 mx-auto">
        <input type="submit" value="Guardar" @click="cambioLog" class="boton btn-principal btn btn-outline-success ">
        <input type="reset" value="Borrar" class="boton btn btn-outline-danger ">
        <br>
        <div class="text-center">
        <RouterLink to="/login">Ya tengo una cuenta</RouterLink>
        </div>

    </div>
</form>
    </div>
    </section>
    </main>
    
    <RouterView />
    </template>

    <style scoped>

    </style>
