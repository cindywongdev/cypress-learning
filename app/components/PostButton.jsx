'use client'

import { Button } from "@mui/material"

export default function PostButton(){

    function handleClick(){
        fetch('http://localhost:3000/examples', {method: 'POST'}).then((res) => {
            // post request returns a promise that resolves as a JSON object
            // then we gotta turn that response (res) BACK into a javascript object using the json() method, which returns another promise that resolves as a javsascript object
            res.json().then((data) => console.log(data))
        }).catch(() => {
            console.log('An error occured')
        })
    }

    return (
        <Button data-test="post-button" onClick={handleClick}>
            Post Data
        </Button>
    )
}