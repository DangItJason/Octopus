(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,a,t){},25:function(e,a,t){e.exports=t.p+"static/media/logo3.54ab5a1c.png"},26:function(e,a,t){e.exports=t.p+"static/media/logo2.b69e469a.png"},28:function(e,a,t){e.exports=t(40)},33:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(23),i=t.n(c),s=(t(33),t(16)),m=t(12),r=t(13),o=t(15),d=t(14),E=t(41),u=t(42),h=t(43),f=t(44),p=t(45),N=t(46),v=t(10),g=(t(21),function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).state={name:"",email:"",password:"",login:null},e.handleChange=function(a){e.setState(Object(s.a)({},a.target.name,a.target.value))},e.handleAuthentication=function(a){a.preventDefault(),fetch("http://localhost:9000/login",{method:"post",body:JSON.stringify(e.state),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(a){return e.setState({login:a},(function(){!0===e.state.login.result?(console.log("Sucessful login"),e.props.history.push({pathname:"/home",name:e.state.name,email:e.state.email})):!1===e.state.login.result&&console.log("Incorrect credentials")}))}))},e}return Object(r.a)(t,[{key:"render",value:function(){return n.a.createElement(E.a,{className:"loginContainer",fluid:"sm"},n.a.createElement(u.a,{onSubmit:this.handleAuthentication},n.a.createElement(h.a,{className:"loginText"},"Login"),n.a.createElement(f.a,{row:!0},n.a.createElement(p.a,{type:"email",name:"email",placeholder:"email"})),n.a.createElement(f.a,{row:!0},n.a.createElement(p.a,{type:"password",name:"email",placeholder:"password"})),n.a.createElement(N.a,{color:"danger",type:"submit"},"Sign In"),n.a.createElement("div",null,"Don't have an accout? Click ",n.a.createElement(v.b,{to:"/signup"},"here"))))}}]),t}(l.Component)),w=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).state={first_name:"",last_name:"",email:"",password:"",visible:!1},e.handleChange=function(a){e.setState(Object(s.a)({},a.target.name,a.target.value))},e.isPasswordValid=function(a){return!(e.state.password.length<8)||(e.setState({visible:!0}),!1)},e.handleSubmit=function(a){a.preventDefault(),e.isPasswordValid()&&e.submitUser()},e}return Object(r.a)(t,[{key:"submitUser",value:function(){fetch("http://localhost:9000/signup",{method:"post",body:JSON.stringify(this.state),headers:{"Content-Type":"application/json"}})}},{key:"render",value:function(){return n.a.createElement(E.a,{className:"loginContainer",fluid:"sm"},n.a.createElement(u.a,{onSubmit:this.handleSubmit},n.a.createElement(h.a,{className:"loginText"},"Sign Up"),n.a.createElement(f.a,{row:!0},n.a.createElement(p.a,{type:"text",className:"form-control",name:"first_name",placeholder:"first name",value:this.state.first_name,onChange:this.handleChange})),n.a.createElement(f.a,{row:!0},n.a.createElement(p.a,{type:"text",className:"form-control",name:"last_name",placeholder:"last name",value:this.state.last_name,onChange:this.handleChange})),n.a.createElement(f.a,{row:!0},n.a.createElement(p.a,{type:"email",className:"form-control",name:"email",placeholder:"email",value:this.state.email,onChange:this.handleChange})),n.a.createElement(f.a,{row:!0},n.a.createElement(p.a,{type:"password",className:"form-control",name:"password",placeholder:"password",value:this.state.password,onChange:this.handleChange})),n.a.createElement(N.a,{color:"danger",type:"submit"},"Create Account"),n.a.createElement("div",null,"Already have an account? Click ",n.a.createElement(v.b,{to:"/login"},"here"))))}}]),t}(l.Component),y=(t(39),t(25)),b=t.n(y),x=t(26),I=t.n(x),k=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("header",{id:"header-wrap"},n.a.createElement("nav",{className:"navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar"},n.a.createElement("div",{className:"container"},n.a.createElement("a",{href:"index.html",className:"navbar-brand"},n.a.createElement("img",{src:I.a,alt:!0})),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("i",{className:"lni-menu"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},n.a.createElement("ul",{className:"navbar-nav mr-auto w-100 justify-content-end clearfix"},n.a.createElement("li",{className:"nav-item active"},n.a.createElement("a",{className:"nav-link",href:"#hero-area"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#services"},"Services")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#team"},"Team")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#pricing"},"Pricing")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#testimonial"},"Testimonial")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#contact"},"Contact")))))),n.a.createElement("div",{id:"hero-area",className:"hero-area-bg"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-7 col-md-12 col-sm-12 col-xs-12"},n.a.createElement("div",{className:"contents"},n.a.createElement("h2",{className:"head-title"},"In-demand RPI tutors on demand."),n.a.createElement("p",null,"Find and connect and with RPI tutors for any class with confidence on RPI's very first remote, hiring platform for students."),n.a.createElement("div",{className:"header-button"},n.a.createElement("a",{rel:"nofollow",href:"https://rebrand.ly/fusion-ud",className:"btn btn-common"},"Sign Up Now!"),n.a.createElement("a",{href:"https://www.youtube.com/watch?v=r44RKWyfcFw",className:"btn btn-border video-popup"},"Log In")))),n.a.createElement("div",{className:"col-lg-5 col-md-12 col-sm-12 col-xs-12"},n.a.createElement("div",{className:"intro-img"},n.a.createElement("img",{className:"img-fluid",src:b.a,alt:!0}))))))),n.a.createElement("section",{id:"services",className:"section-padding"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"section-header text-center"},n.a.createElement("h2",{className:"section-title wow fadeInDown","data-wow-delay":"0.3s"},"How it Works"),n.a.createElement("div",{className:"shape wow fadeInDown","data-wow-delay":"0.3s"})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 col-lg-4 col-xs-12"},n.a.createElement("div",{className:"services-item wow fadeInRight","data-wow-delay":"0.3s"},n.a.createElement("div",{className:"icon"},n.a.createElement("i",{className:"lni-cog"})),n.a.createElement("div",{className:"services-content"},n.a.createElement("h3",null,n.a.createElement("a",{href:"#"},"1. Create an account")),n.a.createElement("p",null,"Register an account through your RPI email. It's free!")))),n.a.createElement("div",{className:"col-md-6 col-lg-4 col-xs-12"},n.a.createElement("div",{className:"services-item wow fadeInRight","data-wow-delay":"0.6s"},n.a.createElement("div",{className:"icon"},n.a.createElement("i",{className:"lni-stats-up"})),n.a.createElement("div",{className:"services-content"},n.a.createElement("h3",null,n.a.createElement("a",{href:"#"},"2. Pick from a variety of tutors")),n.a.createElement("p",null,"TutorBase connects you with top RPI tutors from every core class and subject offered during the semester.")))),n.a.createElement("div",{className:"col-md-6 col-lg-4 col-xs-12"},n.a.createElement("div",{className:"services-item wow fadeInRight","data-wow-delay":"0.9s"},n.a.createElement("div",{className:"icon"},n.a.createElement("i",{className:"lni-users"})),n.a.createElement("div",{className:"services-content"},n.a.createElement("h3",null,n.a.createElement("a",{href:"#"},"3. Schedule an appointment")),n.a.createElement("p",null,"In five simple clicks, you'll have the help you need [edit later]."))))))),";",n.a.createElement("div",null,n.a.createElement("div",{className:"about-area section-padding bg-gray"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6 col-md-12 col-xs-12 info"},n.a.createElement("div",{className:"about-wrapper wow fadeInLeft","data-wow-delay":"0.3s"},n.a.createElement("div",null,n.a.createElement("div",{className:"site-heading"},n.a.createElement("p",{className:"mb-3"},"Manage Statistics"),n.a.createElement("h2",{className:"section-title"},"Detailed Statistics of your Company")),n.a.createElement("div",{className:"content"},n.a.createElement("p",null,"Praesent imperdiet, tellus et euismod euismod, risus lorem euismod erat, at finibus neque odio quis metus. Donec vulputate arcu quam. Morbi quis tincidunt ligula. Sed rutrum tincidunt pretium. Mauris auctor, purus a pulvinar fermentum, odio dui vehicula lorem, nec pharetra justo risus quis mi. Ut ac ex sagittis, viverra nisl vel, rhoncus odio."),n.a.createElement("a",{href:"#",className:"btn btn-common mt-3"},"Read More"))))),n.a.createElement("div",{className:"col-lg-6 col-md-12 col-xs-12 wow fadeInRight","data-wow-delay":"0.3s"},n.a.createElement("img",{className:"img-fluid",src:"assets/img/about/img-1.png",alt:!0}))))),n.a.createElement("section",{id:"features",className:"section-padding"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"section-header text-center"},n.a.createElement("h2",{className:"section-title wow fadeInDown","data-wow-delay":"0.3s"},"Awesome Features"),n.a.createElement("div",{className:"shape wow fadeInDown","data-wow-delay":"0.3s"})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 col-md-12 col-sm-12 col-xs-12"},n.a.createElement("div",{className:"content-left"},n.a.createElement("div",{className:"box-item wow fadeInLeft","data-wow-delay":"0.3s"},n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"lni-rocket"})),n.a.createElement("div",{className:"text"},n.a.createElement("h4",null,"Bootstrap 4 Based"),n.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."))),n.a.createElement("div",{className:"box-item wow fadeInLeft","data-wow-delay":"0.6s"},n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"lni-laptop-phone"})),n.a.createElement("div",{className:"text"},n.a.createElement("h4",null,"Fully Responsive"),n.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."))),n.a.createElement("div",{className:"box-item wow fadeInLeft","data-wow-delay":"0.9s"},n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"lni-cog"})),n.a.createElement("div",{className:"text"},n.a.createElement("h4",null,"HTML5, CSS3 & SASS"),n.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry"))))),n.a.createElement("div",{className:"col-lg-4 col-md-12 col-sm-12 col-xs-12"},n.a.createElement("div",{className:"show-box wow fadeInUp","data-wow-delay":"0.3s"},n.a.createElement("img",{src:"assets/img/feature/intro-mobile.png",alt:!0}))),n.a.createElement("div",{className:"col-lg-4 col-md-12 col-sm-12 col-xs-12"},n.a.createElement("div",{className:"content-right"},n.a.createElement("div",{className:"box-item wow fadeInRight","data-wow-delay":"0.3s"},n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"lni-leaf"})),n.a.createElement("div",{className:"text"},n.a.createElement("h4",null,"Modern Design"),n.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry"))),n.a.createElement("div",{className:"box-item wow fadeInRight","data-wow-delay":"0.6s"},n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"lni-layers"})),n.a.createElement("div",{className:"text"},n.a.createElement("h4",null,"Multi-purpose Template"),n.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."))),n.a.createElement("div",{className:"box-item wow fadeInRight","data-wow-delay":"0.9s"},n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"lni-leaf"})),n.a.createElement("div",{className:"text"},n.a.createElement("h4",null,"Working Contact Form"),n.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.")))))))),n.a.createElement("section",{id:"team",className:"section-padding bg-gray"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"section-header text-center"},n.a.createElement("h2",{className:"section-title wow fadeInDown animated","data-wow-delay":"0.3s",style:{visibility:"visible",WebkitAnimationDelay:"0.3s",MozAnimationDelay:"0.3s",animationDelay:"0.3s"}},"Meet our team"),n.a.createElement("div",{className:"shape wow fadeInDown animated","data-wow-delay":"0.3s",style:{visibility:"visible",WebkitAnimationDelay:"0.3s",MozAnimationDelay:"0.3s",animationDelay:"0.3s"}})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6 col-md-12 col-xs-12"},n.a.createElement("div",{className:"team-item wow fadeInRight animated","data-wow-delay":"0.2s",style:{visibility:"visible",WebkitAnimationDelay:"0.2s",MozAnimationDelay:"0.2s",animationDelay:"0.2s"}},n.a.createElement("div",{className:"team-img"},n.a.createElement("img",{className:"img-fluid",src:"assets/img/team/team-01.png",alt:!0})),n.a.createElement("div",{className:"contetn"},n.a.createElement("div",{className:"info-text"},n.a.createElement("h3",null,n.a.createElement("a",{href:"#"},"David Smith")),n.a.createElement("p",null,"Front-end Developer")),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur."),n.a.createElement("ul",{className:"social-icons"},n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"lni lni-facebook-filled","aria-hidden":"true"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"lni lni-twitter-filled","aria-hidden":"true"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"lni lni-instagram-filled","aria-hidden":"true"}))))))),n.a.createElement("div",{className:"col-lg-6 col-md-12 col-xs-12"},n.a.createElement("div",{className:"team-item wow fadeInRight animated","data-wow-delay":"0.4s",style:{visibility:"visible",WebkitAnimationDelay:"0.4s",MozAnimationDelay:"0.4s",animationDelay:"0.4s"}},n.a.createElement("div",{className:"team-img"},n.a.createElement("img",{className:"img-fluid",src:"assets/img/team/team-02.png",alt:!0})),n.a.createElement("div",{className:"contetn"},n.a.createElement("div",{className:"info-text"},n.a.createElement("h3",null,n.a.createElement("a",{href:"#"},"ERIC PETERSON")),n.a.createElement("p",null,"Product Designer")),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur."),n.a.createElement("ul",{className:"social-icons"},n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"lni lni-facebook-filled","aria-hidden":"true"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"lni lni-twitter-filled","aria-hidden":"true"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"lni lni-instagram-filled","aria-hidden":"true"}))))))),n.a.createElement("div",{className:"col-lg-6 col-md-12 col-xs-12"},n.a.createElement("div",{className:"team-item wow fadeInRight animated","data-wow-delay":"0.6s",style:{visibility:"visible",WebkitAnimationDelay:"0.6s",MozAnimationDelay:"0.6s",animationDelay:"0.6s"}},n.a.createElement("div",{className:"team-img"},n.a.createElement("img",{className:"img-fluid",src:"assets/img/team/team-03.png",alt:!0})),n.a.createElement("div",{className:"contetn"},n.a.createElement("div",{className:"info-text"},n.a.createElement("h3",null,n.a.createElement("a",{href:"#"},"DURWIN BABB")),n.a.createElement("p",null,"Lead Designer")),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur."),n.a.createElement("ul",{className:"social-icons"},n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"lni lni-facebook-filled","aria-hidden":"true"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"lni lni-twitter-filled","aria-hidden":"true"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"lni lni-instagram-filled","aria-hidden":"true"}))))))),n.a.createElement("div",{className:"col-lg-6 col-md-12 col-xs-12"},n.a.createElement("div",{className:"team-item wow fadeInRight animated","data-wow-delay":"0.8s",style:{visibility:"visible",WebkitAnimationDelay:"0.8s",MozAnimationDelay:"0.8s",animationDelay:"0.8s"}},n.a.createElement("div",{className:"team-img"},n.a.createElement("img",{className:"img-fluid",src:"assets/img/team/team-04.png",alt:!0})),n.a.createElement("div",{className:"contetn"},n.a.createElement("div",{className:"info-text"},n.a.createElement("h3",null,n.a.createElement("a",{href:"#"},"MARIJN OTTE")),n.a.createElement("p",null,"Lead Designer")),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur."),n.a.createElement("ul",{className:"social-icons"},n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"lni lni-facebook-filled","aria-hidden":"true"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"lni lni-twitter-filled","aria-hidden":"true"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"lni lni-instagram-filled","aria-hidden":"true"})))))))))),n.a.createElement("footer",{id:"footer",className:"footer-area section-padding"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12"},n.a.createElement("div",{className:"widget"},n.a.createElement("h3",{className:"footer-logo"},n.a.createElement("img",{src:"assets/img/logo.png",alt:!0})),n.a.createElement("div",{className:"textwidget"},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis tincidunt est, et euismod purus suscipit quis.")),n.a.createElement("div",{className:"social-icon"},n.a.createElement("a",{className:"facebook",href:"#"},n.a.createElement("i",{className:"lni-facebook-filled"})),n.a.createElement("a",{className:"twitter",href:"#"},n.a.createElement("i",{className:"lni-twitter-filled"})),n.a.createElement("a",{className:"instagram",href:"#"},n.a.createElement("i",{className:"lni-instagram-filled"})),n.a.createElement("a",{className:"linkedin",href:"#"},n.a.createElement("i",{className:"lni-linkedin-filled"}))))),n.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-12 col-xs-12"},n.a.createElement("h3",{className:"footer-titel"},"Products"),n.a.createElement("ul",{className:"footer-link"},n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Tracking")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Application")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Resource Planning")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Enterprise")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Employee Management")))),n.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-12 col-xs-12"},n.a.createElement("h3",{className:"footer-titel"},"Resources"),n.a.createElement("ul",{className:"footer-link"},n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Payment Options")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Fee Schedule")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Getting Started")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Identity Verification")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Card Verification")))),n.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-12 col-xs-12"},n.a.createElement("h3",{className:"footer-titel"},"Contact"),n.a.createElement("ul",{className:"address"},n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"lni-map-marker"})," 105 Madison Avenue -"," ",n.a.createElement("br",null)," Third Floor New York, NY 10016")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"lni-phone-handset"})," P: +84 846 250 592")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"lni-envelope"})," E: contact@uideck.com"))))))),n.a.createElement("div",{id:"copyright"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"copyright-content"})))))),";"),";")}}]),t}(l.Component),D=t(4);var C=function(){return n.a.createElement(v.a,null,n.a.createElement(D.c,null,n.a.createElement(D.a,{exact:!0,path:"/",component:k}),n.a.createElement(D.a,{exact:!0,path:"/login",component:g}),n.a.createElement(D.a,{exact:!0,path:"/signup",component:w})))};i.a.render(n.a.createElement(v.a,null,n.a.createElement(C,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.94f046db.chunk.js.map