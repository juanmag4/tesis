import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { ToastContainer } from "react-toastr";

export default class InscripcionParticipante extends React.Component {
    container;

    handleSubmit(e) {
        let nombre = e.target.nombre.value;
        let apellido = e.target.apellido.value;
        let legajo = e.target.legajo.value;

        if (!nombre || !apellido || !legajo) {
            debugger
            // this.container.success("Mensaje", "Titulo");
        }
    }

    callClick() {
        debugger
        // alert("funciona");
    }

    render(){
        return(
            <div>
                {/* <ToastContainer
                    ref={ref => this.container = ref}
                    className="toast-top-right"
                /> */}
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Field>
                        <label className="alignLeft">Usuario</label>
                        <div className="ui rigth icon input">
                            <i className="search icon" onClick={this.callClick}></i>
                            <input name="usuario" placeholder='Usuario'/>
                        </div>
                    </Form.Field>
                    <Form.Field>
                        <label className="alignLeft">Nombre</label>
                        <input name="nombre" placeholder='Nombre' />
                    </Form.Field>
                    <Form.Field>
                        <label className="alignLeft">Apellido</label>
                        <input name="apellido" placeholder='Apellido' />
                    </Form.Field>
                    <Form.Field>
                        <label className="alignLeft">Mail</label>
                        <div className="ui input error">
                            <input name="mail" type="text" placeholder='Mail' />
                        </div>
                    </Form.Field>
                    <div className="alignLeft">
                        <Button>
                            Permisos y Roles
                        </Button>
                        <Button type='submit'>
                            Guardar
                        </Button>
                    </div>
                </Form>
            </div>
        );
    };
}