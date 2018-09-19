webpackJsonp([5],{"8vqz":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o("kotj"),r=o("GL0W"),a=!1;var n=function(e){a||o("uei3")},s=o("VU/8")(i.a,r.a,!1,n,"data-v-9756fbc6",null);s.options.__file="pages/paciente/editar-paciente/_pacienteId/index.vue",t.default=s.exports},GL0W:function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"agregar-paciente-contenedores"},[o("div",[o("h3",{staticStyle:{"margin-bottom":"2rem"}},[e._v("Editar paciente")]),e.show?o("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[o("b-form-group",{attrs:{label:"Nombre:","label-for":"exampleInput1",required:""}},[o("b-form-input",{attrs:{required:"",placeholder:"Ingrese el nombre"},model:{value:e.form.nombre,callback:function(t){e.$set(e.form,"nombre",t)},expression:"form.nombre"}})],1),o("b-form-group",{attrs:{label:"Apellido","label-for":"exampleInput2"}},[o("b-form-input",{attrs:{id:"exampleInput2",type:"text",required:"",placeholder:"Ingrese el apellido"},model:{value:e.form.apellido,callback:function(t){e.$set(e.form,"apellido",t)},expression:"form.apellido"}})],1),o("b-form-group",{attrs:{label:"Cédula","label-for":"exampleInput2"}},[o("b-form-input",{attrs:{id:"exampleInput2",type:"text",required:"",placeholder:"Ingrese cédula sin puntos ni guiones"},model:{value:e.form.ci,callback:function(t){e.$set(e.form,"ci",t)},expression:"form.ci"}})],1),o("b-form-group",{attrs:{label:"Edad","label-for":"exampleInput2"}},[o("b-form-input",{attrs:{id:"exampleInput2",type:"text",required:"",placeholder:"Ingrese la edad"},model:{value:e.form.edad,callback:function(t){e.$set(e.form,"edad",t)},expression:"form.edad"}})],1),o("b-form-group",{attrs:{label:"Teléfono","label-for":"exampleInput2"}},[o("b-form-input",{attrs:{id:"exampleInput2",type:"text",required:"",placeholder:"Ingrese el teléfono"},model:{value:e.form.tel,callback:function(t){e.$set(e.form,"tel",t)},expression:"form.tel"}})],1),o("b-form-group",{attrs:{label:"Grupo","label-for":"exampleInput2"}},[o("b-form-input",{attrs:{id:"exampleInput2",type:"text",required:"",placeholder:"Ingrese el grupo del paciente"},model:{value:e.form.grupo,callback:function(t){e.$set(e.form,"grupo",t)},expression:"form.grupo"}})],1),o("b-form-group",{attrs:{label:"Sexo","label-for":"exampleInput3"}},[o("b-form-select",{attrs:{id:"exampleInput3",options:e.sexos,required:""},model:{value:e.form.sexo,callback:function(t){e.$set(e.form,"sexo",t)},expression:"form.sexo"}})],1),o("b-form-group",{attrs:{label:"Dispositivo","label-for":"exampleInput4"}},[o("b-form-select",{attrs:{id:"exampleInput4",options:e.dispositivos,required:""},model:{value:e.form.dispositivo,callback:function(t){e.$set(e.form,"dispositivo",t)},expression:"form.dispositivo"}})],1),o("b-button",{staticClass:"btn",attrs:{type:"submit",variant:"primary"}},[e._v("Actualizar")]),o("b-button",{staticClass:"btn",attrs:{type:"reset",variant:"secondary"}},[e._v("Cancelar")]),o("b-button",{staticClass:"btn",attrs:{variant:"danger"},on:{click:e.eliminarPaciente}},[e._v("Eliminar paciente")])],1):e._e()],1)])};i._withStripped=!0;var r={render:i,staticRenderFns:[]};t.a=r},kotj:function(e,t,o){"use strict";t.a={asyncData:function(e){return console.log(e.params.pacienteId),{pacienteId:e.params.pacienteId}},data:function(){return{form:{nombre:"",apellido:"",ci:"",edad:"",sexo:null,id:"",dispositivo:"",grupo:"",tel:""},sexos:[{text:"Seleccionar",value:null},"Masculino","Femenino"],show:!0}},mounted:function(){console.log(this.paciente),this.form.nombre=this.paciente.nombre,this.form.apellido=this.paciente.apellido,this.form.ci=this.paciente.ci,this.form.edad=this.paciente.edad,this.form.sexo=this.paciente.sexo,this.form.id=this.paciente.id,this.form.grupo=this.paciente.grupo,this.form.tel=this.paciente.tel,this.form.dispositivo=this.paciente.dispositivo},computed:{paciente:function(){return this.$store.getters.getPaciente(this.pacienteId)},dispositivos:function(){return this.$store.getters.listaDispositivosDisponibles}},methods:{onSubmit:function(e){var t=this;e.preventDefault();var o=this.form;console.log(this.form),this.$store.dispatch("actualizarPaciente",o).then(function(e){e?t.$toasted.show("Paciente actualizado Correctamente",{theme:"primary",type:"success",position:"top-right",duration:4e3}):t.$toasted.show("Ocurrió un error",{theme:"primary",type:"error",position:"top-right",duration:4e3})})},eliminarPaciente:function(){var e=this;console.log(this.pacienteId),this.$store.dispatch("eliminarPaciente",this.pacienteId).then(function(t){t?(e.$toasted.show("Paciente eliminado Correctamente",{theme:"primary",type:"success",position:"top-right",duration:4e3}),e.$router.push("/")):e.$toasted.show("Ocurrió un error",{theme:"primary",type:"error",position:"top-right",duration:4e3})})},onReset:function(e){}}}},n1yy:function(e,t,o){(e.exports=o("FZ+f")(!1)).push([e.i,".agregar-paciente-contenedores[data-v-9756fbc6]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:0;padding:32px;padding:2rem;width:40%;margin-bottom:0;min-height:100%}.btn[data-v-9756fbc6]{padding:8px;padding:.5rem;margin:8px;margin:.5rem}",""])},uei3:function(e,t,o){var i=o("n1yy");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);o("rjj0")("2da6fe7e",i,!1,{sourceMap:!1})}});