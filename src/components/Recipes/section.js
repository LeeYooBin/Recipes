import React,{Component} from 'react';

class Section extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(

            <div class="latest-recipes">
                <div class="foto1">
                 <img class="foto1" src="../public/images/foto1.png" alt="" width="24" height="24"/>
                 <p>Red Velvet Cake</p>
                 </div>
                 <div class="foto2">
                 <img class="foto2" src="../public/images/foto2.png" alt="" width="24" height="24"/>
                 <p>Margheritta Pizza</p>
                 </div>
                 <div class="foto3">
                 <img class="mb-2" src="../public/images/foto3.png" alt="" width="24" height="24"/>
                 <p>Peanut Smoothie</p>
                 </div>
                 
            </div>

            );
    }
}

export default Section;