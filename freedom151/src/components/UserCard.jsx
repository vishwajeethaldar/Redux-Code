import { Box,Image } from '@chakra-ui/react'
import React from 'react'

export default function UserCard({user}) {
  return (
    <>
        <Image src="https://cdn.dribbble.com/users/1041205/screenshots/3636353/media/b9d3272401a456bdfaef25bb2a7accd2.jpg" w={"100%"}/>
        <Box> {user.name}</Box>
        <Box> {user.age}</Box>
        <Box> {user.gender}</Box>
        <Box> {user.country}</Box>
        <Box> {user.profesion}</Box>
    </>
  )
}
