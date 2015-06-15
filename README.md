#event-control

## Crear la base de datos
* crear la base de datos **events**
* ejecutar el siguiente SQL Script:
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

- crear usuarios (cualquiera puede ser usuarios) **done**
- create un evento **done**
- editar datos personales
- administrador **done**
  - registrar charlas **done**
  - editar charlas
  - eliminar charlas **done**
  - añadir staff
  - añadir participante **done**
    - añadir participante con fotos **done**
    - recolectar los siguiente datos **done**
      - name **requerido**
      - cel
      - email
      - ci
      - address
- staff
  - llamar lista **done**
  - llamar lista de forma alfabetica **done**
  - agregar participante **done**
- reportes
  - total de participante por evento


## API docs
```
/api/events/event/ POST | GET
/api/events/event/id/:eventId GET
/api/events/event/id/:eventId DELETE

/api/events/talk/id/:eventId GET | POST
/api/events/talk/id/:eventId/talk/:talkId GET | POST
/api/events/talk/id/:eventId/talk/:talkId DELETE

/api/events/participant/id/:eventId GET
/api/events/participant/id/:eventId POST
/api/events/participant/id/:eventId DELETE
/api/events/participant/eventId/7/participantId/6

```
