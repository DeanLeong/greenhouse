import React, { useState, useContext } from 'react';
import { LoginUserContext } from "../../components/LoginUser/LoginUserContext"
import { updateUser } from '../../services/users';
import { Redirect } from 'react-router-dom'
import './EditImageComp.css'

function EditImageComp(props) {
  const [currentUser] = useContext(LoginUserContext)
  const [user, setUser] = useState({
    imgURL: currentUser.imgURL
  })

  const [isUpdated, setUpdated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await updateUser(currentUser._id, user)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/MyAccount`} />
  }

  console.log(user.imgURL)

  return (
      <form className="edit-imgURL" onSubmit={handleSubmit}>
        {/* <p>Change your profile image here:</p> */}
        <input
            className="edit-imgURL-input"
            value={user.imgURL}
            type="text"
            name="imgURL"
            placeholder="New image URL"
            autoFocus
            required
            onChange={handleChange} />
            <button className="basic-button">Save Changes</button>
        </form>
  );
}

export default EditImageComp;