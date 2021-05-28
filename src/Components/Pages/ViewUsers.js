import React,{Component} from 'react';
import Albums from './Album';
import {Link} from 'react-router-dom';
const url = "http://localhost:3000/artists";

class ViewUsers extends Component{
    constructor(props){
        super(props)

        this.state={
            details:''
        }
    }
    render(){
     
        var {details} = this.state
        
        return(
            <div>
                 <Link className="btn btn-primary" to="/">
                       back to Home
                </Link>
                <div className="artist_bio">
                    <div className="artist_image">
                          <span style={{background:`url('/public/images/covers/${details.cover}.jpg')`}}></span>
                    </div>
                    <h3>{details.name}</h3>
                    <div className="bio_text">
                        {details.bio}
                    </div>
                    <Albums albumslist={details.albums}/>
                </div>
            </div>
        )
    }

    async componentDidMount(){
        fetch(`${url}/${this.props.match.params.id}`,{method:"GET"})
        .then((res) => res.json())
        .then((data) => {
            this.setState({details:data})
        })
    }

}   


export default ViewUsers;