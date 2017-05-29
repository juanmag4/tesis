# Competencia de Programación

## Instalación y entorno

### Usando meteor en Windows

Para usar meteor desde el shell que viene con Git (MINGW64) hay que tener en cuenta que el instalador de meteor agrega un archivo meteor.bat al PATH pero sólo se ejecuta en el SHELL que viene por defecto con Windows (CMD).

Para ejecutar el comando en el Git shell lo que hay que ejecutar es `$ cmd //c meteor.bat`


Lo mejor sería crear un archivo script llamado `meteor` y meterlo en el mismo directorio en donde está meteor.bat con el siguiente contenido:

```sh
#!/bin/sh
cmd //c "$0.bat" "$@"
```
