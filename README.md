event-control

## Crear la base de datos
* crear la basedatos **events**
* ejecutar el siguiente escript:
```
# exec config/DB.md
```

## Accesos sysadmin
> user: wolf
> pass: wolf

## Roles

* Sysadmin
* usuario
* Administrador
* staff
* participante

### Historias de usuario:

- crear usuarios (cualquiera puede ser usuarios)
- create un evento
- editar datos personales
- administrador
  - registrar charlas
  - editar charlas
  - eliminar charlas
  - añadir staff
  - añadir participante
    - añadir parcipante con fotos
    - recolectar los siguiente datos
      - name **requerido**
      - cel
      - email
      - ci
      - address
- staff
  - llamar lista
  - llamar lista de forma alfabetica
  - agregar parcipante
- reportes
  - total de participante por evento
