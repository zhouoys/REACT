import React, { Component } from 'react'
import qs from 'querystring';

export default class index extends Component {
    state = {
        detail:[
            {id:'01',comment:'故宫是一座宫殿'},
            {id:'02',comment:'天坛是一座祭坛'},
            {id:'03',comment:'圆明园是一座花园'},
        ]
    }
    render() {
        console.log(this.props);
        let parseObj = qs.parse(this.props.location.search.slice(1))
        console.log(parseObj);
        let {id,title} = parseObj;
        let detail = this.state.detail.find(item=>{
            return item.id === id;
        })
        console.log(detail);
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>TITLE:{title}</li>
                    <li>COMMENT:{detail && detail.comment}</li>
                </ul>
            </div>
        )
    }
}