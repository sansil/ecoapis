webpackJsonp([2],{"+EEw":function(e,t,r){"use strict";var o=r("Z5NN");t.a={components:{AgregarPaciente:o.a}}},"5cii":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("+EEw"),a=r("foIP"),n=!1;var i=function(e){n||r("7ZFx")},l=r("VU/8")(o.a,a.a,!1,i,"data-v-764c7454",null);l.options.__file="pages/paciente/agregar-paciente.vue",t.default=l.exports},"7ZFx":function(e,t,r){var o=r("dz+W");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r("rjj0")("547a097c",o,!1,{sourceMap:!1})},"O3g+":function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,".agregar-paciente-contenedor[data-v-26131e6d]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:0;padding:32px;padding:2rem;width:40%;margin-bottom:0;min-height:100%}.container-add[data-v-26131e6d]{margin:0;min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex}",""])},Y05A:function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"container-add"},[r("div",{staticClass:"agregar-paciente-contenedor"},[r("div",[r("h3",{staticStyle:{"margin-bottom":"2rem"}},[e._v("Agregar nuevo paciente")]),e.show?r("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[r("b-form-group",{attrs:{label:"Nombre:","label-for":"exampleInput1",required:""}},[r("b-form-input",{attrs:{required:"",placeholder:"Ingrese el nombre"},model:{value:e.form.nombre,callback:function(t){e.$set(e.form,"nombre",t)},expression:"form.nombre"}})],1),r("b-form-group",{attrs:{label:"Apellido","label-for":"exampleInput2"}},[r("b-form-input",{attrs:{id:"exampleInput2",type:"text",required:"",placeholder:"Ingrese el apellido"},model:{value:e.form.apellido,callback:function(t){e.$set(e.form,"apellido",t)},expression:"form.apellido"}})],1),r("b-form-group",{attrs:{label:"Cédula","label-for":"exampleInput2"}},[r("b-form-input",{attrs:{id:"exampleInput2",type:"text",required:"",placeholder:"Ingrese cédula sin puntos ni guiones"},model:{value:e.form.ci,callback:function(t){e.$set(e.form,"ci",t)},expression:"form.ci"}})],1),r("b-form-group",{attrs:{label:"Edad","label-for":"exampleInput2"}},[r("b-form-input",{attrs:{id:"exampleInput2",type:"text",required:"",placeholder:"Ingrese la edad"},model:{value:e.form.edad,callback:function(t){e.$set(e.form,"edad",t)},expression:"form.edad"}})],1),r("b-form-group",{attrs:{label:"Telefono","label-for":"exampleInput2"}},[r("b-form-input",{attrs:{id:"exampleInput2",type:"text",required:"",placeholder:"Ingrese el teléfono"},model:{value:e.form.tel,callback:function(t){e.$set(e.form,"tel",t)},expression:"form.tel"}})],1),r("b-form-group",{attrs:{label:"Grupo","label-for":"exampleInput2"}},[r("b-form-input",{attrs:{id:"exampleInput2",type:"text",required:"",placeholder:"Ingrese el tipo de grupo del paciente"},model:{value:e.form.grupo,callback:function(t){e.$set(e.form,"grupo",t)},expression:"form.grupo"}})],1),r("b-form-group",{attrs:{label:"Sexo","label-for":"exampleInput3"}},[r("b-form-select",{attrs:{id:"exampleInput3",options:e.sexos,required:""},model:{value:e.form.sexo,callback:function(t){e.$set(e.form,"sexo",t)},expression:"form.sexo"}})],1),r("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Agregar")]),r("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Cancelar")])],1):e._e()],1)])])};o._withStripped=!0;var a={render:o,staticRenderFns:[]};t.a=a},Z5NN:function(e,t,r){"use strict";var o=r("eALL"),a=r("Y05A"),n=!1;var i=function(e){n||r("d8Fx")},l=r("VU/8")(o.a,a.a,!1,i,"data-v-26131e6d",null);l.options.__file="components/paciente/AgregarPaciente.vue",t.a=l.exports},d8Fx:function(e,t,r){var o=r("O3g+");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r("rjj0")("9359bff8",o,!1,{sourceMap:!1})},"dz+W":function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"",""])},eALL:function(e,t,r){"use strict";t.a={data:function(){return{date:"",form:{nombre:"",apellido:"",ci:"",edad:"",sexo:null,tel:"",pin:"12345",grupo:""},sexos:[{text:"Seleccionar",value:null},"Masculino","Femenino"],show:!0}},methods:{onSubmit:function(e){var t=this;e.preventDefault();var r=this.form;console.log(r),this.$store.dispatch("altaPaciente",r).then(function(e){e?(console.log("paciente ingresado correctamente"),t.$toasted.show("Paciente ingresado Correctamente",{theme:"primary",type:"success",position:"top-right",duration:4e3})):t.$toasted.show("Ocurrió un error",{theme:"primary",type:"error",position:"top-right",duration:4e3})})},onReset:function(e){var t=this;e.preventDefault(),this.form.nombre="",this.form.apellido="",this.form.ci="",this.form.edad="",this.form.sexo=null,this.show=!1,this.$nextTick(function(){t.show=!0})}}}},foIP:function(e,t,r){"use strict";var o=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("agregar-paciente")],1)};o._withStripped=!0;var a={render:o,staticRenderFns:[]};t.a=a}});