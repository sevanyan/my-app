import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";

let link = "https://social-network.samuraijs.com/api/1.0/auth/me";


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(link,{
            withCredentials: true
        })
            .then(response => {

                if(response.data.resultCode === 0 )  {
                  this.props.setAuthUserData (response.data.data.login);

                }
            });
    }


    render() {


        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps,setAuthUserData )(HeaderContainer);
