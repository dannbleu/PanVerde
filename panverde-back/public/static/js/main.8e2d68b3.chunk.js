(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){e.exports=a(162)},127:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(39),l=a.n(c),o=(a(127),a(8)),i=a(9),s=a(11),u=a(10),m=a(12),d=a(37),p=a(97),h=(a(57),a(14)),g=function(e){var t=e.src,a=e.alt,n=e.description,c=e.route;return r.a.createElement("li",null,r.a.createElement("img",{src:t,alt:a,"uk-cover":"true"}),r.a.createElement("div",{className:"uk-position-center uk-position-small uk-text-center"},r.a.createElement(h.b,{to:"".concat(c)},r.a.createElement("h1",{className:"uk-heading-large","uk-slideshow-parallax":"x: 100,-100"},a," ")),r.a.createElement("p",{"uk-slideshow-parallax":"x: 200,-200"},n)))},E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"uk-section uk-section-muted uk-padding-small uk-padding-remove-left uk-padding-remove-right "},r.a.createElement("div",{className:"uk-container uk-container-large"},r.a.createElement("div",{className:"uk-position-relative uk-visible-toggle uk-light",tabIndex:"-1","uk-slideshow":"animation:fade autoplay-interval:3000 pause-on-hover"},r.a.createElement("ul",{className:"uk-slideshow-items"},p.map(function(e,t){return r.a.createElement(g,Object.assign({key:t},e))})),r.a.createElement("a",{className:"uk-position-center-left uk-position-small uk-hidden-hover",href:"#","uk-slidenav-previous":"true","uk-slideshow-item":"previous"}),r.a.createElement("a",{className:"uk-position-center-right uk-position-small uk-hidden-hover",href:"#","uk-slidenav-next":"true","uk-slideshow-item":"next"}))))}}]),t}(n.Component),f=a(15),v=a.n(f),k="https://panverdeoficial.herokuapp.com/api",b=function(){return v.a.get("".concat(k,"/category/getAll")).then(function(e){return e.data}).catch(function(e){throw e.response.data})},y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={category:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;b().then(function(t){return e.setState({category:t.category})}).catch(function(e){return console.log("err",e)})}},{key:"render",value:function(){var e=this.state.category;return r.a.createElement("div",null,r.a.createElement("h1",null,"Crea Categoria"),r.a.createElement("form",null,r.a.createElement("div",{className:"uk-align-center"},r.a.createElement("div",{className:"uk-margin"},r.a.createElement("div",{className:"uk-inline"},r.a.createElement("a",{className:"uk-form-icon",href:"#","uk-icon":"icon: pencil"},"a"),r.a.createElement("label",null,"Crear Categoria",r.a.createElement("input",{className:"uk-input",type:"text"})))),r.a.createElement("div",{className:"uk-margin"},r.a.createElement("div",{className:"uk-inline"},r.a.createElement("a",{className:"uk-form-icon uk-form-icon-flip",href:"#","uk-icon":"icon: link"},"a"),r.a.createElement("label",null,"Modificar Categoria",r.a.createElement("input",{className:"uk-input",type:"text"}))))),r.a.createElement("div",{class:"uk-margin"},r.a.createElement("select",{class:"uk-select"},r.a.createElement("option",null,"Selecciona una categoria"),e.length<=0?"":e.map(function(e,t){return r.a.createElement("option",{key:t},e.category)})))))}}]),t}(n.Component),N=function(e){var t=e.name,a=e.description,n=e.price,c=(e.stock,e.images);e.category,e.user;return r.a.createElement("div",null,r.a.createElement("figure",{className:"snip1529"},r.a.createElement("img",{src:c,alt:t}),r.a.createElement("div",{className:"date"},r.a.createElement("span",{className:"day"},n)),r.a.createElement("figcaption",null,r.a.createElement("h3",null,t),r.a.createElement("p",null,a)),r.a.createElement("div",{className:"hover"},r.a.createElement("i",{className:"ion-android-open"})),r.a.createElement("a",{href:"#"})))},j="https://panverdeoficial.herokuapp.com/api",S=function(){return v.a.get("".concat(j,"/product/getAll")).then(function(e){return e.data}).catch(function(e){return e})},O=function(e){return v.a.post("".concat(j,"/product/create"),e).then(function(e){return e.data}).catch(function(e){return e})},C=function(e){return v.a.delete("".concat(j,"/product/").concat(e,"/delete")).then(function(e){return e.data.product}).catch(function(e){return e})},w=function(e){return v.a.patch("".concat(j,"/product/").concat(e._id,"/edit"),e).then(function(e){return e.data.product}).catch(function(e){return e})},x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getAllProducts=function(){S().then(function(e){return a.setState({products:e.products})}).catch(function(e){return console.log("err",e)})},a.state={products:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.getAllProducts()}},{key:"render",value:function(){var e=this.state.products;return console.log("dasdsadasd",e),r.a.createElement("div",null,r.a.createElement("div",{className:"uk-section"},r.a.createElement("div",{className:"uk-container"},r.a.createElement("h1",null,"Productos"),r.a.createElement("div",{className:"uk-grid-match uk-child-width-1-4","uk-grid":"true"},e.length>=1?e.map(function(e,t){return r.a.createElement(N,Object.assign({key:t},e))}):""))))}}]),t}(n.Component),A="https://panverdeoficial.herokuapp.com/api",P=function(e){return v.a.post("".concat(A,"/auth/login"),e).then(function(e){return e.data}).catch(function(e){throw e.response.data})},U=function(e){return v.a.post("".concat(A,"/auth/register"),e).then(function(e){return e.data}).catch(function(e){throw e.response.data})},I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={auth:{email:"",password:""}},a.handleFormSubmit=function(e){if(e.preventDefault(),0===a.state.auth.email.length)return a.setState({error:"You must enter a email"});a.onLogin(),console.log("local Storage desde Login.js: ",window.localStorage)},a.onLogin=function(){var e=a.state.auth;console.log("props desde Login.js: ",a.props),P(e).then(function(e){var t=e.token,n=e.user;"admin"===n.role?(a.props.history.push("/admin"),console.log("admin",a.props.history),localStorage.setItem("TOKEN",t),localStorage.setItem("USER",JSON.stringify(n)),a.props.setUser(n)):console.log("No eres user")}).catch(function(e){return console.log("el error login ",e),a.setState({error:e.message})})},a.handleChange=function(e){var t=a.state.auth;t[e.target.name]=e.target.value,a.setState({auth:t})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.auth,t=e.email,a=e.password,n=e.error;return r.a.createElement("div",{className:"custom-form main-container uk-section"},r.a.createElement("div",{className:"uk-container"},r.a.createElement("div",{className:"uk-align-justify"},r.a.createElement("h2",null,"Log In"),r.a.createElement("form",{className:"uk-form-stacked",onSubmit:this.handleFormSubmit},r.a.createElement("p",null,r.a.createElement("input",{className:"uk-input uk-form-width-medium",placeholder:"Email",type:"text",name:"email",value:t,onChange:this.handleChange})),r.a.createElement("p",null,r.a.createElement("input",{className:"uk-input uk-form-width-medium",placeholder:"Password",type:"password",name:"password",value:a,onChange:this.handleChange})),n&&r.a.createElement("div",{className:"uk-alert-danger","uk-alert":"true"},r.a.createElement("p",null,n)),r.a.createElement("p",null,r.a.createElement("input",{className:"uk-button uk-button-primary",type:"submit",value:"Login"}))),r.a.createElement("p",null,"Don't have an account?",r.a.createElement(h.b,{to:"/register"}," Signup")))))}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={auth:{name:"",lastname:"",email:"",username:"",password:""}},a.handleFormSubmit=function(e){if(e.preventDefault(),!a.state.auth.email.length)return a.setState({error:"You must enter an email"});a.onSignup()},a.onSignup=function(){var e=a.state.auth;U(e).then(function(e){var t=e.token,n=e.user;localStorage.setItem("TOKEN",t),localStorage.setItem("USER",JSON.stringify(n)),a.props.getUser(n),a.props.history.push("/")}).catch(function(e){return a.setState({error:e.message})})},a.handleChange=function(e){var t=a.state.auth;t[e.target.name]=e.target.value,a.setState({auth:t}),console.log(t)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.auth,a=t.name,n=t.lastname,c=t.email,l=t.username,o=t.password;return r.a.createElement("div",{className:"auth-form main-container"},r.a.createElement("h2",null,"Sign Up"),r.a.createElement("form",{className:"uk-form-stacked",onSubmit:this.handleFormSubmit},r.a.createElement("p",null,r.a.createElement("input",{className:"uk-input uk-form-width-medium",placeholder:"First Name",type:"text",name:"name",value:a,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("p",null,r.a.createElement("input",{className:"uk-input uk-form-width-medium",placeholder:"Last Name",type:"text",name:"lastname",value:n,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("p",null,r.a.createElement("input",{className:"uk-input uk-form-width-medium",placeholder:"E-mail",type:"email",name:"email",value:c,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("p",null,r.a.createElement("input",{className:"uk-input uk-form-width-medium",placeholder:"Username",type:"text",name:"username",value:l,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("p",null,r.a.createElement("input",{className:"uk-input uk-form-width-medium",placeholder:"Password",type:"password",name:"password",value:o,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("p",null,r.a.createElement("input",{className:"uk-button uk-button-primary",type:"submit",value:"Signup"}))),r.a.createElement("p",null,"Already have an account?",r.a.createElement(h.b,{to:"/login"}," Login")))}}]),t}(n.Component),J=[{id:1,src:"https://s3.amazonaws.com/media-p.slid.es/uploads/1008021/images/6284619/MenuCorregido2-min.jpg",alt:"menu espa\xf1ol"},{id:2,src:"https://s3.amazonaws.com/media-p.slid.es/uploads/1008021/images/6284618/MenuCorregido2-min-2.jpg",alt:"menu ingles"}];var D=function(){return J},_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={images:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=D();this.setState({images:e}),console.log("estado",e)}},{key:"render",value:function(){var e=this.state.images;return console.log("el render menu",this.state),r.a.createElement("div",{className:"uk-section"},r.a.createElement("div",{"uk-grid":"true",className:"uk-align-center"},e.map(function(e){var t=e.id,a=e.src,n=e.alt;return r.a.createElement("img",{key:t,src:a,alt:n})})))}}]),t}(n.Component),L=function(){return v.a.get("".concat("https://panverdeoficial.herokuapp.com/api","/sucursal/getAll")).then(function(e){return e.data}).catch(function(e){console.log("error",e)})},q=a(121),z=a(71);function W(e){var t=e.sucursales,a=Object(n.useState)({latitude:19.390846,longitude:-99.164779,width:"100vw",height:"100vh",zoom:13}),c=Object(q.a)(a,2),l=c[0],o=c[1];return console.log(t),r.a.createElement("div",null,r.a.createElement(z.c,Object.assign({},l,{mapboxApiAccessToken:"pk.eyJ1IjoiZGFubmJsZXUiLCJhIjoiY2p4Nzd2NjE3MDdraTN5bWpsaDRtODAyaiJ9.E_t0XNhrq7xdClrW9JaGww",mapStyle:"mapbox://styles/dannbleu/cjx799kpq0ls61cry2xsujbc0",onViewportChange:function(e){o(e)}}),r.a.createElement(z.a,{positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0}),t.length?t.map(function(e,t){return r.a.createElement(z.b,{key:t,latitude:e.position.coordinates[0],longitude:e.position.coordinates[1],offsetLeft:-20,offsetTop:-10},r.a.createElement("img",{src:"https://s3.amazonaws.com/media-p.slid.es/uploads/1008021/images/6286035/Webp.net-resizeimage.png",alt:"mapita"}))}):""))}a(151);var F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getAllSucursales=function(){L().then(function(e){return a.setState({sucursales:e.sucursales})}).catch(function(e){return console.log("err",e)})},a.state={sucursales:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.getAllSucursales()}},{key:"render",value:function(){var e=this.state.sucursales;return console.log("aasasadad",e),r.a.createElement("div",{style:{width:"100vw"}},r.a.createElement(W,{sucursales:e}))}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("USER"));console.log("adminnnnn",e),e&&"admin"===e.role||this.props.history.push("/login")}},{key:"render",value:function(e){return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(h.b,{to:"/adminProduct"},"Productos")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/adminCategory"},"Categorias")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/adminSucursal"},"Sucursales")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/adminHome"},"Componentes home")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/adminUsers"},"Usuarios"))))}}]),t}(n.Component),B=a(40),R=a.n(B),Y=function(e){var t=e.handleChange,a=e.handleSubmit,n=e.name,c=e.category,l=e.images,o=e.description,i=e.price,s=e.error,u=e._id;return r.a.createElement("div",null,r.a.createElement("h3",null,"Agrega un Producto"),r.a.createElement("form",{className:"uk-text-left",onSubmit:a},r.a.createElement("fieldset",{className:"uk-fieldset"},r.a.createElement("div",{className:"uk-margin"},r.a.createElement("label",null,"Nombre:"),r.a.createElement("input",{onChange:t,className:"uk-input ".concat(s?"uk-form-danger":""),type:"text",name:"name",value:n,placeholder:"Nombre del producto"})),r.a.createElement("div",{className:"uk-margin"},r.a.createElement("label",null,"Foto:"),r.a.createElement("input",{onChange:t,className:"uk-input ".concat(s?"uk-form-danger":""),type:"file",name:"images",value:l})),r.a.createElement("div",{className:"uk-margin"},r.a.createElement("label",null,"Descripcion:"),r.a.createElement("input",{onChange:t,className:"uk-input ".concat(s?"uk-form-danger":""),type:"text",name:"description",value:o,placeholder:"Agregue una descripcion"})),r.a.createElement("div",{className:"uk-margin"},r.a.createElement("label",null,"Precio:"),r.a.createElement("input",{onChange:t,className:"uk-input ".concat(s?"uk-form-danger":""),type:"number",name:"price",value:i,placeholder:"$$"})),r.a.createElement("div",{className:"uk-margin"},r.a.createElement("label",null,"Categor\xeda:"),r.a.createElement("select",{className:"uk-select",name:"category",onChange:t},r.a.createElement("option",null,"Selecciona una categor\xeda"),c.length<=0?"":c.map(function(e,t){return r.a.createElement("option",{key:t,value:e._id},e.category)})))),r.a.createElement("button",{className:"uk-button uk-button-primary"},u?"Editar":"Agregar"," Producto")),s&&r.a.createElement("div",{className:"uk-alert-danger uk-margin-small-top","uk-alert":"true"},r.a.createElement("p",null,s)))},$=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],categories:[],data:{}},a.setTodo=function(e){a.setState({product:e})},a.handleChange=function(e){var t=a.state.data;t[e.target.name]=e.target.value,a.setState({data:t})},a.handleSubmit=function(e){e.preventDefault();var t=a.state;t.product,t.data;a.onCreateProduct()},a.onEditProduct=function(e){var t=a.state,n=t.products,r=t.data;w(r).then(function(t){console.log(t),n.splice(e,1,t),t={},a.setState({products:n,product:t,error:void 0})}).catch(function(e){a.setState({error:e.message})})},a.onCreateProduct=function(){var e=a.state,t=e.products,n=e.data;console.log("data",n),O(n).then(function(e){console.log("quee",e),t.unshift(e),n={},a.setState({products:t,data:n,error:void 0})}).catch(function(e){a.setState({error:e.message})})},a.deleteProduct=function(e){var t=a.state.products;C(e).then(function(n){R.a.notification({message:'<span uk-icon="icon:check"></span> '.concat(t.name," eliminado con exito"),status:"success",pos:"top-right"}),t=t.filter(function(t){return t._id!==e}),a.setState({products:t}),console.log("para delete",t._id)})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("products")),t=JSON.parse(localStorage.getItem("category"));this.setState({categories:t}),this.setState({products:e}),console.log("product y cat",e,t)}},{key:"render",value:function(){var e=this,t=this.state,a=t.product,n=t.error,c=t.categories,l=this.state.products._id;return console.log("categorias",c),console.log("qwunsab",this.state.products),console.log("id",l),r.a.createElement("div",{className:""},r.a.createElement("h1",null,"Productos"),r.a.createElement("div",{className:"uk-section"},r.a.createElement("div",{className:"uk-container"},r.a.createElement("div",{className:"uk-grid uk-child-width-1-2","uk-grid":"true"},r.a.createElement("div",null,r.a.createElement(Y,Object.assign({},a,{category:c,error:n,handleSubmit:this.handleSubmit,handleChange:this.handleChange}))),r.a.createElement("div",null,r.a.createElement("table",{className:"uk-table uk-table-justify uk-table-divider"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{className:"uk-text-middle"},"Foto"),r.a.createElement("th",{className:"uk-text-middle"},"Nombre"),r.a.createElement("th",{className:"uk-text-middle"},"Accion"))),r.a.createElement("tbody",null,this.state.products.map(function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",{className:"uk-text-middle"},r.a.createElement("img",{src:t.images,width:"80px",alt:""})),r.a.createElement("td",{className:"uk-text-middle"},t.name),r.a.createElement("td",{className:"uk-text-middle"},r.a.createElement("button",{className:"uk-button uk-button-danger",onClick:function(){e.deleteProduct(t._id)}},"Eliminar")))}))))))))}}]),t}(n.Component),G="https://panverdeoficial.herokuapp.com/api",H=function(e){return v.a.post("".concat(G,"/pedido/create"),e).then(function(e){return e.data}).catch(function(e){return e})},K=function(e){return v.a.delete("".concat(G,"/pedido/").concat(e,"/delete")).then(function(e){return e.data.pedido}).catch(function(e){return e})},V=function(e){return v.a.patch("".concat(G,"/pedido/").concat(e._id,"/edit"),e).then(function(e){return e.data.pedido}).catch(function(e){return e})},X=a(101),Z=function(e){var t=e.handleChange,a=e.handleSubmit,n=e.email,c=(e.date,e.quantity),l=e.error;e._id;return r.a.createElement("div",null,r.a.createElement("h3",null,"Realiza una cotizaci\xf3n"),r.a.createElement("form",{className:"uk-text-left",onSubmit:a},r.a.createElement("fieldset",{className:"uk-fieldset"},r.a.createElement("div",{className:"uk-margin"},r.a.createElement("label",null,"email:"),r.a.createElement("input",{onChange:t,className:"uk-input ".concat(l?"uk-form-danger":""),type:"text",name:"email",value:n,placeholder:"proporciona un email"})),r.a.createElement("div",{className:"uk-margin"},r.a.createElement("label",null,"Productos:")),r.a.createElement("div",{className:"uk-margin"},r.a.createElement("label",null,"Cantidad:"),r.a.createElement("input",{onChange:t,className:"uk-input ".concat(l?"uk-form-danger":""),type:"number",name:"quantity",value:c})),r.a.createElement("div",{className:"uk-margin"},r.a.createElement("label",null,"Fecha de entrega:"),r.a.createElement(X.a,null))),r.a.createElement("button",{className:"uk-button uk-button-primary"},"Solicitar una cotizaci\xf3n")),l&&r.a.createElement("div",{className:"uk-alert-danger uk-margin-small-top","uk-alert":"true"},r.a.createElement("p",null,l)))},Q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],pedidos:[],data:{}},a.setTodo=function(e){a.setState({product:e})},a.handleChange=function(e){var t=a.state.data;t[e.target.name]=e.target.value,a.setState({data:t})},a.handleSubmit=function(e){e.preventDefault();var t=a.state;t.product,t.data;a.onCreatePedido()},a.onEditPedido=function(e){var t=a.state,n=t.pedidos,r=t.data;V(r).then(function(t){console.log(t),n.splice(e,1,n),n={},a.setState({pedidos:n,pedido:t,error:void 0})}).catch(function(e){a.setState({error:e.message})})},a.onCreatePedido=function(){var e=a.state,t=e.pedidos,n=e.data;console.log("data",n),H(n).then(function(e){console.log("quee",e),t.unshift(e),n={},a.setState({pedidos:t,data:n,error:void 0})}).catch(function(e){a.setState({error:e.message})})},a.deletePedido=function(e){var t=a.state.pedidos;K(e).then(function(n){R.a.notification({message:'<span uk-icon="icon:check"></span> '.concat(t.name," eliminado con exito"),status:"success",pos:"top-right"}),t=t.filter(function(t){return t._id!==e}),a.setState({pedidos:t}),console.log("para delete",t._id)})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("products"));this.setState({products:e}),console.log("product y cat",e)}},{key:"render",value:function(){var e=this.state,t=e.pedido,a=e.error,n=(e.categories,this.state.pedidos._id);return console.log("qwunsab",this.state.products),console.log("id",n),r.a.createElement("div",{className:""},r.a.createElement("h1",null,"Pedidos"),r.a.createElement("div",{className:"uk-section"},r.a.createElement("div",{className:"uk-container"},r.a.createElement("div",{className:"uk-grid uk-child-width-1-2","uk-grid":"true"},r.a.createElement("div",null,r.a.createElement(Z,Object.assign({},t,{error:a,handleSubmit:this.handleSubmit,handleChange:this.handleChange})))))))}}]),t}(n.Component),ee=function(e){var t=e.setUser,a=e.user;return r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(E,Object.assign({user:a},e))}}),r.a.createElement(d.a,{path:"/login",render:function(e){return r.a.createElement(I,Object.assign({setUser:t,user:a},e))}}),r.a.createElement(d.a,{path:"/register",render:function(e){return r.a.createElement(M,Object.assign({},e,{setUser:t,user:a}))}}),r.a.createElement(d.a,{path:"/category",render:function(e){return r.a.createElement(y,e)}}),r.a.createElement(d.a,{path:"/product",component:x}),r.a.createElement(d.a,{path:"/menu",component:_}),r.a.createElement(d.a,{path:"/sucursales",component:F}),r.a.createElement(d.a,{path:"/admin",component:T}),r.a.createElement(d.a,{path:"/adminProduct",component:$}),r.a.createElement(d.a,{path:"/pedidos",component:Q}))},te=function(){return r.a.createElement("nav",{className:"uk-navbar-container","uk-navbar":"true",style:{height:"220px"}},r.a.createElement("div",{className:"uk-container uk-position-top"},r.a.createElement("a",{className:"uk-navbar-item uk-logo",href:"/"},r.a.createElement("img",{style:{height:"200px"},src:"https://res.cloudinary.com/dannbleu/image/upload/v1561576118/pan-verde-img/logo.png",alt:"logo"}))),r.a.createElement("div",{className:"uk-container uk-position-bottom uk-padding-remove uk-margin-small barra-nav"},r.a.createElement("ul",{className:"uk-navbar-nav uk-position-center "},r.a.createElement("li",null,r.a.createElement(h.b,{to:"/product"},"productos")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/pedidos"},"Pedidos")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/expo"},"Exposiciones")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/sucursales"},"Sucursales")))))},ae=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{backgroundColor:"#A5CE39"}},r.a.createElement("footer",{className:"site-footer"},r.a.createElement("div",{className:"container uk-remove-margin-bottom"},r.a.createElement("div",{className:"uk-grid-divider uk-child-width-expand@s","uk-grid":"true"},r.a.createElement("div",null,r.a.createElement("h6",{style:{padding:"0 40px"}},"About"),r.a.createElement("p",{style:{padding:"0 40px"},className:"uk-text-justify uk-padding-remove-top"},"Una ",r.a.createElement("strong",null,"panader\xeda artesanal")," que, desde hace 10 a\xf1os, utiliza los ",r.a.createElement("strong",null,"mejores ingredientes "),"del mercado sin qu\xedmicos ni conservadores, para elaborar productos de ",r.a.createElement("strong",null,"gran calidad")," a precios ",r.a.createElement("strong",null,"accesibles")," para todos.")),r.a.createElement("div",null,r.a.createElement("h6",null,"Categories"),r.a.createElement("ul",{className:"footer-links"},r.a.createElement("li",null,r.a.createElement("a",{href:"http://scanfcode.com/category/c-language/"},"Panaderia")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://scanfcode.com/category/front-end-development/"},"Barra de cafe")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://scanfcode.com/category/back-end-development/"},"Snack Bar")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://scanfcode.com/category/java-programming-language/"},"Exposiciones")))),r.a.createElement("div",null,r.a.createElement("h6",null,"Quick Links"),r.a.createElement("ul",{className:"footer-links"},r.a.createElement("li",null,r.a.createElement("a",{href:"http://scanfcode.com/about/"},"About Us")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://scanfcode.com/contact/"},"Contact Us")),r.a.createElement("li",null,r.a.createElement("a",{href:"/menu"},"MENU"))))),r.a.createElement("hr",{style:{backgroundColor:"#A5CE39"}})),r.a.createElement("div",{className:"container",style:{backgroundColor:"#A5CE39"}},r.a.createElement("div",{className:"uk-padding-small uk-margin-remove uk-padding-remove-top uk-padding-remove-bottom uk-child-width-expand@s","uk-grid":"true"},r.a.createElement("div",{className:"uk-text-left"},r.a.createElement("p",{className:"copyright-text"},"Ciudad de Mexico, 2019")),r.a.createElement("div",null,r.a.createElement("ul",{className:"social-icons"},r.a.createElement("li",null,r.a.createElement("a",{className:"facebook",href:"#"},r.a.createElement("i",{className:"fa fa-facebook"}))),r.a.createElement("li",null,r.a.createElement("a",{className:"twitter",href:"#"},r.a.createElement("i",{className:"fa fa-twitter"}))),r.a.createElement("li",null,r.a.createElement("a",{className:"dribbble",href:"#"},r.a.createElement("i",{className:"fa fa-dribbble"}))),r.a.createElement("li",null,r.a.createElement("a",{className:"linkedin",href:"#"},r.a.createElement("i",{className:"fa fa-linkedin"})))))))))}}]),t}(n.Component),ne=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:{},category:[],product:[]},a.setUser=function(e){a.setState({user:e})},a.getAllMyData=function(){b().then(function(e){return localStorage.setItem("category",JSON.stringify(e.category))}).catch(function(e){return e}),S().then(function(e){return localStorage.setItem("products",JSON.stringify(e.products))}).catch(function(e){return e})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("user"));e&&this.setState({user:e}),this.getAllMyData()}},{key:"render",value:function(){var e=this.state.user,t=this.setUser;return r.a.createElement("div",{className:"App"},r.a.createElement(te,e),r.a.createElement("div",{className:"uk-section uk-padding-remove"},r.a.createElement(ee,{setUser:t})),r.a.createElement(ae,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=a(120),ce=a.n(re);a(158),a(161);R.a.use(ce.a);l.a.render(r.a.createElement(function(){return r.a.createElement(h.a,null,r.a.createElement(ne,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},57:function(e,t,a){},97:function(e){e.exports=[{src:"https://res.cloudinary.com/dannbleu/image/upload/v1561576529/pan-verde-img/homepmesa.jpg",alt:"Pan de Mesa",route:"/product",description:"Ingredientes frescos y listo para su mesa"},{src:"https://res.cloudinary.com/dannbleu/image/upload/v1561576587/pan-verde-img/homepdulce.jpg",alt:"Pan Dulce",route:"/product",description:"Algo dulce como postre"},{src:"https://res.cloudinary.com/dannbleu/image/upload/v1561576667/pan-verde-img/homecafe.jpg",alt:"Barra de Cafe",route:"/product",description:"Excelente cafe para complementar la experiencia de la panaderia"},{src:"https://res.cloudinary.com/dannbleu/image/upload/v1561576666/pan-verde-img/homecomida.jpg",alt:"Aperitivos",route:"/product",description:"Algo para comer"},{src:"https://res.cloudinary.com/dannbleu/image/upload/v1561576666/pan-verde-img/homepromo.jpg",alt:"Promociones",route:"/Expo",description:"Visita nuestras promociones"},{src:"https://res.cloudinary.com/dannbleu/image/upload/v1561576665/pan-verde-img/homexpo.jpg",alt:"Exposiciones",route:"/Expo",description:"Agenda un periodo para exponer o visita las exposiciones pasadas"}]}},[[122,1,2]]]);
//# sourceMappingURL=main.8e2d68b3.chunk.js.map