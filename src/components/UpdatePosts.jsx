import React from 'react'

export default function UpdatePosts() {
    const updatePost = async () => {
        try {
        const response = await fetch(`${BASE_URL}/posts/${token}`)
        method: "PATCH",

        return (
    <div>UpdatePosts</div>
        )
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN_STRING_HERE}`
        },
        body: JSON.stringify({
          post: {
            title: "My favorite stuffed animal",
            description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
            price: "$480.00",
            location: "New York, NY",
            willDeliver: true
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
  