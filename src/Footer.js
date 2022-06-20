import React,{Component} from 'react';

class Footer extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
        return(
            <div className="Footer">
                <h2>Subscribe</h2>
                <h3>Sign up for Newsletter</h3> 
                <input type="text" placeholder="Your email"></input>
                <button>Submit</button>
                <div className="redes-sociais">
                <img class="redessociais" src="../pubic/images/twitter.png" alt="" width="24" height="24"/>
                <img class="redessociais" src="../pubic/images/instagram.png" alt="" width="24" height="24"/>
                <img class="redessociais" src="../pubic/images/facebook.png" alt="" width="24" height="24"/>
                <img class="redessociais" src="../pubic/images/pinteres.png" alt="" width="24" height="24"/>
                <div className="links">
                    <a href="#">About</a>
                    <a href="#">Recipes</a>
                    <a href="#">Subscribe</a>
                </div>
                </div>
            </div>
          
            );
        }
    }
    
    export default Footer;