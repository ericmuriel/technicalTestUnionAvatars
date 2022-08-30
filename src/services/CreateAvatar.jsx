import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { getCharacterUrl } from '../utils/get-url';
import { getBodies } from './GetBodies';

const url = 'https://api.unionavatars.com/avatars'
const myHeaders = new Headers()
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZTJlYzRlZmYtMDZjMS00YzVlLWE4ODItNGEwYzk4YmFmMzlmIiwiZXhwIjoxNjYyMDEzMjc0fQ.zdysAeFTjZVnfN70r6ZgZxqQBP55lVj0XLEVVUDJyGQ'
myHeaders.append('Authorization', `Bearer ${token}`);
myHeaders.append('Content-Type', 'application/json');



export const CreateAvatar = async (img, body) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
            "name": "prod_test_24",
            "body": "b4cd1f90-5950-46fb-b85a-3f235fd2bc8b",
            "output_format": "glb",
            "img": img
        })
    })
        .then(res => res.json())

    return res
}

